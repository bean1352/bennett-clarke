"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"

interface ImageWithSkeletonProps {
  src: string
  alt: string
  aspectRatio?: number
}

export default function ImageWithSkeleton({ 
  src, 
  alt, 
  aspectRatio = 1 
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true) 
  }, [src])

  return (
    <div 
      className="relative w-full"
      style={{ paddingBottom: `${aspectRatio * 100}%` }}
    >
      {isLoading && (
        <Skeleton 
          className="absolute inset-0 rounded-lg animate-pulse" 
        />
      )}
      <Image
        src={src || "/placeholder.png"}
        alt={alt}
        fill
        className={`absolute inset-0 rounded-lg shadow-md object-cover ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
    </div>
  )
}