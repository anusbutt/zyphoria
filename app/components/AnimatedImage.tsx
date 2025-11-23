"use client";

import Image, { ImageProps } from "next/image";
import React from "react";

interface AnimatedImageProps extends ImageProps {
  containerClassName?: string;
}

export default function AnimatedImage({
  src,
  alt,
  width,
  height,
  className,
  containerClassName,
  ...props
}: AnimatedImageProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg w-full h-full ${containerClassName || ""}`}
    >
      <Image
        src={src}
        alt={alt}
        {...(props.fill ? {} : { width, height })}
        className={`transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:shadow-glow ${className || ""}`}
        {...props}
      />
    </div>
  );
}
