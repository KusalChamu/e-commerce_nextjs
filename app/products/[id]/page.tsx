import { ProductDetail } from "@/components/product-detail";
import { stripe } from "@/lib/stripe";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: { id: string };
}

/* ------------------- DYNAMIC METADATA ------------------- */
export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = (await params) as { id?: string };
  if (!id || typeof id !== "string") {
    // Fallback metadata when id is missing
    return {
      title: `Product – ENDURO Store`,
      description: "Explore this product at ENDURO Store.",
    };
  }

  const product = await stripe.products.retrieve(id, { expand: ["default_price"] });

  return {
    title: `${product.name} – ENDURO Store`,
    description: product.description || "Explore this product at ENDURO Store.",
    keywords: ["E-commerce", "ENDURO Store", product.name, "Buy Online", "Stripe Payments"],
    openGraph: {
      title: `${product.name} – ENDURO Store`,
      description: product.description || "Secure checkout with Stripe.",
      url: `https://enduro.com/products/${product.id}`,
      siteName: "ENDURO Store",
      images: product.images.length
        ? [
            {
              url: product.images[0],
              width: 1200,
              height: 630,
              alt: product.name,
            },
          ]
        : [],
      locale: "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
/* -------------------------------------------------------- */

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = (await params) as { id?: string };
  if (!id || typeof id !== "string") {
    // If id is missing, render 404
    notFound();
  }

  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });

  const plainProduct = JSON.parse(JSON.stringify(product));
  return <ProductDetail product={plainProduct} />;
}
