import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const TABS = [
  { id: 'student', label: 'Vista del alumno', icon: '🎓' },
  { id: 'stages', label: 'Mapa de etapas', icon: '🗺️' },
  { id: 'careers', label: 'Explorar carreras', icon: '💼' },
  { id: 'panel', label: 'Panel institucional', icon: '🏫' },
  { id: 'reports', label: 'Reportes y análisis', icon: '📊' },
]

function MockupStudent() {
  return (
    <div style={{ background: '#F4F0FA', borderRadius: 12, padding: 20, fontFamily: 'Inter' }}>
      <div style={{ background: 'linear-gradient(135deg, #7044BF, #9B5FE0)', borderRadius: 10, padding: '20px 24px', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.2)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>✨</div>
        <div>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Evaluaciones vocacionales</div>
          <div style={{ color: '#fff', fontSize: 13, marginTop: 2 }}>RIASEC → Holland → SJT → CAT → reporte</div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {[
          { title: 'Explorar carreras', sub: 'Fichas de realidad profesional y simulaciones.' },
          { title: 'Historial de reportes', sub: '4 reportes disponibles' },
        ].map(c => (
          <div key={c.title} style={{ background: '#fff', borderRadius: 10, padding: 16, border: '1px solid #E7DAF6' }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: '#0F0A1E', marginBottom: 4 }}>{c.title}</div>
            <div style={{ color: '#7044BF', fontSize: 12 }}>{c.sub}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MockupStages() {
  const stages = [
    { n: 1, name: 'Intereses RIASEC', sub: 'Inventario vocacional · escala Likert', locked: false },
    { n: 2, name: 'Perfil Holland', sub: 'Código RIASEC y carreras compatibles', locked: true },
    { n: 3, name: 'Simulación SJT', sub: 'Juicio situacional · Big Five', locked: true },
    { n: 4, name: 'Aptitudes CAT', sub: '30 ítems adaptativos · Rasch', locked: true },
  ]
  return (
    <div style={{ background: '#F4F0FA', borderRadius: 12, padding: 20 }}>
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 18, color: '#0F0A1E' }}>Mapa de etapas</div>
        <div style={{ color: '#7044BF', fontSize: 13, marginTop: 4 }}>Completa las 4 fases a tu ritmo.</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {stages.map(s => (
          <div key={s.n} style={{ background: '#fff', borderRadius: 10, padding: 16, border: `1px solid ${!s.locked ? '#7044BF' : '#E7DAF6'}`, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 10, left: 12, background: '#E7DAF6', color: '#7044BF', borderRadius: '50%', width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700 }}>{s.n}</div>
            <div style={{ paddingTop: 20 }}>
              <div style={{ fontSize: 22, marginBottom: 6 }}>{s.locked ? '🔒' : '🧠'}</div>
              <div style={{ fontWeight: 700, fontSize: 14, color: '#0F0A1E', marginBottom: 3 }}>{s.name}</div>
              <div style={{ color: '#7044BF', fontSize: 11 }}>{s.sub}</div>
              {!s.locked && (
                <div style={{ marginTop: 10, background: '#7044BF', color: '#fff', borderRadius: 6, padding: '6px 12px', fontSize: 12, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 4 }}>▶ Iniciar</div>
              )}
              {s.locked && <div style={{ color: '#bbb', fontSize: 11, marginTop: 8 }}>Bloqueada</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MockupCareers() {
  const careers = [
    { area: 'Ingeniería', name: 'Ciencia de Datos', desc: 'Análisis de grandes volúmenes de datos', salary: 'S/. 7,200', emp: 90, demand: 'alta' },
    { area: 'Negocios', name: 'Administración', desc: 'Gestión de organizaciones', salary: 'S/. 5,200', emp: 80, demand: 'alta' },
    { area: 'Ingeniería', name: 'Ing. de Software', desc: 'Desarrollo e implementación de sistemas', salary: 'S/. 6,500', emp: 88, demand: 'alta' },
  ]
  return (
    <div style={{ background: '#F4F0FA', borderRadius: 12, padding: 20 }}>
      <div style={{ marginBottom: 12 }}>
        <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 18, color: '#0F0A1E' }}>Explorar carreras</div>
        <div style={{ color: '#888', fontSize: 13 }}>Fichas de realidad profesional: salarios, empleabilidad, universidades.</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {careers.map(c => (
          <div key={c.name} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid #E7DAF6' }}>
            <div style={{ color: '#7044BF', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', marginBottom: 3 }}>{c.area}</div>
            <div style={{ fontWeight: 700, fontSize: 15, color: '#0F0A1E', marginBottom: 4 }}>{c.name}</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span style={{ background: '#E7DAF6', color: '#7044BF', borderRadius: 4, padding: '2px 8px', fontSize: 11, fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{c.salary}</span>
              <span style={{ background: '#d4f5e2', color: '#1a7a45', borderRadius: 4, padding: '2px 8px', fontSize: 11, fontWeight: 600 }}>Empleab. {c.emp}</span>
              <span style={{ background: '#e8f4fd', color: '#2980b9', borderRadius: 4, padding: '2px 8px', fontSize: 11, fontWeight: 600 }}>Demanda {c.demand}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MockupPanel() {
  return (
    <div style={{ background: '#F4F0FA', borderRadius: 12, padding: 20 }}>
      <div style={{ background: 'linear-gradient(135deg, #7044BF, #5a33a0)', borderRadius: 10, padding: '20px 24px', marginBottom: 16 }}>
        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Panel de red</div>
        <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 24, color: '#fff', marginTop: 4 }}>Mi Institución</div>
        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>Distribuye cupos y monitorea desde un solo lugar.</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
        {[{ label: 'Cupos totales', val: '100' }, { label: 'Asignados', val: '70' }, { label: 'Disponibles', val: '30' }].map(m => (
          <div key={m.label} style={{ background: '#fff', borderRadius: 10, padding: 14, border: '1px solid #E7DAF6', textAlign: 'center' }}>
            <div style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 24, color: '#7044BF' }}>{m.val}</div>
            <div style={{ color: '#888', fontSize: 11, marginTop: 4 }}>{m.label}</div>
          </div>
        ))}
      </div>
      <div style={{ background: '#fff', borderRadius: 10, padding: 14, border: '1px solid #E7DAF6', marginTop: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span style={{ fontSize: 13, fontWeight: 600 }}>Distribución de cupos</span>
          <span style={{ color: '#7044BF', fontWeight: 700 }}>70%</span>
        </div>
        <div style={{ height: 8, background: '#E7DAF6', borderRadius: 4, overflow: 'hidden' }}>
          <div style={{ width: '70%', height: '100%', background: 'linear-gradient(90deg, #7044BF, #E5ACF9)', borderRadius: 4 }} />
        </div>
      </div>
    </div>
  )
}

function MockupReports() {
  return (
    <div style={{ background: '#F4F0FA', borderRadius: 12, padding: 20 }}>
      <div style={{ background: 'linear-gradient(135deg, #7044BF, #9B5FE0)', borderRadius: 10, padding: '16px 20px', marginBottom: 14 }}>
        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11, fontWeight: 600, textTransform: 'uppercase' }}>Estadísticas vocacionales</div>
        <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 18, color: '#fff', marginTop: 4 }}>Reportes y análisis</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
        {[
          { icon: '👥', label: 'Alumnos registrados', val: '11', sub: 'En esta institución' },
          { icon: '✅', label: 'Han tomado el test', val: '7/11', sub: '64% de participación' },
          { icon: '📚', label: 'Carrera más elegida', val: 'Ing. Civil', sub: '4 alumnos' },
          { icon: '🎯', label: 'Área con más afinidad', val: 'Ingeniería', sub: '5 alumnos' },
        ].map(s => (
          <div key={s.label} style={{ background: '#fff', borderRadius: 10, padding: '12px 14px', border: '1px solid #E7DAF6' }}>
            <div style={{ fontSize: 16 }}>{s.icon}</div>
            <div style={{ fontWeight: 700, fontSize: 15, color: '#0F0A1E', margin: '4px 0 2px' }}>{s.val}</div>
            <div style={{ color: '#888', fontSize: 11 }}>{s.sub}</div>
          </div>
        ))}
      </div>
      <div style={{ background: '#fff', borderRadius: 10, padding: 14, border: '1px solid #E7DAF6', textAlign: 'center' }}>
        <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 8, color: '#0F0A1E' }}>Distribución por área vocacional</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, fontSize: 12 }}>
          {[{ color: '#7044BF', label: 'Ingeniería', pct: '71%' }, { color: '#E5ACF9', label: 'Arte y Diseño', pct: '14%' }, { color: '#E7DAF6', label: 'Negocios', pct: '14%' }].map(d => (
            <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: d.color }} />
              <span style={{ color: '#666' }}>{d.label} {d.pct}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const MOCKUPS = { student: MockupStudent, stages: MockupStages, careers: MockupCareers, panel: MockupPanel, reports: MockupReports }

export default function Screenshots() {
  const [active, setActive] = useState('student')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const Mockup = MOCKUPS[active]

  return (
    <section style={{ background: '#0F0A1E', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <div style={{ display: 'inline-block', background: 'rgba(112,68,191,0.3)', color: '#E5ACF9', fontSize: 12, fontWeight: 700, padding: '4px 14px', borderRadius: 100, marginBottom: 16, letterSpacing: '0.06em', textTransform: 'uppercase', border: '1px solid rgba(229,172,249,0.2)' }}>
            El producto
          </div>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 42px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.2, marginBottom: 16 }}>
            Una plataforma construida para instituciones
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 17, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Desde el primer acceso del alumno hasta el reporte certificado del director. Todo en un solo lugar.
          </p>
        </motion.div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setActive(t.id)}
              style={{
                background: active === t.id ? '#7044BF' : 'rgba(255,255,255,0.06)',
                color: active === t.id ? '#fff' : 'rgba(255,255,255,0.6)',
                border: active === t.id ? 'none' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: 100,
                padding: '8px 18px',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'Inter',
                transition: 'all 0.2s',
                display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              <span>{t.icon}</span> {t.label}
            </button>
          ))}
        </div>

        {/* Mockup window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ background: '#1A1030', borderRadius: 20, padding: 4, border: '1px solid rgba(112,68,191,0.3)', boxShadow: '0 24px 80px rgba(0,0,0,0.5)' }}
        >
          {/* Browser chrome */}
          <div style={{ background: '#251840', borderRadius: '16px 16px 0 0', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {['#ff5f56','#ffbd2e','#27c93f'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
            </div>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 6, padding: '5px 14px', textAlign: 'center', color: 'rgba(255,255,255,0.35)', fontSize: 12 }}>
              app.simulacarrera.pe
            </div>
          </div>
          {/* Content */}
          <div style={{ padding: 20, minHeight: 300 }}>
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                <Mockup />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
