import { motion } from 'framer-motion'
import {
  Building2, ShieldCheck, BarChart4, Users2, FileSignature, 
  Settings, CheckCircle2, ArrowRight, BookOpen, GraduationCap
} from 'lucide-react'
import { Link } from 'react-router-dom'

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Cumplimiento MINEDU Asegurado',
    desc: 'Resuelva la obligación de tutoría vocacional (RM 212-2020) con una plataforma validada, sin contratar personal a tiempo completo.',
    colSpan: 2,
    bg: 'linear-gradient(135deg, rgba(112,68,191,0.1) 0%, rgba(229,172,249,0.05) 100%)',
  },
  {
    icon: BarChart4,
    title: 'Panel Institucional Agregado',
    desc: 'Descubra las fortalezas y debilidades cognitivas de toda su promoción (razonamiento verbal, numérico, abstracto) para calibrar su enseñanza.',
    colSpan: 1,
    bg: 'rgba(255,255,255,0.02)',
  },
  {
    icon: Settings,
    title: 'Cero Carga Operativa',
    desc: 'Solución "llave en mano". Sus tutores no necesitan calificar pruebas ni procesar datos; la plataforma lo hace todo automáticamente.',
    colSpan: 1,
    bg: 'rgba(255,255,255,0.02)',
  },
  {
    icon: FileSignature,
    title: 'Reportes Certificados (COP)',
    desc: 'Cada alumno recibe un reporte detallado firmado por un psicólogo educativo colegiado, elevando el prestigio de su institución ante los padres.',
    colSpan: 2,
    bg: 'linear-gradient(135deg, rgba(229,172,249,0.1) 0%, rgba(112,68,191,0.05) 100%)',
  },
]

const STEPS = [
  { step: '01', title: 'Registro Simplificado', desc: 'Cargamos la lista de sus alumnos en minutos mediante un archivo seguro. Cada estudiante recibe su acceso único.' },
  { step: '02', title: 'Evaluación Autónoma', desc: 'Los alumnos completan las 4 etapas inmersivas desde cualquier dispositivo, a su propio ritmo, sin interrumpir clases.' },
  { step: '03', title: 'Generación de Reportes', desc: 'Nuestra IA procesa los resultados y el psicólogo colegiado audita y firma los reportes individuales en PDF.' },
  { step: '04', title: 'Entrega y Panel Institucional', desc: 'Usted recibe el mapa estadístico de su promoción y cada familia recibe el reporte vocacional de su hijo.' },
]

export default function Institucional() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: 100, paddingBottom: 80, background: '#0F0A1E', color: '#fff', overflow: 'hidden' }}>
      
      {/* Background Ambience */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 800, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-20%', left: '10%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(112,68,191,0.15) 0%, transparent 60%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', top: '10%', right: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(229,172,249,0.12) 0%, transparent 60%)', filter: 'blur(60px)' }} />
      </div>

      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px', position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 70, paddingTop: 40 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(112,68,191,0.2)', padding: '6px 16px', borderRadius: 100, border: '1px solid rgba(229,172,249,0.2)', marginBottom: 24 }}>
              <Building2 size={14} color="#E5ACF9" />
              <span style={{ color: '#E5ACF9', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Cuenta Institucional
              </span>
            </div>
            
            <h1 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: 24, maxWidth: 800, margin: '0 auto 24px' }}>
              Solución llave en mano para <span style={{ color: '#E5ACF9' }}>colegios y academias.</span>
            </h1>
            
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18, lineHeight: 1.6, maxWidth: 640, margin: '0 auto' }}>
              Deje de destinar horas operativas a tests obsoletos. Ofrezca orientación vocacional de vanguardia, proteja los datos de sus alumnos y eleve el prestigio de su institución.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid de Beneficios */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 80 }}>
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                gridColumn: `span ${feat.colSpan}`,
                background: feat.bg,
                border: '1px solid rgba(229,172,249,0.15)',
                borderRadius: 24,
                padding: '36px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, padding: 24, opacity: 0.1 }}>
                <feat.icon size={80} />
              </div>
              
              <div style={{
                width: 48, height: 48, borderRadius: 12, marginBottom: 24,
                background: 'linear-gradient(135deg, rgba(112,68,191,0.5), rgba(229,172,249,0.3))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid rgba(229,172,249,0.2)', position: 'relative'
              }}>
                <feat.icon size={24} color="#E5ACF9" />
              </div>
              
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: 22, fontWeight: 700, marginBottom: 12, position: 'relative' }}>{feat.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.6, margin: 0, position: 'relative', maxWidth: feat.colSpan === 2 ? '80%' : '100%' }}>
                {feat.desc}
              </p>
            </motion.div>
          ))}
          
          <style>{`
            @media (max-width: 900px) {
              div[style*="grid-template-columns: repeat(3"] {
                display: flex !important;
                flex-direction: column;
              }
              div[style*="gridColumn: span"] {
                max-width: 100% !important;
              }
            }
          `}</style>
        </div>

        {/* Dashboard Preview / Gestión */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 24, border: '1px solid rgba(112,68,191,0.3)', padding: '60px 40px', display: 'flex', gap: 60, alignItems: 'center', flexWrap: 'wrap', marginBottom: 100 }}
        >
          <div style={{ flex: '1 1 400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 2, background: '#E5ACF9' }} />
              <span style={{ color: '#E5ACF9', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Gestión Centralizada</span>
            </div>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 20 }}>
              El progreso de toda su promoción, en un solo lugar.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.6, marginBottom: 32 }}>
              Monitoree en tiempo real qué estudiantes han completado su evaluación. Descargue de forma masiva los reportes y visualice mapas de calor cognitivo que le ayudarán a enfocar sus esfuerzos de tutoría y preparación académica.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {['Datos 100% anonimizados según Ley de Protección del Menor.', 'Estadísticas agregadas de razonamiento verbal y matemático.', 'Descarga de matriz Excel para registros internos del colegio.'].map((text, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <CheckCircle2 size={20} color="#7044BF" style={{ marginTop: 2, flexShrink: 0 }} />
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.5 }}>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div style={{ flex: '1 1 400px', background: '#0F0A1E', borderRadius: 16, padding: 24, border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Panel 5to Secundaria - Sec. A</div>
              <div style={{ background: 'rgba(112,68,191,0.2)', color: '#E5ACF9', fontSize: 11, padding: '4px 10px', borderRadius: 6 }}>32 Alumnos</div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { name: 'Razonamiento Verbal', pct: 85 },
                { name: 'Razonamiento Numérico', pct: 62 },
                { name: 'Razonamiento Abstracto', pct: 78 },
                { name: 'Perfil predominante: Investigador', pct: 90, color: '#E5ACF9' },
              ].map((stat, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 16px', borderRadius: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 8, color: 'rgba(255,255,255,0.7)' }}>
                    <span>{stat.name}</span>
                    <span style={{ fontWeight: 700, color: stat.color || '#fff' }}>{stat.pct}%</span>
                  </div>
                  <div style={{ height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2, overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${stat.pct}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      style={{ height: '100%', background: stat.color || '#7044BF' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pasos / Implementación */}
        <div style={{ marginBottom: 100 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 800 }}>Implementación en 4 pasos</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16 }}>Diseñado para no generar carga de trabajo a sus docentes.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {STEPS.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16, padding: 32 }}>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 32, fontWeight: 800, color: '#7044BF', opacity: 0.5, marginBottom: 16 }}>
                  {step.step}
                </div>
                <h4 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{step.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          style={{ background: 'linear-gradient(135deg, #7044BF 0%, #9B5FE0 100%)', borderRadius: 24, padding: '56px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '60%', height: '200%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)', transform: 'rotate(25deg)', pointerEvents: 'none' }} />
          
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, marginBottom: 16, position: 'relative' }}>
            Empiece con un piloto en su colegio
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 18, maxWidth: 600, margin: '0 auto 32px', position: 'relative' }}>
            Pruebe SimulaCarrera con un salón seleccionado antes de escalarlo a toda la promoción. Licencias por volumen desde S/ 35 por alumno.
          </p>
          <Link to="/precios" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#7044BF', padding: '16px 36px', borderRadius: 12, fontWeight: 800, fontSize: 16, textDecoration: 'none', position: 'relative', transition: 'transform 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Ver precios institucionales <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
