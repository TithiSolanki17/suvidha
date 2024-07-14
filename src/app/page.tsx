import React from "react";
import NumberTickerDemo from "@/components/ui/home_ui/numberticker";
import { StickyScrollRevealDemo } from "@/components/home_components/about";
import {ShowButtonevents} from "@/components/home_components/buttons";
import ImagesSliderDemoAbout from "@/components/imagehome";
import HomeGallery from "@/components/home_components/homegallery";

export default function Home() {
  return (
    <main >
      <div className="top-1">
     <ImagesSliderDemoAbout />
      </div>
   <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-white" style={{ color: 'black' }}>
     <NumberTickerDemo value={90}/>
     <StickyScrollRevealDemo/>
     <ShowButtonevents/>
     {/* <div className="flex justify-start p-7"> */}
     <HomeGallery/>
     {/* </div> */}
   </div>
    </main>
  );
}

