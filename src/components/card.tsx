'use client';

import { HoverEffect } from "./ui/card-hover-effect";

 function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Tree Planation",
    description:
      "Join us in nurturing the Earth's embrace, one tree at a time. Together, let's create a greener tomorrow and breathe life into our planet.",
    link: "https://drive.google.com/drive/u/0/folders/1V5Owzjc00GT_U2Mw_bdOMbiCYSxmScSw",
  },
  {
    title: "Clothes Distribution",
    description:
      "Providing warmth and dignity through clothing. Join us in our mission to bring smiles and comfort to those in need through our cloth distribution event.",
    link: "https://drive.google.com/drive/u/0/folders/1nOFKvOjhWsbfVVPGumOfpLrFe2364_zK",
  },
  {
    title: "Food Donation Initiatives by Our NGO",
    description:
      "Your generous contributions can fill empty plates and bring smiles to those in need. Together, we can create a world where everyone has access to nutritious meals.",
    link: "https://drive.google.com/drive/u/0/folders/1AfCK5kJqf9_N_JGd8wqUhNesS8k1tVmw",
  },
  {
    title: "Women's Day",
    description:
      "Celebrating the strength, resilience, and achievements of women worldwide on this special Women's Day. Together, let's honor their contributions.",
    link: "https://drive.google.com/drive/u/0/folders/1_V-acFibBsweHcM-R-P__4EQWpauB6dK",
  },
  {
    title: "Ensuring Happy and Healthy Animals through Feeding Programs",
    description:
      "Join us in providing sustenance and compassion to our furry companions. Together, let's make a positive impact on their lives through our Animal Feeding event.",
    link: "https://drive.google.com/drive/u/0/folders/1xr7jhBYaap-tZ2puU5HiF6ccitJtBfaB",
  },
  {
    title: "Sanitary Pads Distribution",
    description:
      "Breaking barriers and promoting menstrual health with our Sanitary Pad Initiative. Together, let's empower women and ensure access to safe and dignified hygiene.",
    link: "https://drive.google.com/drive/u/0/folders/1tMkME479AhVFQ5pUZag3-YPgNWhIn7Rl",
  },
];
export default CardHoverEffectDemo ;
