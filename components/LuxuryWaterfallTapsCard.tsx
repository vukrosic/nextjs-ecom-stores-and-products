"use client";

import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { DropletIcon, Sparkles, ThermometerIcon, Waves, ShieldCheck, ArrowRight } from 'lucide-react';

const product = {
    id: '1',
    name: 'AquaCascade Elite',
    brand: 'LuxeBath',
    price: 599.99,
    rating: 4.9,
    reviews: 87,
    image: '/waterfall-tap.webp',
    description: 'Transform your bathroom into a spa-like retreat with our AquaCascade Elite waterfall taps. Combining stunning design with advanced technology for an unparalleled bathing experience.',
    features: [
        'Sleek waterfall design',
        'Temperature-sensitive LED lighting',
        'Adjustable flow rate',
        'Ceramic disc cartridge for smooth operation',
        'Easy-clean nozzles'
    ],
    finishes: [
        { name: 'Chrome', hex: '#D7D7D7' },
        { name: 'Brushed Nickel', hex: '#A59E8C' },
        { name: 'Matte Black', hex: '#28282B' },
        { name: 'Champagne Bronze', hex: '#F7E7CE' }
    ],
    warranty: '10-year limited warranty'
};

export const LuxuryWaterfallTapsCard = () => {
    const [selectedFinish, setSelectedFinish] = useState(product.finishes[0]);
    const [flowRate, setFlowRate] = useState(50);

    return (
        <Card className="w-full max-w-4xl mx-auto overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 shadow-2xl rounded-none">
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                    <div>
                        <h4 className="text-sm text-cyan-600 font-semibold tracking-wider uppercase">{product.brand}</h4>
                        <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">{product.name}</h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">{product.description}</p>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-700">Finish</h3>
                            <div className="flex space-x-4">
                                {product.finishes.map((finish) => (
                                    <button
                                        key={finish.name}
                                        className={`w-12 h-12 rounded-full transition-all duration-300 ${selectedFinish.name === finish.name ? 'ring-4 ring-offset-4 ring-cyan-300' : 'hover:scale-110'}`}
                                        style={{ backgroundColor: finish.hex }}
                                        onClick={() => setSelectedFinish(finish)}
                                        title={finish.name}
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-700">Adjastable Flow Rate</h3>
                            <Slider
                                defaultValue={[flowRate]}
                                max={100}
                                step={1}
                                onValueChange={([value]) => setFlowRate(value)}
                                className="w-full"
                            />
                            <div className="flex justify-between text-sm text-gray-500 mt-2">
                                <span>Gentle</span>
                                <span>Powerful</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 relative overflow-hidden group">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-4xl font-bold">${product.price.toFixed(2)}</span>
                            <div className="flex items-center">
                                <Sparkles className="h-6 w-6 text-yellow-400 mr-2" />
                                <span className="text-xl font-semibold">{product.rating} ({product.reviews} reviews)</span>
                            </div>
                        </div>
                        <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white transition-all duration-300 rounded-full py-6 text-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center group">
                            Experience Luxury
                            <ArrowRight className="ml-2 h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                            {index === 0 && <Waves className="h-6 w-6 text-cyan-500 flex-shrink-0" />}
                            {index === 1 && <ThermometerIcon className="h-6 w-6 text-red-500 flex-shrink-0" />}
                            {index === 2 && <DropletIcon className="h-6 w-6 text-blue-500 flex-shrink-0" />}
                            {index === 3 && <Sparkles className="h-6 w-6 text-yellow-500 flex-shrink-0" />}
                            {index === 4 && <ShieldCheck className="h-6 w-6 text-green-500 flex-shrink-0" />}
                            <span className="text-gray-700">{feature}</span>
                        </div>
                    ))}
                </div>
                <p className="mt-6 text-sm text-gray-500 text-center">{product.warranty}</p>
            </div>
        </Card>
    );
};

export default LuxuryWaterfallTapsCard;