import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function SegmentTypewriter({ segments, speed = 24 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const total = segments.reduce((s, seg) => s + seg.text.length, 0)
  const [count, setCount] = useState(0)
  const done = count >= total

  useEffect(() => {
    if (!inView) return
    let c = 0
    const id = setInterval(() => {
      c++
      setCount(c)
      if (c >= total) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [inView, total, speed])

  let remaining = count
  return (
    <span ref={ref}>
      {segments.map((seg, i) => {
        const show = Math.min(remaining, seg.text.length)
        remaining -= show
        if (show === 0) return null
        const text = seg.text.slice(0, show)
        return seg.gradient
          ? <span key={i} style={{ background: seg.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{text}</span>
          : <span key={i} style={{ color: seg.color ?? '#0F0A1E' }}>{text}</span>
      })}
      {!done && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.55, repeat: Infinity, repeatType: 'reverse' }}
          style={{ display: 'inline-block', width: 3, height: '0.8em', background: '#7044BF', marginLeft: 3, verticalAlign: 'middle', borderRadius: 1 }}
        />
      )}
    </span>
  )
}
