import React, { useState } from 'react';
import { TrendingUp, Shield, Download, ChevronRight, Star, Check, Facebook, Twitter, Linkedin } from 'lucide-react';
import { StorySlider } from './components/StorySlider';
import { stories } from './data/stories';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted with email:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Hook */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80"
            alt="Gold and silver coins"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Seven K: Your Trusted Partner in Precious Metal Investments
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Join thousands of smart investors who've discovered the power of gold & silver
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg flex items-center"
              >
                Get Free Guide <ChevronRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wealth Protection</h3>
              <p className="text-gray-600">Shield your assets from market volatility and inflation</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Growth</h3>
              <p className="text-gray-600">Historical performance that stands the test of time</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Professional support every step of the way</p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StorySlider stories={stories} />
        </div>
      </div>

      {/* Guide Preview Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <img 
                  src="/investment-boo.jpeg"
                  alt="The Seven K Guide to Gold & Silver Investing"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-4 right-10 bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-bold">
                  FREE
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">What You'll Learn in the Guide</h2>
              <ul className="space-y-4">
                {[
                  'The fundamentals of precious metal investing and why it matters',
                  'How to start building your gold and silver portfolio, even with limited funds',
                  'Advanced strategies for maximizing your precious metal investments',
                  'Risk management techniques and portfolio diversification strategies',
                  'Expert insights on market timing and buying opportunities'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Download Your FREE Copy of the Guide Now!
                </h3>
                <button 
                  onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg flex items-center"
                >
                  Get the Guide <ChevronRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offer Section */}
      <div id="offer" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">Download Our Free Guide</h2>
              <p className="text-gray-300 mb-6">
                "The Seven K Guide to Gold & Silver Investing" reveals:
              </p>
              <ul className="space-y-4">
                {[
                  'Why precious metals are essential for your portfolio',
                  'How to get started with your first investment',
                  'Expert strategies for maximizing returns',
                  'Common pitfalls to avoid'
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="w-5 h-5 text-yellow-500 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 bg-white rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Your Free Guide Now</h3>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 text-gray-900"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Free Guide
                </button>
                <p className="text-xs text-gray-600 text-center mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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
    </div>
  );
}

export default App;