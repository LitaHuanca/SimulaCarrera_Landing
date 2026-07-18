import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
  Brain, User, Briefcase, Zap, Sparkles, Lock, Play,
  ShieldCheck, BarChart2, FileText, Users, ArrowRight, ChevronRight, CheckCircle2, Check, TrendingUp
} from 'lucide-react'
import { MascotAdvisor } from '@/components/MascotAdvisor'
import { SegmentTypewriter } from '@/components/SegmentTypewriter'

/* ─── Divisor animado oscuro → lila claro ───────────────────────────────── */
function WaveDividerCF() {
  return (
    <div style={{ background: 'linear-gradient(155deg,#0D0820,#13092A)', position: 'relative', height: 100, overflow: 'hidden', lineHeight: 0, marginBottom: -2 }}>
      <div className="scwcf-back" style={{ position: 'absolute', bottom: 0, left: 0, width: '200%', height: '100%' }}>
        <svg viewBox="0 0 2880 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <path d="M0,50 C360,88 720,12 1080,50 C1440,88 1800,12 2160,50 C2520,88 2700,28 2880,50 L2880,100 L0,100 Z" fill="rgba(112,68,191,0.22)" />
        </svg>
      </div>
      <div className="scwcf-front" style={{ position: 'absolute', bottom: 0, left: 0, width: '200%', height: '100%' }}>
        <svg viewBox="0 0 2880 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <path d="M0,64 C480,28 960,88 1440,54 C1920,20 2400,78 2880,64 L2880,100 L0,100 Z" fill="#F7F4FD" />
        </svg>
      </div>
      <style>{`
        .scwcf-back  { animation: scwcf1 10s linear infinite; }
        .scwcf-front { animation: scwcf2  7s linear infinite; }
        @keyframes scwcf1 { from { transform:translateX(0) }    to { transform:translateX(-50%) } }
        @keyframes scwcf2 { from { transform:translateX(-50%) } to { transform:translateX(0) } }
      `}</style>
    </div>
  )
}

/* ─── Ilustraciones SVG — tamaño grande ─────────────────────────────────── */
function IlluRIASEC() {
  const W = 200, H = 200, cx = 100, cy = 102
  const pts = [
    { x: 100, y: 14,  label: 'R', v: 0.72 },
    { x: 172, y: 56,  label: 'I', v: 0.90 },
    { x: 172, y: 138, label: 'A', v: 0.50 },
    { x: 100, y: 180, label: 'S', v: 0.65 },
    { x: 28,  y: 138, label: 'E', v: 0.82 },
    { x: 28,  y: 56,  label: 'C', v: 0.42 },
  ]
  const outerPts = pts.map(p => `${p.x},${p.y}`).join(' ')
  const innerPts = pts.map(p => `${cx + (p.x-cx)*p.v},${cy + (p.y-cy)*p.v}`).join(' ')
  const midPts   = pts.map(p => `${cx + (p.x-cx)*0.5},${cy + (p.y-cy)*0.5}`).join(' ')
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} fill="none">
      {/* Guías externas (50% y 100%) */}
      <polygon points={midPts}   fill="none" stroke="rgba(112,68,191,0.1)" strokeWidth="1" />
      <polygon points={outerPts} fill="none" stroke="rgba(112,68,191,0.18)" strokeWidth="1.5" />
      {/* Ejes */}
      {pts.map((p, i) => <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="rgba(112,68,191,0.12)" strokeWidth="1" />)}
      {/* Perfil relleno */}
      <motion.polygon points={innerPts} fill="rgba(112,68,191,0.15)" stroke="#7044BF" strokeWidth="2.5"
        initial={{ opacity:0, scale:0.2 }} animate={{ opacity:1, scale:1 }}
        transition={{ delay:0.25, duration:0.7, ease:[0.22,1,0.36,1] }}
        style={{ transformOrigin:`${cx}px ${cy}px` }} />
      {/* Puntos de vértice */}
      {pts.map((p, i) => (
        <motion.circle key={i}
          cx={cx+(p.x-cx)*p.v} cy={cy+(p.y-cy)*p.v} r="6"
          fill="#7044BF" stroke="#fff" strokeWidth="2"
          initial={{ scale:0 }} animate={{ scale:1 }}
          transition={{ delay:0.45+i*0.07, type:'spring', stiffness:400, damping:12 }}
          style={{ transformOrigin:`${cx+(p.x-cx)*p.v}px ${cy+(p.y-cy)*p.v}px` }} />
      ))}
      {/* Labels externos */}
      {pts.map((p, i) => (
        <text key={i} x={cx+(p.x-cx)*1.14} y={cy+(p.y-cy)*1.14+4}
          textAnchor="middle" fontSize="13" fontWeight="800" fill="#7044BF" fontFamily="JetBrains Mono">{p.label}</text>
      ))}
      {/* Valor % de la barra más alta */}
      <text x={cx} y={cy+5} textAnchor="middle" fontSize="11" fill="rgba(112,68,191,0.5)" fontFamily="JetBrains Mono">90%</text>
    </svg>
  )
}

function IlluHolland() {
  const careers = ['Medicina','Derecho','Ing. Civil','Marketing','Arte','Educación']
  const colors  = ['#7044BF','#9B5FE0','#C278F5','#E5ACF9','#7044BF','#9B5FE0']
  const W = 210, H = 200, CX = 105, CY = 100
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} fill="none">
      {/* Órbita guía */}
      <circle cx={CX} cy={CY} r="72" stroke="rgba(112,68,191,0.08)" strokeWidth="1" strokeDasharray="4 4" />
      {/* Hub central */}
      <motion.circle cx={CX} cy={CY} r="28" fill="#7044BF"
        initial={{ scale:0 }} animate={{ scale:1 }}
        transition={{ delay:0.15, type:'spring', stiffness:300 }}
        style={{ transformOrigin:`${CX}px ${CY}px` }} />
      <motion.circle cx={CX} cy={CY} r="28" fill="none" stroke="rgba(229,172,249,0.4)" strokeWidth="2"
        animate={{ scale:[1,1.15,1], opacity:[0.4,0.8,0.4] }}
        transition={{ duration:2.5, repeat:Infinity, ease:'easeInOut' }}
        style={{ transformOrigin:`${CX}px ${CY}px` }} />
      <text x={CX} y={CY-4}  textAnchor="middle" fontSize="10" fill="white" fontWeight="800" fontFamily="Plus Jakarta Sans">Holland</text>
      <text x={CX} y={CY+9}  textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.75)" fontFamily="Plus Jakarta Sans">RIASEC</text>
      {/* Carreras */}
      {careers.map((c, i) => {
        const angle = (i/6)*2*Math.PI - Math.PI/2
        const r = 72
        const x = CX + r*Math.cos(angle), y = CY + r*Math.sin(angle)
        return (
          <g key={c}>
            <motion.line x1={CX} y1={CY} x2={x} y2={y} stroke="rgba(112,68,191,0.2)" strokeWidth="1"
              initial={{ pathLength:0 }} animate={{ pathLength:1 }} transition={{ delay:0.3+i*0.07, duration:0.4 }} />
            <motion.circle cx={x} cy={y} r="20" fill={colors[i]} opacity="0.12"
              initial={{ scale:0 }} animate={{ scale:1 }} transition={{ delay:0.4+i*0.08, type:'spring' }}
              style={{ transformOrigin:`${x}px ${y}px` }} />
            <motion.circle cx={x} cy={y} r="20" fill="none" stroke={colors[i]} strokeWidth="1.5"
              initial={{ scale:0 }} animate={{ scale:1 }} transition={{ delay:0.4+i*0.08, type:'spring' }}
              style={{ transformOrigin:`${x}px ${y}px` }} />
            <text x={x} y={y+4} textAnchor="middle" fontSize="7.5" fill={colors[i]} fontWeight="700" fontFamily="Plus Jakarta Sans">{c}</text>
          </g>
        )
      })}
    </svg>
  )
}

function IlluSJT() {
  return (
    <svg width="200" height="186" viewBox="0 0 200 186" fill="none">
      {/* Sombra */}
      <ellipse cx="100" cy="182" rx="60" ry="4" fill="rgba(112,68,191,0.08)" />
      {/* Tarjeta principal */}
      <motion.rect x="8" y="10" width="184" height="164" rx="16" fill="#F0E8FC" stroke="rgba(112,68,191,0.2)" strokeWidth="1.5"
        initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.15, duration:0.5 }} />
      {/* Header morado */}
      <rect x="8" y="10" width="184" height="36" rx="16" fill="#7044BF" />
      <rect x="8" y="28" width="184" height="18" fill="#7044BF" />
      <text x="100" y="32" textAnchor="middle" fontSize="11" fill="white" fontWeight="700" fontFamily="Plus Jakarta Sans">Simulación SJT · Día de trabajo</text>
      {/* Badge IA */}
      <rect x="138" y="16" width="46" height="14" rx="7" fill="rgba(229,172,249,0.3)" />
      <text x="161" y="26" textAnchor="middle" fontSize="8" fill="white" fontWeight="600" fontFamily="Inter">IA activa</text>
      {/* Bloque de escenario */}
      <rect x="20" y="56" width="130" height="9" rx="4.5" fill="rgba(112,68,191,0.18)" />
      <rect x="20" y="70" width="160" height="9" rx="4.5" fill="rgba(112,68,191,0.13)" />
      <rect x="20" y="84" width="110" height="9" rx="4.5" fill="rgba(112,68,191,0.08)" />
      {/* Opciones de respuesta */}
      {[
        { y:102, label:'A. Analizo los datos primero', active:true },
        { y:122, label:'B. Consulto al equipo', active:false },
        { y:142, label:'C. Escalo al gerente', active:false },
      ].map(({ y, label, active }) => (
        <motion.g key={y} initial={{ x:-12, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ delay:0.4+(y-102)/80, duration:0.4 }}>
          <rect x="16" y={y} width="168" height="16" rx="8"
            fill={active ? '#7044BF' : 'white'}
            stroke={active ? '#7044BF' : 'rgba(112,68,191,0.25)'} strokeWidth="1.2" />
          <text x="28" y={y+11} fontSize="9" fill={active ? 'white' : '#7044BF'} fontWeight={active ? '700':'500'} fontFamily="Plus Jakarta Sans">{label}</text>
          {active && (
            <circle cx="174" cy={y+8} r="5" fill="rgba(255,255,255,0.25)" />
          )}
        </motion.g>
      ))}
    </svg>
  )
}

function IlluCAT() {
  const bars = [
    { h:52, x:20,  color:'rgba(112,68,191,0.3)' },
    { h:80, x:52,  color:'rgba(112,68,191,0.45)' },
    { h:62, x:84,  color:'rgba(112,68,191,0.4)' },
    { h:110,x:116, color:'#7044BF' },
    { h:90, x:148, color:'#9B5FE0' },
  ]
  const bottom = 168
  return (
    <svg width="200" height="190" viewBox="0 0 200 190" fill="none">
      {/* Fondo card */}
      <rect x="4" y="4" width="192" height="182" rx="14" fill="#F8F4FF" stroke="rgba(112,68,191,0.1)" strokeWidth="1" />
      {/* Grid lines */}
      {[0.25,0.5,0.75].map((f,i) => (
        <line key={i} x1="16" y1={bottom-f*110} x2="184" y2={bottom-f*110}
          stroke="rgba(112,68,191,0.1)" strokeWidth="1" strokeDasharray="4 3" />
      ))}
      {/* Barras */}
      {bars.map((b, i) => (
        <motion.rect key={i} x={b.x} y={bottom-b.h} width="24" height={b.h} rx="6"
          fill={b.color}
          initial={{ scaleY:0 }} animate={{ scaleY:1 }}
          transition={{ delay:0.15+i*0.1, duration:0.55, ease:[0.22,1,0.36,1] }}
          style={{ transformOrigin:`${b.x+12}px ${bottom}px` }} />
      ))}
      {/* Labels eje X */}
      {bars.map((b, i) => (
        <text key={i} x={b.x+12} y={bottom+14} textAnchor="middle" fontSize="8.5" fill="#9B5FE0" fontFamily="JetBrains Mono">{`0${i+1}`}</text>
      ))}
      {/* Línea adaptativa */}
      <motion.polyline
        points={bars.map((b,i) => `${b.x+12},${bottom-b.h}`).join(' ')}
        fill="none" stroke="#E5ACF9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray="300" strokeDashoffset="300"
        animate={{ strokeDashoffset:0 }}
        transition={{ delay:0.65, duration:0.9, ease:'easeOut' }} />
      {/* Puntos */}
      {bars.map((b, i) => (
        <motion.circle key={i} cx={b.x+12} cy={bottom-b.h} r="5"
          fill="#E5ACF9" stroke="#fff" strokeWidth="2"
          initial={{ scale:0 }} animate={{ scale:1 }}
          transition={{ delay:0.85+i*0.06, type:'spring', stiffness:400 }}
          style={{ transformOrigin:`${b.x+12}px ${bottom-b.h}px` }} />
      ))}
      {/* Badge Rasch */}
      <rect x="110" y="12" width="76" height="20" rx="10" fill="rgba(112,68,191,0.12)" stroke="rgba(112,68,191,0.25)" strokeWidth="1" />
      <text x="148" y="25" textAnchor="middle" fontSize="8.5" fill="#7044BF" fontWeight="700" fontFamily="JetBrains Mono">Modelo Rasch</text>
      {/* Label "adaptativo" */}
      <text x="16" y="22" fontSize="9" fill="rgba(112,68,191,0.6)" fontWeight="600" fontFamily="Plus Jakarta Sans">Dificultad adaptativa</text>
    </svg>
  )
}

/* ─── Datos de etapas ────────────────────────────────────────────────────── */
const STAGES = [
  {
    num:'01', icon:Brain, title:'Intereses RIASEC', sub:'Inventario vocacional · Escala Likert',
    desc:'Banco propio de 300 ítems calibrados que identifica el perfil de intereses de Holland. Confiabilidad Alfa de Cronbach ≥ 0.82.',
    detail:['300 ítems calibrados propios','Escala Likert de 5 puntos','Perfil RIASEC completo','Validez V de Aiken > 0.85'],
    Illu:IlluRIASEC, accent:'#7044BF', glow:'rgba(112,68,191,0.15)',
  },
  {
    num:'02', icon:User, title:'Perfil Holland', sub:'Código RIASEC y carreras compatibles',
    desc:'Cruza los intereses con más de 200 carreras indexadas con datos reales del mercado laboral peruano (INEI, MTPE, SUNEDU).',
    detail:['Código RIASEC de 3 letras','200+ carreras indexadas','Datos INEI / MTPE / SUNEDU','Ranking de afinidad vocacional'],
    Illu:IlluHolland, accent:'#9B5FE0', glow:'rgba(155,95,224,0.14)',
  },
  {
    num:'03', icon:Briefcase, title:'Simulación SJT', sub:'Juicio situacional · Big Five',
    desc:'El alumno "vive" un día de trabajo en la carrera que le interesa. No imagina escenarios: los experimenta a través de situaciones reales con IA.',
    detail:['Escenarios laborales reales','Evaluación Big Five integrada','Generado con IA por carrera','Basado en estándar O*NET'],
    Illu:IlluSJT, accent:'#7044BF', glow:'rgba(112,68,191,0.15)',
  },
  {
    num:'04', icon:Zap, title:'Aptitudes CAT', sub:'30 ítems adaptativos · Modelo de Rasch',
    desc:'Test adaptativo que ajusta la dificultad ítem a ítem. Mide razonamiento verbal, numérico, abstracto y mecánico con precisión psicométrica.',
    detail:['30 ítems adaptativos','Modelo de Rasch (TRI)','Razonamiento verbal, numérico, abstracto','Precisión mayor que tests de longitud fija'],
    Illu:IlluCAT, accent:'#C278F5', glow:'rgba(194,120,245,0.14)',
  },
]

/* ─── Timeline con scroll reactivo ─────────────────────────────────────── */
function StagesTimeline({ stages, children }) {
  const containerRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <div ref={containerRef} style={{ position:'relative', paddingLeft:32 }}>
      {/* Línea de fondo (gris suave) */}
      <div style={{ position:'absolute', left:6, top:24, bottom:24, width:3, background:'rgba(112,68,191,0.1)', borderRadius:2, zIndex:0 }} />

      {/* Línea de progreso animada */}
      <motion.div
        style={{ position:'absolute', left:6, top:24, width:3, background:'linear-gradient(180deg,#7044BF,#C278F5)', borderRadius:2, zIndex:1, originY:0 }}
        animate={{ height: activeIdx === 0 ? '8%' : activeIdx === 1 ? '35%' : activeIdx === 2 ? '64%' : '92%' }}
        transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}
      />

      {/* Nodos */}
      {stages.map((s, i) => {
        const done    = i < activeIdx
        const current = i === activeIdx
        return (
          <motion.div key={i}
            style={{ position:'absolute', left:0, zIndex:2, top:`calc(${i===0?'0%':i===1?'27%':i===2?'55%':'81%'} + 24px)` }}
          >
            <motion.div
              animate={current ? { scale:[1,1.25,1], boxShadow:['0 0 0 0 rgba(112,68,191,0)','0 0 0 8px rgba(112,68,191,0.2)','0 0 0 0 rgba(112,68,191,0)'] } : {}}
              transition={{ duration:1.8, repeat:Infinity, ease:'easeInOut' }}
              style={{
                width:15, height:15, borderRadius:'50%',
                background: done ? '#7044BF' : current ? '#7044BF' : 'rgba(112,68,191,0.2)',
                border: current ? '2px solid #C278F5' : done ? '2px solid rgba(255,255,255,0.6)' : '2px solid rgba(112,68,191,0.3)',
                display:'flex', alignItems:'center', justifyContent:'center',
                transition:'all 0.4s',
              }}
            >
              {done && <Check size={8} color="#fff" strokeWidth={3} />}
            </motion.div>
          </motion.div>
        )
      })}

      {/* Cards */}
      <div style={{ display:'flex', flexDirection:'column', gap:28 }}>
        {children(activeIdx, setActiveIdx)}
      </div>
    </div>
  )
}

/* ─── Tarjeta de etapa ───────────────────────────────────────────────────── */
function StageCard({ stage, index, isActive, onActivate }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once:false, margin:'-30% 0px -30% 0px' })
  const isEven = index % 2 === 0
  const Icon = stage.icon
  const Illu = stage.Illu

  useEffect(() => {
    if (inView) onActivate(index)
  }, [inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity:0, x: isEven ? -36 : 36 }}
      whileInView={{ opacity:1, x:0 }}
      viewport={{ once:true, margin:'-60px' }}
      transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}
      style={{
        display:'grid',
        gridTemplateColumns: isEven ? '1fr 220px' : '220px 1fr',
        gap:36, alignItems:'center',
        background:'#fff',
        borderRadius:22, padding:'36px 44px',
        border:`1px solid ${isActive ? 'rgba(112,68,191,0.25)' : 'rgba(112,68,191,0.08)'}`,
        boxShadow: isActive
          ? `0 8px 48px ${stage.glow}, 0 2px 8px rgba(0,0,0,0.04)`
          : `0 2px 16px rgba(0,0,0,0.03)`,
        position:'relative', overflow:'hidden',
        transition:'border-color 0.4s, box-shadow 0.4s',
      }}
    >
      {/* Glow activo */}
      <motion.div
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration:0.4 }}
        style={{ position:'absolute', ...(isEven ? {right:-60,top:-60} : {left:-60,top:-60}), width:220, height:220, borderRadius:'50%', background:`radial-gradient(circle, ${stage.glow} 0%, transparent 70%)`, pointerEvents:'none' }}
      />

      {/* Borde izquierdo activo */}
      <motion.div
        animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
        transition={{ duration:0.35 }}
        style={{ position:'absolute', left:0, top:'15%', height:'70%', width:3, background:`linear-gradient(180deg, transparent, ${stage.accent}, transparent)`, transformOrigin:'center', borderRadius:2 }}
      />

      {isEven ? (
        <>
          <div style={{ position:'relative', zIndex:1 }}>
            <StageContent stage={stage} index={index} isActive={isActive} Icon={Icon} />
          </div>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
            <motion.div animate={{ scale: isActive ? 1.05 : 1 }} transition={{ duration:0.4 }}>
              <Illu />
            </motion.div>
          </div>
        </>
      ) : (
        <>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
            <motion.div animate={{ scale: isActive ? 1.05 : 1 }} transition={{ duration:0.4 }}>
              <Illu />
            </motion.div>
          </div>
          <div style={{ position:'relative', zIndex:1 }}>
            <StageContent stage={stage} index={index} isActive={isActive} Icon={Icon} />
          </div>
        </>
      )}
    </motion.div>
  )
}

function StageContent({ stage, index, isActive, Icon }) {
  return (
    <>
      <motion.div animate={{ opacity: isActive ? 1 : 0.7 }} transition={{ duration:0.4 }}
        style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:18 }}>
        <motion.div
          animate={ isActive ? { boxShadow:`0 4px 20px ${stage.glow}`, scale:1.08 } : { boxShadow:'0 0 0 transparent', scale:1 }}
          transition={{ duration:0.4 }}
          style={{ width:44, height:44, borderRadius:12, background:`linear-gradient(135deg,${stage.accent},#C278F5)`, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Icon size={20} color="#fff" strokeWidth={2} />
        </motion.div>
        <div>
          <div style={{ fontFamily:'JetBrains Mono', fontSize:11, color:stage.accent, fontWeight:700, letterSpacing:'0.08em' }}>ETAPA {stage.num}</div>
          <div style={{ color:'#999', fontSize:11, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.06em', marginTop:2 }}>{stage.sub}</div>
        </div>
      </motion.div>

      <h3 style={{ fontFamily:'Plus Jakarta Sans', fontWeight:800, fontSize:24, color:'#0F0A1E', letterSpacing:'-0.6px', lineHeight:1.2, marginBottom:12 }}>
        {stage.title}
      </h3>

      <p style={{ color:'#5a5070', fontSize:15, lineHeight:1.75, marginBottom:20, maxWidth:400 }}>
        {stage.desc}
      </p>

      <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
        {stage.detail.map((d, i) => (
          <motion.div key={d}
            animate={{ opacity: isActive ? 1 : 0.55, x: isActive ? 0 : -4 }}
            transition={{ delay: i * 0.05, duration:0.3 }}
            style={{ display:'flex', alignItems:'center', gap:8 }}>
            <CheckCircle2 size={14} color={stage.accent} strokeWidth={2.5} style={{ flexShrink:0 }} />
            <span style={{ fontSize:13, color:'#3D2A6A', fontWeight:500 }}>{d}</span>
          </motion.div>
        ))}
      </div>
    </>
  )
}

/* ─── Mockups del producto ───────────────────────────────────────────────── */
const TABS = [
  { id:'student', label:'Vista del alumno',    icon:User },
  { id:'stages',  label:'Mapa de etapas',      icon:BarChart2 },
  { id:'careers', label:'Explorar carreras',   icon:Briefcase },
  { id:'panel',   label:'Panel institucional', icon:Users },
  { id:'reports', label:'Reportes',            icon:FileText },
]

function MockStudent() {
  return (
    <div style={{ background:'#F4F0FA', minHeight:320, borderRadius:10, padding:16 }}>
      <div style={{ fontFamily:'Plus Jakarta Sans', fontWeight:700, fontSize:15, color:'#0F0A1E', marginBottom:12 }}>Tu camino vocacional</div>
      <div style={{ background:'linear-gradient(135deg,#7044BF,#9B5FE0)', borderRadius:10, padding:'16px 18px', marginBottom:12 }}>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ width:32, height:32, background:'rgba(255,255,255,0.18)', borderRadius:7, display:'flex', alignItems:'center', justifyContent:'center' }}><Sparkles size={16} color="#fff" /></div>
          <div>
            <div style={{ color:'rgba(255,255,255,0.7)', fontSize:10, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.05em' }}>Evaluaciones vocacionales</div>
            <div style={{ color:'#fff', fontSize:12, marginTop:2 }}>RIASEC → Holland → SJT → CAT → reporte</div>
          </div>
        </div>
        <div style={{ display:'flex', gap:6, marginTop:10 }}>
          <span style={{ background:'rgba(255,255,255,0.2)', color:'#fff', fontSize:10, borderRadius:4, padding:'3px 9px', fontWeight:600 }}>1 test disponible</span>
          <span style={{ background:'rgba(255,255,255,0.12)', color:'rgba(255,255,255,0.8)', fontSize:10, borderRadius:4, padding:'3px 9px' }}>IA: activa</span>
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
        {[
          { icon:<Briefcase size={13} color="#7044BF" />, title:'Explorar carreras', sub:'Fichas de realidad profesional.' },
          { icon:<FileText size={13} color="#7044BF" />, title:'Historial de reportes', sub:'4 reportes disponibles' },
        ].map(c => (
          <div key={c.title} style={{ background:'#fff', borderRadius:8, padding:12, border:'1px solid #E7DAF6' }}>
            <div style={{ width:26, height:26, background:'#F0E8FC', borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:8 }}>{c.icon}</div>
            <div style={{ fontWeight:700, fontSize:12, color:'#0F0A1E', marginBottom:3 }}>{c.title}</div>
            <div style={{ color:'#7044BF', fontSize:11 }}>{c.sub}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MockStages() {
  const stages = [
    { n:1, name:'Intereses RIASEC', sub:'Inventario vocacional', locked:false, icon:Brain },
    { n:2, name:'Perfil Holland',   sub:'Código RIASEC',         locked:true,  icon:User },
    { n:3, name:'Simulación SJT',   sub:'Juicio situacional',    locked:true,  icon:Briefcase },
    { n:4, name:'Aptitudes CAT',    sub:'30 ítems adaptativos',  locked:true,  icon:Zap },
  ]
  return (
    <div style={{ background:'#F4F0FA', borderRadius:10, padding:16 }}>
      <div style={{ textAlign:'center', marginBottom:14 }}>
        <div style={{ fontFamily:'Plus Jakarta Sans', fontWeight:700, fontSize:15, color:'#0F0A1E' }}>Mapa de etapas</div>
        <div style={{ color:'#7044BF', fontSize:12, marginTop:3 }}>Completa las 4 fases a tu ritmo.</div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
        {stages.map(s => {
          const Icon = s.icon
          return (
            <div key={s.n} style={{ background:'#fff', borderRadius:8, padding:'12px 14px', border:`1.5px solid ${!s.locked?'#7044BF':'#E7DAF6'}`, position:'relative' }}>
              <div style={{ position:'absolute', top:9, left:10, background:!s.locked?'#7044BF':'#E7DAF6', color:!s.locked?'#fff':'#7044BF', borderRadius:'50%', width:18, height:18, display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, fontWeight:700 }}>{s.n}</div>
              <div style={{ paddingTop:18 }}>
                <div style={{ width:28, height:28, background:s.locked?'#F4F0FA':'#F0E8FC', borderRadius:7, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:6 }}>
                  {s.locked ? <Lock size={13} color="#bbb" /> : <Icon size={13} color="#7044BF" />}
                </div>
                <div style={{ fontWeight:700, fontSize:12, color:'#0F0A1E', marginBottom:2 }}>{s.name}</div>
                <div style={{ color:'#7044BF', fontSize:10, marginBottom:8 }}>{s.sub}</div>
                {!s.locked
                  ? <div style={{ background:'#7044BF', color:'#fff', borderRadius:5, padding:'5px 10px', fontSize:11, fontWeight:700, display:'inline-flex', alignItems:'center', gap:4 }}><Play size={9} fill="#fff" />Iniciar</div>
                  : <div style={{ color:'#bbb', fontSize:10 }}>Bloqueada</div>}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function MockCareers() {
  const careers = [
    { area:'Ingeniería', name:'Ciencia de Datos',  salary:'S/. 7,200', emp:90, demand:'Alta demanda' },
    { area:'Negocios',   name:'Administración',    salary:'S/. 5,200', emp:80, demand:'Alta demanda' },
    { area:'Ingeniería', name:'Ing. de Software',  salary:'S/. 6,500', emp:88, demand:'Alta demanda' },
  ]
  return (
    <div style={{ background:'#F4F0FA', borderRadius:10, padding:16 }}>
      <div style={{ marginBottom:12 }}>
        <div style={{ fontFamily:'Plus Jakarta Sans', fontWeight:700, fontSize:15, color:'#0F0A1E' }}>Explorar carreras</div>
        <div style={{ color:'#666', fontSize:12 }}>Fichas de realidad profesional.</div>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
        {careers.map(c => (
          <div key={c.name} style={{ background:'#fff', borderRadius:8, padding:'12px 14px', border:'1px solid #E7DAF6' }}>
            <div style={{ color:'#7044BF', fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.04em', marginBottom:3 }}>{c.area}</div>
            <div style={{ fontWeight:700, fontSize:13, color:'#0F0A1E', marginBottom:6 }}>{c.name}</div>
            <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
              <span style={{ background:'#F0E8FC', color:'#7044BF', borderRadius:4, padding:'2px 8px', fontSize:11, fontWeight:700 }}>{c.salary}</span>
              <span style={{ background:'#E6F9F0', color:'#1a7a45', borderRadius:4, padding:'2px 8px', fontSize:11, fontWeight:600 }}>Empl. {c.emp}%</span>
              <span style={{ background:'#EAF3FD', color:'#1a5fa0', borderRadius:4, padding:'2px 8px', fontSize:11, fontWeight:600 }}>{c.demand}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MockPanel() {
  return (
    <div style={{ background:'#F4F0FA', borderRadius:10, padding:16 }}>
      <div style={{ background:'linear-gradient(135deg,#7044BF,#5a33a0)', borderRadius:10, padding:'16px 18px', marginBottom:12 }}>
        <div style={{ color:'rgba(255,255,255,0.65)', fontSize:10, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.05em' }}>Panel de red</div>
        <div style={{ fontFamily:'Plus Jakarta Sans', fontWeight:800, fontSize:20, color:'#fff', marginTop:4 }}>ADUNI</div>
        <div style={{ color:'rgba(255,255,255,0.65)', fontSize:11, marginTop:2 }}>Distribuye cupos entre tus sedes.</div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8, marginBottom:10 }}>
        {[{label:'Cupos',val:'100'},{label:'Asignados',val:'70'},{label:'Disponibles',val:'30'}].map(m => (
          <div key={m.label} style={{ background:'#fff', borderRadius:8, padding:10, border:'1px solid #E7DAF6', textAlign:'center' }}>
            <div style={{ fontFamily:'Plus Jakarta Sans', fontWeight:800, fontSize:20, color:'#0F0A1E' }}>{m.val}</div>
            <div style={{ color:'#888', fontSize:10, marginTop:2 }}>{m.label}</div>
          </div>
        ))}
      </div>
      <div style={{ background:'#fff', borderRadius:8, padding:'10px 12px', border:'1px solid #E7DAF6' }}>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
          <span style={{ fontSize:12, fontWeight:600, color:'#0F0A1E' }}>Distribución</span>
          <span style={{ color:'#7044BF', fontWeight:700, fontSize:12 }}>70%</span>
        </div>
        <div style={{ height:6, background:'#E7DAF6', borderRadius:3, overflow:'hidden' }}>
          <div style={{ width:'70%', height:'100%', background:'linear-gradient(90deg,#7044BF,#E5ACF9)', borderRadius:3 }} />
        </div>
      </div>
    </div>
  )
}

function MockReports() {
  return (
    <div style={{ background:'#F4F0FA', borderRadius:10, padding:16 }}>
      <div style={{ background:'linear-gradient(135deg,#7044BF,#9B5FE0)', borderRadius:10, padding:'14px 16px', marginBottom:12 }}>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <div style={{ width:28, height:28, background:'rgba(255,255,255,0.15)', borderRadius:7, display:'flex', alignItems:'center', justifyContent:'center' }}><BarChart2 size={14} color="#fff" /></div>
          <div>
            <div style={{ color:'rgba(255,255,255,0.65)', fontSize:10, textTransform:'uppercase', letterSpacing:'0.05em' }}>Estadísticas vocacionales</div>
            <div style={{ color:'#fff', fontWeight:700, fontSize:14 }}>Reportes y análisis</div>
          </div>
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
        {[
          { icon:<Users size={12} color="#7044BF" />, val:'11', sub:'Alumnos' },
          { icon:<ShieldCheck size={12} color="#7044BF" />, val:'7/11', sub:'64% participación' },
          { icon:<Briefcase size={12} color="#7044BF" />, val:'Ing. Civil', sub:'Carrera líder' },
          { icon:<BarChart2 size={12} color="#7044BF" />, val:'Ingeniería', sub:'Área líder' },
        ].map(s => (
          <div key={s.sub} style={{ background:'#fff', borderRadius:8, padding:'10px 12px', border:'1px solid #E7DAF6' }}>
            <div style={{ width:22, height:22, background:'#F0E8FC', borderRadius:5, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:6 }}>{s.icon}</div>
            <div style={{ fontWeight:700, fontSize:14, color:'#0F0A1E' }}>{s.val}</div>
            <div style={{ color:'#888', fontSize:10, marginTop:2 }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const MOCKUP_MAP = { student:MockStudent, stages:MockStages, careers:MockCareers, panel:MockPanel, reports:MockReports }

/* ─── Síntesis IA — card estilo "La pregunta" ───────────────────────────── */
function SintesisIA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        borderRadius: 24, padding: '52px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap',
        background: 'linear-gradient(135deg, #2A0B62 0%, #1A0840 55%, #0E0530 100%)',
        border: '1px solid rgba(229,172,249,0.15)',
        boxShadow: '0 24px 64px rgba(112,68,191,0.22), 0 4px 24px rgba(0,0,0,0.25)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Borde brillante que recorre el contorno */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: [0, 1, 0] } : {}}
        transition={{ delay: 0.9, duration: 1.8, ease: 'easeInOut' }}
        style={{ position: 'absolute', inset: 0, borderRadius: 24, border: '1px solid rgba(229,172,249,0.55)', pointerEvents: 'none' }}
      />
      {/* Ambientes de luz */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 25% 50%, rgba(112,68,191,0.28) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.07, 0.15, 0.07] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: -80, right: -80, width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(229,172,249,0.18) 0%, transparent 70%)', pointerEvents: 'none' }}
      />

      {/* Copy izquierdo */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.45, duration: 0.5 }}
        style={{ maxWidth: 460, position: 'relative', zIndex: 1 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
          <div style={{ width: 24, height: 1, background: 'linear-gradient(90deg, transparent, #E5ACF9)' }} />
          <span style={{ color: '#E5ACF9', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Síntesis final</span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.4 }}
          style={{ fontFamily: 'Plus Jakarta Sans', fontSize: 88, lineHeight: 0.65, color: 'rgba(229,172,249,0.15)', fontWeight: 800, marginBottom: 12, userSelect: 'none' }}
        >
          <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'inline-block', width: 52, height: 52, background: 'rgba(255,255,255,0.1)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
            <Sparkles size={24} color="#E5ACF9" />
          </motion.div>
        </motion.div>
        <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 21, color: '#fff', lineHeight: 1.5, margin: '0 0 16px' }}>
          Los 4 resultados se cruzan con datos reales del mercado laboral peruano.
        </p>
        <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
          Sueldos promedio, empleabilidad y demanda por carrera según{' '}
          <span style={{ color: 'rgba(255,255,255,0.82)', fontWeight: 500 }}>INEI, MTPE y SUNEDU</span>.
          El resultado no es una puntuación — es un reporte certificado.
        </p>
      </motion.div>

      {/* Mascota flotando */}
      <MascotAdvisor
        size={82}
        delay={0.6}
        float={true}
        style={{ alignSelf: 'flex-end', flexShrink: 0, position: 'relative', zIndex: 2 }}
      />

      {/* Card de métricas — destacada */}
      <motion.div
        initial={{ opacity: 0, x: 24, scale: 0.94 }}
        animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.55, type: 'spring', stiffness: 200, damping: 20 }}
        whileHover={{ scale: 1.03, boxShadow: '0 0 48px rgba(229,172,249,0.28), 0 8px 32px rgba(0,0,0,0.4)' }}
        style={{
          background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(20px)',
          borderRadius: 20, padding: '36px 40px', textAlign: 'center',
          border: '1px solid rgba(229,172,249,0.3)', flexShrink: 0,
          position: 'relative', overflow: 'hidden', zIndex: 1,
          boxShadow: '0 0 28px rgba(112,68,191,0.35), inset 0 1px 0 rgba(255,255,255,0.1)',
          cursor: 'default', minWidth: 220,
        }}
      >
        {/* Glow interno animado */}
        <motion.div
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(229,172,249,0.12) 0%, transparent 65%)', pointerEvents: 'none' }}
        />
        {/* Badge "Reporte certificado" con pulso */}
        <div style={{ position: 'relative', marginBottom: 22 }}>
          <motion.div
            animate={{ scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', inset: -4, borderRadius: 12, background: 'rgba(112,68,191,0.2)', filter: 'blur(6px)' }}
          />
          <div style={{ position: 'relative', background: 'linear-gradient(135deg, rgba(112,68,191,0.55), rgba(194,120,245,0.4))', borderRadius: 10, padding: '7px 16px', border: '1px solid rgba(229,172,249,0.35)' }}>
            <div style={{ color: '#fff', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Reporte certificado · COP</div>
          </div>
        </div>

        {/* Métricas psicométricas */}
        {[
          { label: 'Alfa de Cronbach', val: 'α ≥ 0.82' },
          { label: 'V de Aiken', val: '> 0.85' },
        ].map((m, i) => (
          <motion.div key={m.label}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.75 + i * 0.12, type: 'spring', stiffness: 260, damping: 16 }}
            style={{ marginBottom: i === 0 ? 12 : 0 }}
          >
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, marginBottom: 3, fontWeight: 500 }}>{m.label}</div>
            <div style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 36, color: '#fff', letterSpacing: '-1.5px', lineHeight: 1 }}>{m.val}</div>
            {i === 0 && <div style={{ width: 36, height: 1, background: 'rgba(229,172,249,0.2)', margin: '12px auto' }} />}
          </motion.div>
        ))}

        {/* Badge validez */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.05, duration: 0.4 }}
          style={{ marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(112,68,191,0.5)', borderRadius: 100, padding: '6px 16px', border: '1px solid rgba(229,172,249,0.35)', boxShadow: '0 2px 12px rgba(112,68,191,0.3)' }}
        >
          <TrendingUp size={12} color="#E5ACF9" />
          <span style={{ color: '#E5ACF9', fontSize: 11, fontWeight: 800, letterSpacing: '0.04em' }}>Validez psicométrica comprobada</span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

/* ─── Section header ────────────────────────────────────────────────────── */
function SectionHeader({ badge, segments, quote }) {
  return (
    <div style={{ textAlign:'center', marginBottom:64 }}>
      <motion.div initial={{ opacity:0, y:-10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}
        style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:16, marginBottom:24 }}>
        <motion.div initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.15 }}
          style={{ width:56, height:1, background:'linear-gradient(90deg,transparent,#7044BF)', transformOrigin:'right' }} />
        <div style={{ background:'linear-gradient(135deg,#EDE5F9,#F5F0FF)', color:'#7044BF', fontSize:11, fontWeight:700, padding:'6px 18px', borderRadius:100, letterSpacing:'0.1em', textTransform:'uppercase', border:'1px solid rgba(112,68,191,0.22)', boxShadow:'0 2px 12px rgba(112,68,191,0.1)' }}>{badge}</div>
        <motion.div initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.15 }}
          style={{ width:56, height:1, background:'linear-gradient(90deg,#7044BF,transparent)', transformOrigin:'left' }} />
      </motion.div>
      <motion.h2 initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.2, duration:0.5 }}
        style={{ fontFamily:'Plus Jakarta Sans', fontWeight:800, fontSize:'clamp(26px,3.5vw,42px)', letterSpacing:'-1.2px', lineHeight:1.15, maxWidth:620, margin:'0 auto 28px' }}>
        <SegmentTypewriter segments={segments} speed={26} />
      </motion.h2>
      <motion.div initial={{ opacity:0, x:-8 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:0.35, duration:0.45 }}
        style={{ maxWidth:500, margin:'0 auto', textAlign:'left', borderLeft:'3px solid #7044BF', paddingLeft:22, position:'relative' }}>
        <div style={{ position:'absolute', left:-5, top:5, width:8, height:8, borderRadius:'50%', background:'#7044BF', boxShadow:'0 0 10px rgba(112,68,191,0.4)' }} />
        <p style={{ color:'#5A4A7A', fontSize:15, lineHeight:1.75, margin:0 }}>{quote}</p>
      </motion.div>
    </div>
  )
}

/* ─── Página principal ───────────────────────────────────────────────────── */
export default function ComoFunciona() {
  const [activeTab, setActiveTab] = useState('student')
  const heroRef = useRef(null)
  const demoRef = useRef(null)
  const ctaRef  = useRef(null)
  const heroInView = useInView(heroRef, { once:true })
  const demoInView = useInView(demoRef, { once:true, margin:'-60px' })
  const ctaInView  = useInView(ctaRef,  { once:true, margin:'-60px' })
  const Mockup = MOCKUP_MAP[activeTab]

  return (
    <>
      {/* ── Hero header ─────────────────────────────────────────────────── */}
      <section ref={heroRef} style={{ background:'linear-gradient(155deg,#0D0820,#13092A)', padding:'140px 28px 100px', position:'relative', overflow:'hidden' }}>
        <motion.div animate={{ scale:[1,1.2,1], opacity:[0.15,0.28,0.15] }} transition={{ duration:8, repeat:Infinity, ease:'easeInOut' }}
          style={{ position:'absolute', top:'10%', left:'30%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(112,68,191,0.3) 0%,transparent 70%)', pointerEvents:'none' }} />
        <motion.div animate={{ scale:[1,1.3,1], opacity:[0.08,0.15,0.08] }} transition={{ duration:11, repeat:Infinity, ease:'easeInOut', delay:3 }}
          style={{ position:'absolute', bottom:'0%', right:'15%', width:350, height:350, borderRadius:'50%', background:'radial-gradient(circle,rgba(194,120,245,0.2) 0%,transparent 70%)', pointerEvents:'none' }} />

        <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr auto', gap:48, alignItems:'center' }}>
          <div>
            <motion.div initial={{ opacity:0, y:-12 }} animate={heroInView ? { opacity:1, y:0 } : {}} transition={{ duration:0.5 }}
              style={{ display:'flex', alignItems:'center', gap:14, marginBottom:28 }}>
              <motion.div initial={{ scaleX:0 }} animate={heroInView ? { scaleX:1 } : {}} transition={{ duration:0.5, delay:0.15 }}
                style={{ width:48, height:1, background:'linear-gradient(90deg,transparent,rgba(229,172,249,0.6))', transformOrigin:'right' }} />
              <div style={{ background:'rgba(112,68,191,0.22)', color:'#E5ACF9', fontSize:11, fontWeight:700, padding:'6px 18px', borderRadius:100, letterSpacing:'0.1em', textTransform:'uppercase', border:'1px solid rgba(229,172,249,0.2)' }}>Cómo funciona</div>
              <motion.div initial={{ scaleX:0 }} animate={heroInView ? { scaleX:1 } : {}} transition={{ duration:0.5, delay:0.15 }}
                style={{ width:48, height:1, background:'linear-gradient(90deg,rgba(229,172,249,0.6),transparent)', transformOrigin:'left' }} />
            </motion.div>

            <motion.h1 initial={{ opacity:0, y:16 }} animate={heroInView ? { opacity:1, y:0 } : {}} transition={{ delay:0.2, duration:0.5 }}
              style={{ fontFamily:'Plus Jakarta Sans', fontWeight:800, fontSize:'clamp(30px,4.2vw,52px)', letterSpacing:'-1.5px', lineHeight:1.1, marginBottom:28 }}>
              <SegmentTypewriter
                segments={[
                  { text:'Un motor de ', color:'#fff' },
                  { text:'4 etapas', gradient:'linear-gradient(90deg,#C278F5,#E5ACF9)' },
                  { text:',\nno un test más.', color:'#fff' },
                ]}
                speed={22}
              />
            </motion.h1>

            <motion.div initial={{ opacity:0, x:-10 }} animate={heroInView ? { opacity:1, x:0 } : {}} transition={{ delay:0.4, duration:0.45 }}
              style={{ borderLeft:'3px solid #7044BF', paddingLeft:22, maxWidth:520, marginBottom:40, position:'relative' }}>
              <div style={{ position:'absolute', left:-5, top:4, width:8, height:8, borderRadius:'50%', background:'#7044BF', boxShadow:'0 0 10px rgba(112,68,191,0.6)' }} />
              <p style={{ color:'rgba(255,255,255,0.58)', fontSize:17, lineHeight:1.75, margin:0 }}>
                Cada etapa se desbloquea secuencialmente. El alumno avanza a su ritmo y puede retomar en cualquier momento.{' '}
                <span style={{ color:'rgba(255,255,255,0.82)', fontWeight:500 }}>El resultado es un reporte certificado, no una puntuación.</span>
              </p>
            </motion.div>

            <motion.div initial={{ opacity:0, y:10 }} animate={heroInView ? { opacity:1, y:0 } : {}} transition={{ delay:0.55, duration:0.4 }}
              style={{ display:'flex', gap:32 }}>
              {[{val:'4',label:'etapas secuenciales'},{val:'300+',label:'ítems calibrados'},{val:'200+',label:'carreras indexadas'}].map((s,i) => (
                <motion.div key={s.label} initial={{ opacity:0, y:8 }} animate={heroInView ? { opacity:1, y:0 } : {}} transition={{ delay:0.6+i*0.08 }}>
                  <div style={{ fontFamily:'JetBrains Mono', fontWeight:700, fontSize:26, color:'#fff', letterSpacing:'-1px' }}>{s.val}</div>
                  <div style={{ color:'rgba(255,255,255,0.4)', fontSize:12, marginTop:3 }}>{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <MascotAdvisor size={130} delay={0.6} float={true} style={{ flexShrink:0 }} />
        </div>
      </section>

      {/* ── Transición hero → etapas ────────────────────────────────────── */}
      <WaveDividerCF />

      {/* ── Sección de 4 etapas ─────────────────────────────────────────── */}
      <section style={{ background:'#F7F4FD', padding:'80px 28px 96px', position:'relative', overflow:'hidden' }}>
        {/* Fondo animado sutil */}
        <motion.div animate={{ x:[0,30,0], y:[0,-20,0], opacity:[0.06,0.12,0.06] }} transition={{ duration:14, repeat:Infinity, ease:'easeInOut' }}
          style={{ position:'absolute', top:'5%', left:'5%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(112,68,191,0.18) 0%,transparent 70%)', pointerEvents:'none' }} />
        <motion.div animate={{ x:[0,-25,0], y:[0,18,0], opacity:[0.04,0.1,0.04] }} transition={{ duration:18, repeat:Infinity, ease:'easeInOut', delay:5 }}
          style={{ position:'absolute', bottom:'10%', right:'8%', width:320, height:320, borderRadius:'50%', background:'radial-gradient(circle,rgba(194,120,245,0.15) 0%,transparent 70%)', pointerEvents:'none' }} />
        <motion.div animate={{ scale:[1,1.4,1], opacity:[0.03,0.07,0.03] }} transition={{ duration:10, repeat:Infinity, ease:'easeInOut', delay:2 }}
          style={{ position:'absolute', top:'45%', right:'30%', width:200, height:200, borderRadius:'50%', background:'radial-gradient(circle,rgba(229,172,249,0.3) 0%,transparent 70%)', pointerEvents:'none' }} />

        <div style={{ maxWidth:900, margin:'0 auto', position:'relative', zIndex:1 }}>
          <SectionHeader
            badge="Las 4 etapas"
            segments={[
              { text:'Cada etapa tiene ', color:'#0F0A1E' },
              { text:'un propósito psicométrico.', gradient:'linear-gradient(90deg,#7044BF,#C278F5)' },
            ]}
            quote="No son módulos independientes: cada resultado alimenta al siguiente, construyendo un perfil vocacional completo."
          />

          <StagesTimeline stages={STAGES}>
            {(activeIdx, setActiveIdx) =>
              STAGES.map((stage, i) => (
                <StageCard
                  key={stage.num}
                  stage={stage}
                  index={i}
                  isActive={i === activeIdx}
                  onActivate={setActiveIdx}
                />
              ))
            }
          </StagesTimeline>
        </div>
      </section>

      {/* ── Síntesis IA — estilo "La pregunta" ──────────────────────────── */}
      <section style={{ background:'#F7F4FD', padding:'0 28px 80px' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>
          <SintesisIA />
        </div>
      </section>

      {/* ── Demo del producto ────────────────────────────────────────────── */}
      <section ref={demoRef} style={{ background:'#0F0A1E', padding:'80px 28px' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>
          <motion.div initial={{ opacity:0, y:20 }} animate={demoInView ? { opacity:1, y:0 } : {}} transition={{ duration:0.45 }}
            style={{ textAlign:'center', marginBottom:40 }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:14, marginBottom:20 }}>
              <motion.div initial={{ scaleX:0 }} animate={demoInView ? { scaleX:1 } : {}} transition={{ duration:0.5, delay:0.1 }}
                style={{ width:40, height:1, background:'linear-gradient(90deg,transparent,rgba(229,172,249,0.5))', transformOrigin:'right' }} />
              <div style={{ background:'rgba(112,68,191,0.22)', color:'#E5ACF9', fontSize:11, fontWeight:700, padding:'5px 16px', borderRadius:100, letterSpacing:'0.08em', textTransform:'uppercase', border:'1px solid rgba(229,172,249,0.18)' }}>El producto</div>
              <motion.div initial={{ scaleX:0 }} animate={demoInView ? { scaleX:1 } : {}} transition={{ duration:0.5, delay:0.1 }}
                style={{ width:40, height:1, background:'linear-gradient(90deg,rgba(229,172,249,0.5),transparent)', transformOrigin:'left' }} />
            </div>
            <h2 style={{ fontFamily:'Plus Jakarta Sans', fontWeight:800, fontSize:'clamp(22px,3.2vw,36px)', color:'#fff', letterSpacing:'-1px', marginBottom:12 }}>
              Una plataforma construida para instituciones
            </h2>
            <p style={{ color:'rgba(255,255,255,0.48)', fontSize:16, maxWidth:480, margin:'0 auto' }}>
              Desde el primer acceso del alumno hasta el reporte certificado.
            </p>
          </motion.div>

          <div style={{ display:'flex', gap:6, justifyContent:'center', flexWrap:'wrap', marginBottom:24 }}>
            {TABS.map(t => {
              const Icon = t.icon
              const active = activeTab === t.id
              return (
                <button key={t.id} onClick={() => setActiveTab(t.id)}
                  style={{ display:'inline-flex', alignItems:'center', gap:7, background:active?'#7044BF':'rgba(255,255,255,0.06)', color:active?'#fff':'rgba(255,255,255,0.55)', border:active?'none':'1px solid rgba(255,255,255,0.1)', borderRadius:8, padding:'8px 16px', fontSize:13, fontWeight:600, cursor:'pointer', fontFamily:'Inter', transition:'all 0.18s' }}>
                  <Icon size={13} strokeWidth={2.2} />
                  {t.label}
                </button>
              )
            })}
          </div>

          <motion.div initial={{ opacity:0, y:16 }} animate={demoInView ? { opacity:1, y:0 } : {}} transition={{ delay:0.2, duration:0.45 }}
            style={{ background:'#1A1030', borderRadius:16, overflow:'hidden', border:'1px solid rgba(112,68,191,0.25)', boxShadow:'0 24px 72px rgba(0,0,0,0.5)' }}>
            <div style={{ background:'#180D30', padding:'10px 16px', display:'flex', alignItems:'center', gap:10, borderBottom:'1px solid rgba(112,68,191,0.15)' }}>
              <div style={{ display:'flex', gap:5 }}>
                {['#ff5f56','#ffbd2e','#27c93f'].map(c => <div key={c} style={{ width:9, height:9, borderRadius:'50%', background:c }} />)}
              </div>
              <div style={{ flex:1, background:'rgba(255,255,255,0.05)', borderRadius:5, padding:'4px 12px', textAlign:'center', color:'rgba(255,255,255,0.28)', fontSize:11 }}>app.simulacarrera.pe</div>
            </div>
            <div style={{ background:'#fff', borderBottom:'1px solid #E7DAF6', padding:'0 18px', display:'flex', alignItems:'center', height:44 }}>
              <div style={{ display:'flex', alignItems:'center', gap:6, marginRight:20 }}>
                <div style={{ width:22, height:22, background:'#7044BF', borderRadius:5, display:'flex', alignItems:'center', justifyContent:'center' }}><ShieldCheck size={12} color="#fff" strokeWidth={2.5} /></div>
                <span style={{ fontFamily:'Plus Jakarta Sans', fontWeight:700, fontSize:12, color:'#1a1a2e' }}>SimulaCarrera</span>
              </div>
              {['Inicio','Evaluación','Carreras','Reportes'].map((t,i) => (
                <div key={t} style={{ padding:'0 12px', height:'100%', display:'flex', alignItems:'center', fontSize:12, color:i===0?'#7044BF':'#888', fontWeight:i===0?700:400, borderBottom:i===0?'2px solid #7044BF':'2px solid transparent', marginBottom:-1 }}>{t}</div>
              ))}
            </div>
            <div style={{ padding:20 }}>
              <AnimatePresence mode="wait">
                <motion.div key={activeTab} initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-8 }} transition={{ duration:0.22 }}>
                  <Mockup />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA final ────────────────────────────────────────────────────── */}
      <section ref={ctaRef} style={{ background:'#F7F4FD', padding:'100px 28px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <motion.div animate={{ scale:[1,1.2,1], opacity:[0.08,0.16,0.08] }} transition={{ duration:7, repeat:Infinity, ease:'easeInOut' }}
          style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(112,68,191,0.2) 0%,transparent 70%)', pointerEvents:'none' }} />

        <div style={{ position:'relative', zIndex:1, maxWidth:640, margin:'0 auto' }}>
          <motion.div initial={{ opacity:0, y:-10 }} animate={ctaInView ? { opacity:1, y:0 } : {}} transition={{ duration:0.45 }}
            style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:14, marginBottom:28 }}>
            <motion.div initial={{ scaleX:0 }} animate={ctaInView ? { scaleX:1 } : {}} transition={{ duration:0.5, delay:0.1 }}
              style={{ width:40, height:1, background:'linear-gradient(90deg,transparent,#7044BF)', transformOrigin:'right' }} />
            <div style={{ background:'rgba(112,68,191,0.12)', color:'#7044BF', fontSize:11, fontWeight:700, padding:'6px 18px', borderRadius:100, letterSpacing:'0.1em', textTransform:'uppercase', border:'1px solid rgba(112,68,191,0.22)' }}>Para su institución</div>
            <motion.div initial={{ scaleX:0 }} animate={ctaInView ? { scaleX:1 } : {}} transition={{ duration:0.5, delay:0.1 }}
              style={{ width:40, height:1, background:'linear-gradient(90deg,#7044BF,transparent)', transformOrigin:'left' }} />
          </motion.div>

          <h2 style={{ fontFamily:'Plus Jakarta Sans', fontWeight:800, fontSize:'clamp(26px,3.8vw,44px)', letterSpacing:'-1.2px', lineHeight:1.12, marginBottom:24, display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'0 10px' }}>
            {['Listo para','implementarlo','en su','institución'].map((word,i) => (
              <motion.span key={word} initial={{ opacity:0, y:20, filter:'blur(4px)' }} animate={ctaInView ? { opacity:1, y:0, filter:'blur(0px)' } : {}}
                transition={{ delay:0.2+i*0.1, duration:0.45, ease:[0.22,1,0.36,1] }}
                style={{ color:i===1?'transparent':'#0F0A1E', background:i===1?'linear-gradient(90deg,#7044BF,#C278F5)':'none', WebkitBackgroundClip:i===1?'text':'unset', backgroundClip:i===1?'text':'unset', display:'inline-block' }}>
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p initial={{ opacity:0 }} animate={ctaInView ? { opacity:1 } : {}} transition={{ delay:0.55 }}
            style={{ color:'#6B5E8A', fontSize:16, maxWidth:460, margin:'0 auto 40px', lineHeight:1.72 }}>
            Plataforma activa en <strong style={{ color:'#0F0A1E' }}>24 horas</strong>. Sin carga operativa para su equipo.
          </motion.p>

          <motion.div initial={{ opacity:0, y:10 }} animate={ctaInView ? { opacity:1, y:0 } : {}} transition={{ delay:0.65 }}
            style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap', marginBottom:52 }}>
            <Link to="/precios"
              style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#7044BF', color:'#fff', padding:'14px 30px', borderRadius:9, fontWeight:700, fontSize:15, textDecoration:'none', fontFamily:'Plus Jakarta Sans', transition:'all 0.18s', boxShadow:'0 4px 28px rgba(112,68,191,0.3)' }}
              onMouseEnter={e => { e.currentTarget.style.background='#5e37a6'; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 36px rgba(112,68,191,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.background='#7044BF'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 28px rgba(112,68,191,0.3)' }}>
              Ver precios y solicitar piloto <ArrowRight size={16} />
            </Link>
            <Link to="/"
              style={{ display:'inline-flex', alignItems:'center', gap:8, background:'transparent', color:'#6B5E8A', padding:'14px 24px', borderRadius:9, fontWeight:600, fontSize:15, textDecoration:'none', fontFamily:'Plus Jakarta Sans', border:'1px solid rgba(112,68,191,0.2)', transition:'all 0.18s' }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(112,68,191,0.06)'; e.currentTarget.style.color='#7044BF' }}
              onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#6B5E8A' }}>
              Volver al inicio <ChevronRight size={15} />
            </Link>
          </motion.div>

          <MascotAdvisor size={80} delay={0.8} walk={true} />
        </div>
      </section>
    </>
  )
}
