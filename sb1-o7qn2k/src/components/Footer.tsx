import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">QuickMed</h3>
            <p className="text-sm">Your trusted partner for quick medicine delivery. Order medicines online and get them delivered within 10 minutes.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Services</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Medicines</a></li>
              <li><a href="#" className="hover:text-white">Healthcare</a></li>
              <li><a href="#" className="hover:text-white">Personal Care</a></li>
              <li><a href="#" className="hover:text-white">Baby Care</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>support@quickmed.com</li>
              <li>+91 1800-123-4567</li>
              <li>Download App:</li>
              <li className="flex space-x-4 mt-2">
                <a href="#" className="hover:text-white">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-8" />
                </a>
                <a href="#" className="hover:text-white">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; 2024 QuickMed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}