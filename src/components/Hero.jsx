import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border border-gray-200 text-sm text-gray-700">
            <Star className="text-yellow-500" size={16} /> Trusted by 50,000+ happy backs
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Sit smarter. Stand taller. Feel better.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Premium posture correctors, ergonomic chairs, and wellness accessories designed by physiotherapists to align your spine and energize your day.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#products" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800">
              Shop Bestsellers <ArrowRight size={18} />
            </a>
            <a href="#benefits" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 hover:bg-gray-50">
              Why posture matters
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6">
            <div className="flex -space-x-2">
              {[0,1,2,3,4].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/40?img=${i+10}`} alt="Customer" className="h-8 w-8 rounded-full border-2 border-white" />
              ))}
            </div>
            <p className="text-sm text-gray-600">4.8/5 average rating from real customers</p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
            <img src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1200&auto=format&fit=crop" alt="Ergonomic chair" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white shadow-lg border border-gray-200 rounded-xl p-4">
            <p className="text-sm text-gray-700 font-medium">Clinically inspired design</p>
            <p className="text-xs text-gray-500">Recommended by over 200 physiotherapists</p>
          </div>
        </div>
      </div>
    </section>
  )
}
