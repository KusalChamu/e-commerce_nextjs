"use client"

import { useEffect, useState } from "react"
import Stripe from "stripe"
import { Card, CardContent, CardTitle } from "./ui/card"
import Image from "next/image"

interface Props {
    //tyoe of prop is product
    products: Stripe.Product[]
}

//giving product is prop by creating prop interface.this is how destructure the prop

export const Carousel = ({ products }: Props) =>{
    //as we give products as prop then its 0th value used as starting value
    const [current,setCurrent] = useState<number>(0)

    useEffect(()=>{
        //to set interval we have to use useEffect hook
        const interval = setInterval(()=>{
            //setting current id(dividing from length because for prevent from array outbounding(last element will set the index to 0))
            setCurrent((prev)=>(prev+1)%products.length)
            //3 seconds
        },3000)

        //clearing the interval that made
        return () => clearInterval(interval)
        //whenever products length change, run the useEffect again
    },[products.length])

    const currentProduct = products[current]

    const price = currentProduct.default_price as Stripe.Price
    
    return(
        <Card className="w-full max-w-md mx-auto rounded-2xl shadow-lg overflow-hidden bg-white">
           
           {currentProduct.images && currentProduct.images[0] &&(
            <div className="relative w-full h-64 md:h-72 lg:h-80">
                <Image 
                    alt={currentProduct.name}
                    src={currentProduct.images[0]}
                    fill
                    className="object-cover"
                />
            </div>
           ) } 

           <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <CardTitle className="text-xl font-semibold text-gray-800">
                    {currentProduct.name}
                </CardTitle>

                {price && price.unit_amount && (
                    <p className="text-lg font-bold text-gray-900">
                        ${(price.unit_amount/100).toFixed(2)}
                    </p>
                )}

                {/* dots for navigation */}
                <div className="flex gap-2 mt-2">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-2 w-2 rounded-full transition-all ${
                                current === index ? "bg-black scale-125" : "bg-gray-300"
                            }`}
                        ></button>
                    ))}
                </div>
           </CardContent>
        </Card>
        
    )
}
