import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [visible, setVisible] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // El punto sigue al instante
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50 })
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50 })

  // El anillo sigue con delay (inercia)
  const ringX = useSpring(mouseX, { stiffness: 120, damping: 22 })
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 22 })

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const down = () => setClicked(true)
    const up = () => setClicked(false)

    // Detectar hover sobre interactivos
    const addHover = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover], input, textarea, select, label')) {
        setHovered(true)
      }
    }
    const removeHover = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover], input, textarea, select, label')) {
        setHovered(false)
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    window.addEventListener('mouseover', addHover)
    window.addEventListener('mouseout', removeHover)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      window.removeEventListener('mouseover', addHover)
      window.removeEventListener('mouseout', removeHover)
    }
  }, [visible, mouseX, mouseY])

  if (typeof window === 'undefined') return null

  return (
    <>
      {/* Anillo exterior — sigue con delay */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicked ? 0.75 : hovered ? 1.6 : 1,
          width: hovered ? 48 : 36,
          height: hovered ? 48 : 36,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: `1.5px solid ${hovered ? '#7044BF' : 'rgba(112,68,191,0.5)'}`,
            backgroundColor: hovered ? 'rgba(112,68,191,0.08)' : 'transparent',
            transition: 'border-color 0.2s, background-color 0.2s',
            boxShadow: hovered ? '0 0 12px rgba(112,68,191,0.3)' : 'none',
          }}
        />
      </motion.div>

      {/* Punto central — sin delay */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: hovered ? '#7044BF' : '#E5ACF9',
          transition: 'background-color 0.2s',
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicked ? 0.5 : hovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  )
}
