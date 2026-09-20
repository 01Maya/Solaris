'use client'

import { QuoteButton } from './hero'

const leavesImage = '/cta.png'

export function CTA() {
  return (
    <section data-reveal id="quote" className="px-6 pb-20">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-5 overflow-hidden rounded-2xl bg-[#edf7f0] px-7 py-8 transition-shadow duration-500 hover:shadow-xl sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="text-center sm:text-left">
          <p className="eyebrow text-center sm:text-left!">Ready to go solar?</p>
          <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-[#172033] sm:text-[32px]">
            Let&apos;s build a cleaner, brighter tomorrow.
          </h2>
          <p className="mt-2 text-base leading-6 text-[#687673] sm:text-[17px]">Get your free, no-obligation quote today.</p>
        </div>
        <div className="self-center sm:self-auto">
          <QuoteButton />
        </div>
        <img
          src={leavesImage}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 -right-6 w-32 opacity-70 transition-transform duration-700 hover:rotate-6 sm:-bottom-16 sm:-right-8 sm:w-44"
        />
      </div>
    </section>
  )
}
