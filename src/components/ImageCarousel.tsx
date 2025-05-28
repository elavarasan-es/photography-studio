import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SlideContent {
  image?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonAction?: () => void;
}

interface ImageCarouselProps {
  slides: SlideContent[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className="w-full h-[120vh] custom-swiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {index === activeIndex ? (
              <motion.div
              onClick={slide.buttonAction}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="absolute inset-0 flex cursor-pointer flex-col justify-start items-start p-8 text-white space-y-4"
              >
                <h2 className="md:text-3xl text-2xl font-bold font-pacifico">{slide.title}</h2>
                {slide.subtitle && <p className="md:text-lg text-sm">{slide.subtitle}</p>}
                {slide.buttonText && (
                  <button
                    onClick={slide.buttonAction}
                    className="mt-2 md:px-6 md:py-2 px-4 py-1 hover:text-black bg-transparent border-2 border-yellow-600 hover:border-none text-white font-semibold rounded hover:bg-gray-200 transition"
                  >
                    {slide.buttonText}
                  </button>
                )}
              </motion.div>
            ) : (
              <div className="absolute inset-0 p-8 text-white opacity-0" />
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
