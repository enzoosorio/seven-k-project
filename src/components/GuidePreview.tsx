import { 
    ChevronRight, 
    Check
  } from 'lucide-react';

export const GuidePreview = () => {
  return (
    <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80"
                  alt="The Seven K Guide to Gold & Silver Investing"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-bold">
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
  )
}
