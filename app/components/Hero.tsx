"use client";

import AnimatedImage from "./AnimatedImage";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const banners = [
  {
    id: 1,
    image: "/images/zero_hour_banner.png",
    title: "ZERO HOUR",
    description: "AN INTENSE AND MYSTERIOUS FRAGRANCE",
    slug: "zero-hour",
  },
  {
    id: 2,
    image: "/images/gentile_banner.png",
    title: "GENTILE",
    description: "A GENTLE AND SOOTHING FRAGRANCE",
    slug: "gentile",
  },
  {
    id: 3,
    image: "/images/cendre_banner.png",
    title: "CENDRE",
    description: "AN ENCHANTING SCENT WITH WOODY UNDERTONES",
    slug: "cendre",
  }
];

export default function Hero() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const currentBanner = banners[currentBannerIndex];

  const goToNextBanner = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const goToPreviousBanner = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden bg-background">
      <AnimatedImage
        src={currentBanner.image}
        alt={currentBanner.title}
        fill={true}
        quality={100}
        className="brightness-75 object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">{currentBanner.title}</h1>
          <p className="text-xl text-gray-200 mt-2">{currentBanner.description}</p>
          <Link href={`/shop/${currentBanner.slug}`}>
            {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
            }
            <button className="mt-6 px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <button
        onClick={goToPreviousBanner}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-300"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={goToNextBanner}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-300"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
    </div>
  );
}