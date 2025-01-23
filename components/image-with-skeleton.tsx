"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"

interface ImageWithSkeletonProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function ImageWithSkeleton({ src, alt, width, height, className }: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
  }, [src])

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {isLoading && <Skeleton className="absolute inset-0 w-full h-full rounded-lg" />}
      <Image
        src={src || "/placeholder.png"}
        alt={alt}
        width={width}
        height={height}
        className={`rounded-lg shadow-md ${isLoading ? "invisible" : "visible"}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}

