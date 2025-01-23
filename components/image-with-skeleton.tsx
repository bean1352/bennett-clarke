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
    <div>
      {isLoading && <Skeleton className="absolute inset-0 w-full h-full rounded-lg" />}
      <Image
        src={src || "/placeholder.png"}
        alt={alt}
        {...(width && height ? { width, height } : { fill: true })}
        className={`rounded-lg shadow-md ${isLoading ? "invisible" : "visible"}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}