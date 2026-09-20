'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const questions = [
  ['How much can I save with solar?', 'Most homeowners save between 40% and 80% on electricity over the life of their system. Your free quote includes a personalized savings estimate.'],
  ['What happens on cloudy days?', 'Solar panels still produce energy on cloudy days. Your system stays connected to the grid so your home always has reliable power.'],
  ['Is solar right for my home?', 'We look at your roof, energy use, local sunlight, and goals before recommending a system. The consultation is always free.'],
  ['Do you offer warranties?', 'Yes. Solaris systems include long-term product coverage and a workmanship warranty backed by our certified installation team.'],
  ['How long does installation take?', 'Most residential installations are completed in one to three days after your custom design and permits are approved.'],
  ['Can I get a free quote?', 'Absolutely. Start with a no-obligation consultation and we will show you the best system, projected savings, and available incentives.'],
] as const

export function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const allItemsOpen = openItems.size === questions.length

  const toggleItem = (index: number) => {
    setOpenItems((currentItems) => {
      const nextItems = new Set(currentItems)

      if (nextItems.has(index)) {
        nextItems.delete(index)
      } else {
        nextItems.add(index)
      }

      return nextItems
    })
  }

  const toggleAllItems = () => {
    setOpenItems(allItemsOpen ? new Set() : new Set(questions.map((_, index) => index)))
  }

  return (
    <section data-reveal id="faq" className="relative overflow-hidden px-6 pb-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_24rem] sm:items-end sm:gap-8">
          <div>
            <p className="eyebrow text-center! sm:text-left!">FAQ</p>
            <h2 className="section-title text-center! sm:text-left!">Got questions? We&apos;ve got answers.</h2>
          </div>
          <p className="mx-auto max-w-xs text-center text-sm leading-5 text-[#78827f] sm:mx-0 sm:max-w-none sm:text-right sm:text-base">
            <span className="sm:block">Everything you need to know </span>{' '}
            <span className="sm:block">before making the switch to clean energy.</span>
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-xs text-[#87908e]">{allItemsOpen ? 'All answers open' : `${openItems.size} of ${questions.length} open`}</p>
          <button
            type="button"
            onClick={toggleAllItems}
            aria-label={allItemsOpen ? 'Collapse all answers' : 'Expand all answers'}
            className="rounded-full border border-[#cfe3d6] px-3 py-2 text-xs font-semibold text-[#4e8d6e] transition-colors hover:bg-[#eef7f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4e8d6e]"
          >
            {allItemsOpen ? 'Collapse all' : 'Expand all'}
          </button>
        </div>

        <div className="mt-3 grid items-start gap-4 sm:grid-cols-2">
          {questions.map(([question, answer], index) => {
            const isOpen = openItems.has(index)
            const panelId = `faq-panel-${index}`

            return (
              <article
                key={question}
                className={`faq-card group overflow-hidden rounded-xl border bg-white transition-all duration-500 ${isOpen ? 'border-[#b9d8c5] shadow-[0_14px_36px_rgba(68,120,89,0.12)]' : 'border-[#edf0ee] shadow-sm hover:-translate-y-1 hover:border-[#cfe3d6] hover:shadow-lg'}`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(index)}
                  className="flex min-h-16 w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-medium leading-5 text-[#39434a] outline-none transition-colors focus-visible:bg-[#f7faf8] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4e8d6e] sm:text-base"
                >
                  <span>{question}</span>
                  <span className={`grid size-7 shrink-0 place-items-center rounded-full transition-all duration-500 ${isOpen ? 'rotate-180 bg-[#4e8d6e] text-white' : 'bg-[#eef7f1] text-[#4e8d6e] group-hover:scale-110'}`}>
                    <ChevronDown size={15} />
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-[#edf0ee] px-5 pb-5 pt-4 text-sm leading-6 text-[#78827f]">
                      {answer}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
      <img
        src="/cta.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 left-0 z-0 w-28 -translate-x-8 -scale-x-100 opacity-30 sm:bottom-8 sm:left-8 sm:w-40 sm:translate-x-0"
      />
    </section>
  )
}
