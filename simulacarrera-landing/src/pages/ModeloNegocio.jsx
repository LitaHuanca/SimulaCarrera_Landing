import { motion } from 'framer-motion'
import {
  Users, Gift, Truck, HeartHandshake, CircleDollarSign,
  Briefcase, Activity, Handshake, Calculator
} from 'lucide-react'

// Componente para cada bloque del Canvas
function CanvasBlock({ title, icon: Icon, children, delay = 0, className = '', style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(229, 172, 249, 0.15)',
        borderRadius: 16,
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        backdropFilter: 'blur(10px)',
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
      whileHover={{
        background: 'rgba(255, 255, 255, 0.06)',
        borderColor: 'rgba(229, 172, 249, 0.3)',
        boxShadow: '0 8px 32px rgba(112, 68, 191, 0.2)'
      }}
      className={className}
    >
      {/* Glow on hover */}
      <div style={{
        position: 'absolute', top: -50, right: -50, width: 100, height: 100,
        background: 'radial-gradient(circle, rgba(229,172,249,0.1) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none'
      }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative', zIndex: 1 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 10,
          background: 'linear-gradient(135deg, rgba(112,68,191,0.5), rgba(229,172,249,0.3))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1px solid rgba(229,172,249,0.2)'
        }}>
          <Icon size={20} color="#E5ACF9" />
        </div>
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#fff', letterSpacing: '0.02em' }}>
          {title}
        </h3>
      </div>
      
      <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: 12, flex: 1, position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </motion.div>
  )
}

function Item({ title, desc }) {
  return (
    <div>
      <strong style={{ color: '#E5ACF9', display: 'block', marginBottom: 2 }}>{title}</strong>
      <span>{desc}</span>
    </div>
  )
}

export default function ModeloNegocio() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: 100, paddingBottom: 80 }}>
      {/* Background elements */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, background: '#0F0A1E', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(112,68,191,0.15) 0%, transparent 60%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '70%', height: '70%', background: 'radial-gradient(circle, rgba(229,172,249,0.1) 0%, transparent 60%)', filter: 'blur(80px)' }} />
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(112,68,191,0.2)', padding: '6px 16px', borderRadius: 100, border: '1px solid rgba(229,172,249,0.2)', marginBottom: 24 }}
          >
            <Activity size={14} color="#E5ACF9" />
            <span style={{ color: '#E5ACF9', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Estrategia y Viabilidad
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontFamily: 'Plus Jakarta Sans', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, color: '#fff', margin: '0 0 20px', lineHeight: 1.1, letterSpacing: '-0.02em' }}
          >
            Modelo de Negocio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 700, margin: '0 auto', lineHeight: 1.6 }}
          >
            El Business Model Canvas de SimulaCarrera, diseñado para ser escalable, rentable y generar un impacto real en la orientación vocacional del Perú.
          </motion.p>
        </div>

        {/* Canvas Grid */}
        <div className="canvas-grid" style={{ position: 'relative' }}>
          
          {/* Columna 1: Socios */}
          <CanvasBlock title="Socios Clave" icon={Handshake} delay={0.1} style={{ gridArea: 'socios' }}>
            <Item title="Proveedores de IA" desc="OpenAI (motor principal), Anthropic/Groq (respaldo) para generación de reportes." />
            <Item title="Infraestructura" desc="AWS, Supabase, Vercel." />
            <Item title="Datos Oficiales" desc="INEI, SUNEDU, MTPE para métricas reales de empleabilidad." />
            <Item title="Certificación" desc="Psicólogo colegiado para auditoría y firma de reportes." />
            <Item title="Validación Comercial" desc="Colegios y academias piloto." />
          </CanvasBlock>

          {/* Columna 2: Actividades y Recursos */}
          <div style={{ gridArea: 'act_rec', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <CanvasBlock title="Actividades Clave" icon={Activity} delay={0.2} style={{ flex: 1 }}>
              <Item title="Desarrollo & IA" desc="Mantenimiento de plataforma y módulo de inteligencia artificial." />
              <Item title="Ventas B2B" desc="Prospección e incorporación de colegios y academias." />
              <Item title="Calidad Psicométrica" desc="Calibración continua del banco de ítems con profesionales." />
            </CanvasBlock>
            <CanvasBlock title="Recursos Clave" icon={Briefcase} delay={0.3} style={{ flex: 1 }}>
              <Item title="Propiedad Intelectual" desc="Banco de 300 ítems RIASEC/TRI y simulaciones SJT." />
              <Item title="Recursos Humanos" desc="Equipo fundador, psicólogo colegiado, profesionales validadores." />
              <Item title="Tecnológicos" desc="Plataforma propietaria web B2B2C e IA generativa." />
            </CanvasBlock>
          </div>

          {/* Columna 3: Propuesta de Valor */}
          <CanvasBlock title="Propuesta de Valor" icon={Gift} delay={0.4} style={{ gridArea: 'propuesta', background: 'linear-gradient(180deg, rgba(112,68,191,0.15) 0%, rgba(255,255,255,0.02) 100%)', borderColor: 'rgba(229,172,249,0.4)' }}>
            <div style={{ marginBottom: 16 }}>
              <strong style={{ color: '#fff', fontSize: 14, display: 'block', marginBottom: 8 }}>Para Instituciones (B2B):</strong>
              <ul style={{ margin: 0, paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <li>Solución llave en mano para cumplir la normativa de tutoría MINEDU.</li>
                <li>Panel institucional con estadísticas agregadas de la promoción.</li>
                <li>Implementación sin carga operativa para el equipo docente.</li>
              </ul>
            </div>
            <div>
              <strong style={{ color: '#fff', fontSize: 14, display: 'block', marginBottom: 8 }}>Para Estudiantes (B2C):</strong>
              <ul style={{ margin: 0, paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <li>Evaluación integral en 4 etapas (Intereses, Conducta, Aptitudes, IA).</li>
                <li>Reporte certificado por psicólogo colegiado.</li>
                <li>Simulaciones inmersivas basadas en la realidad laboral con datos del INEI/MTPE.</li>
              </ul>
            </div>
          </CanvasBlock>

          {/* Columna 4: Relación y Canales */}
          <div style={{ gridArea: 'rel_can', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <CanvasBlock title="Relación con Clientes" icon={HeartHandshake} delay={0.5} style={{ flex: 1 }}>
              <Item title="B2B (Directa)" desc="Asistencia continua, onboarding de tutores y soporte a directores." />
              <Item title="B2C (Automatizada)" desc="Experiencia de evaluación de autoservicio 100% digital." />
            </CanvasBlock>
            <CanvasBlock title="Canales" icon={Truck} delay={0.6} style={{ flex: 1 }}>
              <Item title="Directo Institucional" desc="Equipo comercial B2B para colegios." />
              <Item title="Directo Individual" desc="Plataforma web de autoservicio para B2C." />
              <Item title="Indirecto" desc="Referidos orgánicos entre autoridades educativas." />
            </CanvasBlock>
          </div>

          {/* Columna 5: Segmentos */}
          <CanvasBlock title="Segmentos de Clientes" icon={Users} delay={0.7} style={{ gridArea: 'segmentos' }}>
            <Item title="Institucionales (B2B)" desc="Academias preuniversitarias y colegios privados (EBR) en Lima Metropolitana." />
            <Item title="Usuarios Finales (B2C)" desc="Estudiantes de 4.º y 5.º de secundaria matriculados a través de su institución." />
            <Item title="Usuarios Individuales" desc="Padres de familia y estudiantes independientes que adquieren por canal directo." />
          </CanvasBlock>

          {/* Fila Inferior: Costos e Ingresos */}
          <CanvasBlock title="Estructura de Costos" icon={Calculator} delay={0.8} style={{ gridArea: 'costos' }}>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 200 }}>
                <Item title="Costos Fijos Mensuales (Lean)" desc="Infraestructura Cloud, Servicios transaccionales y Retainer del Psicólogo Certificador (≈ S/ 896/mes). Mantenimiento absorbido por equipo." />
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <Item title="Costos Variables" desc="Consumo API de IA (OpenAI) y procesamiento PDF (≈ S/ 0.50 por alumno evaluado). Margen bruto altísimo (≈ 98.6%)." />
              </div>
            </div>
          </CanvasBlock>

          <CanvasBlock title="Flujo de Ingresos" icon={CircleDollarSign} delay={0.9} style={{ gridArea: 'ingresos' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
              <div style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontFamily: 'JetBrains Mono', fontWeight: 800, color: '#fff', letterSpacing: '-1px' }}>S/ 35</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, lineHeight: 1.6, flex: 1, minWidth: 200 }}>
                Pago único transaccional por alumno evaluado (test) por ciclo académico.<br/>
                <span style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>Aplica equitativamente al modelo B2B (licencias por volumen) y B2C (compra individual).</span> Un 65%-84% más económico que un test privado.
              </div>
            </div>
          </CanvasBlock>

        </div>
      </div>

      <style>{`
        .canvas-grid {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: auto auto;
          grid-template-areas: 
            "socios act_rec propuesta rel_can segmentos"
            "costos costos ingresos ingresos ingresos";
        }
        
        @media (max-width: 1100px) {
          .canvas-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-template-areas: 
              "propuesta propuesta propuesta"
              "segmentos rel_can act_rec"
              "socios socios canales"
              "ingresos ingresos ingresos"
              "costos costos costos";
          }
        }

        @media (max-width: 768px) {
          .canvas-grid {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}
