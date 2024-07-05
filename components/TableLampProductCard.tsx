"use client";

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon, Zap, Lightbulb, ShoppingCart } from 'lucide-react';

const product = {
    id: '1',
    name: 'Lumina Glow',
    brand: 'Modern Illuminations',
    price: 129.99,
    rating: 4.6,
    reviews: 89,
    image: '/table-lamp.jpg',
    description: 'The Lumina Glow table lamp combines sleek design with versatile lighting options, perfect for any modern interior.',
    features: [
        'Adjustable brightness',
        'Color temperature control',
        'Touch-sensitive base',
        'Energy-efficient LED',
        'USB charging port'
    ],
    colors: [
        { name: 'Matte Black', hex: '#2D3436' },
        { name: 'Brushed Gold', hex: '#DAA520' },
        { name: 'Pearl White', hex: '#F0EAD6' }
    ],
    materials: ['Aluminum', 'Glass', 'Fabric'],
    warranty: '2-year manufacturer warranty'
};

export const TableLampProductCard = () => {
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedMaterial, setSelectedMaterial] = useState(product.materials[0]);
    const [brightness, setBrightness] = useState(50);
    const [isOn, setIsOn] = useState(false);

    return (
        <Card className="w-[600px] h-[1200px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg rounded-lg">
            <CardContent className="p-6 flex flex-col h-full">
                <div className="relative mb-6 h-[600px] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-yellow-100 opacity-${brightness / 4} transition-opacity duration-300 ${isOn ? '' : 'hidden'}`}></div>
                </div>
                <div className="mb-4">
                    <h4 className="text-sm text-indigo-600 font-semibold">{product.brand}</h4>
                    <h2 className="text-2xl font-bold text-gray-800 mt-1">{product.name}</h2>
                </div>
                <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Sun key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current'}`} />
                        ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                </div>
                <p className="text-gray-600 text-sm mb-6">{product.description}</p>
                <div className="mb-6">
                    <h3 className="text-md font-semibold mb-2 text-gray-700">Color</h3>
                    <div className="flex space-x-3">
                        {product.colors.map((color) => (
                            <button
                                key={color.name}
                                className={`w-6 h-6 rounded-full transition-transform hover:scale-110 ${selectedColor.name === color.name ? 'ring-2 ring-offset-2 ring-indigo-500' : ''}`}
                                style={{ backgroundColor: color.hex }}
                                onClick={() => setSelectedColor(color)}
                                title={color.name}
                            />
                        ))}
                    </div>
                </div>
                <div className="mb-6">
                    <h3 className="text-md font-semibold mb-2 text-gray-700">Material</h3>
                    <div className="flex flex-wrap gap-2">
                        {product.materials.map((material) => (
                            <Button
                                key={material}
                                variant={selectedMaterial === material ? "default" : "outline"}
                                onClick={() => setSelectedMaterial(material)}
                                className="text-xs py-1 px-2"
                            >
                                {material}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-md font-semibold text-gray-700">Brightness</h3>
                        <Switch checked={isOn} onCheckedChange={setIsOn} />
                    </div>
                    <Slider
                        defaultValue={[brightness]}
                        max={100}
                        step={1}
                        onValueChange={([value]) => setBrightness(value)}
                        disabled={!isOn}
                        className={isOn ? '' : 'opacity-50'}
                    />
                    <div className="flex justify-between text-gray-500 mt-1">
                        <Moon className="h-4 w-4" />
                        <Sun className="h-4 w-4" />
                    </div>
                </div>
                <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
                        <div className="flex items-center text-green-600">
                            <Zap className="h-5 w-5 mr-1" />
                            <span className="text-sm font-medium">Energy Efficient</span>
                        </div>
                    </div>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-300" size="lg">
                        <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default TableLampProductCard;