'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    // Here you would typically send the email to your server or newsletter service
    // For this example, we'll simulate an API call with a timeout
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      })
      setEmail('') // Clear the input after successful submission
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem subscribing to the newsletter.",
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Join our mailing list to receive training tips and special offers.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input
                className="max-w-lg flex-1"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}