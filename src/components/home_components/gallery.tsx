"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/home_ui/layout-grid";
import tree from '../../images_pndformat/Tree-Plantation.jpg';
import fund from '../../images_pndformat/Fundraising.jpg';
import women from '../../images_pndformat/Womens-Day.jpg';
import cloth from '../../images_pndformat/Cloths-Distribution.jpg';

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-14 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Tree Plantation</p>
      {/* Example of escaped single quotes */}
      {/* <p className="font-normal text-base text-white">Join us in planting the seeds of a greener tomorrow. Together, we can nurture our planet, one tree at a time, and breathe life into the world. Let&apos;s create a vibrant, sustainable future for generations to come.</p> */}
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Fundraising</p>
      {/* Example of using HTML entity */}
      {/* <p className="font-normal text-base text-white">Unlock the power of generosity at our Fundraising Event. Your support will spark transformative impact and uplift lives in our community. Join us in making a difference and empowering a brighter future for all.</p> */}
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Cloths Distribution</p>
      {/* Example of using different HTML entity */}
      {/* <p className="font-normal text-base text-white">Providing warmth and dignity through clothing. Join us in our mission to bring smiles and comfort to those in need through our cloth distribution event.</p> */}
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Womens Day</p>
      {/* Example of using different HTML entity */}
      {/* <p className="font-normal text-base text-white">Celebrating the strength, resilience, and achievements of women worldwide on this special Women&apos;s Day. Together, let&apos;s honor their contributions.</p> */}
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: tree,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: fund,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: cloth,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: women,
  },
];

