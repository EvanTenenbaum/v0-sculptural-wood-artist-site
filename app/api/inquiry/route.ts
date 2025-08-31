import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Simple in-memory rate limiter
const rateLimiter = new Map<string, { count: number; resetTime: number }>()

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")
  const ip = forwarded ? forwarded.split(",")[0] : request.headers.get("x-real-ip") || "unknown"
  return ip
}

function isRateLimited(key: string): boolean {
  const now = Date.now()
  const limit = rateLimiter.get(key)

  if (!limit || now > limit.resetTime) {
    // Reset or create new limit
    rateLimiter.set(key, { count: 1, resetTime: now + 10 * 60 * 1000 }) // 10 minutes
    return false
  }

  if (limit.count >= 5) {
    return true
  }

  limit.count++
  return false
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(request)
    if (isRateLimited(rateLimitKey)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
    }

    const body = await request.json()
    const { title, name, email, city, message, website } = body

    // Honeypot check - if website field is filled, it's likely spam
    if (website) {
      return NextResponse.json({ ok: true }) // Silently ignore spam
    }

    // Validation
    if (!name || !email || !title || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    const timestamp = new Date().toISOString()
    const inquiryData = {
      title,
      name,
      email,
      city: city || "Not provided",
      message,
      timestamp,
    }

    // Try Resend first if configured
    if (process.env.RESEND_API_KEY && process.env.INQUIRE_TO_EMAIL) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)

        const emailContent = `
New artwork inquiry received:

Artwork: ${title}
Name: ${name}
Email: ${email}
City/Country: ${city || "Not provided"}
Timestamp: ${timestamp}

Message:
${message}

---
This inquiry was sent from the Evan Tenenbaum studio website.
        `.trim()

        await resend.emails.send({
          from: "Studio Inquiries <no-reply@evantenenbaum.com>",
          to: process.env.INQUIRE_TO_EMAIL,
          subject: `Inquiry: ${title}`,
          text: emailContent,
        })

        return NextResponse.json({ ok: true })
      } catch (resendError) {
        console.error("Resend error:", resendError)
        // Fall through to webhook if Resend fails
      }
    }

    // Fallback to webhook if Resend is not configured or fails
    if (process.env.INQUIRE_WEBHOOK) {
      try {
        const webhookResponse = await fetch(process.env.INQUIRE_WEBHOOK, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inquiryData),
        })

        if (webhookResponse.ok) {
          return NextResponse.json({ ok: true })
        } else {
          throw new Error(`Webhook failed with status: ${webhookResponse.status}`)
        }
      } catch (webhookError) {
        console.error("Webhook error:", webhookError)
        return NextResponse.json({ error: "Failed to send inquiry" }, { status: 500 })
      }
    }

    // If neither Resend nor webhook is configured
    console.error("No email service configured. Set RESEND_API_KEY + INQUIRE_TO_EMAIL or INQUIRE_WEBHOOK")
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
  } catch (error) {
    console.error("Inquiry API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
