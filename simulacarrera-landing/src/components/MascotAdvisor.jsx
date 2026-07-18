import { motion } from 'framer-motion'

export function MascotAdvisor({ size = 100, style = {}, float = true, walk = false, delay = 0 }) {
  const legL  = { animate: walk ? { y: [0, -9, 0, 0, 0] }  : {}, transition: { duration: 1.4, repeat: Infinity, ease: 'easeInOut' } }
  const legR  = { animate: walk ? { y: [0, 0, 0, -9, 0] }  : {}, transition: { duration: 1.4, repeat: Infinity, ease: 'easeInOut' } }
  const shoeL = { animate: walk ? { x: [0,  4, 0,  0, 0] } : {}, transition: { duration: 1.4, repeat: Infinity, ease: 'easeInOut' } }
  const shoeR = { animate: walk ? { x: [0,  0, 0, -4, 0] } : {}, transition: { duration: 1.4, repeat: Infinity, ease: 'easeInOut' } }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.88 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.55, type: 'spring', stiffness: 200, damping: 18 }}
      style={style}
    >
      <motion.div
        animate={walk ? { x: [16, -16, 16] } : float ? { y: [0, -7, 0] } : {}}
        transition={walk
          ? { duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.3 }
          : { duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.2 }
        }
      >
        <motion.div
          animate={walk ? { rotate: [-3, 3, -3] } : {}}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width={size} height={Math.round(size * 1.48)} viewBox="0 0 80 118" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="40" cy="114" rx="18" ry="4" fill="rgba(112,68,191,0.2)" />
            <motion.rect x="23" y="85" width="13" height="26" rx="6.5" fill="#3D1A7A" {...legL} />
            <motion.rect x="44" y="85" width="13" height="26" rx="6.5" fill="#3D1A7A" {...legR} />
            <motion.ellipse cx="29.5" cy="112" rx="9" ry="5" fill="#1E0A40" {...shoeL} />
            <motion.ellipse cx="50.5" cy="112" rx="9" ry="5" fill="#1E0A40" {...shoeR} />
            <rect x="17" y="56" width="46" height="36" rx="11" fill="#7044BF" />
            <path d="M 36 56 L 40 72 L 28 65 Z" fill="#5A33A0" />
            <path d="M 44 56 L 40 72 L 52 65 Z" fill="#5A33A0" />
            <path d="M 36 56 L 40 74 L 44 56 Z" fill="#F0DDFF" opacity="0.95" />
            <rect x="3" y="58" width="15" height="30" rx="7.5" fill="#7044BF" />
            <ellipse cx="10" cy="90" rx="6.5" ry="5.5" fill="#F0DDFF" />
            <rect x="2" y="78" width="16" height="22" rx="3" fill="#E7DAF6" />
            <rect x="4" y="80" width="12" height="18" rx="2" fill="#C9AAED" opacity="0.5" />
            <rect x="6" y="83" width="8" height="1.5" rx="0.75" fill="#7044BF" />
            <rect x="6" y="86" width="6" height="1.5" rx="0.75" fill="#7044BF" opacity="0.6" />
            <rect x="6" y="89" width="7" height="1.5" rx="0.75" fill="#7044BF" opacity="0.6" />
            <rect x="7" y="77" width="6" height="3" rx="1.5" fill="#7044BF" />
            <rect x="62" y="58" width="15" height="30" rx="7.5" fill="#7044BF" />
            <ellipse cx="70" cy="90" rx="6.5" ry="5.5" fill="#F0DDFF" />
            <rect x="34" y="47" width="12" height="12" rx="6" fill="#F0DDFF" />
            <ellipse cx="40" cy="31" rx="22" ry="23" fill="#F0DDFF" />
            <ellipse cx="18.5" cy="31" rx="3.5" ry="4.5" fill="#F0DDFF" />
            <ellipse cx="61.5" cy="31" rx="3.5" ry="4.5" fill="#F0DDFF" />
            <path d="M 18 26 Q 18 8 40 7 Q 62 8 62 26 Q 59 14 40 13 Q 21 14 18 26 Z" fill="#4A2296" />
            <path d="M 18 22 Q 15 14 18 9 Q 18 22 18 22 Z" fill="#4A2296" />
            <path d="M 62 22 Q 65 14 62 9 Q 62 22 62 22 Z" fill="#4A2296" />
            <path d="M 27 25 Q 32 22 37 25" stroke="#4A2296" fill="none" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 43 25 Q 48 22 53 25" stroke="#4A2296" fill="none" strokeWidth="1.8" strokeLinecap="round" />
            <ellipse cx="32" cy="31" rx="4" ry="4.5" fill="#2D1A5E" />
            <ellipse cx="48" cy="31" rx="4" ry="4.5" fill="#2D1A5E" />
            <circle cx="33.5" cy="29.5" r="1.5" fill="white" />
            <circle cx="49.5" cy="29.5" r="1.5" fill="white" />
            <path d="M 32 39 Q 40 47 48 39" stroke="#7044BF" fill="none" strokeWidth="2.2" strokeLinecap="round" />
            <ellipse cx="25" cy="37" rx="5" ry="3.5" fill="rgba(229,172,249,0.45)" />
            <ellipse cx="55" cy="37" rx="5" ry="3.5" fill="rgba(229,172,249,0.45)" />
            <rect x="21" y="10" width="38" height="6" rx="3" fill="#4A2296" />
            <polygon points="40,1 16,10 64,10" fill="#7044BF" />
            <circle cx="40" cy="4" r="2.5" fill="#C278F5" />
            <line x1="64" y1="10" x2="67" y2="24" stroke="#C278F5" strokeWidth="1.5" />
            <circle cx="67" cy="26" r="3" fill="#C278F5" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
