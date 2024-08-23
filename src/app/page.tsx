'use client'

import { useRef } from 'react'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Gallery } from '@/components/Gallery'
import { Testimonials } from '@/components/Testimonials'
import { ContactUs } from '@/components/ContactUs'
import { Footer } from '@/components/Footer'

export default function LandingPage() {
  const servicesRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header onServicesClick={scrollToServices} onContactClick={scrollToContact} />
      <main className="flex-1">
        <Hero onBookSessionClick={scrollToContact} />
        <Services ref={servicesRef} />
        <Gallery />
        <Testimonials />
        <ContactUs ref={contactRef} />
      </main>
      <Footer />
    </div>
  )
}