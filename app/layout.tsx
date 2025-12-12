import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";

/* --------------------------- GLOBAL SEO METADATA --------------------------- */
export const metadata: Metadata = {
  title: "ENDURO – Modern E-Commerce Store",
  description: "Discover premium products at the best prices. Shop electronics, accessories, and more with a smooth shopping experience powered by Stripe.",
  keywords: [
    "E-commerce",
    "Online Store",
    "Stripe Payments",
    "Next.js Shop",
    "Buy Online",
    "ENDURO Store",
  ],
  openGraph: {
    title: "ENDURO – Shop the Latest Products",
    description: "Explore high-quality products at unbeatable prices. Secure checkout with Stripe.",
    url: "https://enduro.com/",
    siteName: "ENDURO Store",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ENDURO E-commerce",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};
/* --------------------------------------------------------------------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white text-black">
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
