'use client'

import { Leaf, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { useEffect, useState } from 'react'

function CountUp({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const [display, setDisplay] = useState('0')
  const numericValue = value
  const decimals = Number.isInteger(value) ? 0 : 1

  useEffect(() => {
    let frame = 0
    const start = performance.now()
    const duration = 1400
    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay((numericValue * eased).toFixed(decimals))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [numericValue])

  return <>{prefix}{display}{suffix}</>
}

const stats = [
  [Sparkles, 500, 'Homes powered', '', '+'],
  [ShieldCheck, 4.9, 'Rated', '', '★'],
  [Leaf, 2, 'Saved', '$', 'M+'],
  [Users, 10, 'Years Experience', '', '+'],
] as const

export function Stats() {
  return (
    <section data-reveal className="bg-white px-6 py-7">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-[#e5eee8] sm:grid-cols-4">
        {stats.map(([Icon, value, label, prefix, suffix]) => (
          <div key={label} className="stat-card flex items-center justify-center gap-3 px-3 py-2 transition-transform duration-300 hover:-translate-y-1">
            <span className="grid size-9 place-items-center rounded-lg bg-[#eef7f1] text-[#528b6e]"><Icon size={18} /></span>
            <div><p className="text-2xl font-semibold leading-none tracking-tight text-[#172033]"><CountUp value={value} prefix={prefix} suffix={suffix} /></p><p className="text-xs leading-5 text-[#758080]">{label}</p></div>
          </div>
        ))}
      </div>
    </section>
  )
}
