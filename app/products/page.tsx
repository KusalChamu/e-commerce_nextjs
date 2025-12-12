import { ProductList } from "@/components/product-list";
import { stripe } from "@/lib/stripe";

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
