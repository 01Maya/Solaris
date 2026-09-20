'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Our Services', href: '#services' },
  { label: 'About us', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-30 px-5 py-4 transition-all duration-500 sm:px-8 lg:px-14 ${scrolled ? 'bg-white/85 py-3 shadow-sm backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between" aria-label="Main navigation">
        <a href="#top" className="group flex items-center gap-2 text-base font-semibold tracking-tight text-[#172033] transition-all duration-300 hover:text-[#438060]">
          <span className="grid size-7 place-items-center rounded-md bg-[#5e9b7c] text-white shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-[#5e9b7c]/30">⌃</span>
          <span className="transition-colors duration-300 group-hover:text-[#438060]">Solaris</span>
        </a>
        <div className="hidden items-center gap-7 md:flex" onClick={() => setOpen(false)}>
          {links.map((link) => <a key={link.href} href={link.href} className="text-xs font-medium text-[#364052] transition-colors hover:text-[#438060]">{link.label}</a>)}
        </div>
        <a href="#quote" className="hidden items-center gap-1 rounded-full bg-[#51886d] px-4 py-2.5 text-xs font-medium text-white shadow-lg shadow-[#51886d]/20 transition-transform hover:-translate-y-0.5 md:flex">Get free quote <ArrowUpRight size={13} /></a>
        <button type="button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)} className="rounded-md p-2 text-[#172033] md:hidden">{open ? <X size={20} /> : <Menu size={20} />}</button>
      </nav>
      {open && <div className="mx-auto mt-3 flex max-w-6xl flex-col gap-4 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur md:hidden">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm text-[#364052]">{link.label}</a>)}<a href="#quote" onClick={() => setOpen(false)} className="rounded-full bg-[#51886d] px-4 py-3 text-center text-sm font-medium text-white">Get free quote</a></div>}
    </header>
  )
}
