import { cn } from '../lib/cn'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  light?: boolean
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        'mb-12 max-w-[720px]',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'mb-3 text-[0.82rem] font-bold tracking-[0.14em] uppercase',
            light ? 'text-white' : 'text-brand-red',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'mb-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] font-bold',
          light ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-[1.05rem]',
            light ? 'text-white/88' : 'text-ink-muted',
          )}
        >
          {description}
        </p>
      )}
    </header>
  )
}
