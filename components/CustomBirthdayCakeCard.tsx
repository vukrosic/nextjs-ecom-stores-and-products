"use client";

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Star, Heart, Share2, ShoppingCart, Calendar } from 'lucide-react';

const cakeProduct = {
    name: "Celebration Delight",
    basePrice: 49.99,
    image: "/cake1.jpg",
    description: "A delightful custom cake perfect for any birthday celebration. Personalize it to create the cake of your dreams!",
    flavors: ['Vanilla', 'Chocolate', 'Red Velvet', 'Lemon', 'Marble'],
    frostings: ['Vanilla Buttercream', 'Chocolate Ganache', 'Cream Cheese', 'Whipped Cream'],
    fillings: ['Strawberry', 'Raspberry', 'Lemon Curd', 'Chocolate Mousse', 'Vanilla Custard'],
    themes: ['Floral', 'Cartoon Characters', 'Elegant', 'Rustic', 'Sports'],
    toppings: ['Fresh Fruit', 'Chocolate Shavings', 'Edible Flowers', 'Sprinkles', 'Macarons'],
    dietaryOptions: ['Regular', 'Gluten-Free', 'Vegan', 'Nut-Free'],
    rating: 4.8,
    reviews: 127,
    leadTime: 3, // days
};

export const CustomBirthdayCakeCard = () => {
    const [selectedFlavor, setSelectedFlavor] = useState(cakeProduct.flavors[0]);
    const [selectedFrosting, setSelectedFrosting] = useState(cakeProduct.frostings[0]);
    const [selectedFilling, setSelectedFilling] = useState(cakeProduct.fillings[0]);
    const [selectedTheme, setSelectedTheme] = useState(cakeProduct.themes[0]);
    const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
    const [selectedDietary, setSelectedDietary] = useState(cakeProduct.dietaryOptions[0]);
    const [message, setMessage] = useState('');
    const [isDelivery, setIsDelivery] = useState(false);
    const [orderDate, setOrderDate] = useState('');
    const [specialInstructions, setSpecialInstructions] = useState('');
    const [primaryColor, setPrimaryColor] = useState('#FF69B4'); // Default to pink
    const [secondaryColor, setSecondaryColor] = useState('#FFFFFF'); // Default to white

    const handleToppingToggle = (topping: string) => {
        setSelectedToppings((prev: string[]) =>
            prev.includes(topping)
                ? prev.filter((t: string) => t !== topping)
                : [...prev, topping]
        );
    };

    const calculateTotalPrice = () => {
        let total = 64.99;
        total += selectedToppings.length * 2.99; // $2.99 per topping
        if (selectedDietary !== 'Regular') total += 5.99; // $5.99 for special dietary options
        return total.toFixed(2);
    };

    return (
        <Card className="w-[1000px] overflow-hidden bg-white shadow-xl">
            <div className="flex">
                <div className="w-1/2 bg-pink-50 flex items-center justify-center p-8">
                    <img
                        src={cakeProduct.image}
                        alt={cakeProduct.name}
                        className="max-w-full max-h-[500px] object-contain rounded-md shadow-lg"
                    />
                </div>
                <CardContent className="w-1/2 p-8 flex flex-col h-[600px] overflow-y-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-gray-600">{cakeProduct.name}</h2>
                        <p className="text-gray-600 mt-2">{cakeProduct.description}</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-5 w-5 ${i < Math.floor(cakeProduct.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                            ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">{cakeProduct.rating} ({cakeProduct.reviews} reviews)</span>
                    </div>
                    <Tabs defaultValue="customize" className="mb-6">
                        <TabsList>
                            <TabsTrigger value="customize">Customize</TabsTrigger>
                            <TabsTrigger value="details">Details</TabsTrigger>
                        </TabsList>
                        <TabsContent value="customize">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Flavor</label>
                                    <Select onValueChange={setSelectedFlavor}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select flavor" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {cakeProduct.flavors.map((flavor) => (
                                                <SelectItem key={flavor} value={flavor}>{flavor}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Frosting</label>
                                    <Select onValueChange={setSelectedFrosting}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select frosting" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {cakeProduct.frostings.map((frosting) => (
                                                <SelectItem key={frosting} value={frosting}>{frosting}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Filling</label>
                                    <Select onValueChange={setSelectedFilling}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select filling" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {cakeProduct.fillings.map((filling) => (
                                                <SelectItem key={filling} value={filling}>{filling}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Theme</label>
                                    <Select onValueChange={setSelectedTheme}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select theme" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {cakeProduct.themes.map((theme) => (
                                                <SelectItem key={theme} value={theme}>{theme}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Colors</label>
                                    <div className="flex space-x-2 mt-1">
                                        <Input
                                            type="color"
                                            value={primaryColor}
                                            onChange={(e) => setPrimaryColor(e.target.value)}
                                            className="w-1/2"
                                        />
                                        <Input
                                            type="color"
                                            value={secondaryColor}
                                            onChange={(e) => setSecondaryColor(e.target.value)}
                                            className="w-1/2"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Toppings</label>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {cakeProduct.toppings.map((topping) => (
                                            <Button
                                                key={topping}
                                                variant={selectedToppings.includes(topping) ? "default" : "outline"}
                                                onClick={() => handleToppingToggle(topping)}
                                                size="sm"
                                            >
                                                {topping}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Dietary Option</label>
                                    <Select onValueChange={setSelectedDietary}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select dietary option" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {cakeProduct.dietaryOptions.map((option) => (
                                                <SelectItem key={option} value={option}>{option}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Personalized Message</label>
                                    <Input
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Enter your cake message"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Delivery</label>
                                    <div className="flex items-center space-x-2 mt-1">
                                        <Switch
                                            checked={isDelivery}
                                            onCheckedChange={setIsDelivery}
                                        />
                                        <span>{isDelivery ? 'Delivery' : 'Pickup'}</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Order Date</label>
                                    <div className="flex items-center space-x-2 mt-1">
                                        <Calendar className="h-5 w-5 text-gray-400" />
                                        <Input
                                            type="date"
                                            value={orderDate}
                                            onChange={(e) => setOrderDate(e.target.value)}
                                            min={new Date(Date.now() + cakeProduct.leadTime * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Special Instructions</label>
                                    <Textarea
                                        value={specialInstructions}
                                        onChange={(e) => setSpecialInstructions(e.target.value)}
                                        placeholder="Any additional requests or instructions?"
                                    />
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="details">
                            <div className="space-y-4 text-sm text-gray-600">
                                <p>Our custom cakes are baked fresh to order using high-quality ingredients.</p>
                                <p>Lead time: Orders must be placed at least {cakeProduct.leadTime} days in advance.</p>
                                <p>Delivery: Available within a 20-mile radius. Delivery fee applies.</p>
                                <p>Dietary options: Our gluten-free, vegan, and nut-free cakes are prepared in a dedicated area to avoid cross-contamination.</p>
                                <p>Customization: We'll do our best to accommodate special requests. Please note that complex designs may incur additional charges.</p>
                            </div>
                        </TabsContent>
                    </Tabs>
                    <div className="mt-6 space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-gray-800">${calculateTotalPrice()}</span>
                            <div className="flex space-x-2">
                                <Button variant="outline" size="icon">
                                    <Heart className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                    <Share2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                        </Button>
                    </div>
                </CardContent>
            </div>
        </Card>
    );
};

export default CustomBirthdayCakeCard;