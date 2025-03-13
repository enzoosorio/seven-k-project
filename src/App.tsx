import { StorySlider } from './components/StorySlider';
import { stories } from './data/stories';
import { Footer } from './components/Footer';
import { Offer } from './components/Offer';
import { GuidePreview } from './components/GuidePreview';
import { BentoGrid } from './components/BentoGrid';
import { BenefitsSection } from './components/BenefitsSection';
import { Hero } from './components/Hero';

function App() {

  return (
    <div className="min-h-screen bg-white">
      <Hero/>
      <BenefitsSection/>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StorySlider stories={stories} />
        </div>
      </div>
      <BentoGrid/>
      <GuidePreview/>
      <Offer/>
      <Footer/>
    </div>
  );
}

export default App;