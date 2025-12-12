"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCartStore } from "@/store/cart-store"
import { checkoutAction } from "./checkout-action"

/* --------------------------- SEO METADATA --------------------------- */
export const metadata = {
  title: "Checkout - ENDURO Store",
  description: "Secure checkout page for ENDURO Store. Complete your purchase safely.",
  robots: {
    index: false, // Do not index this page
    follow: false, // Do not follow links from this page
    nocache: true, // Prevent caching
  },
}
/* ------------------------------------------------------------------- */

export default function CheckoutPage() {
    const { items, addItem, removeItem } = useCartStore()
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

    if (total === 0 || items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
                <h1 className="text-2xl font-semibold text-gray-700">Your cart is empty</h1>
            </div>
        )
    }

    return (
        <div className="max-w-2xl mx-auto py-10 px-4 space-y-8">
            <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>

            {/* Order Summary Card */}
            <Card className="shadow-lg border border-gray-200 rounded-xl">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold">Order Summary</CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                    <ul className="space-y-4">
                        {items.map((item, key) => (
                            <li
                                key={key}
                                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200"
                            >
                                {/* Item Price */}
                                <div className="flex flex-col">
                                    <span className="font-medium text-gray-800">{item.name}</span>
                                    <span className="text-gray-600 text-sm">
                                        ${((item.price * item.quantity) / 100).toFixed(2)}
                                    </span>
                                </div>

                                {/* Quantity Controls */}
                                <div className="flex items-center gap-3">
                                    <Button
                                        onClick={() => removeItem(item.id)}
                                        variant="outline"
                                        className="w-9 h-9 rounded-full text-lg"
                                    >
                                        –
                                    </Button>

                                    <span className="text-lg font-semibold">{item.quantity}</span>

                                    <Button
                                        onClick={() => addItem({ ...item, quantity: 1 })}
                                        variant="outline"
                                        className="w-9 h-9 rounded-full text-lg"
                                    >
                                        +
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Total */}
                    <div className="border-t pt-4 text-lg font-bold flex justify-between">
                        <span>Total</span>
                        <span>${(total / 100).toFixed(2)}</span>
                    </div>
                </CardContent>
            </Card>

            {/* Checkout Button */}
            <form action={checkoutAction} className="w-full">
                <input type="hidden" name="items" value={JSON.stringify(items)} />

                <Button
                    className="
                        w-full py-4 text-lg font-semibold
                        bg-blue-600 hover:bg-blue-700
                        text-white rounded-xl
                        shadow-md hover:shadow-lg 
                        transition-all duration-200 
                        active:scale-95
                    "
                >
                    Proceed to Payment
                </Button>
            </form>
        </div>
    )
}
