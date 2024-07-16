'use client';
import { FadeText } from "../components/ui/FadeText";

export async function FadeTextDemo() {
  return (
    <div className="flex flex-col space-y-8 text-center">
      <FadeText
        className="text-wrap text-black dark:text-white"
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.8 } },
        }}
        text="Your generosity fuels our mission to make a lasting impact. As a donor, you play a crucial role in helping us bring positive change to the communities we serve. Every contribution, no matter the size, helps us provide essential resources, support innovative programs, and create opportunities for those in need. Join us in our journey to make a difference and be a part of something bigger. Together, we can achieve extraordinary things. Thank you for your support!"
      />
    </div>
  );
}