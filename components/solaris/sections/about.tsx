'use client'

import { Leaf, VolumeX, WalletCards } from 'lucide-react'

const aboutImage = '/about.png'

const featureCards = [
  {
    icon: Leaf,
    title: 'Go Green Energy',
    description: 'Clean, quiet power that protects your home, your budget, and the planet.',
  },
  {
    icon: VolumeX,
    title: 'No Generator Noise',
    description: 'Reliable energy that keeps your home peaceful, comfortable, and powered.',
  },
  {
    icon: WalletCards,
    title: 'Save on Bills',
    description: 'Generate more of your own power and keep more money in your pocket.',
  },
]

export function About() {
  return (
    <section data-reveal id="about" className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Why Solaris</p>
          <h2 className="section-title">
            We&apos;re here to power <span className="block">your world.</span>
          </h2>
          <p className="section-copy">
            From your first consultation to the day your panels go live and every sunny day after,
            Solaris has you covered. Clean energy, zero hassle.
          </p>
        </div>

        <div id="services" className="relative mt-12 overflow-visible rounded-2xl sm:overflow-hidden">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={aboutImage}
              alt="Modern solar home at sunset"
              className="h-[260px] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02] sm:h-[500px]"
            />
          </div>

          <div className="relative mt-3 grid gap-3 sm:absolute sm:inset-x-3 sm:bottom-3 sm:mt-0 sm:grid-cols-3">
            {featureCards.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-xl border border-white/70 bg-white/95 p-4 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Icon size={19} className="mb-3 text-[#4e8d6e]" />
                <h3 className="text-base font-semibold text-[#4a8062]">{title}</h3>
                <p className="mt-2 text-sm leading-5 text-[#64706e]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <img
        src="/cta.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-50 left-0 z-0 w-28 -translate-x-8 -scale-x-100 opacity-30 sm:bottom-8 sm:left-8 sm:w-40 sm:translate-x-0"
      />
    </section>
  )
}
