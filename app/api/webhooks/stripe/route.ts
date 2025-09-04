import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  const body = await request.text()
  const sig = request.headers.get("stripe-signature")!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
  } catch (err: any) {
    console.error(`Webhook signature verification failed.`, err.message)
    return NextResponse.json({ error: "Webhook signature verification failed" }, { status: 400 })
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object as Stripe.Checkout.Session
      console.log("Payment successful for session:", session.id)

      // Here you would typically:
      // 1. Update user subscription status in your database
      // 2. Send confirmation email
      // 3. Grant access to premium features

      break

    case "customer.subscription.created":
      const subscription = event.data.object as Stripe.Subscription
      console.log("Subscription created:", subscription.id)
      break

    case "customer.subscription.updated":
      const updatedSubscription = event.data.object as Stripe.Subscription
      console.log("Subscription updated:", updatedSubscription.id)
      break

    case "customer.subscription.deleted":
      const deletedSubscription = event.data.object as Stripe.Subscription
      console.log("Subscription cancelled:", deletedSubscription.id)

      // Here you would typically:
      // 1. Update user subscription status to cancelled
      // 2. Revoke access to premium features
      // 3. Send cancellation confirmation

      break

    case "invoice.payment_succeeded":
      const invoice = event.data.object as Stripe.Invoice
      console.log("Payment succeeded for invoice:", invoice.id)
      break

    case "invoice.payment_failed":
      const failedInvoice = event.data.object as Stripe.Invoice
      console.log("Payment failed for invoice:", failedInvoice.id)

      // Here you would typically:
      // 1. Notify user of failed payment
      // 2. Update subscription status if needed
      // 3. Send retry payment email

      break

    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  return NextResponse.json({ received: true })
}
