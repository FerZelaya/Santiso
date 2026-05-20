import { useEffect, useState } from 'react'
import { navLinks } from '../data/content'
import { cn } from '../lib/cn'
import { whatsappUrl } from '../utils/whatsapp'
import { Button } from './Button'
import { Container } from './layout/Container'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[100] py-4 transition-[background,box-shadow,padding] duration-250 ease-in-out',
        scrolled && 'bg-cream/92 py-2.5 shadow-[0_8px_30px_rgba(43,33,28,0.06)] backdrop-blur-[14px]',
      )}
    >
      <Container className="flex items-center justify-between gap-4">
        <a href="#inicio" className="flex flex-col gap-0.5" onClick={closeMenu}>
          <span className="font-serif text-[1.75rem] leading-none font-bold text-brand-red">
            Santiso
          </span>
          <span className="text-[0.72rem] font-semibold tracking-[0.12em] text-brand-green uppercase">
            Deliciosamente Natural
          </span>
        </a>

        <nav
          className={cn(
            'flex items-center gap-8',
            'max-md:fixed max-md:inset-0 max-md:flex-col max-md:justify-center max-md:bg-cream/98 max-md:p-8 max-md:transition-transform max-md:duration-250 max-md:ease-in-out',
            open ? 'max-md:translate-x-0' : 'max-md:translate-x-full',
          )}
          aria-label="Principal"
        >
          <ul className="flex items-center gap-6 max-md:flex-col max-md:gap-5 max-md:text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="text-[0.95rem] font-medium text-ink transition-colors hover:text-brand-red"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href={whatsappUrl('Hola Santiso, quiero hacer un pedido.')} variant="whatsapp" size="md">
            Hacer pedido
          </Button>
        </nav>

        <button
          type="button"
          className={cn(
            'relative hidden h-11 w-11 cursor-pointer rounded-card-sm border-none bg-white shadow-card max-md:block',
            open && 'z-[110]',
          )}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span
            className={cn(
              'absolute right-3 left-3 h-0.5 bg-ink transition-all duration-200 ease-in-out',
              open ? 'top-[21px] rotate-45' : 'top-[15px]',
            )}
          />
          <span
            className={cn(
              'absolute right-3 left-3 h-0.5 bg-ink transition-all duration-200 ease-in-out',
              open ? 'top-[21px] opacity-0' : 'top-[21px]',
            )}
          />
          <span
            className={cn(
              'absolute right-3 left-3 h-0.5 bg-ink transition-all duration-200 ease-in-out',
              open ? 'top-[21px] -rotate-45' : 'top-[27px]',
            )}
          />
        </button>
      </Container>
    </header>
  )
}
