import React from 'react';
import { MapPin } from 'lucide-react';
import { useLocation } from '../context/LocationContext';

export default function LocationPrompt() {
  const { location, loading, error, requestLocation } = useLocation();

  if (loading) {
    return (
      <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
        <p className="text-gray-600">Accessing location...</p>
      </div>
    );
  }

  if (error && !location) {
    return (
      <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
        <p className="text-red-600 mb-2">Unable to access location</p>
        <button
          onClick={requestLocation}
          className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
        >
          <MapPin className="h-4 w-4" />
          <span>Allow Location Access</span>
        </button>
      </div>
    );
  }

  return null;
}