import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useSpring, useTransform, useMotionValue } from 'framer-motion'
import {
  ArrowRight, CheckCircle2, CheckCircle, TrendingUp, Users, Shield, BarChart3, ChevronRight, Star, Minus
} from 'lucide-react'
import { HeroGeometric } from '@/components/ui/shape-landing-hero'
import { SlidingNumber } from '@/components/ui/sliding-number'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { MascotAdvisor } from '@/components/MascotAdvisor'
import { SegmentTypewriter } from '@/components/SegmentTypewriter'

/* ─── AnimatedStat: cuenta de 0 → target con SlidingNumber ──────────────── */
function AnimatedStat({ target, delay = 0 }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setValue(target), delay * 1000)
    return () => clearTimeout(t)
  }, [target, delay])
  return <SlidingNumber value={value} />
}

/* ─── Typewriter ─────────────────────────────────────────────────────────── */
const WORDS = ['evidencia,', 'datos reales,', 'certeza,']

function TypeWriter() {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const w = WORDS[idx]
    let t
    if (!del && text.length < w.length) t = setTimeout(() => setText(w.slice(0, text.length + 1)), 75)
    else if (!del && text.length === w.length) t = setTimeout(() => setDel(true), 2200)
    else if (del && text.length > 0) t = setTimeout(() => setText(text.slice(0, -1)), 40)
    else { setDel(false); setIdx((idx + 1) % WORDS.length) }
    return () => clearTimeout(t)
  }, [text, del, idx])

  return (
    <span style={{ color: '#E5ACF9' }}>
      {text}
      <span style={{ display: 'inline-block', width: 3, height: '0.85em', background: '#E5ACF9', marginLeft: 3, verticalAlign: 'middle', animation: 'blink 1s step-end infinite' }} />
    </span>
  )
}

/* ─── Hero ───────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <HeroGeometric>
      <div style={{ padding: '120px 28px 80px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 72, alignItems: 'center' }}>

        {/* Copy */}
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(112,68,191,0.18)', border: '1px solid rgba(112,68,191,0.35)', borderRadius: 100, padding: '5px 14px', marginBottom: 28, position: 'relative', overflow: 'hidden' }}>
            {/* shimmer sweep */}
            <motion.span
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 2.2, delay: 0.8, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
              style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent, rgba(229,172,249,0.18), transparent)', pointerEvents: 'none' }}
            />
            <motion.span
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: 6, height: 6, background: '#E5ACF9', borderRadius: '50%', flexShrink: 0 }}
            />
            <span style={{ color: '#E7DAF6', fontSize: 13, fontWeight: 600, letterSpacing: '0.02em', position: 'relative' }}>Psicometría + IA · Diseñado para Perú</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.08 }}
            style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(38px, 4.8vw, 60px)', lineHeight: 1.08, color: '#fff', letterSpacing: '-1.8px', marginBottom: 0 }}>
            Elige tu carrera<br />con <TypeWriter /><br />no con corazonadas.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.16 }}
            style={{ color: 'rgba(255,255,255,0.58)', fontSize: 17, lineHeight: 1.72, maxWidth: 500, marginTop: 28, marginBottom: 40 }}>
            La primera plataforma peruana donde el alumno no responde un test: <strong style={{ color: 'rgba(255,255,255,0.88)', fontWeight: 600 }}>vive un día de trabajo en la carrera que le interesa</strong> y recibe un reporte certificado por un psicólogo colegiado.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.22 }}
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 52 }}>
            <Link to="/precios"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#7044BF', color: '#fff', padding: '14px 30px', borderRadius: 9, fontWeight: 700, fontSize: 15, textDecoration: 'none', fontFamily: 'Plus Jakarta Sans', transition: 'all 0.18s', boxShadow: '0 4px 28px rgba(112,68,191,0.4)' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#5e37a6'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#7044BF'; e.currentTarget.style.transform = 'translateY(0)' }}>
              Solicitar piloto gratuito <ArrowRight size={16} />
            </Link>
            <Link to="/como-funciona"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: 'rgba(255,255,255,0.75)', padding: '14px 26px', borderRadius: 9, fontWeight: 600, fontSize: 15, textDecoration: 'none', fontFamily: 'Plus Jakarta Sans', border: '1px solid rgba(255,255,255,0.18)', transition: 'all 0.18s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}>
              Ver cómo funciona <ChevronRight size={15} />
            </Link>
          </motion.div>

          {/* Stats con SlidingNumber */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
            style={{ display: 'flex', gap: 0, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {[
              { prefix: '', num: 4,   suffix: '',   label: 'etapas de evaluación' },
              { prefix: '', num: 200, suffix: '+',  label: 'carreras indexadas'   },
              { prefix: 'S/ ', num: 35, suffix: '',  label: 'por alumno'          },
            ].map((s, i) => (
              <div key={s.label} style={{ flex: 1, paddingRight: 24, borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none', paddingLeft: i > 0 ? 24 : 0 }}>
                <div style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 32, color: '#fff', letterSpacing: '-1.5px', lineHeight: 1, display: 'flex', alignItems: 'baseline', gap: 2 }}>
                  {s.prefix && <span style={{ fontSize: 18, color: '#E5ACF9', fontWeight: 500 }}>{s.prefix}</span>}
                  <AnimatedStat target={s.num} delay={0.55 + i * 0.1} />
                  {s.suffix && <span style={{ fontSize: 22, color: '#E5ACF9' }}>{s.suffix}</span>}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 6, letterSpacing: '0.01em' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dashboard card */}
        <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.15 }}>
          <AppCard />
        </motion.div>
      </div>

      <style>{`@keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }`}</style>
      </div>
    </HeroGeometric>
  )
}

function AppCard() {
  const careers = [
    { name: 'Ciencia de Datos', pct: 94, area: 'Ingeniería' },
    { name: 'Ingeniería Civil', pct: 91, area: 'Ingeniería' },
    { name: 'Diseño Gráfico', pct: 85, area: 'Arte y Diseño' },
    { name: 'Medicina', pct: 78, area: 'Salud' },
  ]
  return (
    <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(112,68,191,0.25)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.45)' }}>
      {/* Chrome bar */}
      <div style={{ background: '#180D30', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(112,68,191,0.15)' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ff5f56', '#ffbd2e', '#27c93f'].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 5, padding: '4px 12px', textAlign: 'center', color: 'rgba(255,255,255,0.28)', fontSize: 11 }}>app.simulacarrera.pe</div>
      </div>

      {/* Nav del app */}
      <div style={{ background: '#fff', borderBottom: '1px solid #E7DAF6', padding: '0 16px', display: 'flex', alignItems: 'center', gap: 0, height: 44 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginRight: 20 }}>
          <div style={{ width: 22, height: 22, background: '#7044BF', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <GraduationCap size={13} color="#fff" strokeWidth={2.2} />
          </div>
          <span style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 12, color: '#1a1a2e' }}>SimulaCarrera</span>
        </div>
        {['Inicio', 'Evaluación', 'Carreras', 'Reportes'].map((t, i) => (
          <div key={t} style={{ padding: '0 10px', height: '100%', display: 'flex', alignItems: 'center', fontSize: 11, color: i === 0 ? '#7044BF' : '#888', fontWeight: i === 0 ? 700 : 400, borderBottom: i === 0 ? '2px solid #7044BF' : '2px solid transparent', marginBottom: -1 }}>{t}</div>
        ))}
      </div>

      {/* Contenido */}
      <div style={{ background: '#F4F0FA', padding: 16 }}>
        <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 14, color: '#0F0A1E', marginBottom: 12 }}>Tu camino vocacional</div>

        {/* Banner morado */}
        <div style={{ background: 'linear-gradient(135deg, #7044BF, #9B5FE0)', borderRadius: 10, padding: '14px 16px', marginBottom: 12 }}>
          <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 3 }}>Tu ranking vocacional</div>
          <div style={{ display: 'flex', gap: 6 }}>
            <span style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', fontSize: 10, borderRadius: 4, padding: '2px 8px', fontWeight: 600 }}>1 test disponible</span>
            <span style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', fontSize: 10, borderRadius: 4, padding: '2px 8px' }}>IA: activa</span>
          </div>
        </div>

        {/* Career cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {careers.map((c, i) => (
            <motion.div key={c.name} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
              style={{ background: '#fff', borderRadius: 8, padding: '10px 12px', border: '1px solid #E7DAF6', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#7044BF', fontSize: 9, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>{c.area}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#0F0A1E' }}>{c.name}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 60, height: 4, background: '#E7DAF6', borderRadius: 2, overflow: 'hidden' }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: `${c.pct}%` }} transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                    style={{ height: '100%', background: 'linear-gradient(90deg, #7044BF, #E5ACF9)', borderRadius: 2 }} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#7044BF', fontFamily: 'JetBrains Mono', minWidth: 28, textAlign: 'right' }}>{c.pct}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* COP badge */}
        <div style={{ marginTop: 10, background: '#fff', border: '1px solid #E7DAF6', borderRadius: 8, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Shield size={14} color="#7044BF" />
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#0F0A1E' }}>Reporte certificado · Psicólogo COP</div>
            <div style={{ fontSize: 10, color: '#888' }}>Con firma y número de colegiatura</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Importa el ícono que falta
import { GraduationCap } from 'lucide-react'

/* ─── Divisor animado Hero → Problem ────────────────────────────────────── */
function WaveDivider() {
  return (
    <div style={{ background: '#0D0820', position: 'relative', height: 110, overflow: 'hidden', lineHeight: 0, marginBottom: -2 }}>
      {/* Ola trasera morada */}
      <div className="sc-wave-back" style={{ position: 'absolute', bottom: 0, left: 0, width: '200%', height: '100%' }}>
        <svg viewBox="0 0 2880 110" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <path d="M0,55 C360,95 720,15 1080,55 C1440,95 1800,15 2160,55 C2520,95 2700,30 2880,55 L2880,110 L0,110 Z"
            fill="rgba(112,68,191,0.28)" />
        </svg>
      </div>
      {/* Ola delantera clara */}
      <div className="sc-wave-front" style={{ position: 'absolute', bottom: 0, left: 0, width: '200%', height: '100%' }}>
        <svg viewBox="0 0 2880 110" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <path d="M0,70 C480,30 960,95 1440,58 C1920,22 2400,85 2880,70 L2880,110 L0,110 Z"
            fill="#F9F7FF" />
        </svg>
      </div>
      <style>{`
        .sc-wave-back  { animation: scWave1 10s linear infinite; }
        .sc-wave-front { animation: scWave2  7s linear infinite; }
        @keyframes scWave1 { from { transform: translateX(0);    } to { transform: translateX(-50%); } }
        @keyframes scWave2 { from { transform: translateX(-50%); } to { transform: translateX(0);    } }
      `}</style>
    </div>
  )
}

/* ─── Tarjeta 3D — imagen parallax + scan line + borde vivo ─────────────── */
function StatCard3D({ icon, valNode, label, sub, delay, inView, bgImage }) {
  const cardRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  const [spot, setSpot] = useState({ x: 50, y: 50 })

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 260, damping: 26 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 260, damping: 26 })
  const cardScale = useSpring(1, { stiffness: 300, damping: 26 })
  const imgX = useSpring(useTransform(mx, [-0.5, 0.5], [12, -12]), { stiffness: 100, damping: 28 })
  const imgY = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 100, damping: 28 })

  const onMove = (e) => {
    const r = cardRef.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
    setSpot({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 })
  }
  const onEnter = () => { setHovering(true); cardScale.set(1.04) }
  const onLeave = () => { setHovering(false); cardScale.set(1); mx.set(0); my.set(0) }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      style={{ perspective: 900 }}
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, scale: cardScale, transformStyle: 'preserve-3d' }}
        onMouseMove={onMove}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div className="sc-stat-card" style={{
          borderRadius: 22, overflow: 'hidden', position: 'relative',
          background: '#1A0D3A',
          boxShadow: hovering
            ? '0 0 0 1.5px rgba(112,68,191,0.75), 0 30px 72px rgba(112,68,191,0.28), 0 8px 28px rgba(0,0,0,0.5)'
            : undefined,
          animationDelay: `${delay * 0.8}s`,
          transition: 'box-shadow 0.35s',
        }}>
          {/* Imagen de fondo con parallax */}
          {bgImage && (
            <motion.div style={{
              x: imgX, y: imgY,
              position: 'absolute', inset: '-14px',
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              opacity: hovering ? 0.65 : 0.5,
              transition: 'opacity 0.5s',
            }} />
          )}

          {/* Overlay — solo oscurece el tercio inferior para legibilidad del texto */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'linear-gradient(170deg, rgba(18,8,42,0.08) 0%, rgba(18,8,42,0.32) 40%, rgba(18,8,42,0.82) 70%, rgba(18,8,42,0.96) 100%)',
          }} />

          {/* Scan line periódica */}
          <motion.div
            animate={{ top: ['-3px', '106%'], opacity: [0, 0.85, 0.85, 0] }}
            transition={{ duration: 2.8, delay: delay * 1.2 + 2, repeat: Infinity, repeatDelay: 6 + delay, ease: 'linear' }}
            style={{
              position: 'absolute', left: 0, right: 0, height: 1.5, zIndex: 4,
              background: 'linear-gradient(90deg, transparent 0%, rgba(229,172,249,0.5) 30%, rgba(229,172,249,0.95) 50%, rgba(229,172,249,0.5) 70%, transparent 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* Spotlight cursor */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: `radial-gradient(circle at ${spot.x}% ${spot.y}%, rgba(112,68,191,0.2) 0%, transparent 60%)`,
            opacity: hovering ? 1 : 0, transition: 'opacity 0.35s',
          }} />

          {/* Corner glow al hover */}
          <div style={{
            position: 'absolute', top: -40, right: -40, width: 120, height: 120, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(229,172,249,0.18) 0%, transparent 70%)',
            opacity: hovering ? 1 : 0, transition: 'opacity 0.4s', pointerEvents: 'none',
          }} />

          {/* Contenido */}
          <div style={{ position: 'relative', zIndex: 2, padding: '32px 28px 38px' }}>
            <motion.div
              animate={{ boxShadow: hovering ? '0 0 36px rgba(229,172,249,0.55), 0 8px 24px rgba(112,68,191,0.5)' : '0 4px 18px rgba(112,68,191,0.38)' }}
              transition={{ duration: 0.35 }}
              style={{
                width: 52, height: 52, borderRadius: 15,
                background: 'linear-gradient(135deg, #7044BF 0%, #9B5FE0 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28,
              }}
            >
              {icon}
            </motion.div>

            <div style={{
              fontFamily: 'JetBrains Mono', fontWeight: 700,
              fontSize: 'clamp(36px, 3.8vw, 52px)', color: '#fff',
              letterSpacing: '-2px', lineHeight: 1, marginBottom: 12,
            }}>
              {valNode}
            </div>

            <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 7 }}>{label}</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.48)', lineHeight: 1.65 }}>{sub}</div>
          </div>

          {/* Barra inferior con shimmer */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 3,
            background: 'linear-gradient(90deg, #7044BF, #E5ACF9, #7044BF)',
            backgroundSize: '200% 100%',
            transform: `scaleX(${hovering ? 1 : 0})`,
            transformOrigin: 'left', transition: 'transform 0.4s ease',
            animation: hovering ? 'barShimmer 1.8s linear infinite' : 'none',
          }} />
        </div>
      </motion.div>

      <style>{`
        .sc-stat-card { animation: cardBreath 4s ease-in-out infinite; }
        .sc-stat-card:hover { animation: none; }
        @keyframes cardBreath {
          0%,100% { box-shadow: 0 0 0 1px rgba(112,68,191,0.18), 0 8px 28px rgba(0,0,0,0.45); }
          50%      { box-shadow: 0 0 0 1px rgba(112,68,191,0.44), 0 12px 40px rgba(112,68,191,0.14); }
        }
        @keyframes barShimmer { from{background-position:0% 0%} to{background-position:200% 0%} }
      `}</style>
    </motion.div>
  )
}

/* ─── Sección Problema ───────────────────────────────────────────────────── */
function Problem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const cards = [
    {
      icon: <Users size={22} color="#fff" strokeWidth={2} />,
      valNode: <span>1 <span style={{ fontSize: '0.52em', fontWeight: 500, color: '#E5ACF9' }}>de 3</span></span>,
      label: 'alumnos cambia de carrera',
      sub: 'en los primeros 2 años de universidad, según SUNEDU',
      bgImage: '/cards/crossroads.png',
    },
    {
      icon: <TrendingUp size={22} color="#fff" strokeWidth={2} />,
      valNode: <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 2 }}>
        {inView ? <AnimatedStat target={65} delay={0.3} /> : '0'}
        <span style={{ fontSize: '0.52em', color: '#E5ACF9', fontWeight: 500 }}>%</span>
      </span>,
      label: 'más económico',
      sub: 'que un psicólogo vocacional privado (S/ 35 vs S/ 99–220 por alumno)',
      bgImage: '/cards/cost.png',
    },
    {
      icon: <BarChart3 size={22} color="#fff" strokeWidth={2} />,
      valNode: <span>200K<span style={{ fontSize: '0.52em', color: '#E5ACF9', fontWeight: 500 }}>+</span></span>,
      label: 'estudiantes en Lima',
      sub: 'sin acceso a orientación vocacional profesional en colegios y academias',
      bgImage: '/cards/lima.png',
    },
    {
      icon: <Shield size={22} color="#fff" strokeWidth={2} />,
      valNode: <span style={{ fontSize: '0.68em', letterSpacing: '-1px' }}>RM<br /><span style={{ fontSize: '1.35em', letterSpacing: '-2px', color: '#E5ACF9' }}>212</span></span>,
      label: 'obliga tutoría vocacional',
      sub: 'resolución MINEDU que la mayoría de colegios cumple de forma parcial o simbólica',
      bgImage: '/cards/regulation.png',
    },
  ]

  return (
    <section ref={ref} style={{ background: '#F0ECF9', padding: '100px 28px 96px', position: 'relative', overflow: 'hidden' }}>
      {/* Blob animado de fondo — sutil */}
      <motion.div
        animate={{ x: ['-15%', '15%', '-15%'], y: ['-10%', '12%', '-10%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', width: '55%', height: '55%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(112,68,191,0.09) 0%, transparent 70%)', top: '15%', left: '22%', filter: 'blur(72px)', pointerEvents: 'none' }}
      />
      <motion.div
        animate={{ x: ['10%', '-10%', '10%'], y: ['8%', '-8%', '8%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        style={{ position: 'absolute', width: '35%', height: '35%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(229,172,249,0.07) 0%, transparent 70%)', top: '50%', right: '5%', filter: 'blur(60px)', pointerEvents: 'none' }}
      />
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>

        {/* Header con typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 72 }}>

          {/* Badge con líneas decorativas */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 28 }}>
            <motion.div
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, #7044BF)', transformOrigin: 'right' }}
            />
            <div style={{ background: 'linear-gradient(135deg, #EDE5F9, #F5F0FF)', color: '#7044BF', fontSize: 11, fontWeight: 700, padding: '6px 18px', borderRadius: 100, letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid rgba(112,68,191,0.22)', boxShadow: '0 2px 12px rgba(112,68,191,0.1)' }}>
              El problema
            </div>
            <motion.div
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ width: 60, height: 1, background: 'linear-gradient(90deg, #7044BF, transparent)', transformOrigin: 'left' }}
            />
          </div>

          {/* Título con typewriter y gradiente */}
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(30px, 4.2vw, 52px)', letterSpacing: '-1.8px', lineHeight: 1.12, maxWidth: 720, margin: '0 auto 36px', minHeight: '2.6em' }}>
            <SegmentTypewriter segments={[
              { text: 'Cada año, ', color: '#0F0A1E' },
              { text: 'miles de alumnos', gradient: 'linear-gradient(90deg, #7044BF, #9B5FE0)' },
              { text: ' eligen una carrera ', color: '#0F0A1E' },
              { text: 'que no era para ellos.', gradient: 'linear-gradient(90deg, #9B5FE0, #C278F5)' },
            ]} />
          </h2>

          {/* Párrafo — blockquote con acento lateral */}
          <motion.div
            initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }}
            style={{ maxWidth: 580, margin: '0 auto', textAlign: 'left', borderLeft: '3px solid #7044BF', paddingLeft: 24, position: 'relative' }}>
            {/* Dot en la línea */}
            <div style={{ position: 'absolute', left: -5, top: 4, width: 8, height: 8, borderRadius: '50%', background: '#7044BF', boxShadow: '0 0 10px rgba(112,68,191,0.5)' }} />
            <p style={{ color: '#2D1A5E', fontSize: 17, fontWeight: 600, lineHeight: 1.6, marginBottom: 10, fontFamily: 'Plus Jakarta Sans' }}>
              La deserción no es un fallo del alumno.
            </p>
            <p style={{ color: '#6B5E8A', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Es el resultado de una decisión tomada sin información real — y hoy, esa información no existe en ningún colegio ni academia del Perú.
            </p>
          </motion.div>
        </motion.div>

        {/* Tarjetas 3D */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 22, marginBottom: 64 }}>
          {cards.map((c, i) => (
            <StatCard3D key={i} {...c} delay={i * 0.1} inView={inView} />
          ))}
        </div>

        {/* Bloque "La pregunta" — animado */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderRadius: 24, padding: '52px 48px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap',
            background: 'linear-gradient(135deg, #2A0B62 0%, #1A0840 55%, #0E0530 100%)',
            border: '1px solid rgba(229,172,249,0.15)',
            boxShadow: '0 24px 64px rgba(112,68,191,0.22), 0 4px 24px rgba(0,0,0,0.25)',
            position: 'relative', overflow: 'hidden',
          }}>
          {/* Borde brillante que recorre el contorno */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: [0, 1, 0] } : {}}
            transition={{ delay: 0.9, duration: 1.8, ease: 'easeInOut' }}
            style={{ position: 'absolute', inset: 0, borderRadius: 24, border: '1px solid rgba(229,172,249,0.55)', pointerEvents: 'none' }}
          />
          {/* Ambientes de luz */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 25% 50%, rgba(112,68,191,0.28) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <motion.div
            animate={{ scale: [1, 1.18, 1], opacity: [0.07, 0.15, 0.07] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', top: -80, right: -80, width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(229,172,249,0.18) 0%, transparent 70%)', pointerEvents: 'none' }}
          />

          {/* Copy izquierdo */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{ maxWidth: 480, position: 'relative', zIndex: 1 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <div style={{ width: 24, height: 1, background: 'linear-gradient(90deg, transparent, #E5ACF9)' }} />
              <span style={{ color: '#E5ACF9', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>La pregunta que debería hacerse</span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.4 }}
              style={{ fontFamily: 'Plus Jakarta Sans', fontSize: 88, lineHeight: 0.65, color: 'rgba(229,172,249,0.15)', fontWeight: 800, marginBottom: 12, userSelect: 'none' }}
            >"</motion.div>
            <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 21, color: '#fff', lineHeight: 1.5, margin: 0 }}>
              ¿Cuánto le costaría contratar a un psicólogo vocacional para evaluar, uno por uno, a toda su promoción?
            </p>
          </motion.div>

          {/* Mascota — flex item entre copy y card */}
          <MascotAdvisor
            size={82}
            delay={0.72}
            float={true}
            style={{ alignSelf: 'flex-end', flexShrink: 0, position: 'relative', zIndex: 2 }}
          />

          {/* Card de precio — destacada */}
          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.94 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ delay: 0.65, duration: 0.55, type: 'spring', stiffness: 200, damping: 20 }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 48px rgba(229,172,249,0.28), 0 8px 32px rgba(0,0,0,0.4)' }}
            style={{
              background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(20px)',
              borderRadius: 20, padding: '36px 44px', textAlign: 'center',
              border: '1px solid rgba(229,172,249,0.3)', flexShrink: 0,
              position: 'relative', overflow: 'hidden', zIndex: 1,
              boxShadow: '0 0 28px rgba(112,68,191,0.35), inset 0 1px 0 rgba(255,255,255,0.1)',
              cursor: 'default',
            }}
          >
            {/* Glow interno animado */}
            <motion.div
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(229,172,249,0.12) 0%, transparent 65%)', pointerEvents: 'none' }}
            />
            {/* Badge "Promoción" con pulso */}
            <div style={{ position: 'relative', marginBottom: 18 }}>
              <motion.div
                animate={{ scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', inset: -4, borderRadius: 12, background: 'rgba(112,68,191,0.2)', filter: 'blur(6px)' }}
              />
              <div style={{ position: 'relative', background: 'linear-gradient(135deg, rgba(112,68,191,0.55), rgba(194,120,245,0.4))', borderRadius: 10, padding: '7px 16px', border: '1px solid rgba(229,172,249,0.35)' }}>
                <div style={{ color: '#fff', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Promoción · 100 alumnos</div>
              </div>
            </div>

            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 13, color: '#E5ACF9', textDecoration: 'line-through', marginBottom: 6, opacity: 0.6 }}>S/ 9,900 – S/ 22,000</div>
            <div style={{ width: 36, height: 1, background: 'rgba(229,172,249,0.25)', margin: '10px auto' }} />
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, marginBottom: 6, fontWeight: 500 }}>con SimulaCarrera</div>

            {/* Precio principal con animación de entrada */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.85, type: 'spring', stiffness: 260, damping: 16 }}
              style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 52, color: '#fff', letterSpacing: '-2px', lineHeight: 1 }}
            >
              S/ 3,500
            </motion.div>

            {/* Badge ahorro */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.4 }}
              style={{ marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(112,68,191,0.5)', borderRadius: 100, padding: '6px 16px', border: '1px solid rgba(229,172,249,0.35)', boxShadow: '0 2px 12px rgba(112,68,191,0.3)' }}
            >
              <TrendingUp size={12} color="#E5ACF9" />
              <span style={{ color: '#E5ACF9', fontSize: 11, fontWeight: 800, letterSpacing: '0.04em' }}>Hasta 84% de ahorro</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Comparativa ────────────────────────────────────────────────────────── */
const ROWS = [
  { label: 'Precio por alumno', free: 'S/ 0', priv: 'S/ 99–220', sc: 'S/ 35' },
  { label: 'Simulación conductual inmersiva (SJT + Big Five)', free: false, priv: 'Ocasional', sc: true },
  { label: 'Test de aptitudes adaptativo (CAT / Rasch)', free: false, priv: 'Variable', sc: true },
  { label: 'Certificación firmada por psicólogo colegiado', free: false, priv: true, sc: true },
  { label: 'Panel agregado por promoción', free: false, priv: false, sc: true },
  { label: 'Escala simultánea — cientos de alumnos a la vez', free: 'Sin respaldo', priv: 'Uno a la vez', sc: true },
  { label: 'Datos cruzados con mercado laboral peruano', free: false, priv: 'Rara vez', sc: true },
  { label: 'Cumplimiento documentado ante MINEDU', free: false, priv: false, sc: true },
]

function TableCell({ v, isSC, rowDelay, inView }) {
  if (v === true) return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ delay: rowDelay + (isSC ? 0.08 : 0), type: 'spring', stiffness: 380, damping: 14 }}
    >
      <CheckCircle size={20}
        color={isSC ? '#7044BF' : '#B0A0CC'}
        fill={isSC ? 'rgba(112,68,191,0.14)' : 'rgba(176,160,204,0.1)'}
      />
    </motion.div>
  )
  if (v === false) return <Minus size={17} color="#D0C8E0" />
  return (
    <span style={{
      fontSize: 12, fontWeight: isSC ? 800 : 500,
      color: isSC ? '#7044BF' : '#888',
      fontFamily: isSC ? 'JetBrains Mono' : 'inherit',
      letterSpacing: isSC ? '-0.5px' : 'normal',
    }}>{v}</span>
  )
}

function Comparison() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hoveredRow, setHoveredRow] = useState(null)

  return (
    <section style={{ background: '#F0ECF9', padding: '100px 28px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>

        {/* Header — mismo sistema que Problem */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 68 }}>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 28 }}>
            <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, #7044BF)', transformOrigin: 'right' }} />
            <div style={{ background: 'linear-gradient(135deg, #EDE5F9, #F5F0FF)', color: '#7044BF', fontSize: 11, fontWeight: 700, padding: '6px 18px', borderRadius: 100, letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid rgba(112,68,191,0.22)', boxShadow: '0 2px 12px rgba(112,68,191,0.1)' }}>
              Comparativa
            </div>
            <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ width: 60, height: 1, background: 'linear-gradient(90deg, #7044BF, transparent)', transformOrigin: 'left' }} />
          </div>

          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-1.5px', lineHeight: 1.12, maxWidth: 680, margin: '0 auto 32px' }}>
            <SegmentTypewriter segments={[
              { text: 'No es un test más. ', color: '#0F0A1E' },
              { text: 'Es el instrumento completo.', gradient: 'linear-gradient(90deg, #7044BF, #C278F5)' },
            ]} speed={28} />
          </h2>

          <motion.div initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.35 }}
            style={{ maxWidth: 540, margin: '0 auto', textAlign: 'left', borderLeft: '3px solid #7044BF', paddingLeft: 24, position: 'relative' }}>
            <div style={{ position: 'absolute', left: -5, top: 4, width: 8, height: 8, borderRadius: '50%', background: '#7044BF', boxShadow: '0 0 10px rgba(112,68,191,0.5)' }} />
            <p style={{ color: '#2D1A5E', fontSize: 16, fontWeight: 600, lineHeight: 1.6, marginBottom: 8, fontFamily: 'Plus Jakarta Sans' }}>
              Cada columna cuenta una historia diferente.
            </p>
            <p style={{ color: '#6B5E8A', fontSize: 14, lineHeight: 1.75, margin: 0 }}>
              El test gratuito no tiene datos. El psicólogo privado no puede escalar. SimulaCarrera combina rigor, escala y precio accesible.
            </p>
          </motion.div>
        </motion.div>

        {/* Tabla */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25, duration: 0.5 }}
          style={{ borderRadius: 22, overflow: 'hidden', boxShadow: '0 12px 56px rgba(112,68,191,0.14), 0 2px 12px rgba(0,0,0,0.06)' }}>

          {/* Cabecera */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.15fr', background: 'linear-gradient(135deg, #1A0840 0%, #2D0E6B 100%)' }}>
            <div style={{ padding: '22px 24px', color: 'rgba(255,255,255,0.35)', fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Característica</div>
            {[
              { label: 'Test gratuito', star: false },
              { label: 'Psicólogo privado', star: false },
              { label: 'SimulaCarrera', star: true },
            ].map(({ label, star }, i) => (
              <div key={label} style={{
                padding: '18px 20px', textAlign: 'center',
                background: star ? 'rgba(112,68,191,0.4)' : 'transparent',
                borderLeft: star ? '1px solid rgba(229,172,249,0.2)' : 'none',
              }}>
                {star && (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginBottom: 5 }}>
                    <Star size={9} fill="#E5ACF9" color="#E5ACF9" />
                    <span style={{ fontSize: 9, fontWeight: 700, color: '#E5ACF9', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Mejor opción</span>
                  </div>
                )}
                <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 13, color: star ? '#fff' : 'rgba(255,255,255,0.55)' }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Filas */}
          {ROWS.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.055, duration: 0.4 }}
              onMouseEnter={() => setHoveredRow(i)}
              onMouseLeave={() => setHoveredRow(null)}
              style={{
                display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.15fr',
                borderTop: '1px solid rgba(112,68,191,0.07)',
                background: hoveredRow === i
                  ? 'rgba(112,68,191,0.05)'
                  : i % 2 === 0 ? '#fff' : 'rgba(245,241,255,0.6)',
                transition: 'background 0.18s',
              }}>
              <div style={{ padding: '16px 24px', fontSize: 13, color: '#2D1A5E', fontWeight: 500, lineHeight: 1.45, display: 'flex', alignItems: 'center' }}>{row.label}</div>
              <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TableCell v={row.free} isSC={false} rowDelay={0.3 + i * 0.055} inView={inView} />
              </div>
              <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TableCell v={row.priv} isSC={false} rowDelay={0.3 + i * 0.055} inView={inView} />
              </div>
              {/* Columna SimulaCarrera — siempre destacada */}
              <div style={{
                padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: hoveredRow === i ? 'rgba(112,68,191,0.12)' : 'rgba(112,68,191,0.06)',
                borderLeft: '2px solid rgba(112,68,191,0.18)',
                transition: 'background 0.18s',
              }}>
                <TableCell v={row.sc} isSC={true} rowDelay={0.3 + i * 0.055} inView={inView} />
              </div>
            </motion.div>
          ))}

          {/* Footer de tabla */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.15fr', background: 'linear-gradient(135deg, #F5F1FF, #EDE5F9)', borderTop: '1px solid rgba(112,68,191,0.1)' }}>
            <div style={{ padding: '18px 24px', fontSize: 12, color: '#9B5FE0', fontWeight: 700, display: 'flex', alignItems: 'center' }}>
              Resultado
            </div>
            <div style={{ padding: '18px 20px', textAlign: 'center', fontSize: 12, color: '#B0A0CC', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Sin certeza</div>
            <div style={{ padding: '18px 20px', textAlign: 'center', fontSize: 12, color: '#B0A0CC', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>No escala</div>
            <div style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: 'rgba(112,68,191,0.1)', borderLeft: '2px solid rgba(112,68,191,0.25)' }}>
              <CheckCircle size={14} color="#7044BF" fill="rgba(112,68,191,0.15)" />
              <span style={{ fontSize: 12, color: '#7044BF', fontWeight: 800, fontFamily: 'Plus Jakarta Sans' }}>Completo y escalable</span>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.75 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: 52 }}>
          <Link to="/precios"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#7044BF', color: '#fff', padding: '14px 30px', borderRadius: 9, fontWeight: 700, fontSize: 15, textDecoration: 'none', fontFamily: 'Plus Jakarta Sans', transition: 'all 0.18s', boxShadow: '0 4px 28px rgba(112,68,191,0.4)' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#5e37a6'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 36px rgba(112,68,191,0.55)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#7044BF'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 28px rgba(112,68,191,0.4)' }}>
            Ver planes y precios <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── CTA final Home ─────────────────────────────────────────────────────── */
function HomeCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const titleWords = ['Implemente', 'el piloto', 'en su primera', 'promoción', 'esta semana']

  return (
    <section ref={ref} style={{ background: 'linear-gradient(155deg, #0D0820 0%, #1A1030 60%, #0D0820 100%)', padding: '108px 28px', position: 'relative', overflow: 'hidden' }}>

      {/* Glows ambientales */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(112,68,191,0.35) 0%, transparent 70%)', pointerEvents: 'none' }}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{ position: 'absolute', bottom: '-10%', left: '20%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(194,120,245,0.25) 0%, transparent 70%)', pointerEvents: 'none' }}
      />
      {/* Líneas decorativas de fondo */}
      <motion.div
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3, duration: 1 }}
        style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(90deg, rgba(112,68,191,0.03) 0px, transparent 1px, transparent 80px, rgba(112,68,191,0.03) 81px)', pointerEvents: 'none' }}
      />

      <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 32 }}
        >
          <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ width: 48, height: 1, background: 'linear-gradient(90deg, transparent, rgba(229,172,249,0.6))', transformOrigin: 'right' }} />
          <div style={{ background: 'rgba(112,68,191,0.28)', color: '#E5ACF9', fontSize: 11, fontWeight: 700, padding: '6px 18px', borderRadius: 100, letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid rgba(229,172,249,0.25)', boxShadow: '0 2px 16px rgba(112,68,191,0.2)' }}>
            Para su institución
          </div>
          <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ width: 48, height: 1, background: 'linear-gradient(90deg, rgba(229,172,249,0.6), transparent)', transformOrigin: 'left' }} />
        </motion.div>

        {/* Título — palabras que entran en cascada */}
        <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(30px, 4.5vw, 52px)', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 28, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0 10px' }}>
          {titleWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 22, filter: 'blur(4px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ delay: 0.25 + i * 0.09, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{
                color: i === 3 ? 'transparent' : '#fff',
                background: i === 3 ? 'linear-gradient(90deg, #C278F5, #E5ACF9)' : 'none',
                WebkitBackgroundClip: i === 3 ? 'text' : 'unset',
                backgroundClip: i === 3 ? 'text' : 'unset',
                display: 'inline-block',
              }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Párrafo */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.45 }}
          style={{ color: 'rgba(255,255,255,0.52)', fontSize: 17, lineHeight: 1.72, maxWidth: 520, margin: '0 auto 44px' }}
        >
          Registro de alumnos en minutos, evaluación en línea, reportes certificados y panel institucional.{' '}
          <span style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>Sin carga operativa para su equipo.</span>
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.82, duration: 0.4 }}
          style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link to="/precios"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#7044BF', color: '#fff', padding: '14px 30px', borderRadius: 9, fontWeight: 700, fontSize: 15, textDecoration: 'none', fontFamily: 'Plus Jakarta Sans', transition: 'all 0.18s', boxShadow: '0 4px 28px rgba(112,68,191,0.4)' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#5e37a6'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 36px rgba(112,68,191,0.55)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#7044BF'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 28px rgba(112,68,191,0.4)' }}>
            Solicitar piloto gratuito <ArrowRight size={16} />
          </Link>
          <Link to="/inversionistas"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: 'rgba(255,255,255,0.7)', padding: '14px 26px', borderRadius: 9, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.16)', fontFamily: 'Plus Jakarta Sans', transition: 'all 0.18s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.16)' }}>
            Ver tesis de inversión <ChevronRight size={15} />
          </Link>
        </motion.div>

        {/* Mascota CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.95, type: 'spring', stiffness: 200, damping: 18 }}
          style={{ marginTop: 52, display: 'flex', justifyContent: 'center' }}
        >
          <MascotAdvisor size={72} delay={0} walk={true} />
        </motion.div>

      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <WaveDivider />
      <Problem />
      <Comparison />
      <HomeCTA />
    </>
  )
}
