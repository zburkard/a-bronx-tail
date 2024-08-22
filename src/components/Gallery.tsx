import Image from 'next/image'
// import { Button } from "@/components/ui/button"
// import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"

export function Gallery() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="relative group overflow-hidden rounded-lg">
          <Image
            src="/dog1.jpg"
            alt="Photo 1"
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-medium">Beautiful Landscape</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Image
            src="/dog2.jpg"
            alt="Photo 2"
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-medium">Vibrant Cityscape</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Image
            src="/dog3.jpg"
            alt="Photo 3"
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-medium">Serene Nature</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Image
            src="/dog4.jpg"
            alt="Photo 4"
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-medium">Architectural Wonder</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Image
            src="/dog5.jpg"
            alt="Photo 5"
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-medium">Captivating Portrait</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Image
            src="/dog6.jpg"
            alt="Photo 6"
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-medium">Stunning Sunset</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Image
            src="/dog7.jpg"
            alt="Photo 7"
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-medium">Minimalist Design</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Image
            src="/dog8.jpg"
            alt="Photo 8"
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-medium">Artistic Expression</p>
          </div>
        </div>
      </div>
    </div>
  )
}