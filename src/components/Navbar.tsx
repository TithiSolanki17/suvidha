"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)} >
           
          <Menu setActive={setActive}>
           {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Join now →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button> */}
          {/* <MenuItem setActive={setActive} active={active} item="Join now →"> */}
          {/* <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" /> */}
                    {/* </MenuItem> */}
                    <Link href="#">
          <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
                    </Link>

          <Link href="/pages/about">
          <MenuItem setActive={setActive} active={active} item="About us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Mission</HoveredLink>
            <HoveredLink href="/interface-design">Vision</HoveredLink>
          </div>
          </MenuItem>
          </Link>
          <Link href="/pages/donors">
          <MenuItem setActive={setActive} active={active} item="Our Donor"></MenuItem>
          </Link>
          <Link href="/pages/gallery">
          <MenuItem setActive={setActive} active={active} item="Gallery"></MenuItem>
          </Link>
          <Link href="/pages/events">
          <MenuItem setActive={setActive} active={active} item="Events"></MenuItem>
          </Link>
          <Link href="/pages/contact">
                    <MenuItem setActive={setActive} active={active} item="Contact us"></MenuItem>
                    </Link>
        </Menu>
        </div>
  )
}

export default Navbar