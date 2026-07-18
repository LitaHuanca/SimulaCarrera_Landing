import { Link } from 'react-router-dom'
import { GraduationCap, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#080412', borderTop: '1px solid rgba(112,68,191,0.15)', padding: '56px 28px 36px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 16 }}>
              <div style={{ width: 34, height: 34, background: '#7044BF', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <GraduationCap size={18} color="#fff" strokeWidth={2.2} />
              </div>
              <span style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 17, color: '#fff' }}>SimulaCarrera</span>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: 14, lineHeight: 1.7, maxWidth: 280, marginBottom: 20 }}>
              La primera plataforma peruana de orientación vocacional con simulación inmersiva y certificación profesional.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.35)', fontSize: 13 }}>
              <MapPin size={13} />
              <span>Lima, Perú</span>
            </div>
          </div>

          {/* Producto */}
          <div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Producto</div>
            {[['Cómo funciona', '/como-funciona'], ['Precios', '/precios'], ['Para instituciones', '/precios#piloto']].map(([l, h]) => (
              <Link key={h} to={h} style={{ display: 'block', color: 'rgba(255,255,255,0.45)', fontSize: 14, textDecoration: 'none', marginBottom: 10, transition: 'color 0.18s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
              >{l}</Link>
            ))}
          </div>

          {/* Institución */}
          <div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Para colegios</div>
            {[['Solicitar piloto', '/precios'], ['Panel institucional', '/como-funciona'], ['Cumplimiento MINEDU', '/como-funciona']].map(([l, h]) => (
              <Link key={l} to={h} style={{ display: 'block', color: 'rgba(255,255,255,0.45)', fontSize: 14, textDecoration: 'none', marginBottom: 10, transition: 'color 0.18s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
              >{l}</Link>
            ))}
          </div>

          {/* Inversión */}
          <div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Inversión</div>
            {[['Tesis de inversión', '/inversionistas'], ['Economía unitaria', '/inversionistas'], ['Roadmap', '/inversionistas']].map(([l, h]) => (
              <Link key={l} to={h} style={{ display: 'block', color: 'rgba(255,255,255,0.45)', fontSize: 14, textDecoration: 'none', marginBottom: 10, transition: 'color 0.18s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
              >{l}</Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ color: 'rgba(255,255,255,0.22)', fontSize: 13 }}>© 2025 SimulaCarrera. Todos los derechos reservados.</span>
          <a href="mailto:hola@simulacarrera.pe" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.35)', fontSize: 13, textDecoration: 'none', transition: 'color 0.18s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#E5ACF9'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
          >
            <Mail size={13} />
            hola@simulacarrera.pe
          </a>
        </div>
      </div>
    </footer>
  )
}
