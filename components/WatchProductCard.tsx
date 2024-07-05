"use client"

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Heart, Share2, ShoppingCart, Check } from 'lucide-react';

const product = {
    id: '1',
    name: 'Celestial Chronograph',
    brand: 'Luxe Timepieces',
    price: 4999.99,
    rating: 4.8,
    reviews: 128,
    image: '/luxury-watch.png',
    description: 'The Celestial Chronograph is a masterpiece of horological engineering, combining timeless elegance with cutting-edge technology.',
    features: [
        'Swiss-made automatic movement',
        'Sapphire crystal glass',
        'Water-resistant to 100 meters',
        'Luminous hands and markers',
        '42mm case diameter'
    ],
    colors: [
        { name: 'Midnight Blue', hex: '#191970' },
        { name: 'Rose Gold', hex: '#B76E79' },
        { name: 'Emerald Green', hex: '#50C878' }
    ],
    straps: ['Leather', 'Metal', 'Rubber'],
    warranty: '5-year international warranty'
};

export const LuxuryWatchProductPage = () => {
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedStrap, setSelectedStrap] = useState(product.straps[0]);
    const [isWishlist, setIsWishlist] = useState(false);

    return (
        <Card className="w-[1000px] h-fit overflow-hidden bg-white shadow-xl">
            <div className="flex h-full">
                <div className="w-1/2 bg-gray-100 flex items-center justify-center p-8">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
                <CardContent className="w-1/2 p-8 flex flex-col h-full">
                    <div className="mb-4">
                        <h4 className="text-sm text-gray-500 uppercase tracking-wide">{product.brand}</h4>
                        <h2 className="text-3xl font-bold text-gray-900 mt-1">{product.name}</h2>
                    </div>
                    <div className="flex items-center mb-4">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                            ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                    </div>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Color</h3>
                        <div className="flex space-x-3">
                            {product.colors.map((color) => (
                                <button
                                    key={color.name}
                                    className={`w-8 h-8 rounded-full ${selectedColor.name === color.name ? 'ring-2 ring-offset-2 ring-gray-800' : ''}`}
                                    style={{ backgroundColor: color.hex }}
                                    onClick={() => setSelectedColor(color)}
                                    title={color.name}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Strap</h3>
                        <div className="flex space-x-3">
                            {product.straps.map((strap) => (
                                <Button
                                    key={strap}
                                    variant={selectedStrap === strap ? "default" : "outline"}
                                    onClick={() => setSelectedStrap(strap)}
                                >
                                    {strap}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <Tabs defaultValue="features" className="mb-6">
                        <TabsList>
                            <TabsTrigger value="features">Features</TabsTrigger>
                            <TabsTrigger value="warranty">Warranty</TabsTrigger>
                        </TabsList>
                        <TabsContent value="features">
                            <ul className="list-disc pl-5 text-sm text-gray-600">
                                {product.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </TabsContent>
                        <TabsContent value="warranty">
                            <p className="text-sm text-gray-600">{product.warranty}</p>
                        </TabsContent>
                    </Tabs>
                    <div className="mt-auto">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                            <div className="flex space-x-2">
                                <Button variant="outline" size="icon" onClick={() => setIsWishlist(!isWishlist)}>
                                    <Heart className={`h-5 w-5 ${isWishlist ? 'fill-current text-red-500' : ''}`} />
                                </Button>
                                <Button variant="outline" size="icon">
                                    <Share2 className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                        <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white" size="lg">
                            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                        </Button>
                    </div>
                </CardContent>
            </div>
        </Card>
    );
};

export default LuxuryWatchProductPage;