// components/HomeGallery.tsx
'use client';
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Image, { StaticImageData } from 'next/image';
import { ButtonsCard } from '../ui/home_ui/tailwindcss-buttons';
import { ShowButtonevents } from './buttons';
import t1 from '../../images_pndformat/test1.jpg';
import t2 from '../../images_pndformat/test2.jpg';
import t3 from '../../images_pndformat/test3.jpg';
import t4 from '../../images_pndformat/test4.jpg';
import t5 from '../../images_pndformat/test5.jpg';
import t6 from '../../images_pndformat/test6.jpg';

const images: StaticImageData[] = [
    t1,
    t2,
    t3,
    t4,
    t5,
    t6
];

interface ImageCardProps {
  src: StaticImageData;
}

const ImageCard: React.FC<ImageCardProps> = ({ src }) => {
  const [props, set] = useSpring(() => ({
    transform: 'rotate(0deg)',
    config: { mass: 1, tension: 170, friction: 26 }
  }));

  const handleMouseMove = () => {
    set({ transform: 'rotate(5deg)' });
  };

  const handleMouseLeave = () => {
    set({ transform: 'rotate(0deg)' });
  };

  return (
    <animated.div
      style={props}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-64 h-80 m-2 overflow-hidden rounded-xl shadow-lg cursor-pointer"
    >
      <Image src={src} layout="fill" objectFit="cover" alt="Gallery Image" />
    </animated.div>
  );
};

const HomeGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='p-7 pt-24'>
      <b className='flex justify-start w-auto bg-slate-700 text-yellow-300 text-4xl pt-5 px-4 md:pt-14 md:px-20 pb-5 rounded-md'>Testimonials</b>
      <div className="relative hidden w-auto md:flex mx-4 justify-center items-center md:px-60 rounded-md bg-slate-200 text-white p-7">
        <button
          onClick={handlePrev}
          className="absolute left-4 bg-slate-900 text-white p-2 rounded-full shadow-lg z-10"
          aria-label="Previous"
        >
          Prev
        </button>
        <ImageCard src={images[currentIndex]} />
        <ImageCard src={images[(currentIndex + 1) % images.length]} />
        <ImageCard src={images[(currentIndex + 2) % images.length]} />
        <button
          onClick={handleNext}
          className="absolute right-4 bg-slate-900 text-white p-2 rounded-full shadow-lg z-10"
          aria-label="Next"
        >
          Next
        </button>
      </div>

      <div className="md:hidden relative w-auto justify-center grid items-center bg-slate-200 p-10 rounded-md text-white">
        <button
          onClick={handlePrev}
          className="absolute left-4 bg-slate-900 text-white p-2 rounded-full shadow-lg z-10"
          aria-label="Previous"
        >
          Prev
        </button>
        <ImageCard src={images[currentIndex]} />
        <button
          onClick={handleNext}
          className="absolute right-4 bg-slate-900 text-white p-2 rounded-full shadow-lg z-10"
          aria-label="Next"
        >
          Next
        </button>
      </div>
      
    </div>
  );
};

export default HomeGallery;
