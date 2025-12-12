import { Carousel } from "@/components/carousel";
import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";

/* --------------------------- SEO METADATA --------------------------- */
export const metadata = {
  title: "ENDURO – Modern E-Commerce Store",
  description:
    "Discover premium products at the best prices. Shop electronics, accessories, and more with a smooth shopping experience powered by Stripe.",
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
    description:
      "Explore high-quality products at unbeatable prices. Secure checkout with Stripe.",
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
/* ------------------------------------------------------------------- */

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div className="w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="w-full py-16 bg-muted">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          
          {/* Text */}
          <div className="space-y-4 md:w-1/2">
            <h2 className="text-4xl font-bold tracking-tight">ENDURO</h2>

            <p className="text-muted-foreground text-lg">
              Discover the latest products for the best price.
            </p>

            <Button asChild variant="default" className="mt-4">
              <Link href="/products">Shop Now</Link>
            </Button>
          </div>

          {/* Banner Image */}
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
            <Image
              alt="Banner Image"
              width={450}
              height={450}
              src={products.data[0]?.images?.[0] || "/placeholder.png"}
              className="rounded-xl shadow-lg object-cover max-w-full"
            />
          </div>
        </div>
      </section>

      {/* CAROUSEL SECTION */}
      <section className="max-w-6xl mx-auto py-14 px-4">
        <h3 className="text-2xl font-semibold mb-6">Featured Products</h3>
        <Carousel products={products.data} />
      </section>
    </div>
  );
}
