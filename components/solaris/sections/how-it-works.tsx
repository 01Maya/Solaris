'use client'

import { CircleCheck, Mail, PanelsTopLeft, Sparkles } from 'lucide-react'

const steps = [
  [Mail, '1. Get a Free Quote', 'Tell us about your home and energy needs.'],
  [PanelsTopLeft, '2. Custom Design', 'We design the perfect solar solution for you.'],
  [Sparkles, '3. Professional Install', 'Our certified team handles the installation.'],
  [CircleCheck, '4. Start Saving', 'Enjoy clean energy and lower bills for decades.'],
] as const

export function HowItWorks() {
  return (
    <section data-reveal id="how-it-works" className="relative overflow-hidden px-6 py-24">
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="eyebrow">How it works</p>
        <h2 className="section-title">Simple. Transparent. Hassle-Free.</h2>
        <p className="section-copy">
          Going solar with Solaris is easy. We handle everything so you can start saving sooner.
        </p>

        <div className="mt-12 grid gap-9 sm:grid-cols-4">
          {steps.map(([Icon, title, description]) => (
            <article key={title} className="group transition-transform duration-500 hover:-translate-y-2">
              <span className="mx-auto grid size-12 place-items-center rounded-full bg-[#eef7f1] text-[#4e8d6e] transition-all duration-500 group-hover:bg-[#4e8d6e] group-hover:text-white">
                <Icon size={21} />
              </span>
              <h3 className="mt-4 text-base font-semibold text-[#172033]">{title}</h3>
              <p className="mx-auto mt-2 max-w-60 text-sm leading-5 text-[#687673]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
