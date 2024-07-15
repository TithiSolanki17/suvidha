import React from 'react';
import ImagesSliderDemoGallery from '@/components/imageevents';
import CardHoverEffectDemo from '@/components/card';
import{ DirectionAwareHoverDemo} from '@/components/eventspage_pic';
import { FadeTextDemo } from '@/components/textevent';
 // 
export default function Home() {
    return (
      <main >
        <ImagesSliderDemoGallery/>
        <div className='pt-11 px-4'><FadeTextDemo/></div>
       <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-white" style={{ color: 'black' }}>
       {/* < CardHoverEffectDemo /> */}
       <DirectionAwareHoverDemo/>
        </div>
      </main>
    );
  }
  
  