"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";
import { cn } from "../utils/cn";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [isClick, setIsClick] = useState(false);
    const toggleNavbar = () =>
    {
      setIsClick(!isClick);
    }
  return (
    <div>
    <div className="hidden md:block">
      <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)} >
           
           <Menu setActive={setActive}>
           <Link href="/">
           <MenuItem setActive={setActive} active={active} item="Home">
           </MenuItem>
           </Link>
           <Link href="/pages/about">
           <MenuItem setActive={setActive} active={active} item="About us">
           <div className="flex flex-col space-y-4 text-sm">
             <HoveredLink href="/pages/about#mission">Mission</HoveredLink>
             <HoveredLink href="/pages/about#vision">Vision</HoveredLink>
             <HoveredLink href="/pages/about#testimonials">Testimonials</HoveredLink>
           </div>
           </MenuItem>
           </Link>
           <Link href="/pages/donors">
           <MenuItem setActive={setActive} active={active} item="Our Donors">
           <div className="flex flex-col space-y-4 text-sm">
             <HoveredLink href="/pages/donor">"Every contribution brings us closer to our goals"</HoveredLink>
           </div>
           </MenuItem>
           </Link>
           <Link href="/pages/gallery">
           <MenuItem setActive={setActive} active={active} item="Gallery">
           <div className="flex flex-col space-y-4 text-sm">
             <HoveredLink href="/pages/gallery#photo1">Photo1</HoveredLink>
             <HoveredLink href="/pages/gallery#photo2" >Photo2</HoveredLink>
             <HoveredLink href="/pages/gallery#photo3">Photo3</HoveredLink>
             <HoveredLink href="/pages/gallery#photo4">Photo4</HoveredLink>
             <HoveredLink href="/pages/gallery#photo5">Photo5</HoveredLink>
             <HoveredLink href="/pages/gallery#photo6">Photo6</HoveredLink>
           </div>
           </MenuItem>
           </Link>
           <MenuItem setActive={setActive} active={active} item="Events">
           <div className="flex flex-col space-y-4 text-sm">
             <HoveredLink href="/pages/gallery#photo1">Event1</HoveredLink>
             <HoveredLink href="/pages/gallery#photo2">Event2</HoveredLink>
             <HoveredLink href="/pages/gallery#photo3">Event3</HoveredLink>
             <HoveredLink href="/pages/gallery#photo4">Event4</HoveredLink>
             <HoveredLink href="/pages/gallery#photo5">Event5</HoveredLink>
             <HoveredLink href="/pages/gallery#photo6">Event6</HoveredLink>
           </div>
           </MenuItem>
           <Link href="/pages/about">
           <MenuItem setActive={setActive} active={active} item="Contact US">
             <div className="flex flex-col space-y-4 text-sm">
                 <HoveredLink href="">Email</HoveredLink>
                 <HoveredLink href="">Phone</HoveredLink>
                 <HoveredLink href="">Location</HoveredLink>
             </div>
           </MenuItem>
           </Link>
 
         </Menu>
         </div>
    </div>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='md:hidden flex items-center'>
            <button className='inline-flex items-center justify-center p-2 rounded-md bg-yellow-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={toggleNavbar}>
              {isClick ? (
                <svg 
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg' 
                fill='white' 
                viewBox='0 0 24 24' 
                stroke='black'
                >
                  <path 
                  strokeLinecap='round' 
                  strokeLinejoin='round' 
                  strokeWidth={2} 
                  d='M6 18L18 6M6 6l12 12' 
                  />
                </svg>
              ) : (
                <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='black'
                >
                  <path 
                  strokeLinecap='round' 
                  strokeLinejoin='round' 
                  strokeWidth={2} 
                  d='M4 6h16M4 12h16m-7 6h7'
                  />

                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className='md:hidden sticky top-0'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-yellow-300'>
              <a href="/" className='text-neutral-600 block hover:text-black rounded-lg p-2'>Home</a>
              <a href="/pages/about" className='text-neutral-600 block hover:text-black rounded-lg p-2'>About</a>
              <a href="/pages/donors" className='text-neutral-600 block hover:text-black rounded-lg p-2'>Our Donors</a>
              <a href="/pages/gallery" className='text-neutral-600 block hover:text-black rounded-lg p-2'>Gallery</a>
              <a href="/pages/events" className='text-neutral-600 block hover:text-black rounded-lg p-2'>Events</a>
              <a href="/pages/contact" className='text-neutral-600 block hover:text-black rounded-lg p-2'>Contact US</a>
          </div>
        </div>
      )}
      </div>
  )
}

export default Navbar
