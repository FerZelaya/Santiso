import { benefits } from '../data/content'
import { Container } from './layout/Container'
import { Section } from './layout/Section'
import { SectionHeader } from './SectionHeader'

export function Benefits() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Beneficios"
          title="¿Por qué elegir Santiso?"
          description="Una experiencia diferente: fresca, auténtica y llena del verdadero sabor de cada ingrediente."
        />
        <div className="grid grid-cols-1 gap-4 max-lg:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => (
            <article key={item.title} className="rounded-card bg-white p-6 shadow-card">
              <span className="mb-3 inline-block font-serif text-[2rem] leading-none text-brand-red">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mb-2 font-serif text-xl">{item.title}</h3>
              <p className="text-[0.95rem] text-ink-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
