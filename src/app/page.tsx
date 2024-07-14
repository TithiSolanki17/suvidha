import React from "react";
import NumberTickerDemo from "@/components/ui/home_ui/numberticker";
import { StickyScrollRevealDemo } from "@/components/home_components/about";
import {ShowButtonevents} from "@/components/home_components/buttonsgallery";
import ImagesSliderDemoAbout from "@/components/imagehome";
import {LayoutGridDemo} from "@/components/home_components/gallery";

export default function Home() {
  return (
    <main >
      <div className="top-1">
     <ImagesSliderDemoAbout />
      </div>
   <div >
     <NumberTickerDemo value={90}/>
    <div>
    <LayoutGridDemo/>
    <ShowButtonevents/>
    </div>
     <div>
     <StickyScrollRevealDemo/>
     <ShowButtonevents/>
     </div>
   </div>

    </main>
  );
}

