import ImagesSliderDemo from '../../../components/image';
import React from 'react';
import Slogan from '../../../components/slogan';
import BentoGridDemo from '../../../components/bento';
import  MarqueeDemo from '../../../components/testimonials';
import T_Slogan from '../../../components/testimonial_head';
// 
export default function Home() {
    return(
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        <div className='container my-10 md:my-14'>
          <ImagesSliderDemo/>
        </div>
      <Slogan/>
      <BentoGridDemo/>
      <T_Slogan/>
      <div id='testimonials'>
        < MarqueeDemo/>
      </div>
      </main>
    );
  }
  
