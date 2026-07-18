export default function Logo({ size = 28, color = '#7044BF' }) {
  return (
    <svg width={size} height={size * 0.85} viewBox="0 0 512 436" fill={color} xmlns="http://www.w3.org/2000/svg">
      {/* Graduation cap — matches the logo shared */}
      <path d="M496 128L256 0 16 128l240 128 240-128zM128 200.1V320c0 35.3 57.3 64 128 64s128-28.7 128-64V200.1L256 288 128 200.1zM480 160v160c0 17.7 14.3 32 32 32s32-14.3 32-32V160h-64z"/>
    </svg>
  )
}
