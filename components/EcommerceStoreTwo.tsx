"use client";

import React, { useState } from 'react';
import { ShoppingBag, Star, Heart, Search, Menu, ShoppingCart, ArrowRight, Mail, X } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface Product {
    id: number;
    name: string;
    price: number;
    rating: number;
    url: string;
}

const products = [
    { id: 1, name: 'Luxury Watch', price: 199.99, rating: 4.5, url: '/luxury-watch.png' },
    { id: 2, name: 'Summer Hat', price: 29.99, rating: 4.0, url: '/summer-hat.webp' },
    { id: 3, name: 'Modern Tap', price: 89.99, rating: 4.8, url: '/tap1.webp' },
    { id: 4, name: 'Summer Polo', price: 44.99, rating: 3.5, url: '/summer-polo.webp' },
    { id: 5, name: 'Waterfall Tap', price: 129.99, rating: 4.2, url: '/waterfall-tap.webp' },
    { id: 6, name: 'Table Lamp', price: 69.99, rating: 4.7, url: '/table-lamp.jpg' },
];

const EcommerceStoreTwo = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [favorites, setFavorites] = useState<Set<number>>(new Set());

    const addToCart = (product: Product) => {
        if (!cartItems.find(item => item.id === product.id)) {
            setCartItems([...cartItems, product]);
        }
    };

    const removeFromCart = (productId: number) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const toggleFavorite = (productId: number) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(productId)) {
                newFavorites.delete(productId);
            } else {
                newFavorites.add(productId);
            }
            return newFavorites;
        });
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex h-screen bg-gray-900 text-gray-100">
            {/* Sidebar Navigation */}
            <aside className="w-64 bg-gray-800 p-6">
                <div className="flex items-center mb-8">
                    <ShoppingBag className="h-8 w-8 text-indigo-500" />
                    <span className="ml-2 text-xl font-bold">LuxeStore</span>
                </div>
                <nav className="space-y-4">
                    <button onClick={() => scrollToSection('home')} className="block text-gray-300 hover:text-white transition duration-200">Home</button>
                    <button onClick={() => scrollToSection('products')} className="block text-gray-300 hover:text-white transition duration-200">Products</button>
                    <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-white transition duration-200">About</button>
                    <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-white transition duration-200">Contact</button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                {/* Header */}
                <header className="bg-gray-800 shadow-lg p-4 sticky top-0 z-10">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="w-64 bg-gray-700 text-white"
                            />
                            <Button variant="ghost" className="ml-2">
                                <Search className="h-5 w-5" />
                            </Button>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost">
                                <Heart className="h-5 w-5" />
                            </Button>
                            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" className="relative">
                                        <ShoppingCart className="h-5 w-5" />
                                        {cartItems.length > 0 && (
                                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                                {cartItems.length}
                                            </span>
                                        )}
                                    </Button>
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>Your Cart</SheetTitle>
                                    </SheetHeader>
                                    <div className="mt-4 space-y-4">
                                        {cartItems.map(item => (
                                            <div key={item.id} className="flex items-center justify-between">
                                                <span>{item.name}</span>
                                                <span>${item.price.toFixed(2)}</span>
                                                <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>
                                                    <X className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8">
                                        <Button className="w-full">Checkout</Button>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section id="home" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1492892132812-a00a8b245c45?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="container mx-auto px-4 flex items-center">
                        <div className="w-1/2">
                            <h1 className="text-4xl font-bold mb-4">Discover Luxury</h1>
                            <p className="text-xl mb-8">Elevate your style with our premium collection</p>
                            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100" onClick={() => scrollToSection('products')}>
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Products Grid */}
                <section id="products" className="py-16 bg-gray-900">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((product) => (
                                <Card key={product.id} className="bg-gray-800 text-white overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                                    <div className="relative">
                                        <img src={product.url} alt={product.name} className="w-full h-64 object-cover" />
                                        <div className="absolute top-2 right-2">
                                            <Button variant="ghost" size="icon" className={`text-white ${favorites.has(product.id) ? 'text-pink-500' : 'hover:text-pink-500'}`} onClick={() => toggleFavorite(product.id)}>
                                                <Heart className="h-5 w-5" />
                                            </Button>
                                        </div>
                                    </div>
                                    <CardContent className="p-4">
                                        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                        <div className="flex items-center justify-between">
                                            <span className="text-2xl font-bold text-indigo-400">${product.price.toFixed(2)}</span>
                                            <div className="flex items-center">
                                                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                                                <span className="ml-1 text-sm">{product.rating}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className={`w-full ${cartItems.find(item => item.id === product.id) ? 'bg-red-600 hover:bg-red-700' : 'bg-indigo-600 hover:bg-indigo-700'}`} onClick={() => cartItems.find(item => item.id === product.id) ? removeFromCart(product.id) : addToCart(product)}>
                                            {cartItems.find(item => item.id === product.id) ? 'Remove From Cart' : 'Add to Cart'}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section id="about" className="bg-gray-800 py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center">
                            <h3 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
                            <p className="text-gray-400 mb-6">Stay updated with our latest products and exclusive offers!</p>
                            <div className="flex">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-grow bg-gray-700 text-white"
                                />
                                <Button className="ml-2 bg-indigo-600 hover:bg-indigo-700">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer id="contact" className="bg-gray-900 text-gray-400 py-8">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h4 className="text-lg font-semibold mb-4 text-white">About Us</h4>
                                <p>LuxeStore is your destination for premium products. We offer a curated selection of high-quality items to elevate your lifestyle.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                                <ul className="space-y-2">
                                    <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition duration-200">Home</button></li>
                                    <li><button onClick={() => scrollToSection('products')} className="hover:text-white transition duration-200">Products</button></li>
                                    <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition duration-200">About</button></li>
                                    <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition duration-200">Contact</button></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
                                <p className="flex items-center mb-2">
                                    <Mail className="h-5 w-5 mr-2" />
                                    info@luxestore.com
                                </p>
                                <p>123 Luxury Lane, Elegance City, 54321</p>
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <p>&copy; 2024 LuxeStore. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default EcommerceStoreTwo;
