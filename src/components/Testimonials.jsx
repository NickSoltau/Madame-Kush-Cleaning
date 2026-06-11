import { useState } from "react"

const testimonials = [
  { name: "Sarah M.", text: "Kimberly did an amazing job on my apartment. It was spotless when she was done. Will definitely book again!" },
  { name: "James T.", text: "Very professional and thorough. She cleaned things I didn't even think to ask about. Highly recommend!" },
  { name: "Linda R.", text: "I needed a last minute move-out clean and she came through for me. Affordable and reliable!" },
  { name: "Michelle K.", text: "My rental property has never looked better. Tenants were impressed. Madame Kush is my go-to from now on." },
  { name: "Derek W.", text: "Great attention to detail. She treated my home like it was her own. Really appreciated the care she put in." },
  { name: "Angela B.", text: "Booked her for a deep clean and I was blown away. Fair price and fantastic results. 10 out of 10!" },
]

function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((current + 1) % testimonials.length)

  return (
    <div id="testimonials" className="bg-brand-teal px-6 py-12 flex flex-col items-center text-center">
      <h2 className="text-white text-3xl font-bold mb-8">What Customers Say</h2>

      <div className="bg-white rounded-xl px-6 py-8 max-w-sm w-full shadow-lg min-h-48 flex flex-col items-center justify-center">
        <p className="text-gray-700 text-lg italic mb-6">"{testimonials[current].text}"</p>
        <p className="text-brand-teal font-bold">— {testimonials[current].name}</p>
      </div>

      <div className="flex items-center gap-8 mt-8">
        <button onClick={prev} className="text-white text-4xl font-bold">‹</button>
        <span className="text-white">{current + 1} / {testimonials.length}</span>
        <button onClick={next} className="text-white text-4xl font-bold">›</button>
      </div>
    </div>
  )
}

export default Testimonials