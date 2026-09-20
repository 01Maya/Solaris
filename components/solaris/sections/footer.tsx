export function Footer() {
  return (
    <footer className="border-t border-[#e8efea] px-6 py-6">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
        <div className="text-center lg:text-left">
          <a href="#top" className="group inline-flex items-center justify-center gap-2 text-base font-semibold text-[#172033] transition-all duration-300 hover:text-[#438060] lg:justify-start">
            <span className="grid size-7 place-items-center rounded-md bg-[#5e9b7c] text-white shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-[#5e9b7c]/30">⌃</span>
            <span className="transition-colors duration-300 group-hover:text-[#438060]">Solaris</span>
          </a>
          <p className="mt-1 text-xs text-[#87908e]">Clean energy for a brighter tomorrow.</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-[#687673] lg:justify-center" aria-label="Footer navigation">
          <a href="#top" className="py-2 transition-colors hover:text-[#438060]">Home</a>
          <a href="#how-it-works" className="py-2 transition-colors hover:text-[#438060]">How it works</a>
          <a href="#services" className="py-2 transition-colors hover:text-[#438060]">Our Services</a>
          <a href="#about" className="py-2 transition-colors hover:text-[#438060]">About us</a>
          <a href="#faq" className="py-2 transition-colors hover:text-[#438060]">FAQ</a>
        </nav>

        <div className="flex justify-center gap-4 lg:justify-end">
          <a href="#instagram" aria-label="Instagram" className="grid size-8 place-items-center rounded-full text-xs font-semibold text-[#172033] transition-colors hover:bg-[#eef7f1] hover:text-[#438060]">◎</a>
          <a href="#facebook" aria-label="Facebook" className="grid size-8 place-items-center rounded-full text-xs font-semibold text-[#172033] transition-colors hover:bg-[#eef7f1] hover:text-[#438060]">f</a>
          <a href="#linkedin" aria-label="LinkedIn" className="grid size-8 place-items-center rounded-full text-xs font-semibold text-[#172033] transition-colors hover:bg-[#eef7f1] hover:text-[#438060]">in</a>
          <a href="#youtube" aria-label="YouTube" className="grid size-8 place-items-center rounded-full text-xs font-semibold text-[#172033] transition-colors hover:bg-[#eef7f1] hover:text-[#438060]">▶</a>
        </div>
      </div>

      <div className="mx-auto mt-5 flex max-w-6xl flex-col items-center gap-2 border-t border-[#e8efea] pt-4 text-center text-xs text-[#87908e] sm:flex-row sm:justify-between sm:text-left">
        <p>© 2024 Solaris. All rights reserved.</p>
        <p className="flex flex-wrap items-center justify-center gap-1">A cleaner, greener future starts at home <span aria-hidden="true">🍃</span></p>
      </div>
    </footer>
  )
}
