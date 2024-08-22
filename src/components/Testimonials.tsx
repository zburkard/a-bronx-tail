export function Testimonials() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">What Our Clients Say</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="A Bronx Tail transformed my unruly pup into a well-behaved companion. Highly recommended!"
              author="Sarah M."
            />
            <TestimonialCard
              quote="The trainers are patient, knowledgeable, and truly care about the dogs. Great experience!"
              author="Mike R."
            />
            <TestimonialCard
              quote="Our puppy learned so much in just a few sessions. We're amazed at the progress!"
              author="Emily L."
            />
          </div>
        </div>
      </section>
    )
  }
  
  function TestimonialCard({ quote, author }: { quote: string; author: string }) {
    return (
      <div className="flex flex-col items-center space-y-2 border-gray-200 dark:border-gray-700 p-4 rounded-lg">
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">"{quote}"</p>
        <p className="text-sm font-bold">- {author}</p>
      </div>
    )
  }