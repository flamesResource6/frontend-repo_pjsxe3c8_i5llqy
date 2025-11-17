export default function FAQ() {
  const faqs = [
    {
      q: 'How long should I wear a posture corrector each day?',
      a: 'Start with 20–30 minutes and gradually increase to 1–2 hours as your muscles adapt. Consistency matters more than duration.'
    },
    {
      q: 'Can I wear it under clothes?',
      a: 'Yes. Our low‑profile design sits comfortably under most shirts without bulk.'
    },
    {
      q: 'What is your return policy?',
      a: 'We offer a 60‑day comfort guarantee. If it doesn’t work for you, return it for a full refund.'
    },
    {
      q: 'Do you ship internationally?',
      a: 'We ship worldwide with tracked delivery. Taxes and duties may apply based on your region.'
    }
  ]

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="font-medium text-gray-900">{f.q}</span>
                <span className="text-gray-500">+</span>
              </summary>
              <p className="mt-3 text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
