"use client"

import { useCartStore } from "@/store/cart-store";
import { ShoppingCartIcon,Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const Navbar = () => {

  const { items } = useCartStore()
  const cartCount = items.reduce((acc,item)=>acc + item.quantity,0)

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo / Brand */}
      <div className="text-xl font-bold text-gray-800 hover:text-gray-600 transition">
        <Link href="/">My E-commerce site</Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 text-gray-700">
        <Link
          href="/"
          className="hover:text-blue-600 transition font-medium"
        >
          Home
        </Link>
        <Link
          href="/products"
          className="hover:text-blue-600 transition font-medium"
        >
          Products
        </Link>
        <Link
          href="/checkout"
          className="hover:text-blue-600 transition font-medium"
        >
          Checkout
        </Link>
      </div>

      {/* Placeholder for future items (cart, profile, etc.) */}
      <div className="flex items-center space-x-4">
        <Link href={"/checkout"}>
          <ShoppingCartIcon />
          {cartCount>0 && <span> {cartCount} </span>}
        </Link>

      </div>
    </nav>
  );
};
