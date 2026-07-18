import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ROWS = [
  { label: 'Precio por alumno', free: 'S/ 0', private: 'S/ 99 – S/ 220', simula: 'S/ 35' },
  { label: 'Simulación conductual inmersiva (SJT + Big Five)', free: false, private: 'Ocasional', simula: true },
  { label: 'Test de aptitudes adaptativo (CAT / Rasch)', free: false, private: 'Variable', simula: true },
  { label: 'Certificación firmada por psicólogo colegiado', free: false, private: true, simula: true },
  { label: 'Panel agregado por promoción para la institución', free: false, private: false, simula: true },
  { label: 'Escala simultánea (cientos de alumnos a la vez)', free: 'Sin respaldo', private: 'No, uno a la vez', simula: true },
  { label: 'Datos cruzados con mercado laboral peruano', free: false, private: 'Rara vez', simula: true },
  { label: 'Cumplimiento documentado ante MINEDU', free: false, private: false, simula: true },
]

function Cell({ val, highlight }) {
  if (val === true) return <span style={{ color: '#7044BF', fontSize: 18 }}>✓</span>
  if (val === false) return <span style={{ color: '#ccc', fontSize: 16 }}>—</span>
  return <span style={{ fontSize: 13, color: highlight ? '#7044BF' : '#888', fontWeight: highlight ? 700 : 400 }}>{val}</span>
}

export default function Comparison() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section style={{ background: '#fff', padding: '100px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <div style={{ display: 'inline-block', background: '#E7DAF6', color: '#7044BF', fontSize: 12, fontWeight: 700, padding: '4px 14px', borderRadius: 100, marginBottom: 16, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Comparativa
          </div>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 42px)', color: '#0F0A1E', letterSpacing: '-1px', marginBottom: 16 }}>
            No es un test más. Es el instrumento completo.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #E7DAF6', boxShadow: '0 4px 32px rgba(112,68,191,0.08)' }}
        >
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: '#0F0A1E' }}>
            <div style={{ padding: '16px 20px', color: 'rgba(255,255,255,0.5)', fontSize: 13, fontWeight: 600 }}>Característica</div>
            {['Test gratuito', 'Psicólogo privado', 'SimulaCarrera'].map((h, i) => (
              <div key={h} style={{ padding: '16px 16px', textAlign: 'center', fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 13, color: i === 2 ? '#E5ACF9' : 'rgba(255,255,255,0.7)', background: i === 2 ? 'rgba(112,68,191,0.3)' : 'transparent' }}>
                {h}
              </div>
            ))}
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.35 }}
              style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', borderTop: '1px solid #E7DAF6', background: i % 2 === 0 ? '#fff' : '#FDFAFF' }}
            >
              <div style={{ padding: '14px 20px', fontSize: 14, color: '#333', fontWeight: 500 }}>{row.label}</div>
              <div style={{ padding: '14px 16px', textAlign: 'center' }}><Cell val={row.free} /></div>
              <div style={{ padding: '14px 16px', textAlign: 'center' }}><Cell val={row.private} /></div>
              <div style={{ padding: '14px 16px', textAlign: 'center', background: 'rgba(112,68,191,0.04)' }}><Cell val={row.simula} highlight /></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
