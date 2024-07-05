"use client";

import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Check } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast, useToast } from "@/components/ui/use-toast"

// Mock data for the product
const productData = {
    id: '1',
    name: 'Aqua Luxe Rainfall Shower Tap',
    description: 'Experience the epitome of shower luxury with our Aqua Luxe Rainfall Shower Tap. This premium fixture combines sleek design with cutting-edge technology to transform your daily shower into a spa-like retreat.',
    price: 599.99,
    rating: 4.8,
    reviews: 124,
    images: [
        '/tap1.webp',
        '/tap2.webp',
        '/tap3.webp'
    ],
    features: [
        'High-grade stainless steel construction',
        'Adjustable water pressure settings',
        'Temperature memory function',
        'Easy-clean nozzles',
        'Eco-friendly water-saving mode'
    ],
    specs: {
        material: 'Stainless Steel',
        finish: 'Brushed Nickel',
        flowRate: '2.5 GPM',
        warranty: '10 years'
    }
};

const LuxuryShowerTapProductPage: React.FC = () => {
    const [mainImage, setMainImage] = useState(productData.images[0]);
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);
    const { toast } = useToast();

    const handleAddToCart = () => {
        toast({
            title: "Added to cart",
            description: `${quantity} ${quantity > 1 ? 'items' : 'item'} added to your cart.`,
        });
    };

    const handleFavoriteToggle = () => {
        setIsFavorite(!isFavorite);
        toast({
            title: isFavorite ? "Removed from favorites" : "Added to favorites",
            description: `${productData.name} has been ${isFavorite ? 'removed from' : 'added to'} your favorites.`,
        });
    };

    return (
        <div className="container mx-auto px-4 py-8 bg-slate-400 rounded-lg">
            <div className="flex flex-col lg:flex-row gap-8 ">
                {/* Product Images */}
                <div className="lg:w-1/2">
                    <Card>
                        <CardContent className="p-4">
                            <img src={mainImage} alt={productData.name} className="w-full h-auto rounded-lg shadow-lg mb-4" />
                            <div className="flex gap-2 overflow-x-auto pb-2">
                                {productData.images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`${productData.name} - view ${index + 1}`}
                                        className="w-24 h-24 object-cover rounded cursor-pointer border-2 border-transparent hover:border-blue-500 transition"
                                        onClick={() => setMainImage(img)}
                                    />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Product Info */}
                <div className="lg:w-1/2">
                    <h1 className="text-4xl font-bold mb-4">{productData.name}</h1>
                    <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} fill={i < Math.floor(productData.rating) ? "currentColor" : "none"} />
                            ))}
                        </div>
                        <span className="ml-2 text-gray-600">({productData.reviews} reviews)</span>
                    </div>
                    <Badge variant="secondary" className="text-lg mb-4">
                        ${productData.price.toFixed(2)}
                    </Badge>
                    <p className="text-gray-700 mb-6">{productData.description}</p>

                    {/* Add to Cart */}
                    <div className="flex items-center mb-6 space-x-4">
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                            className="w-16 px-2 py-1 border rounded text-black"
                            min="1"
                        />
                        <Button onClick={handleAddToCart} className="flex items-center">
                            <ShoppingCart className="mr-2" />
                            Add to Cart
                        </Button>
                        <Button
                            variant={isFavorite ? "secondary" : "outline"}
                            onClick={handleFavoriteToggle}
                            className={`${isFavorite ? 'text-red-500' : 'text-gray-500'}`}
                        >
                            <Heart className="mr-2" fill={isFavorite ? "currentColor" : "none"} />
                            {isFavorite ? 'Favorited' : 'Favorite'}
                        </Button>
                    </div>

                    {/* Features and Specs Tabs */}
                    <Tabs defaultValue="features" className="w-full">
                        <TabsList>
                            <TabsTrigger value="features">Features</TabsTrigger>
                            <TabsTrigger value="specs">Specifications</TabsTrigger>
                        </TabsList>
                        <TabsContent value="features">
                            <Card>
                                <CardContent className="pt-6">
                                    <ul className="space-y-2">
                                        {productData.features.map((feature, index) => (
                                            <li key={index} className="flex items-center">
                                                <Check className="mr-2 h-4 w-4 text-green-500" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="specs">
                            <Card>
                                <CardContent className="pt-6">
                                    <dl className="grid grid-cols-2 gap-4">
                                        {Object.entries(productData.specs).map(([key, value]) => (
                                            <div key={key} className="flex flex-col">
                                                <dt className="font-medium text-gray-500">{key}</dt>
                                                <dd className="text-gray-900">{value}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default LuxuryShowerTapProductPage;