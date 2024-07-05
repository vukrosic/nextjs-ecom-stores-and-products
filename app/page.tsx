import StrawberryProductCard from '@/components/StrawberryProductCard';
import NewArrivals from '@/components/NewArrivals'
import { TutorialGrid } from '@/components/TutorialGrid';
import WatchProductCard from '@/components/WatchProductCard';
import CustomBirthdayCakeCard from '@/components/CustomBirthdayCakeCard';
import TableLampProductCard from '@/components/TableLampProductCard';
import SummerHatProductCard from '@/components/SummerHatProductCard';
import LuxuryWaterfallTapsCard from '@/components/LuxuryWaterfallTapsCard';
import SummerPoloProductCard from '@/components/SummerPoloProductCard';
import CargoPantsProductPage from '@/components/CargoPantsProductPage';
import LuxuryShowerTapProductPage from '@/components/LuxuryShowerTapProductPage';
import { Toaster } from '@/components/ui/toaster';
import EcommerceStore from '@/components/EcommerceStore';
import EcommerceStoreTwo from '@/components/EcommerceStoreTwo';
import ClothingStore from '@/components/ClothingStore';

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
    <div
    // className="min-h-screen min-w-screen flex items-center justify-center bg-gray-100 bg-gradient-to-r from-blue-200 via-blue-300 
    // to-blue-500  p-8 rounded-lg shadow-lg text-white"
    >
      {/* <WatchProductCard /> */}
      {/* <CustomBirthdayCakeCard /> */}
      {/* <TableLampProductCard /> */}
      {/* <SummerHatProductCard /> */}
      {/* <LuxuryWaterfallTapsCard /> */}
      {/* <SummerPoloProductCard /> */}
      {/* <CargoPantsProductPage /> */}
      {/* <LuxuryShowerTapProductPage /> 
            <Toaster />*/}
      {/* <EcommerceStore /> */}
      {/* <EcommerceStoreTwo /> */}
      <ClothingStore />

    </div>
  )
}

