import { PawPrint } from 'lucide-react'
import { forwardRef } from 'react'

export const Services = forwardRef<HTMLElement>(function Services(props, ref) {
  return (
    <section ref={ref} className="w-full py-6 md:py-12 lg:py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Services</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Basic Obedience"
            description="Teach your dog essential commands and improve their behavior."
          />
          <ServiceCard
            title="Behavior Modification"
            description="Address specific behavioral issues and create a harmonious home."
          />
          <ServiceCard
            title="Puppy Training"
            description="Start your puppy off on the right paw with early socialization and training."
          />
        </div>
      </div>
    </section>
  )
})

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
      <PawPrint className="h-8 w-8 mb-2" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{description}</p>
    </div>
  )
}