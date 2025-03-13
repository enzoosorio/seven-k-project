import { 
    ChevronRight,
  } from 'lucide-react';
  
export const Hero = () => {
  return (
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
  )
}
