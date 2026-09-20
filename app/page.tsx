import { Navbar } from '@/components/solaris/navbar'
import { ClickSpark } from '@/components/solaris/click-spark'
import { About } from '@/components/solaris/sections/about'
import { CTA } from '@/components/solaris/sections/cta'
import { FAQ } from '@/components/solaris/sections/faq'
import { Footer } from '@/components/solaris/sections/footer'
import { HowItWorks } from '@/components/solaris/sections/how-it-works'
import { WhySolaris } from '@/components/solaris/sections/why-solaris'
import { Hero } from '@/components/solaris/sections/hero'
import { RevealObserver } from '@/components/solaris/sections/reveal'
import { Stats } from '@/components/solaris/sections/stats'

export default function Page() {
  return (
    <main className="overflow-hidden bg-white text-[#172033]">
      <ClickSpark />
      <RevealObserver />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <WhySolaris />
      <HowItWorks />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  )
}
