import Image from "next/image";
import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface Props {
    product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
    const price = product.default_price as Stripe.Price;

    return (
        <Card className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg bg-white">
            
            {/* Product Image */}
            {product.images?.[0] && (
                <div className="relative w-full h-80 md:h-96">
                    <Image
                        alt={product.name}
                        src={product.images[0]}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <CardHeader className="p-6">
                <CardTitle className="text-2xl font-semibold text-gray-900">
                    {product.name}
                </CardTitle>
            </CardHeader>

            <CardContent className="p-6 flex flex-col gap-4">
                
                {/* Product Description */}
                {product.description && (
                    <p className="text-gray-700 text-base leading-relaxed">
                        {product.description}
                    </p>
                )}

                {/* Price */}
                {price?.unit_amount && (
                    <p className="text-2xl font-bold text-gray-900">
                        ${(price.unit_amount / 100).toFixed(2)}
                    </p>
                )}
                <div>
                    <Button variant="outline"> - </Button>
                    <span> 0 </span>
                    <Button variant="outline"> + </Button>
                </div>

                {/* Add to cart / Buy button */}
                <Button className="w-full text-lg py-3">
                    Buy Now
                </Button>
            </CardContent>
        </Card>
    );
};
