"use client";

import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sun, Wind, Droplets, ShoppingBag } from 'lucide-react';

const product = {
    id: '1',
    name: 'Breezy Elegance',
    brand: 'SummerChic',
    price: 49.99,
    rating: 4.7,
    reviews: 153,
    image: '/summer-hat.webp',
    description: "Stay cool and stylish with our Summer Thin Hollow women's hat.Perfect for beach days and outdoor events.",
    features: [
        'Lightweight and breathable',
        'UPF 50+ sun protection',
        'Adjustable inner band',
        'Packable design',
        'Available in 5 colors'
    ],
    colors: [
        { name: 'Sandy Beige', hex: '#F5DEB3' },
        { name: 'Ocean Blue', hex: '#4682B4' },
        { name: 'Coral Pink', hex: '#FF7F50' },
        { name: 'Mint Green', hex: '#98FB98' },
        { name: 'Lavender', hex: '#E6E6FA' }
    ],
    sizes: ['S', 'M', 'L'],
    care: 'Hand wash cold, reshape and lay flat to dry'
};

export const SummerHatProductCard = () => {
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[1]);

    return (
        <Card className="flex w-[800px] h-fit overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-50 shadow-lg rounded-3xl">
            <div className="w-1/2 relative overflow-hidden group">
                <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="w-1/2 p-8 flex flex-col overflow-auto ">
                <div className="mb-4">
                    <h4 className="text-sm text-orange-600 font-semibold tracking-wider">{product.brand}</h4>
                    <h2 className="text-3xl font-extrabold text-gray-800 mt-1 leading-tight">{product.name}</h2>
                </div>
                <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Sun key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current'}`} />
                        ))}
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{product.description}</p>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">Color</h3>
                    <div className="flex space-x-3">
                        {product.colors.map((color) => (
                            <button
                                key={color.name}
                                className={`w-8 h-8 rounded-full transition-transform hover:scale-110 ${selectedColor.name === color.name ? 'ring-2 ring-offset-2 ring-orange-500' : ''}`}
                                style={{ backgroundColor: color.hex }}
                                onClick={() => setSelectedColor(color)}
                                title={color.name}
                            />
                        ))}
                    </div>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">Size</h3>
                    <div className="flex space-x-3">
                        {product.sizes.map((size) => (
                            <Button
                                key={size}
                                variant={selectedSize === size ? "default" : "outline"}
                                onClick={() => setSelectedSize(size)}
                                className={`w-12 h-12 rounded-full ${selectedSize === size ? 'bg-orange-500 text-white' : 'text-gray-700 border-orange-200 hover:bg-orange-100'}`}
                            >
                                {size}
                            </Button>
                        ))}
                    </div>
                </div>
                <Accordion type="single" collapsible className="mb-6">
                    <AccordionItem value="features">
                        <AccordionTrigger className="text-gray-700 hover:text-orange-600">Features</AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                {product.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="care">
                        <AccordionTrigger className="text-gray-700 hover:text-orange-600">Care Instructions</AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm text-gray-600">{product.care}</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
                        <div className="flex items-center space-x-2">
                            <Wind className="h-5 w-5 text-blue-500" />
                            <Sun className="h-5 w-5 text-yellow-500" />
                            <Droplets className="h-5 w-5 text-cyan-500" />
                        </div>
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white duration-300 rounded-full py-6 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition">
                        <ShoppingBag className="mr-2 h-6 w-6" /> Buy Now
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default SummerHatProductCard;