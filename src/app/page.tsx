<<<<<<< HEAD
import { StickyScrollRevealDemo } from "@/components/home_components/about";
import NumberTickerDemo from "@/components/ui/home_ui/numberticker";

=======
import React from "react";
import NumberTickerDemo from "@/components/ui/home_ui/numberticker";


>>>>>>> be01a16352bce260520ed1ce2d5c83c8c6c05c79
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white" style={{ color: 'black' }}>
     <NumberTickerDemo value={90}/>
     <StickyScrollRevealDemo/>
    </main>
  );
}

