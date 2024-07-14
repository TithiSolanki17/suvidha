import React from "react";
import NumberTickerDemo from "@/components/ui/home_ui/numberticker";
import { StickyScrollRevealDemo } from "@/components/home_components/about";
import {ShowButtonevents} from "@/components/home_components/buttons";
import ImagesSliderDemoAbout from "@/components/imagehome";

export default function Home() {
  return (
    <main >
      <div className="top-1">
     <ImagesSliderDemoAbout />
      </div>
   <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-white" style={{ color: 'black' }}>
     <NumberTickerDemo value={90}/>
     <StickyScrollRevealDemo/>
<<<<<<< HEAD
=======
     <ShowButtonevents/>
   </div>
>>>>>>> f11559eba18c728d1a7dc63274c25e4a629bc3a8
    </main>
  );
}

