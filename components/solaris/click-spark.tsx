'use client'

import { useEffect } from 'react'

const SPARK_COUNT = 8
const SPARK_DISTANCE = 22

export function ClickSpark() {
  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 0) {
        return
      }

      const spark = document.createElement('span')
      spark.className = 'click-spark'
      spark.style.left = `${event.clientX}px`
      spark.style.top = `${event.clientY}px`

      for (let index = 0; index < SPARK_COUNT; index += 1) {
        const particle = document.createElement('i')
        const angle = (360 / SPARK_COUNT) * index
        const radians = (angle * Math.PI) / 180
        const x = Math.cos(radians) * SPARK_DISTANCE
        const y = Math.sin(radians) * SPARK_DISTANCE

        particle.style.setProperty('--spark-x', `${x}px`)
        particle.style.setProperty('--spark-y', `${y}px`)
        particle.style.transform = `rotate(${angle}deg)`
        spark.appendChild(particle)
      }

      document.body.appendChild(spark)
      spark.addEventListener('animationend', () => spark.remove(), { once: true })
    }

    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [])

  return null
}
