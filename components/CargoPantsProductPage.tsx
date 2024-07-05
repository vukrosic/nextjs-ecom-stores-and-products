"use client";

import React, { useState } from 'react';
import { StarIcon } from 'lucide-react';

// Mock data
const product = {
    id: 1,
    name: 'Tactical Cargo Pants',
    description: 'Durable and versatile cargo pants designed for outdoor enthusiasts and professionals alike. Features multiple pockets for ultimate convenience and storage.',
    price: 79.99,
    imageUrl: '/CargoPantsProductPage.webp',
    colors: ['Khaki', 'Olive', 'Black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    features: [
        'Made from ripstop fabric for durability',
        'Multiple cargo pockets for storage',
        'Reinforced knees for added protection',
        'Adjustable waistband for comfort',
        'Water-resistant finish',
    ],
    rating: 4.5,
    reviews: [
        {
            id: 1, author: 'John D.', rating: 5, comment: "Best cargo pants I've ever owned.Comfortable and durable."
        },
        { id: 2, author: 'Sarah M.', rating: 4, comment: 'Great fit and lots of pockets. Wish they came in more colors.' },
    ],
};

const CargoPantsProductPage: React.FC = () => {
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

    return (
        <div className="container mx-auto px-4 py-8 bg-gray-900 rounded-lg">
            <div className="flex flex-col md:flex-row">
                {/* Product Image */}
                <div className="md:w-1/2">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                </div>

                {/* Product Details */}
                <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <p className="text-2xl font-semibold mb-6">${product.price.toFixed(2)}</p>

                    {/* Color Selection */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">Color</h2>
                        <div className="flex space-x-2">
                            {product.colors.map((color) => (
                                <button
                                    key={color}
                                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-blue-500' : 'border-gray-300'
                                        }`}
                                    style={{ backgroundColor: color.toLowerCase() }}
                                    onClick={() => setSelectedColor(color)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Size Selection */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">Size</h2>
                        <div className="flex space-x-2">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    className={`px-3 py-1 border rounded ${selectedSize === size
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                        }`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                        Add to Cart
                    </button>

                    {/* Features */}
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-4">Features</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            {product.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
                <div className="flex items-center mb-4 text-gray-400">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <StarIcon
                                key={i}
                                className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="ml-2 text-gray-300">{product.rating} out of 5</span>
                </div>
                <div className="space-y-4">
                    {product.reviews.map((review) => (
                        <div key={review.id} className="border-b pb-4">
                            <div className="flex items-center mb-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon
                                            key={i}
                                            className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="ml-2 font-semibold">{review.author}</span>
                            </div>
                            <p className="text-gray-200">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CargoPantsProductPage;