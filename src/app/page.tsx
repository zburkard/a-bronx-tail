'use client'

import { useRef } from 'react'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Testimonials } from '@/components/Testimonials'
import { Newsletter } from '@/components/Newsletter'
import { Footer } from '@/components/Footer'
import { Gallery } from '@/components/Gallery'

export default function LandingPage() {
  const servicesRef = useRef<HTMLElement>(null)

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header onServicesClick={scrollToServices} />
      <main className="flex-1">
        <Hero />
        <Gallery />
        <Services ref={servicesRef} />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}