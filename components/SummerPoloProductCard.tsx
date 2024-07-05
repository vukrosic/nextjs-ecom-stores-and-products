"use client"

import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Shirt, Ruler, ShoppingCart } from 'lucide-react';

const product = {
    id: '2',
    name: 'Summer Breeze Polo',
    brand: 'UrbanCool',
    price: 59.99,
    rating: 4.5,
    reviews: 89,
    image: '/summer-polo.webp',
    description: 'Stay cool and stylish with our Summer Breeze Polo for men. Perfect for casual outings and golf days.',
    features: [
        'Moisture-wicking fabric',
        'UPF 30+ sun protection',
        'Four-way stretch',
        'Anti-odor technology',
        'Available in 6 colors'
    ],
    colors: [
        { name: 'Navy Blue', hex: '#000080' },
        { name: 'Crimson Red', hex: '#DC143C' },
        { name: 'Forest Green', hex: '#228B22' },
        { name: 'Charcoal Gray', hex: '#36454F' },
        { name: 'Royal Purple', hex: '#7851A9' },
        { name: 'Mustard Yellow', hex: '#FFDB58' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    care: 'Machine wash cold, tumble dry low, do not bleach'
};

export const SummerPoloProductCard = () => {
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[1]);

    return (
        <Card className="flex  overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 shadow-xl rounded-lg">
            <div className="w-1/2 relative overflow-hidden group">
                <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="w-1/2 p-8 flex flex-col bg-white">
                <div className="mb-4">
                    <h4 className="text-sm text-blue-600 font-bold tracking-wider">{product.brand}</h4>
                    <h2 className="text-3xl font-bold text-gray-900 mt-1 leading-tight">{product.name}</h2>
                </div>
                <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current'}`} />
                        ))}
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                </div>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">{product.description}</p>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Color</h3>
                    <div className="flex flex-wrap gap-3">
                        {product.colors.map((color) => (
                            <button
                                key={color.name}
                                className={`w-8 h-8 rounded-full transition-all hover:scale-110 ${selectedColor.name === color.name ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
                                style={{ backgroundColor: color.hex }}
                                onClick={() => setSelectedColor(color)}
                                title={color.name}
                            />
                        ))}
                    </div>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Size</h3>
                    <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                            <Button
                                key={size}
                                variant={selectedSize === size ? "default" : "outline"}
                                onClick={() => setSelectedSize(size)}
                                className={`w-12 h-10 ${selectedSize === size ? 'bg-blue-500 text-white' : 'text-gray-700 border-blue-200 hover:bg-blue-100'}`}
                            >
                                {size}
                            </Button>
                        ))}
                    </div>
                </div>
                <Accordion type="single" collapsible className="mb-6">
                    <AccordionItem value="features">
                        <AccordionTrigger className="text-gray-800 hover:text-blue-600">Features</AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                {product.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="care">
                        <AccordionTrigger className="text-gray-800 hover:text-blue-600">Care Instructions</AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm text-gray-600">{product.care}</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                        <div className="flex items-center space-x-2">
                            <Shirt className="h-5 w-5 text-blue-500" />
                            <Star className="h-5 w-5 text-yellow-500" />
                            <Ruler className="h-5 w-5 text-green-500" />
                        </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 rounded-md py-4 text-lg font-semibold shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                        <ShoppingCart className="h-6 w-6" /> <span>Add to Cart</span>
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default SummerPoloProductCard;