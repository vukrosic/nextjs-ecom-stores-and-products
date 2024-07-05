import React from 'react';
import Image from 'next/image';
import { Star, StarHalf } from 'lucide-react';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    imageUrl: string;
    buttonColor: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<Star key={i} className="w-4 h-4 fill-current text-yellow-400" />);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<StarHalf key={i} className="w-4 h-4 fill-current text-yellow-400" />);
            } else {
                stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
            }
        }
        return stars;
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs">
            <div className="p-4 flex flex-col items-center">
                <div className="relative group p-4 h-96 cursor-pointer">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={400}
                        height={500}
                        className="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-105  shadow-sm hover:shadow-xl"
                    />
                </div>
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2 text-center">{product.description}</p>
                <p className="text-lg font-bold mb-2">${product.price.toFixed(2)}</p>
                <div className="flex mb-4">
                    {renderStars(product.rating)}
                </div>
            </div>
            <button
                className={`w-full py-2 text-white font-semibold bg-[#FFD700] hover:opacity-90 transition-opacity`}
            >
                Buy Now
            </button>
        </div>
    );
};

export const ModernUI: React.FC<{ products: Product[] }> = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};