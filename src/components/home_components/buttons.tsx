"use client";
import React from "react";

export function ShowButtonevents() {
  const openLink = () => {
    window.location.href = "./pages/events";
  };

  return (
<div className="flex items-end justify-end px-4">
  <button
    className="px-8 py-1 rounded-md bg-yellow-300 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-yellow-300 ml-auto"
    onClick={openLink}
  >
    Show More
  </button>
</div>


  );
}
