import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GraduationCap, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Cómo funciona', to: '/como-funciona' },
  { label: 'Precios', to: '/precios' },
  { label: 'Inversionistas', to: '/inversionistas' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  const isHome = location.pathname === '/'

  return (
    <>
      <motion.header
        initial={{ y: -72 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? 'rgba(15,10,30,0.96)' : isHome ? 'transparent' : 'rgba(15,10,30,0.96)',
          backdropFilter: 'blur(18px)',
          borderBottom: scrolled || !isHome ? '1px solid rgba(112,68,191,0.18)' : 'none',
          transition: 'background 0.3s, border-bottom 0.3s',
        }}
      >
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 28px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logotipo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 34, height: 34, background: '#7044BF', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GraduationCap size={18} color="#fff" strokeWidth={2.2} />
            </div>
            <span style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 17, color: '#fff', letterSpacing: '-0.3px' }}>
              SimulaCarrera
            </span>
          </Link>

          {/* Nav escritorio */}
          <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            {NAV_LINKS.map(l => {
              const active = location.pathname === l.to
              return (
                <Link key={l.to} to={l.to} style={{
                  color: active ? '#fff' : 'rgba(255,255,255,0.6)',
                  textDecoration: 'none', fontSize: 14, fontWeight: 500,
                  padding: '7px 14px', borderRadius: 8,
                  background: active ? 'rgba(112,68,191,0.35)' : 'transparent',
                  transition: 'all 0.18s',
                }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = active ? '#fff' : 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = active ? 'rgba(112,68,191,0.35)' : 'transparent' }}
                >
                  {l.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA + menú móvil */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Link to="/precios" style={{ background: '#7044BF', color: '#fff', padding: '9px 20px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none', fontFamily: 'Plus Jakarta Sans', transition: 'background 0.18s', whiteSpace: 'nowrap' }}
              onMouseEnter={e => e.currentTarget.style.background = '#5e37a6'}
              onMouseLeave={e => e.currentTarget.style.background = '#7044BF'}
            >
              Solicitar piloto
            </Link>
            <button onClick={() => setMenuOpen(o => !o)} style={{ display: 'none', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 4 }} className="menu-btn">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Menú móvil */}
      {menuOpen && (
        <div style={{ position: 'fixed', top: 68, left: 0, right: 0, zIndex: 99, background: 'rgba(15,10,30,0.98)', backdropFilter: 'blur(20px)', padding: '16px 28px 24px', borderBottom: '1px solid rgba(112,68,191,0.2)' }}>
          {NAV_LINKS.map(l => (
            <Link key={l.to} to={l.to} style={{ display: 'block', color: '#fff', textDecoration: 'none', fontSize: 16, fontWeight: 500, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              {l.label}
            </Link>
          ))}
          <Link to="/precios" style={{ display: 'block', marginTop: 16, background: '#7044BF', color: '#fff', padding: '12px', borderRadius: 8, textAlign: 'center', fontWeight: 700, textDecoration: 'none' }}>
            Solicitar piloto
          </Link>
        </div>
      )}

      <style>{`@media (max-width: 700px) { nav { display: none !important; } .menu-btn { display: flex !important; } }`}</style>
    </>
  )
}
