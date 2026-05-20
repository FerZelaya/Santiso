import { valueBadges } from '../data/content'
import { Container } from './layout/Container'
import { Section } from './layout/Section'
import { SectionHeader } from './SectionHeader'

const icons: Record<string, string> = {
  leaf: '🌿',
  shield: '🛡️',
  palette: '🎨',
  sparkle: '✨',
  fruit: '🍊',
  hand: '🤲',
}

export function ValueBadges() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Nuestra promesa"
          title="Productos naturales y artesanales"
          description="Cada preparación refleja nuestro compromiso con la frescura, la calidad y el sabor auténtico."
        />
        <div className="grid grid-cols-1 gap-5 max-lg:grid-cols-2 md:grid-cols-3">
          {valueBadges.map((item) => (
            <article
              key={item.title}
              className="rounded-card border border-ink/[0.05] bg-white p-6 shadow-card"
            >
              <span className="mb-3.5 block text-2xl" aria-hidden="true">
                {icons[item.icon]}
              </span>
              <h3 className="mb-2 font-serif text-[1.35rem]">{item.title}</h3>
              <p className="text-[0.95rem] text-ink-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
