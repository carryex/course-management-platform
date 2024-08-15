'use client';
import React, { useState } from 'react';

interface Slide {
  id: number;
  title: string;
  text: string[];
  backgroundImage: string;
}

interface CarouselProps {
  slides: Slide[];
}
const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out transform ${
            index === activeSlide ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="bg-opacity-50 bg-white h-full flex flex-col justify-center lg:pl-14">
            <div className="mb-4 max-w-80">
              <h2 className="text-5xl font-bold mb-4 text-gray-900 bg-gray-300 inline">
                {slide.title}
              </h2>
            </div>

            {slide.text.map((paragraph, i) => (
              <p
                key={i}
                className="mb-2 text-lg text-gray-300 bg-gray-900 inline"
              >
                &nbsp;+&nbsp;{paragraph}
              </p>
            ))}
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeSlide ? 'bg-black' : 'bg-gray-300'
            }`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
