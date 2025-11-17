import { CheckCircle, Activity, Clock, Shield } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Activity,
      title: 'Alignment Technology',
      desc: 'Targeted support keeps shoulders back and core engaged to promote a neutral spine.'
    },
    {
      icon: Clock,
      title: 'All‑day Comfort',
      desc: 'Breathable, soft-touch materials engineered for long sessions at your desk or on the go.'
    },
    {
      icon: Shield,
      title: 'Backed by Experts',
      desc: 'Developed with physiotherapists and ergonomists. 60‑day comfort guarantee.'
    },
    {
      icon: CheckCircle,
      title: 'Visible Results',
      desc: 'Users report reduced neck strain and improved posture within 2 weeks of regular use.'
    }
  ]

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Why your posture matters</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
          Small daily improvements compound into major health gains. Our products make good posture effortless.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <f.icon className="text-emerald-600" />
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
