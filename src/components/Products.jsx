import { ShoppingCart } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Active Posture Corrector',
    price: 49,
    image: 'https://images.unsplash.com/photo-1701826510609-b8d07deca0d4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBY3RpdmUlMjBQb3N0dXJlJTIwQ29ycmVjdG9yfGVufDB8MHx8fDE3NjMzNTE5NDd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    badge: 'Bestseller',
    points: ['Lightweight', 'Adjustable straps', 'Discreet under clothing']
  },
  {
    id: 2,
    name: 'ErgoFlex Desk Chair',
    price: 289,
    image: 'https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=1200&auto=format&fit=crop',
    badge: 'New',
    points: ['Lumbar support', 'Breathable mesh', '4D armrests']
  },
  {
    id: 3,
    name: 'Balance Footrest',
    price: 59,
    image: 'https://images.unsplash.com/photo-1646090479934-6c837249e482?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCYWxhbmNlJTIwRm9vdHJlc3R8ZW58MHwwfHx8MTc2MzM1MTk0N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    badge: 'Popular',
    points: ['Active sitting', 'Anti-slip base', 'Soft-touch foam']
  }
]

export default function Products() {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured products</h2>
            <p className="mt-2 text-gray-600">Everything you need to support a healthy spine, at home or at work.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800">View all</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={p.image} alt={p.name} className="h-56 w-full object-cover" />
                <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded bg-white/90 border border-gray-200">{p.badge}</span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">{p.name}</h3>
                <ul className="mt-2 text-sm text-gray-600 list-disc list-inside space-y-1">
                  {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-bold text-gray-900">${p.price}</p>
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">
                    <ShoppingCart size={18} /> Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
