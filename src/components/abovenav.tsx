"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import instagramImage from './instagram_logo.png';
const people = [
  {
    id: 1,
    name: "Instagram",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Facebook",
    image:
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "LinkedIn",
    image:
      "https://images.unsplash.com/photo-1683201681334-f25eb7658958?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Mail",
    image:
      "https://images.unsplash.com/photo-1683117927786-f146451082fb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Phone",
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function AnimatedTooltipPreview() {
  return (
    <div className="absolute right-0 top-12 flex items-start justify-end mr-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

export default AnimatedTooltipPreview;
