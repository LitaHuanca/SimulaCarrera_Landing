import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const HEADLINE_WORDS = ['evidencia,', 'datos reales,', 'ciencia,']
const CAREERS = [
  { name: 'Ingeniería Civil', compat: 91, area: 'Ingeniería', color: '#7044BF' },
  { name: 'Medicina', compat: 78, area: 'Salud', color: '#9b59b6' },
  { name: 'Diseño Gráfico', compat: 85, area: 'Arte y Diseño', color: '#8e44ad' },
  { name: 'Ciencia de Datos', compat: 94, area: 'Tecnología', color: '#6c3483' },
]

function TypeWriter({ words }) {
  const [wordIdx, setWordIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    let timeout
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setWordIdx((wordIdx + 1) % words.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, wordIdx, words])

  return (
    <span style={{ color: '#E5ACF9' }}>
      {displayed}
      <span style={{ borderRight: '3px solid #E5ACF9', marginLeft: 2, animation: 'blink 1s step-end infinite' }} />
    </span>
  )
}

function CareerCard({ career, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.02 }}
      style={{
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(229,172,249,0.2)',
        borderRadius: 12,
        padding: '14px 18px',
        backdropFilter: 'blur(10px)',
        minWidth: 190,
      }}
    >
      <div style={{ fontSize: 11, color: '#E5ACF9', fontWeight: 600, marginBottom: 4, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{career.area}</div>
      <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 10 }}>{career.name}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 2 }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${career.compat}%` }}
            transition={{ delay: delay + 0.4, duration: 0.8, ease: 'easeOut' }}
            style={{ height: '100%', background: 'linear-gradient(90deg, #7044BF, #E5ACF9)', borderRadius: 2 }}
          />
        </div>
        <span style={{ color: '#E5ACF9', fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 13 }}>{career.compat}%</span>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0F0A1E 0%, #1A1030 50%, #120820 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient glow */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(112,68,191,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(229,172,249,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        {/* Left — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(112,68,191,0.2)', border: '1px solid rgba(112,68,191,0.4)', borderRadius: 100, padding: '6px 14px', marginBottom: 24 }}
          >
            <span style={{ width: 6, height: 6, background: '#E5ACF9', borderRadius: '50%', display: 'inline-block' }} />
            <span style={{ color: '#E7DAF6', fontSize: 13, fontWeight: 600 }}>Psicometría + IA · Diseñado para Perú</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 58px)', lineHeight: 1.1, color: '#fff', marginBottom: 12, letterSpacing: '-1.5px' }}
          >
            Elige tu carrera con{' '}
            <TypeWriter words={HEADLINE_WORDS} />
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 58px)', lineHeight: 1.1, color: '#fff', marginBottom: 28, letterSpacing: '-1.5px' }}
          >
            no con corazonadas.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ color: 'rgba(255,255,255,0.65)', fontSize: 17, lineHeight: 1.7, maxWidth: 480, marginBottom: 40 }}
          >
            4 pruebas psicométricas — inventario RIASEC, simulación situacional, aptitudes adaptativas y síntesis con IA — que generan un <strong style={{ color: '#E7DAF6' }}>reporte certificado por psicólogo colegiado</strong> para cada alumno de tu institución.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
          >
            <a href="#cta"
              style={{ background: '#7044BF', color: '#fff', padding: '14px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', fontFamily: 'Plus Jakarta Sans', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'all 0.2s', boxShadow: '0 4px 24px rgba(112,68,191,0.4)' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#5a33a0'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#7044BF'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Solicitar piloto gratuito →
            </a>
            <a href="#como-funciona"
              style={{ background: 'transparent', color: '#E7DAF6', padding: '14px 28px', borderRadius: 10, fontWeight: 600, fontSize: 15, textDecoration: 'none', fontFamily: 'Plus Jakarta Sans', border: '1px solid rgba(231,218,246,0.3)', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(231,218,246,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
            >
              Ver cómo funciona
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ display: 'flex', gap: 40, marginTop: 52, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            {[{ val: '4', label: 'Etapas de evaluación' }, { val: '200+', label: 'Carreras indexadas' }, { val: 'S/ 35', label: 'Por alumno' }].map(s => (
              <div key={s.val}>
                <div style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 26, color: '#fff', letterSpacing: '-1px' }}>{s.val}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — career cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginBottom: 4, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}
          >
            Tu ranking vocacional
          </motion.div>
          {CAREERS.map((c, i) => (
            <CareerCard key={c.name} career={c} delay={0.4 + i * 0.1} />
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{ background: 'rgba(112,68,191,0.15)', border: '1px solid rgba(112,68,191,0.3)', borderRadius: 10, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10, marginTop: 4 }}
          >
            <span style={{ fontSize: 18 }}>🎓</span>
            <div>
              <div style={{ color: '#E7DAF6', fontSize: 13, fontWeight: 600 }}>Reporte certificado por psicólogo COP</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>Con firma y número de colegiatura</div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100% { opacity: 1 } 50% { opacity: 0 } }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
