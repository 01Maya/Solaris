'use client'

import { ArrowRight } from 'lucide-react'

const heroImage = '/hero.png'

export function QuoteButton({ outline = false, children = 'Get free quote' }: { outline?: boolean; children?: React.ReactNode }) {
  return (
    <a href="#quote" className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${outline ? 'border border-[#b8d2c2] bg-white/70 text-[#467c61]' : 'bg-[#51886d] text-white shadow-lg shadow-[#51886d]/20 hover:bg-[#3f7359]'}`}>
      {children}
      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  )
}

export function Hero() {
  return (
    <section id="top" className="hero-section relative flex min-h-190 items-center overflow-hidden bg-[#f7faf8] px-0 pb-16 pt-28 sm:min-h-220 sm:pb-20 sm:pt-32">
      <img src="/hero mobile.png" alt="Solar homes in a green mountain neighborhood" className="absolute inset-0 size-full object-cover object-center sm:hidden" />
      <img src={heroImage} alt="Solar homes in a green mountain neighborhood" className="absolute inset-0 hidden size-full object-cover object-center sm:block" />
      <div className="absolute inset-0 bg-linear-to-b from-white/95 via-white/80 to-white/5" />
      <div className="relative mx-auto flex -translate-y-16 max-w-3xl flex-col items-center px-6 text-center transition-transform duration-500 sm:-translate-y-12">
        <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#4d8a6a]">Powering a cleaner tomorrow</p>
        <h1 className="animate-fade-up max-w-2xl text-[38px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#172033] [animation-delay:100ms] sm:text-[60px]">Cut Your Energy Bill <span className="block text-[#4e8d6e]">by Up to 80%</span></h1>
        <p className="animate-fade-up mt-5 max-w-md text-[15px] leading-6 text-[#566070] [animation-delay:200ms] sm:text-[17px]">Solar energy isn&apos;t just green it&apos;s smart. Generate your own power, reduce your costs, and build a sustainable home.</p>
        <div className="animate-fade-up mt-7 flex flex-wrap justify-center gap-3 [animation-delay:300ms]"><QuoteButton /><QuoteButton outline>How it works</QuoteButton></div>
      </div>
    </section>
  )
}

