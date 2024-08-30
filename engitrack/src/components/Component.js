import { Star } from "lucide-react"

export default function Component() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-2">Happy Students</h1>
      <p className="text-center text-gray-600 mb-8">
        Read what our students have to say about our services.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <TestimonialCard
          name="Harshit Pandey"
          location="Mumbai"
          testimonial="I am grateful to Engitrack for guiding me through the internship process. Excellent service!"
          imageSrc="https://images.unsplash.com/photo-1667655861998-46fe4c29a4cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <TestimonialCard
          name="Rohit Kumar"
          location="Delhi"
          testimonial="Engitrack helped me secure a great internship opportunity. Highly recommend!"
          imageSrc="https://images.unsplash.com/photo-1604177091072-b7b677a077f6?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  )
}

function TestimonialCard({ name, location, testimonial, imageSrc }) {
  return (
    <div className="bg-[#fdf6f0] p-6 rounded-lg">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
        ))}
      </div>
      <p className="text-gray-700 mb-4">{testimonial}</p>
      <div className="flex items-center">
        <img
          src={imageSrc}
          alt={name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-gray-600">{location}</p>
        </div>
      </div>
    </div>
  )
}