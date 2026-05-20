import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type SectionVariant = 'default' | 'cream' | 'green' | 'warm'

type SectionProps = {
  children: ReactNode
  id?: string
  className?: string
  variant?: SectionVariant
}

const variantClasses: Record<SectionVariant, string> = {
  default: 'bg-cream',
  cream: 'bg-cream-dark',
  green: 'bg-gradient-to-br from-brand-green to-brand-green-dark text-white',
  warm: 'bg-gradient-to-b from-[#fff8f3] to-cream',
}

export function Section({ children, id, className, variant = 'default' }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-[5.5rem] max-md:py-16', variantClasses[variant], className)}
    >
      {children}
    </section>
  )
}
