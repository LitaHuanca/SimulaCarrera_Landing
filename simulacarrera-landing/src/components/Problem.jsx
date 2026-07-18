import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function StatCard({ value, label, sub, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      style={{ textAlign: 'center', padding: '32px 24px', background: '#fff', borderRadius: 16, border: '1px solid #E7DAF6', boxShadow: '0 4px 24px rgba(112,68,191,0.06)' }}
    >
      <div style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 52, color: '#7044BF', lineHeight: 1, marginBottom: 8 }}>{value}</div>
      <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 16, color: '#1a1a2e', marginBottom: 6 }}>{label}</div>
      <div style={{ color: '#888', fontSize: 14, lineHeight: 1.5 }}>{sub}</div>
    </motion.div>
  )
}

export default function Problem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section style={{ background: '#F9F7FF', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div style={{ display: 'inline-block', background: '#E7DAF6', color: '#7044BF', fontSize: 12, fontWeight: 700, padding: '4px 14px', borderRadius: 100, marginBottom: 16, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            El problema
          </div>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 42px)', color: '#0F0A1E', letterSpacing: '-1px', lineHeight: 1.2, maxWidth: 680, margin: '0 auto 20px' }}>
            Cada año, miles de alumnos eligen una carrera que no era para ellos
          </h2>
          <p style={{ color: '#666', fontSize: 17, lineHeight: 1.7, maxWidth: 580, margin: '0 auto' }}>
            La deserción universitaria no es un fallo del alumno. Es el resultado de una decisión tomada sin información real. Y hoy, esa información no existe en ningún colegio ni academia del Perú.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24, marginBottom: 64 }}>
          <StatCard value="1 de 3" label="alumnos cambia de carrera" sub="en los primeros 2 años de universidad" delay={0} />
          <StatCard value="65%" label="menos costoso que un psicólogo" sub="privado por alumno (S/35 vs S/99–220)" delay={0.1} />
          <StatCard value="200K+" label="estudiantes en Lima" sub="que necesitan orientación vocacional real" delay={0.2} />
          <StatCard value="RM 212" label="MINEDU obliga tutoría vocacional" sub="pero la mayoría de colegios la cubre de forma simbólica" delay={0.3} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ background: 'linear-gradient(135deg, #0F0A1E, #1A1030)', borderRadius: 20, padding: '40px 48px', display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}
        >
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ color: '#E5ACF9', fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 12 }}>La pregunta que debería hacerse</div>
            <p style={{ color: '#fff', fontSize: 20, fontWeight: 600, fontFamily: 'Plus Jakarta Sans', lineHeight: 1.5, fontStyle: 'italic' }}>
              "¿Cuánto le costaría contratar a un psicólogo vocacional para evaluar, uno por uno, a toda su promoción?"
            </p>
          </div>
          <div style={{ background: 'rgba(112,68,191,0.3)', borderRadius: 14, padding: '24px 32px', textAlign: 'center', minWidth: 220 }}>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginBottom: 8 }}>Promoción de 100 alumnos</div>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 13, color: '#E5ACF9', textDecoration: 'line-through', marginBottom: 4 }}>S/ 9,900 – S/ 22,000</div>
            <div style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 32, color: '#fff' }}>S/ 3,500</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 4 }}>con SimulaCarrera</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
