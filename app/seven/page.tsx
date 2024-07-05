"use client";

import React, { useState, useRef } from 'react';
import { ShoppingBag, Search, ShoppingCart, Sun, Moon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { toast, Toaster } from 'react-hot-toast';

interface Product {
    id: number;
    name: string;
    price: number;
    colors: string[];
    sizes: string[];
    image: string;
    rating: number;
}

const products: Product[] = [
    { id: 1, name: 'Luxury Watch', price: 199.99, colors: ['Gold', 'Silver', 'Black'], sizes: ['Standard'], image: '/luxury-watch.png', rating: 4.5 },
    { id: 2, name: 'Summer Hat', price: 29.99, colors: ['Beige', 'White', 'Blue'], sizes: ['S', 'M', 'L'], image: '/summer-hat.webp', rating: 4.0 },
    { id: 3, name: 'Modern Tap', price: 89.99, colors: ['Chrome', 'Matte Black'], sizes: ['Standard'], image: '/tap1.webp', rating: 4.8 },
    { id: 4, name: 'Summer Polo', price: 44.99, colors: ['White', 'Navy', 'Green'], sizes: ['S', 'M', 'L', 'XL'], image: '/summer-polo.webp', rating: 3.5 },
    { id: 5, name: 'Waterfall Tap', price: 129.99, colors: ['Chrome', 'Bronze'], sizes: ['Standard'], image: '/waterfall-tap.webp', rating: 4.2 },
    { id: 6, name: 'Table Lamp', price: 69.99, colors: ['White', 'Black', 'Gray'], sizes: ['Standard'], image: '/table-lamp.jpg', rating: 4.7 },
];

const ClothingStore = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [cart, setCart] = useState<{ [key: number]: number }>({});

    const featuredRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
    };

    const addToCart = (product: Product) => {
        setCart((prevCart) => ({
            ...prevCart,
            [product.id]: (prevCart[product.id] || 0) + 1,
        }));
        toast.success(`Added ${product.name} to cart!`);
    };

    const removeFromCart = (product: Product) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            if (newCart[product.id] > 1) {
                newCart[product.id]--;
            } else {
                delete newCart[product.id];
            }
            return newCart;
        });
        toast.success(`Removed ${product.name} from cart!`);
    };

    const getTotalCartItems = () => {
        return Object.values(cart).reduce((sum, count) => sum + count, 0);
    };

    const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-pink-50 text-gray-900'}`}>
            <Toaster />
            <header className="sticky top-0 z-50 bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <ShoppingBag className="h-8 w-8 text-white" />
                        <span className="text-2xl font-extrabold text-white">Chic Boutique</span>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                        <button onClick={() => scrollToSection(featuredRef)} className="text-white hover:text-pink-200 transition duration-300 font-semibold">Shop</button>
                        <button onClick={() => scrollToSection(aboutRef)} className="text-white hover:text-pink-200 transition duration-300 font-semibold">About</button>
                        <button onClick={() => scrollToSection(contactRef)} className="text-white hover:text-pink-200 transition duration-300 font-semibold">Contact</button>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <Search className="h-6 w-6 text-white cursor-pointer hover:text-pink-200 transition duration-300" />
                        <div className="relative">
                            <ShoppingCart className="h-6 w-6 text-white cursor-pointer hover:text-pink-200 transition duration-300" />
                            {getTotalCartItems() > 0 && (
                                <span className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                    {getTotalCartItems()}
                                </span>
                            )}
                        </div>
                        <div className="flex items-center space-x-2">
                            <Sun className="h-4 w-4 text-white" />
                            <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
                            <Moon className="h-4 w-4 text-white" />
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <section className="mb-20 relative">
                    <div className="overflow-hidden rounded-3xl shadow-2xl">
                        <div className="relative h-[500px]" style={{ backgroundImage: `url(${products[currentSlide].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-75 flex items-center justify-center">
                                <div className="text-center">
                                    <h1 className="text-5xl font-extrabold text-white mb-6 animate-pulse">{products[currentSlide].name}</h1>
                                    <p className="text-2xl text-pink-100 mb-10">Elevate Your Style</p>
                                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg py-3 px-8 rounded-full transform hover:scale-105 transition duration-300" onClick={() => scrollToSection(featuredRef)}>
                                        Explore Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button variant="outline" className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-pink-500 rounded-full p-2 hover:bg-pink-100" onClick={prevSlide}>
                        <ChevronLeft className="h-8 w-8" />
                    </Button>
                    <Button variant="outline" className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-pink-500 rounded-full p-2 hover:bg-pink-100" onClick={nextSlide}>
                        <ChevronRight className="h-8 w-8" />
                    </Button>
                </section>

                <section className="mb-20" ref={featuredRef}>
                    <h2 className="text-4xl font-extrabold text-center mb-12 text-pink-600 dark:text-pink-400">Featured Collection</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {products.map((product) => (
                            <Card key={product.id} className="overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800 rounded-2xl">
                                <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-bold mb-3 text-pink-600 dark:text-pink-400">{product.name}</h3>
                                    <p className="text-xl font-extrabold text-purple-600 dark:text-purple-400 mb-4">${product.price.toFixed(2)}</p>
                                    <div className="flex space-x-3 mb-4">
                                        <Select>
                                            <SelectTrigger className="w-28 bg-pink-100 dark:bg-pink-900 border-pink-300 dark:border-pink-700">
                                                <SelectValue placeholder="Color" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {product.colors.map((color) => (
                                                    <SelectItem key={color} value={color.toLowerCase()}>{color}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <Select>
                                            <SelectTrigger className="w-28 bg-pink-100 dark:bg-pink-900 border-pink-300 dark:border-pink-700">
                                                <SelectValue placeholder="Size" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {product.sizes.map((size) => (
                                                    <SelectItem key={size} value={size}>{size}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    {cart[product.id] ? (
                                        <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-full" onClick={() => removeFromCart(product)}>
                                            Remove From Cart
                                        </Button>
                                    ) : (
                                        <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-full" onClick={() => addToCart(product)}>
                                            Add to Cart
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="bg-gradient-to-r from-pink-300 to-purple-300 dark:from-pink-800 dark:to-purple-800 rounded-3xl p-12 mb-20" ref={contactRef}>
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-4xl font-extrabold mb-6 text-white">Join Our Exclusive Club</h2>
                        <p className="text-xl mb-8 text-pink-100">Be the first to know about new arrivals and special offers!</p>
                        <div className="flex space-x-3">
                            <Input type="email" placeholder="Enter your email" className="flex-grow rounded-full py-3 px-6 text-lg" />
                            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg py-3 px-8 rounded-full">Subscribe</Button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-2xl font-bold mb-6">About Chic Boutique</h4>
                            <p className="text-pink-100" ref={aboutRef}>Chic Boutique is your ultimate destination for trendsetting fashion. We curate high-quality, stylish pieces that empower you to express your unique personality.</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-pink-100 hover:text-white transition duration-300">Home</button></li>
                                <li><button onClick={() => scrollToSection(featuredRef)} className="text-pink-100 hover:text-white transition duration-300">Shop</button></li>
                                <li><button onClick={() => scrollToSection(aboutRef)} className="text-pink-100 hover:text-white transition duration-300">About</button></li>
                                <li><button onClick={() => scrollToSection(contactRef)} className="text-pink-100 hover:text-white transition duration-300">Contact</button></li>
                            </ul>
                        </div>
                        {/* <div>
                            <h4 className="text-2xl font-bold mb-6">Connect With Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-pink-100 hover:text-white transition duration-300">
                                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c- */}

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default ClothingStore
