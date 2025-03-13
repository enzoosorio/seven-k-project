import {
    Facebook, 
    Twitter, 
    Linkedin,
  } from 'lucide-react';
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Seven K</h3>
          <p className="text-gray-400">
            Leading the way in precious metal investments since 2010.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>1-800-GOLD-NOW</li>
            <li>contact@sevenk.com</li>
            <li>123 Investment St.</li>
            <li>New York, NY 10001</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Seven K. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}
