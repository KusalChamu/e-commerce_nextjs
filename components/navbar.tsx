"use client";

import { useCartStore } from "@/store/cart-store";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  // 🔧 FIXED RESIZE HANDLER
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">

      {/* Logo */}
      <div className="text-xl font-bold text-gray-800 hover:text-gray-600 transition">
        <Link href="/"> E N D U R O </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
        <Link href="/products" className="hover:text-blue-600 transition">Products</Link>
        <Link href="/checkout" className="hover:text-blue-600 transition">Checkout</Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Cart */}
        <Link href="/checkout" className="relative">
          <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          className="md:hidden p-2"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 md:hidden animate-in fade-in slide-in-from-top duration-200">
          <ul className="flex flex-col items-start space-y-4 px-6 text-gray-700 font-medium">
            <li className="w-full">
              <Link
                href="/"
                className="block w-full hover:text-blue-600 transition"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/products"
                className="block w-full hover:text-blue-600 transition"
                onClick={() => setMobileOpen(false)}
              >
                Products
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/checkout"
                className="block w-full hover:text-blue-600 transition"
                onClick={() => setMobileOpen(false)}
              >
                Checkout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
