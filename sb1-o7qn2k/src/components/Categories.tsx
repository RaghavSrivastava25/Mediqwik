import React from 'react';
import { Pill, Thermometer, Heart, Baby, Flower, Dumbbell } from 'lucide-react';

const categories = [
  { icon: Pill, name: 'Medicines', color: 'bg-blue-100 text-blue-600' },
  { icon: Thermometer, name: 'Healthcare', color: 'bg-red-100 text-red-600' },
  { icon: Heart, name: 'Wellness', color: 'bg-pink-100 text-pink-600' },
  { icon: Baby, name: 'Baby Care', color: 'bg-purple-100 text-purple-600' },
  { icon: Flower, name: 'Personal Care', color: 'bg-yellow-100 text-yellow-600' },
  { icon: Dumbbell, name: 'Fitness', color: 'bg-green-100 text-green-600' },
];

export default function Categories() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex flex-col items-center p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className={`p-4 rounded-full ${category.color}`}>
                <category.icon className="h-6 w-6" />
              </div>
              <span className="mt-3 text-sm font-medium text-gray-900">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}