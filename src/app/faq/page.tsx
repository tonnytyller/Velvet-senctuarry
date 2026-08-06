const faqs = [
  {
    q: 'How will my order be shipped?',
    a: 'All orders ship in plain, unmarked boxes with no external branding. The return address uses a neutral fulfillment center name. Only you will know what waits inside.',
  },
  {
    q: 'What appears on my bank statement?',
    a: 'A neutral company name — never Velvet Sanctuary. Your purchase remains completely private.',
  },
  {
    q: 'Are returns accepted?',
    a: 'For hygiene reasons, intimate products that have been opened or used cannot be returned. Unopened items in original packaging may be returned within 30 days. Please contact us first — we handle every case with care.',
  },
  {
    q: 'How do I clean and care for my products?',
    a: 'Each product page includes specific care instructions under "The details that matter." Generally, use warm water and mild, unscented soap for silicone items, and store them separately in breathable pouches.',
  },
  {
    q: 'Is my data safe?',
    a: 'Absolutely. We use industry-standard encryption. Your order history, personal details, and payment information are never shared or sold.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Currently, we ship within select regions. Please check the shipping options at checkout for availability in your area.',
  },
]

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="font-serif text-4xl text-[#4a2f20] mb-4 text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-[#8b7b6b] text-center mb-12">
        Answers to the questions we hear most — asked with care, answered with honesty.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="bg-white border border-[#e8d5bc] rounded-lg p-4 group"
          >
            <summary className="font-serif text-[#4a2f20] cursor-pointer list-none flex justify-between items-center">
              {faq.q}
              <span className="text-[#c9b8a8] group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-3 text-sm text-[#8b7b6b] leading-relaxed">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
