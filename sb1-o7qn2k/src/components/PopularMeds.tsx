import React from 'react';
import { Star, Plus } from 'lucide-react';

const medicines = [
  {
    name: 'Dolo 650mg',
    description: 'Paracetamol Tablets',
    price: '₹30.00',
    originalPrice: '₹35.00',
    rating: 4.8,
    reviews: 2453,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80'
  },
  {
    name: 'Crocin Advance',
    description: 'Fast Relief Tablets',
    price: '₹45.00',
    originalPrice: '₹50.00',
    rating: 4.7,
    reviews: 1829,
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80'
  },
  {
    name: 'Vitamin C',
    description: 'Immunity Booster',
    price: '₹199.00',
    originalPrice: '₹249.00',
    rating: 4.9,
    reviews: 3211,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80'
  },
  {
    name: 'B-Complex',
    description: 'Daily Supplements',
    price: '₹145.00',
    originalPrice: '₹180.00',
    rating: 4.6,
    reviews: 1567,
    image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80'
  }
];

export default function PopularMeds() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Medicines</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {medicines.map((medicine) => (
            <div key={medicine.name} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={medicine.image}
                  alt={medicine.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-medium text-emerald-600">
                  {Math.round(((parseFloat(medicine.originalPrice.slice(1)) - parseFloat(medicine.price.slice(1))) / parseFloat(medicine.originalPrice.slice(1)) * 100))}% OFF
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{medicine.name}</h3>
                <p className="text-sm text-gray-500">{medicine.description}</p>
                <div className="mt-2 flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{medicine.rating}</span>
                  <span className="mx-1 text-gray-300">•</span>
                  <span className="text-sm text-gray-600">{medicine.reviews} reviews</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">{medicine.price}</span>
                    <span className="ml-2 text-sm text-gray-500 line-through">{medicine.originalPrice}</span>
                  </div>
                  <button className="p-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700">
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}