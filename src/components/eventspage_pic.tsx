"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
  const cards = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "In the mountains",
      price: "$1299 / night",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1542293787938-c9e299b88079?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "By the beach",
      price: "$899 / night",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1519781542704-957ff19eff00?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Urban retreat",
      price: "$1099 / night",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Countryside escape",
      price: "$799 / night",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Desert adventure",
      price: "$999 / night",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "City lights",
      price: "$1199 / night",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Forest cabin",
      price: "$899 / night",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Snowy escape",
      price: "$1399 / night",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1552083974-2925ce5b52e1?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Lake house",
      price: "$1299 / night",
    },
  ];

  return (
    <div className="h-auto relative flex items-center justify-center p-4">
      <div className="grid grid-cols-3 grid-rows-3 gap-6">
        {cards.map((card, index) => (
          <DirectionAwareHover key={index} imageUrl={card.imageUrl}>
            <p className="font-bold text-xl">{card.title}</p>
            <p className="font-normal text-sm">{card.price}</p>
          </DirectionAwareHover>
        ))}
      </div>
    </div>
  );
}
