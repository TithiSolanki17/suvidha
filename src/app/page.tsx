import React from "react";
import NumberTickerDemo from "@/components/ui/home_ui/numberticker";
import { StickyScrollRevealDemo } from "@/components/home_components/about";
import ImagesSliderDemoAbout from "@/components/imagehome";
import HomeGallery from "@/components/home_components/homegallery";
import {LayoutGridDemo} from "@/components/home_components/gallery";
import { ShowButtonevents } from "@/components/home_components/buttons";
import { ShowButtonGallery } from "@/components/home_components/buttonsgallery";
import { TextGenerateEffect } from "@/components/ui/home_ui/text-generator-effect";
import '../app/globals.css';

export default function Home() {
  const words = 'Suvidha Mahila Mandal is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship and the scope to volunteer. Through these programmes, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equip them for the unforeseen future.';

  return (
    <main >
      <div className="top-1">
     <ImagesSliderDemoAbout />
      </div>
   <div className="m-2">
    <b className="m-6 mt-20 flex justify-center text-5xl text-slate-700">What you should know about us?</b>
    <TextGenerateEffect words={words}/>
    <div className="bg-slate-800 bg-opacity-55 mt-20 text-center text-4xl md:text-6xl text-white py-10 md:py-20 my-7 flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
  <b className="pl-0 md:pl-9">Statistics <NumberTickerDemo value={90}/>+</b>
  <b className="pl-0 md:pl-9">Statistics <NumberTickerDemo value={89}/>+</b>
  <b className="pl-0 md:pl-9">Statistics <NumberTickerDemo value={82}/>+</b>
</div>

    <LayoutGridDemo/>
    <ShowButtonGallery/>
     <div>
     <StickyScrollRevealDemo/>
     <ShowButtonevents/>
     <HomeGallery/>
     </div>
   </div>

    </main>
  );
}

