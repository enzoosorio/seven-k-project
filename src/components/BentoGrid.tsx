import { 
    Star, 
    Clock,
    LineChart,
    Headphones,
    GraduationCap
  } from 'lucide-react';
export const BentoGrid = () => {
  return (
    <div className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Why Choose Seven K?</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 row">
        {/* Cell 1 */}
        <div className="bg-white rounded-xl  col-span-2 md:col-span-2 shadow-lg p-8 transform transition-transform hover:scale-105">
          <div className="bg-yellow-100 p-3 rounded-full  mx-auto md:mx-0 w-16 h-16 flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 text-yellow-600" />
          </div>
          <h3 className="text-2xl font-bold mb-3">10+ Years of Expertise</h3>
          <p className="text-gray-600 text-lg text-pretty">With over a decade of experience, Seven K has helped thousands of investors secure their financial future.</p>
        </div>

        {/* Cell 2 */}
        <div className="bg-white rounded-xl row-span-1 md:row-span-2 col shadow-lg p-8 transform transition-transform hover:scale-105 flex flex-col gap-4 items-center justify-center">
          <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <LineChart className="w-8 h-8 text-yellow-600" />
          </div>
          <h3 className="text-xl md:text-4xl text-center font-bold mb-3">$500M+ in Assets Managed</h3>
          <p className="text-gray-600 text-base text-center text-pretty">Our clients trust us to manage over half a billion dollars in gold and silver investments.</p>
        </div>

        {/* Cell 3 */}
        <div className="bg-white rounded-xl row-span-1 md:row-span-2 shadow-lg p-8 transform transition-transform hover:scale-105 flex flex-col gap-4 items-center justify-center">
          <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <Headphones className="w-8 h-8 text-yellow-600" />
          </div>
          <h3 className="text-xl md:text-4xl text-center font-bold mb-3">24/7 Customer Support</h3>
          <p className="text-gray-600 text-base md:text-xl text-center text-pretty ">We're here for you anytime—our team is available 24/7 to answer your questions.</p>
        </div>

        {/* Cell 4 */}
        <div className="bg-white rounded-xl col-span-2 md:col-span-1 shadow-lg p-8 transform transition-transform hover:scale-105">
          <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 mx-auto md:mx-0 flex items-center justify-center mb-6">
            <Star className="w-8 h-8 text-yellow-600 fill-current" />
          </div>
          <h3 className="text-xl text-center md:text-left font-bold mb-3">95% Client Satisfaction</h3>
          <p className="text-gray-600 text-center md:text-left">Our clients rate us 95% for trust, transparency, and results.</p>
        </div>

        {/* Cell 5 */}
        {/* <div className="bg-white rounded-xl shadow-lg p-8 transform transition-transform hover:scale-105">
          <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <Globe2 className="w-8 h-8 text-yellow-600" />
          </div>
          <h3 className="text-xl font-bold mb-3">Global Market Access</h3>
          <p className="text-gray-600">We provide access to global gold and silver markets, ensuring the best opportunities for you.</p>
        </div> */}

        {/* Cell 6 */}
        <div className="bg-white rounded-xl col-span-2 shadow-lg p-8 transform transition-transform hover:scale-105 flex flex-col items-end justify-center">
          <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 mx-auto md:mx-0 flex items-center justify-center mb-6">
            <GraduationCap className="w-8 h-8 text-yellow-600" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-center md:text-left">Free Educational Resources</h3>
          <p className="text-gray-600 text-center md:text-right">Get access to free guides, webinars, and tools to help you make informed decisions.</p>
        </div>
      </div>
    </div>
  </div>
  )
}
