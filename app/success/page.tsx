"use client"

import { useCartStore } from "@/store/cart-store"
import Link from "next/link"
import { useEffect } from "react"
import Head from "next/head"

export default function SuccessPage() {
  const { clearCart } = useCartStore()

  useEffect(() => {
    clearCart() // runs only on client
  }, [clearCart])

  return (
    <>
      {/* Prevent indexing */}
      <Head>
        <title>Payment Successful | ENDURO</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-50">
        <div className="bg-white shadow-lg rounded-xl p-10 max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-green-600 mb-3">
            Payment Successful!
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Thank you for your purchase. Your order is being processed.
          </p>

          <Link
            href="/products"
            className="inline-block w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </>
  )
}
