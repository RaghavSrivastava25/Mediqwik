import React from 'react';
import { Clock, Truck, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Medicines Delivered in
              <span className="text-emerald-600"> 10 Minutes</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Your trusted partner for quick medicine delivery. Order from verified pharmacies near you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                Order Now
              </button>
              <button className="px-6 py-3 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors">
                Upload Prescription
              </button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-emerald-600" />
                <span className="text-sm text-gray-600">10 Min Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-emerald-600" />
                <span className="text-sm text-gray-600">Free Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-emerald-600" />
                <span className="text-sm text-gray-600">100% Genuine</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80"
              alt="Medicine Delivery"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}