import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const FEATURES = [
  'Diagnóstico RIASEC con 300 ítems calibrados',
  'Simulación conductual inmersiva SJT + Big Five',
  'Test de aptitudes adaptativo CAT / Rasch',
  'Síntesis final con IA + datos INEI/MTPE/SUNEDU',
  'Reporte PDF certificado por psicólogo COP',
  'Panel institucional con estadísticas agregadas',
  'Carga masiva de alumnos vía CSV',
  'Cumplimiento documentado ante MINEDU',
  'Acompañamiento comercial directo',
]

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="precios" style={{ background: '#fff', padding: '100px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <div style={{ display: 'inline-block', background: '#E7DAF6', color: '#7044BF', fontSize: 12, fontWeight: 700, padding: '4px 14px', borderRadius: 100, marginBottom: 16, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Precios
          </div>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 42px)', color: '#0F0A1E', letterSpacing: '-1px', marginBottom: 16 }}>
            Un precio que cabe en cualquier partida de tutoría
          </h2>
          <p style={{ color: '#666', fontSize: 17, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Sin suscripciones. Sin mínimos de contrato. Paga por alumno activo por ciclo académico.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {/* Main pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={{ background: 'linear-gradient(145deg, #0F0A1E, #1A1030)', borderRadius: 20, padding: '40px 36px', border: '1px solid rgba(112,68,191,0.3)', gridColumn: 'span 1' }}
          >
            <div style={{ display: 'inline-block', background: 'rgba(229,172,249,0.15)', color: '#E5ACF9', fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 100, marginBottom: 20, border: '1px solid rgba(229,172,249,0.3)' }}>
              Canal institucional
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 6 }}>
              <span style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 52, color: '#fff', letterSpacing: '-2px' }}>S/ 35</span>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>/alumno</span>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginBottom: 32 }}>por ciclo académico · sin mínimo</div>

            {FEATURES.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.04 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}
              >
                <span style={{ color: '#E5ACF9', fontSize: 14, marginTop: 1, flexShrink: 0 }}>✓</span>
                <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.4 }}>{f}</span>
              </motion.div>
            ))}

            <a href="#cta" style={{ display: 'block', marginTop: 32, background: '#7044BF', color: '#fff', padding: '14px', borderRadius: 10, textAlign: 'center', fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'all 0.2s', boxShadow: '0 4px 20px rgba(112,68,191,0.4)' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#5a33a0'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#7044BF'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Solicitar piloto gratuito →
            </a>
          </motion.div>

          {/* Reference cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{ background: '#F9F7FF', borderRadius: 16, padding: '28px', border: '1px solid #E7DAF6' }}
            >
              <div style={{ color: '#999', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>Ejemplo: colegio 100 alumnos</div>
              <div style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 28, color: '#7044BF', marginBottom: 4 }}>S/ 3,500</div>
              <div style={{ color: '#888', fontSize: 13 }}>total · en simultáneo · en días</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{ background: '#F9F7FF', borderRadius: 16, padding: '28px', border: '1px solid #E7DAF6' }}
            >
              <div style={{ color: '#999', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>Ejemplo: academia 50 alumnos</div>
              <div style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 28, color: '#7044BF', marginBottom: 4 }}>S/ 1,750</div>
              <div style={{ color: '#888', fontSize: 13 }}>total · piloto disponible ahora</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{ background: '#0F0A1E', borderRadius: 16, padding: '28px' }}
            >
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginBottom: 8 }}>También disponible para</div>
              <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 8 }}>Alumnos individuales</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.5 }}>Al mismo precio que el canal institucional: S/ 35. La evidencia de que el mercado ya valora el producto.</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
