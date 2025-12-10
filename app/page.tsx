import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const products = await stripe.products.list({
      expand:["data.default_price"],
      limit: 5,
    })

  return (
    <div>
      <section>
        <div>
          <div>
            <h2> welcome to my E-commerce</h2>
            <p>Dicover latest products for best price</p>
            <Button asChild variant="default">
              <Link href="/products"></Link>
            </Button>
          </div>
        </div>
      </section>
       
    </div>
  );
}
