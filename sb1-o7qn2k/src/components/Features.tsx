import React from 'react';
import { Clock, Shield, Truck, HeartPulse } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '10-Minute Delivery',
    description: 'Get your medicines delivered at your doorstep within 10 minutes'
  },
  {
    icon: Shield,
    title: '100% Genuine Medicines',
    description: 'All medicines are sourced from licensed pharmacies'
  },
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'No delivery charges on orders above ₹149'
  },
  {
    icon: HeartPulse,
    title: '24/7 Support',
    description: 'Round the clock customer support for all your needs'
  }
];

export default function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Why Choose QuickMed?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}