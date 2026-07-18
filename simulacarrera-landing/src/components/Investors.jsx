import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const METRICS = [
  { val: '98.6%', label: 'Margen de contribución por alumno', sub: 'S/ 34.50 de S/ 35.00' },
  { val: 'S/ 0.50', label: 'Costo variable por alumno', sub: 'IA + procesamiento PDF' },
  { val: 'S/ 100K', label: 'Utilidad neta año 3', sub: '~3,178 alumnos evaluados/año' },
  { val: '200K+', label: 'Estudiantes en el SAM', sub: 'Lima Metropolitana · documentado' },
]

const PHASES = [
  { phase: 'Fase 0', period: 'Meses 1–3', title: 'Preparación', desc: 'MVP cerrado, banco de 300 ítems RIASEC y módulo SJT/Big Five calibrados, 3 instituciones piloto seleccionadas en Miraflores y San Isidro.' },
  { phase: 'Fase 1', period: 'Meses 4–12', title: 'Piloto', desc: '5 instituciones activas, ≈ 500 alumnos evaluados, al menos 2 casos de éxito documentados con métricas verificables.' },
  { phase: 'Fase 2', period: 'Año 2', title: 'Expansión', desc: '20 instituciones acumuladas, ≈ 1,800 alumnos/año, primera recalibración del banco de ítems con datos reales de uso.' },
  { phase: 'Fase 3', period: 'Año 3', title: 'Consolidación', desc: '30–35 instituciones, ≈ 3,178 alumnos/año. Meta de S/ 100,000 de utilidad neta alcanzada.' },
  { phase: 'Fase 4', period: 'Año 4+', title: 'Escalamiento', desc: 'Expansión hacia colegios fuera de Lima y hacia mercados latinoamericanos comparables.' },
]

export default function Investors() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="inversionistas" style={{ background: 'linear-gradient(180deg, #0F0A1E 0%, #1A1030 100%)', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div style={{ display: 'inline-block', background: 'rgba(112,68,191,0.3)', color: '#E5ACF9', fontSize: 12, fontWeight: 700, padding: '4px 14px', borderRadius: 100, marginBottom: 16, letterSpacing: '0.06em', textTransform: 'uppercase', border: '1px solid rgba(229,172,249,0.2)' }}>
            Para inversionistas
          </div>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.2, marginBottom: 16 }}>
            La tesis, en números
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 17, maxWidth: 600, margin: '0 auto', lineHeight: 1.7, fontStyle: 'italic' }}>
            "Elige tu carrera con evidencia, no con corazonadas — ese es el mismo estándar con el que construimos este negocio."
          </p>
        </motion.div>

        {/* Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 64 }}>
          {METRICS.map((m, i) => (
            <motion.div
              key={m.val}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(112,68,191,0.3)', borderRadius: 16, padding: '28px 24px', textAlign: 'center' }}
            >
              <div style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 36, color: '#E5ACF9', marginBottom: 8, letterSpacing: '-1px' }}>{m.val}</div>
              <div style={{ color: '#fff', fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{m.label}</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>{m.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Unit economics table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(112,68,191,0.2)', borderRadius: 20, padding: '40px 40px', marginBottom: 64 }}
        >
          <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 20, color: '#fff', marginBottom: 28 }}>Economía unitaria</div>
          {[
            { label: 'Precio de venta por alumno', val: 'S/ 35.00', highlight: false },
            { label: 'Costo variable (IA + PDF)', val: 'S/ 0.50', highlight: false },
            { label: 'Margen de contribución por alumno', val: 'S/ 34.50 (98.6%)', highlight: true },
            { label: 'Costos fijos mensuales (cloud + psicólogo)', val: 'S/ 896', highlight: false },
            { label: 'Costos fijos anuales', val: 'S/ 10,752', highlight: false },
          ].map((r, i) => (
            <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>{r.label}</span>
              <span style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 15, color: r.highlight ? '#E5ACF9' : '#fff' }}>{r.val}</span>
            </div>
          ))}
        </motion.div>

        {/* Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{ marginBottom: 64 }}
        >
          <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 20, color: '#fff', marginBottom: 28 }}>Ruta de crecimiento</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PHASES.map((p, i) => (
              <div key={p.phase} style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: i === 0 ? '#7044BF' : 'rgba(112,68,191,0.3)', border: '2px solid rgba(112,68,191,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 700 }}>
                    {i + 1}
                  </div>
                  {i < PHASES.length - 1 && <div style={{ width: 2, height: 48, background: 'rgba(112,68,191,0.2)', margin: '4px 0' }} />}
                </div>
                <div style={{ paddingTop: 6, paddingBottom: i < PHASES.length - 1 ? 0 : 0 }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'baseline', marginBottom: 6, flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 16, color: '#fff' }}>{p.title}</span>
                    <span style={{ background: 'rgba(229,172,249,0.15)', color: '#E5ACF9', fontSize: 11, fontWeight: 600, padding: '2px 10px', borderRadius: 100 }}>{p.period}</span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6, marginBottom: i < PHASES.length - 1 ? 16 : 0 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Investor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ background: 'linear-gradient(135deg, rgba(112,68,191,0.2), rgba(229,172,249,0.1))', border: '1px solid rgba(112,68,191,0.3)', borderRadius: 20, padding: '48px', textAlign: 'center' }}
        >
          <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(22px, 3vw, 32px)', color: '#fff', marginBottom: 16, letterSpacing: '-0.5px' }}>
            Buscamos inversionistas para la Fase 1
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.7, maxWidth: 560, margin: '0 auto 32px', }}>
            Acompañe la validación desde el piloto, con visibilidad completa de las métricas antes de escalar. Un mercado documentado, una obligación normativa real, y una economía unitaria con margen superior al 98%.
          </p>
          <a href="mailto:inversiones@simulacarrera.pe"
            style={{ display: 'inline-block', background: 'linear-gradient(135deg, #7044BF, #9B5FE0)', color: '#fff', padding: '14px 36px', borderRadius: 10, fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'all 0.2s', boxShadow: '0 4px 24px rgba(112,68,191,0.4)' }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Contactar al equipo fundador →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
