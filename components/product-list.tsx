import Stripe from "stripe";
import { ProductCard } from "./product-card";

interface Props {
    products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
    return (
        <div className="px-4 py-6 max-h-[80vh] overflow-y-auto">
            {/* Centered search bar */}
            <div className="mb-6 flex justify-center">
                <input
                    type="text"
                    placeholder="Search Products ..."
                    className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>

            {/* Grid of products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
