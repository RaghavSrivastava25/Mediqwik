import React from 'react';
import { MapPin, Search, User, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-2xl font-bold text-emerald-600">QuickMed</div>
            <div className="hidden md:flex items-center ml-8 space-x-2">
              <MapPin className="h-5 w-5 text-emerald-600" />
              <span className="text-gray-700">Select Location</span>
            </div>
          </div>

          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Search for medicines, health products and more..."
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600">
              <User className="h-5 w-5" />
              <span className="hidden md:inline">Sign in</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden md:inline">Cart</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}