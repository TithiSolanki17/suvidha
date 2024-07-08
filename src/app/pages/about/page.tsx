import ImagesSliderDemo from '../../../components/image';
import React from 'react';
import Slogan from '../../../components/slogan';
import BentoGridDemo from '../../../components/bento';
import  MarqueeDemo from '../../../components/testimonials';
// 
export default function Home() {
    return(
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <ImagesSliderDemo/>
      <Slogan/>
      <BentoGridDemo/>
      < MarqueeDemo/>
      </main>
    );
  }
  
  