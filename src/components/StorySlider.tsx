import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Story } from '../data/stories';

interface StorySliderProps {
  stories: Story[];
}

export function StorySlider({ stories }: StorySliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === stories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? stories.length - 1 : prevIndex - 1
    );
  };

  const currentStory = stories[currentIndex];

  return (
    <div className="relative">
      <div className="md:flex items-center gap-12">
        <div className="md:w-1/2 mb-8 md:mb-0 relative">
          <img 
            src={currentStory.image}
            alt={currentStory.name}
            className="rounded-lg shadow-xl w-full h-[400px] object-cover object-center "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">A Story of Financial Freedom</h2>
          <p className="text-gray-600 mb-6">
            {currentStory.quote}
          </p>
          <p className="text-lg font-semibold">- {currentStory.name}</p>
          <p className="text-gray-500 mb-4">{currentStory.role}</p>
          <div className="flex items-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
            ))}
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-2 mt-6">
        {stories.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-yellow-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}