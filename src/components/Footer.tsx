import { navLinks, WHATSAPP_DISPLAY } from '../data/content'
import { whatsappUrl } from '../utils/whatsapp'
import { Container } from './layout/Container'

export function Footer() {
  return (
    <footer className="bg-brand-green-dark pt-14 text-white/90">
      <Container className="grid grid-cols-1 gap-8 pb-8 max-lg:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr] max-md:grid-cols-1">
        <div>
          <p className="font-serif text-[2rem] font-bold text-white">Santiso</p>
          <p className="mt-1.5 mb-4 text-[0.78rem] tracking-[0.12em] text-accent-gold uppercase">
            Deliciosamente Natural
          </p>
          <p className="mb-1.5 font-serif text-[1.35rem]">+ Más fruta + Más sabor</p>
          <p className="text-[0.92rem] text-white/75">
            Mermeladas y conservas artesanales bajas en calorías
          </p>
        </div>

        <nav aria-label="Pie de página">
          <p className="mb-3.5 font-bold text-white">Enlaces</p>
          <ul className="grid gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-accent-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-3.5 font-bold text-white">Contacto</p>
          <ul className="grid gap-2">
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-gold"
              >
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/Santisohn"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent-gold"
              >
                Instagram @Santisohn
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/Santisohn"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent-gold"
              >
                Facebook @Santisohn
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="border-t border-white/12 py-4 pb-6 text-[0.88rem] text-white/65">
        <p>© {new Date().getFullYear()} Santiso. Todos los derechos reservados.</p>
      </Container>
    </footer>
  )
}
