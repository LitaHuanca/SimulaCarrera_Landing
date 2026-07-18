import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nombre: '', cargo: '', colegio: '', alumnos: '', email: '', telefono: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="cta" style={{ background: '#F9F7FF', padding: '100px 24px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          {/* Left — pitch */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div style={{ display: 'inline-block', background: '#E7DAF6', color: '#7044BF', fontSize: 12, fontWeight: 700, padding: '4px 14px', borderRadius: 100, marginBottom: 20, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Para instituciones
            </div>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 40px)', color: '#0F0A1E', letterSpacing: '-1px', lineHeight: 1.2, marginBottom: 20 }}>
              Implemente el piloto en su primera promoción esta semana
            </h2>
            <p style={{ color: '#666', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
              Carga de alumnos vía CSV, evaluación en línea, reportes certificados descargables y panel institucional activo desde el primer día. Sin carga operativa para su equipo.
            </p>

            {[
              { icon: '📋', text: 'Carga masiva de alumnos vía CSV' },
              { icon: '⚡', text: 'Plataforma activa en 24 horas' },
              { icon: '📄', text: 'Reportes PDF certificados automáticos' },
              { icon: '📊', text: 'Panel con estadísticas agregadas por promoción' },
              { icon: '✅', text: 'Documentación lista para supervisión MINEDU' },
            ].map((b, i) => (
              <motion.div
                key={b.text}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}
              >
                <span style={{ fontSize: 18 }}>{b.icon}</span>
                <span style={{ color: '#333', fontSize: 15 }}>{b.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ background: '#fff', borderRadius: 20, padding: '40px', border: '1px solid #E7DAF6', boxShadow: '0 8px 40px rgba(112,68,191,0.08)' }}
          >
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 22, color: '#0F0A1E', marginBottom: 12 }}>¡Solicitud enviada!</div>
                <p style={{ color: '#666', fontSize: 15, lineHeight: 1.6 }}>Nos pondremos en contacto en menos de 24 horas para coordinar el piloto con su institución.</p>
              </motion.div>
            ) : (
              <>
                <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 20, color: '#0F0A1E', marginBottom: 24 }}>
                  Solicitar piloto gratuito
                </div>
                <form onSubmit={handleSubmit}>
                  {[
                    { key: 'nombre', label: 'Nombre completo', placeholder: 'Ej. María García' },
                    { key: 'cargo', label: 'Cargo', placeholder: 'Director, Coordinador, Administrador...' },
                    { key: 'colegio', label: 'Nombre de la institución', placeholder: 'Colegio / Academia...' },
                    { key: 'alumnos', label: 'N.° de alumnos en 4.° y 5.° de sec.', placeholder: 'Ej. 80' },
                    { key: 'email', label: 'Email institucional', placeholder: 'director@colegio.edu.pe' },
                    { key: 'telefono', label: 'Teléfono / WhatsApp', placeholder: '+51 9XX XXX XXX' },
                  ].map(f => (
                    <div key={f.key} style={{ marginBottom: 16 }}>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#333', marginBottom: 6 }}>{f.label}</label>
                      <input
                        required
                        type={f.key === 'email' ? 'email' : 'text'}
                        placeholder={f.placeholder}
                        value={form[f.key]}
                        onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1.5px solid #E7DAF6', fontSize: 14, fontFamily: 'Inter', outline: 'none', transition: 'border 0.2s', boxSizing: 'border-box' }}
                        onFocus={e => e.target.style.borderColor = '#7044BF'}
                        onBlur={e => e.target.style.borderColor = '#E7DAF6'}
                      />
                    </div>
                  ))}
                  <button type="submit" style={{ width: '100%', background: '#7044BF', color: '#fff', padding: '14px', borderRadius: 10, border: 'none', fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 15, cursor: 'pointer', marginTop: 8, transition: 'all 0.2s', boxShadow: '0 4px 16px rgba(112,68,191,0.35)' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#5a33a0'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#7044BF'; e.currentTarget.style.transform = 'translateY(0)' }}
                  >
                    Solicitar piloto gratuito →
                  </button>
                  <p style={{ color: '#aaa', fontSize: 12, textAlign: 'center', marginTop: 12 }}>Sin compromiso. Respuesta en menos de 24 horas.</p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
