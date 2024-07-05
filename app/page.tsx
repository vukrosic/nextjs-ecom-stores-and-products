import { ModernUI } from '@/components/ModernUI';

const products = [
  {
    id: '1',
    name: 'Chocolate Swirl Bun',
    price: 4.00,
    imageUrl: '/images/pastry1.jpg',
    description: 'A delightful bun with a rich chocolate swirl.',
    rating: 4.5,
    buttonColor: 'bg-[#FF6347]'
  },
  {
    id: '2',
    name: 'Powdered Sugar Squares',
    price: 3.00,
    imageUrl: '/images/pastry2.jpg',
    description: 'Soft squares dusted with powdered sugar.',
    rating: 4.0,
    buttonColor: 'bg-[#FFD700]'
  },
  {
    id: '3',
    name: 'Italian Panettone',
    price: 12.00,
    imageUrl: '/images/pastry3.jpg',
    description: 'Traditional Italian Christmas bread.',
    rating: 4.8,
    buttonColor: 'bg-[#ADFF2F]'
  },
  {
    id: '4',
    name: 'Spring Rolls',
    price: 5.00,
    imageUrl: '/images/pastry4.jpg',
    description: 'Crispy rolls filled with fresh vegetables.',
    rating: 4.3,
    buttonColor: 'bg-[#FF4500]'
  },
  {
    id: '5',
    name: 'Meat Pie',
    price: 8.00,
    imageUrl: '/images/pastry5.jpg',
    description: 'A savory pie filled with seasoned meat.',
    rating: 4.7,
    buttonColor: 'bg-[#8B4513]'
  },
  {
    id: '6',
    name: 'Choco Rolls',
    price: 3.50,
    imageUrl: '/images/pastry6.jpg',
    description: 'Chocolate-filled rolls with a crispy crust.',
    rating: 4.2,
    buttonColor: 'bg-[#D2691E]'
  },
  {
    id: '7',
    name: 'Blueberry Muffins',
    price: 2.50,
    imageUrl: '/images/pastry7.jpg',
    description: 'Moist muffins bursting with blueberries.',
    rating: 4.4,
    buttonColor: 'bg-[#8A2BE2]'
  },
  {
    id: '8',
    name: 'Savory Knots',
    price: 3.00,
    imageUrl: '/images/pastry8.jpg',
    description: 'Knots of bread with a savory twist.',
    rating: 4.1,
    buttonColor: 'bg-[#B22222]'
  },
  {
    id: '9',
    name: 'Pain au Chocolat',
    price: 3.50,
    imageUrl: '/images/pastry9.jpg',
    description: 'Flaky pastry with a rich chocolate center.',
    rating: 4.6,
    buttonColor: 'bg-[#FF8C00]'
  }
];






export default async function Home() {

  return (
    <div className="min-h-screen bg-gray-100">
      <ModernUI products={products} />
    </div>
  )
}

