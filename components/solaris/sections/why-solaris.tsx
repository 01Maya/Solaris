'use client'

import { CircleCheck } from 'lucide-react'
import { QuoteButton } from './hero'

const panelImage = '/why us.png'

const benefits = [
  'Lower energy costs',
  'Increase your home value',
  'Clean, renewable energy',
  'Hassle-free installation',
]

export function WhySolaris() {
  return (
    <section data-reveal id="why-solaris" className="relative overflow-hidden bg-[#edf7f0] px-6 py-20 sm:py-24">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div data-direction="left" className="text-left">
          <p className="eyebrow text-center! lg:text-left!">Why Solaris</p>
          <h2 className="section-title text-center! lg:text-left!">
            The sun never sends <span className="block">a bill.</span>
          </h2>
          <p className="section-copy mx-auto text-center! lg:mx-0! lg:text-left!">
            Most homes are paying for energy they could be generating. We design, install, and
            maintain solar systems built to perform.
          </p>

          <ul className="mx-auto mt-6 grid w-full max-w-sm grid-cols-2 gap-x-6 gap-y-4 text-left text-sm text-[#52605f] lg:mx-0 lg:w-fit lg:grid-cols-1">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="benefit-item group flex items-start justify-center gap-3 rounded-lg px-2 py-2 text-[#52605f] transition-[transform,background-color,padding-left,box-shadow] duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:translate-x-1 hover:bg-white hover:pl-4 hover:shadow-[0_8px_22px_rgba(68,120,89,0.1)] lg:justify-start"
              >
                <span className="benefit-icon grid size-7 shrink-0 place-items-center rounded-full bg-[#e7f3eb] transition-[transform,background-color,color,box-shadow] duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:rotate-[180deg] group-hover:bg-[#4e8d6e] group-hover:text-white group-hover:shadow-[0_5px_14px_rgba(78,141,110,0.3)]">
                  <CircleCheck size={16} />
                </span>
                <span className="transition-colors duration-500 group-hover:text-[#356c50]">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex justify-center lg:justify-start">
            <QuoteButton />
          </div>
        </div>

        <div data-direction="right" className="relative">
          <img
            src={panelImage}
            alt="Solar panel under a bright blue sky"
            className="h-auto max-h-[520px] min-h-[280px] w-full rounded-2xl object-cover object-center transition-transform duration-700 hover:scale-[1.03] sm:h-[520px]"
          />
        </div>
      </div>
      <img
        src="/cta.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 right-0 z-0 w-28 translate-x-8 opacity-30 sm:right-8 sm:w-40 sm:translate-x-0"
      />
    </section>
  )
}
