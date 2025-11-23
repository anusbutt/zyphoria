"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SpecialOffer } from "@/lib/offers";
import { cn } from "@/lib/utils";

interface SpecialOfferCardProps {
  offer: SpecialOffer;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: string): TimeLeft => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default function SpecialOfferCard({ offer }: SpecialOfferCardProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(offer.validUntil));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(offer.validUntil));
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: React.ReactElement[] = [];

  (Object.keys(timeLeft) as Array<keyof TimeLeft>).forEach((interval, index) => {
    const value = timeLeft[interval];
    if (value > 0 || index === 0) { // Always show days, even if 0, for clarity
      timerComponents.push(
        <span key={interval} className="text-sm font-semibold text-white bg-primary px-2 py-1 rounded-md">
          {value} {interval}{" "}
        </span>
      );
    }
  });

  const isOfferEnded = Object.values(timeLeft).every((val) => val === 0);

  return (
    <div className="bg-card rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative h-64 w-full">
        <Image
          src={offer.image}
          alt={offer.title}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 group-hover:opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-3xl font-bold text-white mb-2 leading-tight">{offer.title}</h3>
          <p className="text-lg text-gray-200 mb-4">{offer.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-5xl font-extrabold text-white leading-none">
              {offer.discountPercentage}%
            </span>
            <span className="text-xl font-semibold text-white ml-2">OFF</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        {isOfferEnded ? (
          <p className="text-red-500 font-bold text-center text-lg">Offer Ended!</p>
        ) : (
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {timerComponents.length ? timerComponents : <span className="text-gray-500">Offer Ending Soon!</span>}
          </div>
        )}
        <Link href={`/shop/${offer.slug}`} passHref legacyBehavior={false}>
          <button className={cn(
            "mt-6 w-full py-3 text-lg font-semibold rounded-full transition-colors duration-300",
            isOfferEnded ? "bg-gray-500 cursor-not-allowed" : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
          disabled={isOfferEnded}>
            {isOfferEnded ? "View Details" : "Shop Now"}
          </button>
        </Link>
      </div>
    </div>
  );
}
