"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./sticky-scroll-reveal";
import tree from '../../images_pndformat/Tree-Plantation.jpg';
import fundraising from '../../images_pndformat/Fundraising.jpg';
import cloth from '../../images_pndformat/Cloths-Distribution.jpg';
import women from '../../images_pndformat/Womens-Day.jpg';
import food from '../../images_pndformat/Food-Donation.jpg';
import workshop from '../../images_pndformat/Free-Workshop.jpg';
import animal from '../../images_pndformat/Animal-Feeding.jpg';
import Slogan from "../slogan";
import Footer from "../CustomFooter";

const content = [
  {
    title: "Tree Plantation",
    description:
      "Join us in nurturing the Earth's embrace, one tree at a time. Together, let's create a greener tomorrow and breathe life into our planet.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={tree}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Fundraising Events",
    description:
      "Unlock the power of generosity at our Fundraising Event. Your support will ignite positive change and uplift lives in our community.",
    content: (
      <div className="h-full w-full  flex items-start justify-center text-white">
        <Image
          src={fundraising}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  }, 
  {
    title: "Cloths Distribution",
    description:
      "Providing warmth and dignity through clothing. Join us in our mission to bring smiles and comfort to those in need through our cloth distribution event.",
    content: (
      <div className="h-full w-full  flex items-start justify-center text-white">
        <Image
          src={cloth}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Women's Day",
    description:
      "Celebrating the strength, resilience, and achievements of women worldwide on this special Women's Day. Together, let's honor their contributions.",
    content: (
      <div className="h-full w-full  flex items-start justify-center text-white">
        <Image
          src={women}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  }
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
