import { ProductList } from "@/components/product-list";
import { stripe } from "@/lib/stripe";

/* ------------------- SEO METADATA ------------------- */
export const metadata = {
  title: "ENDURO – All Products",
  description: "Explore all products available at ENDURO. Find the latest electronics, accessories, and more at the best prices.",
  keywords: [
    "E-commerce",
    "Online Store",
    "All Products",
    "ENDURO Store",
    "Buy Online",
    "Stripe Payments",
  ],
  openGraph: {
    title: "ENDURO – All Products",
    description: "Browse our complete product catalog and enjoy a seamless shopping experience with secure Stripe payments.",
    url: "https://enduro.com/products",
    siteName: "ENDURO Store",
    images: [
      {
        url: "/og-products.png",
        width: 1200,
        height: 630,
        alt: "ENDURO Product Catalog",
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
/* ---------------------------------------------------- */

export default async function ProductPage() {
    const products = await stripe.products.list({
        expand: ["data.default_price"],
    });

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                All Products
            </h1>

            <div className="max-w-6xl mx-auto">
                <ProductList products={products.data} />
            </div>
        </div>
    );
}
