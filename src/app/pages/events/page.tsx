import React from 'react';
import ImagesSliderDemoGallery from '@/components/imageevents';
import CardHoverEffectDemo from '@/components/card';
 // 
export default function Home() {
    return (
      <main >
        <ImagesSliderDemoGallery/>
       <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-white" style={{ color: 'black' }}>
       < CardHoverEffectDemo />
        </div>
      </main>
    );
  }
  
  