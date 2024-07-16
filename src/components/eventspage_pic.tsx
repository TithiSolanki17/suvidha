"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import tree from '../images_pndformat/Tree-Plantation.jpg';
import fund from '../images_pndformat/Fundraising.jpg';
import women from '../images_pndformat/Womens-Day.jpg';
import pads from '../images_pndformat/Sanitary-Pads.jpg';
import cloth from '../images_pndformat/Cloths-Distribution.jpg';
import animal from '../images_pndformat/Animal-Feeding.jpg';
import food from '../images_pndformat/Food-Donation.jpg'
import workshop from '../images_pndformat/Free-Workshop.jpg'

export function DirectionAwareHoverDemo() {
  const cards = [
    {
      imageUrl:tree,
      title: "Tree Plantation",
      price: "Join us in nurturing the Earth's embrace, one tree at a time. Together, let's create a greener tomorrow and breathe life into our planet.",
    },
    {
      imageUrl:fund,
      title: "Fundraising",
      price: "Unlock the power of generosity at our Fundraising Event. Your support will ignite positive change and uplift lives in our community.",
    },
    {
      imageUrl:cloth,
      title: "Cloths Distribution",
      price: "Providing warmth and dignity through clothing. Join us in our mission to bring smiles and comfort to those in need through our cloth distribution event.",
    },
    {
      imageUrl:women,
      title: "Women's Day",
      price: "Celebrating the strength, resilience, and achievements of women worldwide on this special Women's Day. Together, let's honor their contributions.",
    },
    {
      imageUrl:food,
      title: "Food Donation Initiatives by Our NGO",
      price: "Your generous contributions can fill empty plates and bring smiles to those in need. Together, we can create a world where everyone has access to nutritious meals.",
    },
    {
      imageUrl:animal,
      title: "Ensuring Happy and Healthy Animals through Feeding Programs",
      price: "Join us in providing sustenance and compassion to our furry companions. Together, let's make a positive impact on their lives through our Animal Feeding event.",
    },
    {
      imageUrl:pads,
      title: "Sanitary Pads Distribution",
      price: "Breaking barriers and promoting menstrual health with our Sanitary Pad Initiative. Together, let's empower women and ensure access to safe and dignified hygiene.",
    },
    {
      imageUrl:workshop,
      title: "Free Workshops",
      price: "Discover new skills, ignite your passions, and embrace lifelong learning with our engaging and enriching free workshops.",
    }
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
