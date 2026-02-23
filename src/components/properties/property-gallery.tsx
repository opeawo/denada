"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { PropertyImage } from "@/types/property";

interface PropertyGalleryProps {
  images: PropertyImage[];
  title: string;
}

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  function next() {
    setCurrentIndex((i) => (i + 1) % images.length);
  }

  function prev() {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  }

  return (
    <>
      {/* Main image */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={images[currentIndex]?.src || "/placeholder.jpg"}
          alt={images[currentIndex]?.alt || title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
          priority
        />

        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-700 backdrop-blur-sm transition-colors hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-700 backdrop-blur-sm transition-colors hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Expand button */}
        <button
          onClick={() => setLightboxOpen(true)}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-gray-700 backdrop-blur-sm transition-colors hover:bg-white"
        >
          <Expand className="h-4 w-4" />
        </button>

        {/* Counter */}
        <div className="absolute bottom-3 right-3 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-3 flex gap-2 overflow-x-auto">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg ${
              i === currentIndex
                ? "ring-2 ring-deep-green-500"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="96px"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-5xl border-none bg-black p-0">
          <div className="relative aspect-[16/10]">
            <Image
              src={images[currentIndex]?.src || "/placeholder.jpg"}
              alt={images[currentIndex]?.alt || title}
              fill
              className="object-contain"
              sizes="100vw"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
