"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"

interface ImageWithSkeletonProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export default function ImageWithSkeleton({ src, alt, width, height }: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true) 
  }, [src])

  return (
    <div
      className="relative"
      style={{
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "100%",
      }}
    >
      {isLoading && (
        <Skeleton
          className="absolute inset-0 rounded-lg animate-pulse"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      )}
      <Image
        src={src || "/placeholder.png"}
        alt={alt}
        {...(width && height ? { width, height } : { fill: true })}
        className={`rounded-lg shadow-md ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)} // Handle image loading errors
      />
    </div>
  )
}