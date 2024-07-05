"use client";

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Minus, Plane, Plus } from 'lucide-react';

const product = {
    id: '1',
    name: 'Strawberries',
    price: 7.00,
    imageUrl: '/strawberry/strawberry.png',
    description: 'The garden strawberry is a widely grown hybrid species of the genus Fragaria. It is cultivated worldwide for its fruit.',
    delivery: '2 days'
};

export const StrawberryProductCard = () => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

    return (
        <Card className="w-80 overflow-visible bg-white shadow-xl relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-full"
                />
            </div>
            <Button variant="outline" size="icon" className="absolute left-0 -translate-x-6 top-1/2 -translate-y-1/2 rounded-full bg-red-500 text-white shadow-md z-10">
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="absolute right-0 translate-x-6 top-1/2 -translate-y-1/2 rounded-full bg-red-500 text-white shadow-md z-10">
                <ChevronRight className="h-4 w-4" />
            </Button>
            <CardContent className="pt-28 px-4 pb-4 flex flex-col items-center h-full">
                <h3 className="text-2xl font-extrabold mb-2 text-red-500 text-center">{product.name}</h3>
                <p className="text-sm font-semibold text-gray-400 mb-6 text-center">{product.description}</p>
                <div className="flex justify-between items-start w-full mb-6">
                    <div className="flex flex-col items-center w-1/3">
                        <span className="text-sm mb-1">Quantity</span>
                        <div className="flex items-center border rounded-md">
                            <Button variant="ghost" size="icon" onClick={decrementQuantity} className="h-8 w-8">
                                <Minus className="h-4 w-4" />
                            </Button>
                            <span className="mx-2">{quantity}</span>
                            <Button variant="ghost" size="icon" onClick={incrementQuantity} className="h-8 w-8">
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-1/3">
                        <span className="text-sm mb-1">Total Price</span>
                        <p className="font-semibold text-lg">${(product.price * quantity).toFixed(2)}</p>
                    </div>
                    <div className="flex flex-col items-center w-1/3">
                        <span className="text-sm mb-1">Delivery</span>
                        <p className="font-semibold text-lg flex items-center">
                            <Plane className="h-4 w-4 mr-1" />
                            {product.delivery}
                        </p>
                    </div>
                </div>
            </CardContent>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <Button
                    onClick={() => console.log(`Added ${quantity} of ${product.name} to cart`)}
                    className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6"
                >
                    ADD TO CART
                </Button>
            </div>
        </Card>
    );
};

export default StrawberryProductCard;