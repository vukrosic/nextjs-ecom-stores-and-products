"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MinusIcon, PlusIcon } from 'lucide-react'

interface Product {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
}


interface NewArrivalsProps {
    products: Product[];
}

const NewArrivals: React.FC<NewArrivalsProps> = ({ products }) => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

    return (
        <section className="container mx-auto px-4 py-12 text-black p-14">
            <div id="newArrivals" className="grid grid-cols-1 md:grid-cols-3 gap-8 px-14 pt-10">
                {products.map((product) => (
                    <Card className="overflow-hidden rounded-lg shadow-lg">
                        <div className="relative group p-4 h-96">
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                width={400}
                                height={500}
                                className="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <CardContent className="p-4">
                            <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">TastyPastry</p>
                            <p className="text-lg font-bold mb-3">${product.price.toFixed(2)}</p>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center border rounded-md">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={decrementQuantity}
                                        className="h-8 w-8"
                                    >
                                        <MinusIcon className="h-4 w-4" />
                                    </Button>
                                    <span className="mx-2">{quantity}</span>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={incrementQuantity}
                                        className="h-8 w-8"
                                    >
                                        <PlusIcon className="h-4 w-4" />
                                    </Button>
                                </div>
                                <Button
                                    onClick={() => console.log(`Added ${quantity} of ${product.name} to cart`)}
                                    className="bg-black text-white hover:bg-gray-800"
                                >
                                    Add to Cart
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default NewArrivals;