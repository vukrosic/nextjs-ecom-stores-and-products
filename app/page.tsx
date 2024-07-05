import NewArrivals from '@/components/NewArrivals'

const products = [
  {
    id: '1',
    name: 'Chocolate Swirl Bun',
    price: 4.00,
    imageUrl: '/images/pastry1.jpg',
  },
  {
    id: '2',
    name: 'Powdered Sugar Squares',
    price: 3.00,
    imageUrl: '/images/pastry2.jpg',
  },
  {
    id: '3',
    name: 'Italian Panettone',
    price: 12.00,
    imageUrl: '/images/pastry3.jpg',
  },
  {
    id: '4',
    name: 'Spring Rolls',
    price: 5.00,
    imageUrl: '/images/pastry4.jpg',
  },
  {
    id: '5',
    name: 'Meat Pie',
    price: 8.00,
    imageUrl: '/images/pastry5.jpg',
  },
  {
    id: '6',
    name: 'Choco Rolls',
    price: 3.50,
    imageUrl: '/images/pastry6.jpg',
  },
  {
    id: '7',
    name: 'Blueberry Muffins',
    price: 2.50,
    imageUrl: '/images/pastry7.jpg',

  },
  {
    id: '8',
    name: 'Savory Knots',
    price: 3.00,
    imageUrl: '/images/pastry8.jpg',
  },
  {
    id: '9',
    name: 'Pain au Chocolat',
    price: 3.50,
    imageUrl: '/images/pastry9.jpg',
  }
];






export default async function Home() {

  return (
    <div className="min-h-screen bg-gray-100">
      <NewArrivals products={products} />
    </div>
  )
}

