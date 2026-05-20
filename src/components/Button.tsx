import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../lib/cn'

type Variant = 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'light-outline'
type Size = 'md' | 'lg'

type BaseProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full border-none text-center font-semibold whitespace-nowrap transition-[transform,box-shadow,background] duration-200 ease-in-out hover:-translate-y-px cursor-pointer'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-red text-white shadow-[0_12px_30px_rgba(155,28,49,0.25)] hover:bg-brand-red-dark',
  secondary: 'bg-brand-green text-white hover:bg-brand-green-dark',
  outline:
    'border-[1.5px] border-brand-red/35 bg-transparent text-brand-red hover:bg-brand-red/[0.06]',
  whatsapp:
    'bg-whatsapp text-white shadow-[0_12px_30px_rgba(37,211,102,0.28)] hover:bg-whatsapp-dark',
  'light-outline':
    'border-[1.5px] border-white/45 bg-transparent text-white hover:bg-white/[0.08]',
}

const sizeClasses: Record<Size, string> = {
  md: 'px-[1.35rem] py-3 text-[0.95rem]',
  lg: 'px-[1.6rem] py-4 text-base',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  ...props
}: ButtonProps | LinkProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className)

  if (href) {
    const isWhatsApp = variant === 'whatsapp' || href.includes('wa.me')
    return (
      <a
        className={classes}
        href={href}
        {...(isWhatsApp && { target: '_blank', rel: 'noopener noreferrer' })}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type="button" {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
