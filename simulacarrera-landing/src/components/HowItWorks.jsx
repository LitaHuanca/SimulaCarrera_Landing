import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const STEPS = [
  {
    num: '01',
    icon: '🧠',
    title: 'Intereses RIASEC',
    sub: 'Inventario vocacional · Escala Likert',
    desc: 'Banco propio de 300 ítems calibrados que identifica el perfil de intereses de Holland con Alfa de Cronbach ≥ 0.82.',
    color: '#7044BF',
  },
  {
    num: '02',
    icon: '🎭',
    title: 'Perfil Holland',
    sub: 'Código RIASEC y carreras compatibles',
    desc: 'Cruza los intereses con una base de más de 200 carreras indexadas con datos reales del mercado laboral peruano.',
    color: '#8B52D4',
  },
  {
    num: '03',
    icon: '💼',
    title: 'Simulación SJT',
    sub: 'Juicio situacional · Big Five',
    desc: 'El alumno "vive" un día de trabajo en la carrera que le interesa. No imagina escenarios — los experimenta con IA.',
    color: '#9B5FE0',
  },
  {
    num: '04',
    icon: '⚡',
    title: 'Aptitudes CAT',
    sub: '30 ítems adaptativos · Modelo de Rasch',
    desc: 'Test adaptativo que ajusta la dificultad en tiempo real. Mide razonamiento verbal, numérico, abstracto y mecánico.',
    color: '#A86BE8',
  },
]

function StepCard({ step, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      style={{
        background: '#fff',
        border: '1px solid #E7DAF6',
        borderRadius: 16,
        padding: '28px 28px 28px 24px',
        display: 'flex',
        gap: 20,
        boxShadow: '0 2px 16px rgba(112,68,191,0.06)',
        transition: 'box-shadow 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(112,68,191,0.14)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 16px rgba(112,68,191,0.06)'}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 52, height: 52, borderRadius: 12, background: `${step.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, flexShrink: 0 }}>
          {step.icon}
        </div>
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: step.color, fontWeight: 700, opacity: 0.6 }}>{step.num}</div>
      </div>
      <div>
        <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 17, color: '#0F0A1E', marginBottom: 4 }}>{step.title}</div>
        <div style={{ color: step.color, fontSize: 12, fontWeight: 600, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{step.sub}</div>
        <p style={{ color: '#666', fontSize: 14, lineHeight: 1.6 }}>{step.desc}</p>
      </div>
    </motion.div>
  )
}

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="como-funciona" style={{ padding: '100px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div style={{ display: 'inline-block', background: '#E7DAF6', color: '#7044BF', fontSize: 12, fontWeight: 700, padding: '4px 14px', borderRadius: 100, marginBottom: 16, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Cómo funciona
          </div>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 42px)', color: '#0F0A1E', letterSpacing: '-1px', lineHeight: 1.2, marginBottom: 16 }}>
            Un motor de 4 etapas, no un test más
          </h2>
          <p style={{ color: '#666', fontSize: 17, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            Cada etapa se desbloquea secuencialmente. El alumno avanza a su ritmo y puede retomar en cualquier momento.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: 20, marginBottom: 56 }}>
          {STEPS.map((s, i) => <StepCard key={s.num} step={s} index={i} />)}
        </div>

        {/* AI synthesis callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ background: 'linear-gradient(135deg, #7044BF, #9B5FE0)', borderRadius: 20, padding: '36px 48px', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}
        >
          <div style={{ fontSize: 40 }}>✨</div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 20, color: '#fff', marginBottom: 8 }}>
              Síntesis final con Inteligencia Artificial
            </div>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.6 }}>
              Cruza los 4 resultados con datos reales del mercado laboral peruano: sueldos promedio, empleabilidad y demanda por carrera según INEI, MTPE y SUNEDU.
            </p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 12, padding: '16px 24px', textAlign: 'center' }}>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, marginBottom: 4 }}>Confiabilidad</div>
            <div style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 28, color: '#fff' }}>α ≥ 0.82</div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11, marginTop: 2 }}>Alfa de Cronbach</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 12, padding: '16px 24px', textAlign: 'center' }}>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, marginBottom: 4 }}>Validez de contenido</div>
            <div style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 28, color: '#fff' }}>&gt; 0.85</div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11, marginTop: 2 }}>V de Aiken</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
