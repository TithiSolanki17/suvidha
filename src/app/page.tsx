import React from "react";
import NumberTickerDemo from "@/components/ui/home_ui/numberticker";
import { StickyScrollRevealDemo } from "@/components/home_components/about";
import {ShowButtonevents} from "@/components/home_components/buttons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white" style={{ color: 'black' }}>
     <NumberTickerDemo value={90}/>
     <StickyScrollRevealDemo/>
     <ShowButtonevents/>
    </main>
  );
}

