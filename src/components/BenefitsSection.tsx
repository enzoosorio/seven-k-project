import { 
    TrendingUp, 
    Shield,
    Star,
  } from 'lucide-react';
export const BenefitsSection = () => {
  return (
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
  )
}
