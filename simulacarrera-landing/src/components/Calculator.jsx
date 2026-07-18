import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Calculator() {
  const [students, setStudents] = useState(100)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const simulaCost = students * 35
  const privateLow = students * 99
  const privateHigh = students * 220
  const saving = Math.round(((privateLow - simulaCost) / privateLow) * 100)

  return (
    <section style={{ background: '#F9F7FF', padding: '100px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <div style={{ display: 'inline-block', background: '#E7DAF6', color: '#7044BF', fontSize: 12, fontWeight: 700, padding: '4px 14px', borderRadius: 100, marginBottom: 16, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Calculadora de ahorro
          </div>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 38px)', color: '#0F0A1E', letterSpacing: '-1px', marginBottom: 16 }}>
            ¿Cuánto pagaría su institución hoy?
          </h2>
          <p style={{ color: '#666', fontSize: 16, lineHeight: 1.7 }}>
            Mueva el control para ver la diferencia real.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ background: '#fff', borderRadius: 20, padding: '48px', border: '1px solid #E7DAF6', boxShadow: '0 8px 40px rgba(112,68,191,0.08)' }}
        >
          {/* Slider */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
              <label style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 16, color: '#0F0A1E' }}>Alumnos en su institución</label>
              <span style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 32, color: '#7044BF' }}>{students}</span>
            </div>
            <input
              type="range" min={20} max={500} step={10} value={students}
              onChange={e => setStudents(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#7044BF', height: 6, cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#aaa', fontSize: 12, marginTop: 6 }}>
              <span>20</span><span>500</span>
            </div>
          </div>

          {/* Results grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
            <div style={{ background: '#F9F7FF', borderRadius: 14, padding: '24px', border: '1px solid #E7DAF6' }}>
              <div style={{ color: '#999', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Psicólogo vocacional privado</div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 13, color: '#bbb', marginBottom: 4 }}>S/ {privateLow.toLocaleString()} – S/ {privateHigh.toLocaleString()}</div>
              <div style={{ color: '#aaa', fontSize: 12 }}>Evaluando uno por uno · semanas</div>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #7044BF, #9B5FE0)', borderRadius: 14, padding: '24px' }}>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>SimulaCarrera</div>
              <div style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 32, color: '#fff', marginBottom: 4 }}>
                S/ {simulaCost.toLocaleString()}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>En simultáneo · con respaldo COP</div>
            </div>
          </div>

          {/* Savings banner */}
          <motion.div
            key={saving}
            initial={{ scale: 0.97, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ background: '#0F0A1E', borderRadius: 12, padding: '20px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}
          >
            <div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginBottom: 4 }}>Ahorro estimado vs. psicólogo privado</div>
              <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 28, color: '#E5ACF9' }}>
                {saving}% más económico
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginBottom: 4 }}>Mismo respaldo profesional certificado</div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>✓ Firma COP · ✓ Escala simultánea</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
