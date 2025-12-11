import Link from "next/link";
import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
    product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
    // Stripe default_price needs casting
    const price = product.default_price as Stripe.Price;

    return (
        <Link href={`/products/${product.id}`} className="block">
            <Card className="w-64 sm:w-64 md:w-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white flex flex-col">
                
                {/* Product image */}
                {product.images?.[0] && (
                    <div className="relative w-full h-48 sm:h-48 md:h-48">
                        <Image
                            alt={product.name}
                            src={product.images[0]}
                            fill
                            className="object-cover"
                            sizes="100vw"
                        />
                    </div>
                )}

                {/* Header + Content */}
                <CardHeader className="p-4">
                    <CardTitle className="text-lg font-semibold text-gray-800 truncate">
                        {product.name}
                    </CardTitle>
                </CardHeader>

                <CardContent className="p-4 pt-0 flex flex-col items-start gap-2">
                    {product.description && (
                        <p className="text-lg text-sm text-gray-900">{product.description}</p>
                    )}
                    {price?.unit_amount && (
                        <p className="text-lg font-bold text-gray-900">
                            ${(price.unit_amount / 100).toFixed(2)}
                        </p>
                    )}
                    <Button className="mt-2 w-full text-center">View Details</Button>
                </CardContent>
            </Card>
        </Link>
    );
};
