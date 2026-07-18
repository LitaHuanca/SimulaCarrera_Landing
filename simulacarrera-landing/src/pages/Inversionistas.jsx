import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Users, DollarSign, Target, CheckCircle2, ArrowRight, Shield, Layers } from 'lucide-react'

const METRICS = [
  { icon: TrendingUp, val: '98.6%', label: 'De ganancia bruta por alumno', sub: 'Ganamos S/ 34.50 de los S/ 35 cobrados' },
  { icon: DollarSign, val: 'S/ 0.50', label: 'Es nuestro único costo por test', sub: 'Generación con Inteligencia Artificial' },
  { icon: Target, val: 'S/ 100K', label: 'Meta de ganancia neta al Año 3', sub: 'Requiere vender a solo 30-35 colegios' },
  { icon: Users, val: '200K+', label: 'Alumnos solo en Lima', sub: 'Mercado potencial inicial según INEI' },
]

const UNIT_ECONOMICS = [
  { label: 'Precio que paga el colegio/alumno', val: 'S/ 35.00', highlight: false },
  { label: 'Lo que nos cuesta generar el test (IA)', val: 'S/ 0.50', highlight: false },
  { label: 'Lo que nos queda de ganancia', val: 'S/ 34.50 (98.6%)', highlight: true },
  { label: 'Gastos fijos de mantener la empresa al mes', val: 'S/ 896', highlight: false },
  { label: 'Gastos fijos totales de todo un año', val: 'S/ 10,752', highlight: false },
]

const SCENARIOS = [
  { label: 'Si nos compra una Academia pequeña', students: 50, revenue: 'S/ 1,750' },
  { label: 'Si nos compra un Colegio promedio', students: 100, revenue: 'S/ 3,500' },
  { label: 'Si nos compra un Colegio grande', students: 300, revenue: 'S/ 10,500' },
  { label: 'Nuestra meta modesta al año', students: '3,178', revenue: 'S/ 112,385', highlight: true },
]

const PHASES = [
  { phase: 'Paso 1', period: 'Meses 1–3', title: 'Creación y Calibración', desc: 'Plataforma construida y preguntas validadas estadísticamente por psicólogos profesionales. Colegios piloto en Lima seleccionados.' },
  { phase: 'Paso 2', period: 'Meses 4–12', title: 'Prueba Piloto', desc: 'Evaluar a los primeros 500 alumnos reales en 5 instituciones para demostrar que la plataforma funciona y encanta a los directores.' },
  { phase: 'Paso 3', period: 'Año 2', title: 'Empezar a Vender', desc: 'Llegar a 20 colegios usando el éxito de los primeros 5 como carta de recomendación. Proyectamos 1,800 alumnos evaluados.' },
  { phase: 'Paso 4', period: 'Año 3', title: 'Punto de Equilibrio', desc: 'Alcanzar 30 a 35 colegios. Con eso, llegamos a nuestra meta de S/ 100,000 de utilidad neta para la empresa.' },
  { phase: 'Paso 5', period: 'Año 4+', title: 'Crecimiento Nacional', desc: 'Una vez dominado Lima, expandiremos la venta a colegios de provincias y buscaremos países vecinos.' },
]

const MARKET = [
  { level: 'Todo el Perú', scope: 'Nivel Nacional', inst: '≈ 8,000 – 10,000', students: '≈ 500,000 – 600,000' },
  { level: 'Solo Lima', scope: 'Nivel Inicial', inst: '≈ 3,200', students: '≈ 200,000' },
  { level: 'Nuestra Meta', scope: 'Lo que necesitamos lograr en 3 años', inst: '30 – 35', students: '≈ 3,178', highlight: true },
]

const WHY_NOW = [
  { icon: Shield, title: 'La Ley nos ayuda', desc: 'El Ministerio de Educación (MINEDU) obliga a los colegios a hacer tutoría vocacional. Nosotros somos la forma más fácil y barata de que cumplan la ley.' },
  { icon: Layers, title: 'Tecnología Barata', desc: 'Gracias a ChatGPT y otras Inteligencias Artificiales modernas, podemos procesar los resultados a centavos por alumno, algo imposible hace 3 años.' },
  { icon: Users, title: 'Generación Digital', desc: 'Los jóvenes ya no quieren marcar bolitas en un papel. Quieren hacer test interactivos en sus celulares, y nuestro producto les da exactamente eso.' },
  { icon: Target, title: 'Cero Competencia Local', desc: 'En Perú solo existen test aburridos de internet que no sirven, o psicólogos carísimos. No hay nada en medio. Somos los primeros.' },
]

export default function Inversionistas() {
  const metricsRef = useRef(null)
  const metricsInView = useInView(metricsRef, { once: true, margin: '-60px' })

  return (
    <>
      {/* Header */}
      <section style={{ background: 'linear-gradient(155deg, #0D0820, #13092A)', padding: '140px 28px 80px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <div style={{ display: 'inline-block', background: 'rgba(112,68,191,0.22)', color: '#E5ACF9', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 100, marginBottom: 20, letterSpacing: '0.07em', textTransform: 'uppercase', border: '1px solid rgba(229,172,249,0.18)' }}>Para inversionistas</div>
          <h1 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(32px, 4.5vw, 52px)', color: '#fff', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 20, maxWidth: 700, margin: '0 auto 20px' }}>
            La tesis, en números
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, lineHeight: 1.65, maxWidth: 560, margin: '0 auto', fontStyle: 'italic' }}>
            "Elige tu carrera con evidencia, no con corazonadas — ese es el mismo estándar con el que construimos este negocio."
          </p>
        </motion.div>
      </section>

      {/* Métricas clave */}
      <section ref={metricsRef} style={{ background: '#fff', padding: '80px 28px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 20, marginBottom: 64 }}>
            {METRICS.map((m, i) => {
              const Icon = m.icon
              return (
                <motion.div key={m.val} initial={{ opacity: 0, y: 20 }} animate={metricsInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08, duration: 0.4 }}
                  style={{ background: '#FAFAFA', border: '1px solid #EBEBEB', borderRadius: 14, padding: '28px 24px' }}>
                  <div style={{ width: 40, height: 40, background: '#F0E8FC', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon size={18} color="#7044BF" />
                  </div>
                  <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 34, color: '#0F0A1E', letterSpacing: '-1px', marginBottom: 6, lineHeight: 1 }}>{m.val}</div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: '#333', marginBottom: 4 }}>{m.label}</div>
                  <div style={{ color: '#888', fontSize: 13 }}>{m.sub}</div>
                </motion.div>
              )
            })}
          </div>

          {/* Economía unitaria + escenarios */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 24 }}>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={metricsInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3, duration: 0.45 }}
              style={{ background: '#0F0A1E', borderRadius: 16, padding: '36px', border: '1px solid rgba(112,68,191,0.2)' }}>
              <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 24 }}>El Negocio por Alumno</div>
              {UNIT_ECONOMICS.map((r, i) => (
                <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 0', borderBottom: i < UNIT_ECONOMICS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>{r.label}</span>
                  <span style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 14, color: r.highlight ? '#E5ACF9' : '#fff' }}>{r.val}</span>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={metricsInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.35, duration: 0.45 }}
              style={{ background: '#F7F5FB', borderRadius: 16, padding: '36px', border: '1px solid #E5E0EE' }}>
              <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 16, color: '#0F0A1E', marginBottom: 24 }}>Escenarios de ingresos</div>
              {SCENARIOS.map((s, i) => (
                <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', marginBottom: 8, borderRadius: 10, background: s.highlight ? '#0F0A1E' : '#fff', border: s.highlight ? 'none' : '1px solid #E5E0EE' }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: s.highlight ? '#fff' : '#333' }}>{s.label}</div>
                    <div style={{ fontSize: 12, color: s.highlight ? 'rgba(255,255,255,0.45)' : '#888', marginTop: 2 }}>{s.students} alumnos</div>
                  </div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 15, color: s.highlight ? '#E5ACF9' : '#7044BF' }}>{s.revenue}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tamaño de mercado */}
      <section style={{ background: '#F7F5FB', padding: '80px 28px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
            style={{ marginBottom: 48 }}>
            <div style={{ display: 'inline-block', background: '#F0E8FC', color: '#7044BF', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 100, marginBottom: 16, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Tamaño de mercado</div>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(24px, 3vw, 34px)', color: '#0F0A1E', letterSpacing: '-1px' }}>El potencial de ventas</h2>
          </motion.div>

          <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid #E5E0EE' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr', background: '#0F0A1E', padding: '12px 20px' }}>
              {['Nivel', 'Alcance', 'Instituciones', 'Estudiantes'].map(h => (
                <div key={h} style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 600 }}>{h}</div>
              ))}
            </div>
            {MARKET.map((m, i) => (
              <motion.div key={m.level} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr', padding: '16px 20px', borderTop: '1px solid #F0EBF8', background: m.highlight ? 'rgba(112,68,191,0.04)' : i % 2 === 0 ? '#fff' : '#FDFAFF', alignItems: 'center' }}>
                <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 14, color: m.highlight ? '#7044BF' : '#0F0A1E' }}>{m.level}</div>
                <div style={{ fontSize: 14, color: '#444' }}>{m.scope}</div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 13, color: m.highlight ? '#7044BF' : '#333', fontWeight: m.highlight ? 700 : 400 }}>{m.inst}</div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 13, color: m.highlight ? '#7044BF' : '#333', fontWeight: m.highlight ? 700 : 400 }}>{m.students}</div>
              </motion.div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            style={{ color: '#888', fontSize: 14, marginTop: 16, lineHeight: 1.6 }}>
            Capturar el SOM representa apenas ~1% de las instituciones y ~1.6% de los estudiantes del SAM — una meta deliberadamente conservadora que deja el resto del mercado limeño, más el mercado nacional y la eventual expansión regional, como recorrido de crecimiento no contemplado en la proyección base.
          </motion.p>
        </div>
      </section>

      {/* Roadmap */}
      <section style={{ background: '#fff', padding: '80px 28px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
            style={{ marginBottom: 48 }}>
            <div style={{ display: 'inline-block', background: '#F0E8FC', color: '#7044BF', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 100, marginBottom: 16, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Roadmap</div>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(24px, 3vw, 34px)', color: '#0F0A1E', letterSpacing: '-1px' }}>Ruta de crecimiento</h2>
          </motion.div>

          <div style={{ position: 'relative' }}>
            {PHASES.map((p, i) => (
              <motion.div key={p.phase} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}
                style={{ display: 'flex', gap: 20, marginBottom: i < PHASES.length - 1 ? 0 : 0 }}>
                {/* Línea + punto */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 36 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: i === 0 ? '#7044BF' : '#F0E8FC', border: `2px solid ${i === 0 ? '#7044BF' : '#E7DAF6'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: i === 0 ? '#fff' : '#7044BF' }}>{i + 1}</span>
                  </div>
                  {i < PHASES.length - 1 && <div style={{ width: 2, flex: 1, background: '#E7DAF6', minHeight: 40, margin: '4px 0' }} />}
                </div>
                {/* Contenido */}
                <div style={{ paddingBottom: i < PHASES.length - 1 ? 32 : 0, paddingTop: 4 }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', marginBottom: 8 }}>
                    <span style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 16, color: '#0F0A1E' }}>{p.title}</span>
                    <span style={{ background: '#F0E8FC', color: '#7044BF', fontSize: 11, fontWeight: 700, padding: '2px 10px', borderRadius: 100 }}>{p.period}</span>
                  </div>
                  <p style={{ color: '#555', fontSize: 14, lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué ahora */}
      <section style={{ background: '#F7F5FB', padding: '80px 28px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
            style={{ marginBottom: 48 }}>
            <div style={{ display: 'inline-block', background: '#F0E8FC', color: '#7044BF', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 100, marginBottom: 16, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Por qué ahora</div>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(24px, 3vw, 34px)', color: '#0F0A1E', letterSpacing: '-1px' }}>
              La convergencia de cuatro factores
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {WHY_NOW.map((w, i) => {
              const Icon = w.icon
              return (
                <motion.div key={w.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}
                  style={{ background: '#fff', border: '1px solid #E5E0EE', borderRadius: 14, padding: '24px' }}>
                  <div style={{ width: 40, height: 40, background: '#F0E8FC', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <Icon size={18} color="#7044BF" />
                  </div>
                  <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 16, color: '#0F0A1E', marginBottom: 8 }}>{w.title}</div>
                  <p style={{ color: '#666', fontSize: 14, lineHeight: 1.65 }}>{w.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA inversores */}
      <section style={{ background: 'linear-gradient(155deg, #0D0820, #1A1030)', padding: '80px 28px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
          style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 20 }}>
            Buscamos inversionistas para acompañar la Fase 1
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: 16, lineHeight: 1.72, marginBottom: 36 }}>
            Visibilidad completa de las métricas del piloto antes de escalar. Un mercado documentado, una obligación normativa real, y una economía unitaria con margen superior al 98%.
          </p>
          <a href="mailto:inversiones@simulacarrera.pe" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#7044BF', color: '#fff', padding: '14px 32px', borderRadius: 9, fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'all 0.18s', boxShadow: '0 4px 28px rgba(112,68,191,0.4)' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#5e37a6'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#7044BF'; e.currentTarget.style.transform = 'translateY(0)' }}>
            Contactar al equipo fundador <ArrowRight size={16} />
          </a>
        </motion.div>
      </section>
    </>
  )
}
