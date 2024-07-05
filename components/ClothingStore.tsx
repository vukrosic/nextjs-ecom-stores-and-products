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
        <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            <Toaster />
            <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <ShoppingBag className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                        <span className="text-xl font-bold">Fashion Hub</span>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                        <button onClick={() => scrollToSection(featuredRef)} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300">Shop</button>
                        <button onClick={() => scrollToSection(aboutRef)} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300">About</button>
                        <button onClick={() => scrollToSection(contactRef)} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300">Contact</button>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <Search className="h-6 w-6 text-gray-600 dark:text-gray-300 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300" />
                        <div className="relative">
                            <ShoppingCart className="h-6 w-6 text-gray-600 dark:text-gray-300 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300" />
                            {getTotalCartItems() > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                    {getTotalCartItems()}
                                </span>
                            )}
                        </div>
                        <div className="flex items-center space-x-2">
                            <Sun className="h-4 w-4" />
                            <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
                            <Moon className="h-4 w-4" />
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <section className="mb-16 relative">
                    <div className="overflow-hidden rounded-lg shadow-xl">
                        <div className="relative h-96" style={{ backgroundImage: `url(${products[currentSlide].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <div className="text-center">
                                    <h1 className="text-4xl font-bold text-white mb-4">{products[currentSlide].name}</h1>
                                    <p className="text-xl text-white mb-8">Discover our latest collection</p>
                                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" onClick={() => scrollToSection(featuredRef)}>Shop Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button variant="outline" className="absolute top-1/2 left-4 transform -translate-y-1/2" onClick={prevSlide}>
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button variant="outline" className="absolute top-1/2 right-4 transform -translate-y-1/2" onClick={nextSlide}>
                        <ChevronRight className="h-6 w-6" />
                    </Button>
                </section>

                <section className="mb-16" ref={featuredRef}>
                    <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition duration-300">
                                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                                <CardContent className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                    <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-4">${product.price.toFixed(2)}</p>
                                    <div className="flex space-x-2 mb-4">
                                        <Select>
                                            <SelectTrigger className="w-24">
                                                <SelectValue placeholder="Color" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {product.colors.map((color) => (
                                                    <SelectItem key={color} value={color.toLowerCase()}>{color}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <Select>
                                            <SelectTrigger className="w-24">
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
                                        <Button className="w-full bg-red-500 hover:bg-red-600" onClick={() => removeFromCart(product)}>
                                            Remove From Cart
                                        </Button>
                                    ) : (
                                        <Button className="w-full" onClick={() => addToCart(product)}>
                                            Add to Cart
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="bg-indigo-100 dark:bg-indigo-900 rounded-lg p-8 mb-16" ref={contactRef}>
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                        <p className="text-lg mb-6">Stay updated with our latest collections and exclusive offers!</p>
                        <div className="flex space-x-2">
                            <Input type="email" placeholder="Enter your email" className="flex-grow" />
                            <Button>Subscribe</Button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold mb-4">About Fashion Hub</h4>
                            <p className="text-gray-400" ref={aboutRef}>Fashion Hub is your go-to destination for the latest trends in clothing and accessories. We offer high-quality products at competitive prices.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-400 hover:text-white transition duration-300">Home</button></li>
                                <li><button onClick={() => scrollToSection(featuredRef)} className="text-gray-400 hover:text-white transition duration-300">Shop</button></li>
                                <li><button onClick={() => scrollToSection(aboutRef)} className="text-gray-400 hover:text-white transition duration-300">About</button></li>
                                <li><button onClick={() => scrollToSection(contactRef)} className="text-gray-400 hover:text-white transition duration-300">Contact</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default ClothingStore;