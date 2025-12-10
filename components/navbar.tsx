import Link from "next/link";

export const Navbar = () => {
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
      <div></div>
    </nav>
  );
};
