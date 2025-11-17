import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Alex G.',
    text: 'Within two weeks my neck pain was gone. The corrector is comfortable and actually reminds me to sit tall.',
    rating: 5
  },
  {
    name: 'Priya S.',
    text: 'The chair is a game changer for long coding sessions. My back finally feels supported.',
    rating: 5
  },
  {
    name: 'Marcus D.',
    text: 'Quality build and fast shipping. Customer support helped me pick the right size.',
    rating: 4
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Real results from real people</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">Hear how better posture improved energy, focus, and comfort.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="mt-3 text-gray-700">“{t.text}”</p>
              <p className="mt-4 text-sm text-gray-500">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
