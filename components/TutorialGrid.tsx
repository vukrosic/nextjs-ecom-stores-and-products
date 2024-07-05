"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MinusIcon, PlusIcon } from 'lucide-react'
import StrawberryProductCard from './StrawberryProductCard';

interface Product {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
}


interface TutorialGridProps {
    products: Product[];
}

export const TutorialGrid: React.FC<TutorialGridProps> = ({ products }) => {
    return (
        <section className="container mx-auto px-4 py-12 text-black p-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-28 px-14 pt-10">
                {products.map((product) => (
                    <StrawberryProductCard />
                ))}
            </div>
        </section>
    );
};