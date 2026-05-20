import { WHATSAPP_DISPLAY, wholesaleNotes } from '../data/content'
import { whatsappUrl } from '../utils/whatsapp'
import { Button } from './Button'
import { Container } from './layout/Container'
import { Section } from './layout/Section'
import { SectionHeader } from './SectionHeader'

export function Wholesale() {
  return (
    <Section id="mayoristas">
      <Container>
        <div className="relative grid overflow-hidden rounded-[26px] bg-gradient-to-br from-brand-red to-brand-red-dark p-12 text-white shadow-card-lg max-lg:grid-cols-1 max-md:p-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeader
              align="left"
              light
              className="mb-0"
              eyebrow="Para negocios"
              title="Precios para mayoristas"
              description="Santiso ofrece precios mayoristas para tiendas, negocios, distribuidores o clientes que desean comprar en volumen. Contáctanos para consultar disponibilidad y coordinar tu pedido."
            />
            <ul className="my-6 grid gap-2.5">
              {wholesaleNotes.map((note) => (
                <li
                  key={note}
                  className="relative pl-5 before:absolute before:left-0 before:font-bold before:text-accent-gold before:content-['✓']"
                >
                  {note}
                </li>
              ))}
            </ul>
            <p>
              WhatsApp:{' '}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-accent-gold hover:underline"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </p>
            <div className="mt-6">
              <Button href="#contacto" variant="light-outline" size="lg">
                Contactar ahora
              </Button>
            </div>
          </div>
          <div
            className="hidden flex-col items-end justify-center gap-2 text-right font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] font-bold opacity-25 max-lg:hidden"
            aria-hidden="true"
          >
            <span>+ Más Fruta</span>
            <span>+ Más Sabor</span>
          </div>
        </div>
      </Container>
    </Section>
  )
}
