import React from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const InteractiveHoverButton = React.forwardRef(
  ({ text = 'Button', className, variant = 'solid', ...props }, ref) => {
    const isSolid = variant === 'solid'
    return (
      <button
        ref={ref}
        className={cn(
          'group relative cursor-pointer overflow-hidden rounded-full px-6 py-3 text-center font-semibold transition-colors duration-300',
          isSolid
            ? 'border border-[#7044BF] bg-[#7044BF] text-white'
            : 'border border-white/30 bg-transparent text-white/75',
          className,
        )}
        {...props}
      >
        <span className="relative z-10 inline-block transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0">
          {text}
        </span>
        <div className="absolute top-0 z-20 flex h-full w-full translate-x-full items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          style={{ color: isSolid ? '#fff' : '#7044BF' }}>
          <span>{text}</span>
          <ArrowRight size={16} />
        </div>
        <div
          className="absolute left-[50%] top-[50%] h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 group-hover:h-[200%] group-hover:w-[200%]"
          style={{ background: isSolid ? '#5a33a0' : 'rgba(255,255,255,0.15)' }}
        />
      </button>
    )
  }
)

InteractiveHoverButton.displayName = 'InteractiveHoverButton'
export { InteractiveHoverButton }
