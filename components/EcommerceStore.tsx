import React from 'react';
import { ShoppingBag, Star, Heart, Search, Menu, ShoppingCart, ArrowRight, Mail } from 'lucide-react';

const products = [
    { id: 1, name: 'Luxury Watch', price: 199.99, rating: 4.5, url: '/luxury-watch.png' },
    { id: 2, name: 'Summer Hat', price: 29.99, rating: 4.0, url: '/summer-hat.webp' },
    { id: 3, name: 'Modern Tap', price: 89.99, rating: 4.8, url: '/tap1.webp' },
    { id: 4, name: 'Summer Polo', price: 44.99, rating: 3.5, url: '/summer-polo.webp' },
    { id: 5, name: 'Waterfall Tap', price: 129.99, rating: 4.2, url: '/waterfall-tap.webp' },
    { id: 6, name: 'Table Lamp', price: 69.99, rating: 4.7, url: '/table-lamp.jpg' },
];

const EcommerceStore = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <ShoppingBag className="h-8 w-8 text-indigo-600" />
                        <span className="ml-2 text-xl font-bold text-gray-800">E-Store</span>
                    </div>
                    <nav className="hidden md:flex space-x-4">
                        <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">Products</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <Search className="h-6 w-6 text-gray-600" />
                        <Heart className="h-6 w-6 text-gray-600" />
                        <ShoppingCart className="h-6 w-6 text-gray-600" />
                        <Menu className="h-6 w-6 text-gray-600 md:hidden" />
                    </div>
                </div>
            </header>

            <main>
                <section
                    className="bg-indigo-600 text-white py-20"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1492892132812-a00a8b245c45?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}>
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl font-bold mb-4">Welcome to E-Store</h1>
                        <p className="text-xl mb-8">Discover amazing products at unbeatable prices</p>
                        <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition duration-300">
                            Shop Now
                        </button>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((product) => (
                                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <div className="p-4">
                                        <div className="bg-gray-200 h-72 rounded-md flex items-center justify-center">
                                            <img src={product.url} className="w-full h-full object-cover rounded-md" />
                                        </div>
                                        <h3 className="mt-4 text-lg font-semibold text-gray-800">{product.name}</h3>
                                        <div className="flex items-center mt-2">
                                            <span className="text-indigo-600 font-bold">${product.price.toFixed(2)}</span>
                                            <div className="ml-auto flex items-center">
                                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                                <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                                            </div>
                                        </div>
                                        <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-gray-200 py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="md:w-1/2 mb-8 md:mb-0 text-gray-800">
                                <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <ArrowRight className="h-6 w-6 text-indigo-600 mr-2" />
                                        <span>High-quality products</span>
                                    </li>
                                    <li className="flex items-center">
                                        <ArrowRight className="h-6 w-6 text-indigo-600 mr-2" />
                                        <span>Fast and free shipping</span>
                                    </li>
                                    <li className="flex items-center">
                                        <ArrowRight className="h-6 w-6 text-indigo-600 mr-2" />
                                        <span>24/7 customer support</span>
                                    </li>
                                    <li className="flex items-center">
                                        <ArrowRight className="h-6 w-6 text-indigo-600 mr-2" />
                                        <span>Easy returns and exchanges</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="bg-white p-8 rounded-lg shadow-md">
                                    <h3 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
                                    <p className="text-gray-600 mb-4">Stay updated with our latest products and offers!</p>
                                    <div className="flex">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                        />
                                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition duration-300">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold mb-4">About Us</h4>
                            <p className="text-gray-400">E-Store is your one-stop shop for all your needs. We offer a wide range of high-quality products at competitive prices.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Products</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                            <p className="text-gray-400 flex items-center mb-2">
                                <Mail className="h-5 w-5 mr-2" />
                                info@estore.com
                            </p>
                            <p className="text-gray-400">123 E-Commerce St, Digital City, 12345</p>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-gray-400">
                        <p>&copy; 2024 E-Store. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div >
    );
};

export default EcommerceStore;