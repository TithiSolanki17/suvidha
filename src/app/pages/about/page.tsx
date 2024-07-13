import ImagesSliderDemoAbout from '../../../components/image';
import React from 'react';
import Slogan from '../../../components/slogan';
import BentoGridDemo from '../../../components/bento';
import  MarqueeDemo from '../../../components/testimonials';
import T_Slogan from '../../../components/testimonial_head';
import V_Slogan from '@/components/vision';
import M_Slogan from '@/components/mission';
import { FlipWords } from '@/components/ui/flip-words';

export default function Home() {
  const words = ["Testimonials", "People"];

    return(
      <main className="flex min-h-screen flex-col items-center justify-between bg-white">
        <div className='h-full w-full pt-11'>
      <ImagesSliderDemoAbout/>
        </div>
      <Slogan/>
      <BentoGridDemo/>
      <div id='vision'>
        <V_Slogan/>
      </div>
      <div id='mission'>
        <M_Slogan/>
      </div>
      <div className='bg-black text-white'>
        {/* <T_Slogan/> */}
        <div className="h-[10rem] flex justify-center items-center px-4">
          <div className="text-4xl mx-auto font-normal text-neutral-300 dark:text-white">
            Our
              <FlipWords words={words} /> <br />
      </div>
    </div>
        < MarqueeDemo/>
      </div>
      </main>
    );
  }
  
