'use client';
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';

const images: string[] = [
  "https://images.unsplash.com/photo-1720766595377-b413ce3a6478?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

interface ImageCardProps {
  src: string;
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
      className="relative w-64 h-80 m-2 overflow-hidden rounded-xl shadow-lg"
    >
      <Image src={src} layout="fill" objectFit="cover" alt="Gallery Image" />
    </animated.div>
  );
};

const HomeGallery: React.FC = () => {
  return (
    <div className="flex justify-center items-center space-x-4 bg-yellow-300 p-10">
      {images.map((src, index) => (
        <ImageCard key={index} src={src} />
      ))}
    </div>
  );
};

export default HomeGallery;
