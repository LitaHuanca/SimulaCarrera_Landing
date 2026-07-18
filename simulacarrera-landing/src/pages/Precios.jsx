import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, ArrowRight, Upload, Zap, FileText, BarChart2, ShieldCheck } from 'lucide-react'

const PLAN_FEATURES = [
  'Diagnóstico RIASEC con 300 ítems calibrados',
  'Simulación conductual inmersiva SJT + Big Five',
  'Test de aptitudes adaptativo CAT / Rasch',
  'Síntesis final con IA + datos INEI / MTPE / SUNEDU',
  'Reporte PDF certificado por psicólogo colegiado (COP)',
  'Panel institucional con estadísticas agregadas',
  'Carga masiva de alumnos vía CSV',
  'Cumplimiento documentado ante MINEDU',
  'Acompañamiento comercial directo',
]

function Calculator() {
  const [students, setStudents] = useState(100)
  const simulaCost = students * 35
  const privateLow = students * 99
  const privateHigh = students * 220
  const saving = Math.round(((privateLow - simulaCost) / privateLow) * 100)

  return (
    <div style={{ background: '#fff', borderRadius: 16, padding: '40px', border: '1px solid #E5E0EE', boxShadow: '0 4px 24px rgba(112,68,191,0.06)' }}>
      <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 18, color: '#0F0A1E', marginBottom: 24 }}>Calculadora de ahorro</div>

      <div style={{ marginBottom: 36 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
          <label style={{ fontSize: 14, fontWeight: 600, color: '#333' }}>Alumnos en 4.° y 5.° de secundaria</label>
          <span style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 28, color: '#7044BF', letterSpacing: '-1px' }}>{students}</span>
        </div>
        <input type="range" min={20} max={500} step={5} value={students} onChange={e => setStudents(Number(e.target.value))}
          style={{ width: '100%', accentColor: '#7044BF', cursor: 'pointer' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#bbb', fontSize: 12, marginTop: 6 }}>
          <span>20</span><span>500</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
        <div style={{ background: '#F7F5FB', borderRadius: 12, padding: '20px', border: '1px solid #E5E0EE' }}>
          <div style={{ color: '#999', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>Psicólogo privado</div>
          <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 20, color: '#ccc', letterSpacing: '-0.5px' }}>
            S/ {privateLow.toLocaleString()}–{privateHigh.toLocaleString()}
          </div>
          <div style={{ color: '#bbb', fontSize: 12, marginTop: 4 }}>Uno por uno · semanas</div>
        </div>
        <div style={{ background: 'linear-gradient(135deg, #7044BF, #9B5FE0)', borderRadius: 12, padding: '20px' }}>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>SimulaCarrera</div>
          <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 28, color: '#fff', letterSpacing: '-1px', lineHeight: 1 }}>
            S/ {simulaCost.toLocaleString()}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, marginTop: 4 }}>En simultáneo · con respaldo COP</div>
        </div>
      </div>

      <motion.div key={saving} initial={{ scale: 0.98 }} animate={{ scale: 1 }}
        style={{ background: '#0F0A1E', borderRadius: 12, padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
        <div>
          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12, marginBottom: 3 }}>Ahorro estimado vs. psicólogo privado</div>
          <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 24, color: '#E5ACF9', letterSpacing: '-0.5px' }}>{saving}% más económico</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12, marginBottom: 3 }}>Mismo respaldo profesional</div>
          <div style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>Firma COP · Escala simultánea</div>
        </div>
      </motion.div>
    </div>
  )
}

function PilotForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nombre: '', cargo: '', colegio: '', alumnos: '', email: '', telefono: '' })
  const fields = [
    { key: 'nombre', label: 'Nombre completo', ph: 'Ej. María García López', type: 'text' },
    { key: 'cargo', label: 'Cargo', ph: 'Director, Coordinador, Administrador...', type: 'text' },
    { key: 'colegio', label: 'Nombre de la institución', ph: 'Colegio / Academia preuniversitaria', type: 'text' },
    { key: 'alumnos', label: 'N.° de alumnos en 4.° y 5.° de sec.', ph: 'Ej. 80', type: 'text' },
    { key: 'email', label: 'Email institucional', ph: 'director@colegio.edu.pe', type: 'email' },
    { key: 'telefono', label: 'Teléfono / WhatsApp', ph: '+51 9XX XXX XXX', type: 'text' },
  ]

  if (sent) return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} style={{ background: '#fff', borderRadius: 16, padding: '56px 40px', border: '1px solid #E5E0EE', textAlign: 'center' }}>
      <div style={{ width: 56, height: 56, background: '#F0E8FC', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
        <CheckCircle2 size={26} color="#7044BF" />
      </div>
      <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 22, color: '#0F0A1E', marginBottom: 12 }}>Solicitud enviada</div>
      <p style={{ color: '#666', fontSize: 15, lineHeight: 1.65 }}>Nos pondremos en contacto en menos de 24 horas para coordinar el piloto con su institución.</p>
    </motion.div>
  )

  return (
    <div id="piloto" style={{ background: '#fff', borderRadius: 16, padding: '40px', border: '1px solid #E5E0EE', boxShadow: '0 4px 24px rgba(112,68,191,0.06)' }}>
      <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 18, color: '#0F0A1E', marginBottom: 6 }}>Solicitar piloto gratuito</div>
      <div style={{ color: '#888', fontSize: 14, marginBottom: 28 }}>Sin compromiso. Respuesta en menos de 24 horas.</div>
      <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {fields.map(f => (
            <div key={f.key} style={{ gridColumn: f.key === 'email' || f.key === 'telefono' ? 'span 1' : 'span 1' }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#444', marginBottom: 6 }}>{f.label}</label>
              <input required type={f.type} placeholder={f.ph} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1.5px solid #E5E0EE', fontSize: 14, fontFamily: 'Inter', outline: 'none', transition: 'border 0.18s', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor = '#7044BF'}
                onBlur={e => e.target.style.borderColor = '#E5E0EE'} />
            </div>
          ))}
        </div>
        <button type="submit" style={{ width: '100%', marginTop: 20, background: '#7044BF', color: '#fff', padding: '13px', borderRadius: 9, border: 'none', fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 15, cursor: 'pointer', transition: 'all 0.18s', boxShadow: '0 4px 16px rgba(112,68,191,0.32)' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#5e37a6'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#7044BF'; e.currentTarget.style.transform = 'translateY(0)' }}>
          Solicitar piloto gratuito
        </button>
      </form>
    </div>
  )
}

export default function Precios() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <>
      {/* Header */}
      <section style={{ background: 'linear-gradient(155deg, #0D0820, #13092A)', padding: '140px 28px 80px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <div style={{ display: 'inline-block', background: 'rgba(112,68,191,0.22)', color: '#E5ACF9', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 100, marginBottom: 20, letterSpacing: '0.07em', textTransform: 'uppercase', border: '1px solid rgba(229,172,249,0.18)' }}>Precios</div>
          <h1 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(32px, 4.5vw, 52px)', color: '#fff', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 20 }}>
            Un precio que cabe en cualquier<br />partida de tutoría
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: 17, lineHeight: 1.72, maxWidth: 500, margin: '0 auto' }}>
            Sin suscripciones. Sin mínimos de contrato. Paga por alumno activo por ciclo académico.
          </p>
        </motion.div>
      </section>

      {/* Pricing + features */}
      <section ref={ref} style={{ background: '#F7F5FB', padding: '80px 28px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 32, alignItems: 'start' }}>

          {/* Card de precio */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.45 }}
            style={{ background: '#0F0A1E', borderRadius: 18, padding: '40px 36px', border: '1px solid rgba(112,68,191,0.25)', position: 'sticky', top: 88 }}>
            <div style={{ display: 'inline-block', background: 'rgba(229,172,249,0.15)', color: '#E5ACF9', fontSize: 11, fontWeight: 700, padding: '3px 12px', borderRadius: 100, marginBottom: 20, border: '1px solid rgba(229,172,249,0.25)' }}>Canal institucional</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
              <span style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 52, color: '#fff', letterSpacing: '-2px', lineHeight: 1 }}>S/ 35</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 16 }}>/alumno</span>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, marginBottom: 32 }}>por ciclo académico · sin mínimo</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
              {[
                { icon: Upload, label: 'Carga masiva de alumnos vía CSV' },
                { icon: Zap, label: 'Plataforma activa en 24 horas' },
                { icon: FileText, label: 'Reportes PDF certificados automáticos' },
                { icon: BarChart2, label: 'Panel con estadísticas por promoción' },
                { icon: ShieldCheck, label: 'Documentación para supervisión MINEDU' },
              ].map(f => {
                const Icon = f.icon
                return (
                  <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 28, height: 28, background: 'rgba(112,68,191,0.25)', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={13} color="#E5ACF9" />
                    </div>
                    <span style={{ color: 'rgba(255,255,255,0.68)', fontSize: 13 }}>{f.label}</span>
                  </div>
                )
              })}
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24 }}>
              {[{ label: '50 alumnos', val: 'S/ 1,750' }, { label: '100 alumnos', val: 'S/ 3,500' }, { label: '300 alumnos', val: 'S/ 10,500' }].map(e => (
                <div key={e.label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: 14 }}>
                  <span style={{ color: 'rgba(255,255,255,0.4)' }}>{e.label}</span>
                  <span style={{ color: '#fff', fontWeight: 700, fontFamily: 'JetBrains Mono' }}>{e.val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Derecha: features + calculadora */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.45, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

            {/* Todo incluido */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '36px 36px', border: '1px solid #E5E0EE' }}>
              <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 16, color: '#0F0A1E', marginBottom: 20 }}>Todo incluido en cada licencia</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px' }}>
                {PLAN_FEATURES.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <CheckCircle2 size={15} color="#7044BF" style={{ flexShrink: 0, marginTop: 1 }} />
                    <span style={{ fontSize: 13, color: '#444', lineHeight: 1.4 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <Calculator />
          </motion.div>
        </div>
      </section>

      {/* Formulario de piloto */}
      <section style={{ background: '#fff', padding: '80px 28px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'start' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
            <div style={{ display: 'inline-block', background: '#F0E8FC', color: '#7044BF', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 100, marginBottom: 20, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Para instituciones</div>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(24px, 3vw, 34px)', color: '#0F0A1E', letterSpacing: '-1px', lineHeight: 1.2, marginBottom: 20 }}>
              Implemente el piloto esta semana
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: Upload, text: 'Carga de alumnos vía CSV en minutos' },
                { icon: Zap, text: 'Plataforma activa en menos de 24 horas' },
                { icon: FileText, text: 'Reportes PDF certificados automáticamente al finalizar' },
                { icon: BarChart2, text: 'Panel institucional disponible desde el primer alumno' },
                { icon: ShieldCheck, text: 'Documentación lista para supervisión MINEDU' },
              ].map(b => {
                const Icon = b.icon
                return (
                  <div key={b.text} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{ width: 32, height: 32, background: '#F0E8FC', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={15} color="#7044BF" />
                    </div>
                    <span style={{ color: '#444', fontSize: 14, lineHeight: 1.55, paddingTop: 6 }}>{b.text}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 }}>
            <PilotForm />
          </motion.div>
        </div>
      </section>
    </>
  )
}
