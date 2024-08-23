'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Basic form validation
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill out all required fields.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    // Here you would typically send the form data to your server
    // For this example, we'll simulate an API call with a timeout
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon!",
      })
      // Clear the form after successful submission
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have questions or want to schedule a training session? Get in touch with us!
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="min-h-[100px]"
                />
              </div>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}