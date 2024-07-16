"use client";
import React from "react";

export function ShowButtonGallery() {
  const openLink = () => {
    window.location.href = "./pages/gallery";
  };

  return (
    <div className="flex items-end justify-end pb-10 px-14 w-full">
      <button
        className="px-8 py-1 rounded-md bg-yellow-300 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-yellow-300"
        onClick={openLink}
      >
        Show More
      </button>
    </div>
  );
}
