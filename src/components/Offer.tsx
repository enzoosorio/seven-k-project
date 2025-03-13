import {
    Download, 
    Check,
  } from 'lucide-react';
import { useState } from 'react';

export const Offer = () => {

    const [email, setEmail] = useState('');
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted with email:', email);
        setEmail('');
      };
    

  return (
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
  )
}
