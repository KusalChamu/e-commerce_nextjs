"use server"

import { CartItem } from "@/store/cart-store"
import { stripe } from "@/lib/stripe"
import { redirect } from "next/navigation"

export const checkoutAction = async (formData: FormData): Promise<void> => {
  // Get cart items from the form
  const itemsJson = formData.get("items") as string
  const items: CartItem[] = JSON.parse(itemsJson)

  // Convert items to Stripe-compatible line items
  const line_items = items.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: { name: item.name },
      unit_amount: item.price, // price is in cents
    },
    quantity: item.quantity,
  }))

  // Create stripe checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
  })

  // Redirect to Stripe page
  redirect(session.url!)
}
