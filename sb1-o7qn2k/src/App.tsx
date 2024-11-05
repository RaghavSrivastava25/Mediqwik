import React from 'react';
import { Toaster } from 'react-hot-toast';
import { LocationProvider } from './context/LocationContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import PopularMeds from './components/PopularMeds';
import Features from './components/Features';
import Footer from './components/Footer';
import LocationPrompt from './components/LocationPrompt';

function App() {
  return (
    <LocationProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Hero />
        <Categories />
        <PopularMeds />
        <Features />
        <Footer />
        <LocationPrompt />
        <Toaster position="bottom-right" />
      </div>
    </LocationProvider>
  );
}

export default App;