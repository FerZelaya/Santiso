import { images, mermeladaFlavors, mermeladaPresentations, pricingNote } from '../data/content'
import { Container } from './layout/Container'
import { Section } from './layout/Section'
import { SectionHeader } from './SectionHeader'

export function MermeladasSection() {
  return (
    <Section id="mermeladas">
      <Container className="grid grid-cols-1 items-start gap-10 max-lg:gap-10 lg:grid-cols-2">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Bajas en calorías"
            title="Mermeladas y jaleas bajas en calorías"
            description="Disfruta sabores frutales con una propuesta más natural, equilibrada y artesanal."
          />
          <div className="mt-5 flex flex-wrap gap-2" aria-label="Sabores disponibles">
            {mermeladaFlavors.map((flavor) => (
              <span
                key={flavor}
                className="rounded-full border border-ink/[0.08] bg-white px-3 py-1.5 text-[0.88rem] font-medium"
              >
                {flavor}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <img
              src={images.mermeladaSpoon}
              alt="Mermelada Naranja-Maracuyá Santiso"
              loading="lazy"
              className="rounded-card shadow-card"
            />
          </div>
        </div>

        <div className="grid gap-4">
          <p className="rounded-card-sm border-l-3 border-brand-green bg-brand-green/8 px-4 py-3.5 text-[0.95rem] text-ink-muted">
            {pricingNote}
          </p>
          {mermeladaPresentations.map((group) => (
            <article key={group.group} className="rounded-card bg-white p-5 shadow-card">
              <header className="mb-4">
                <h3 className="mb-1.5 font-serif text-[1.4rem]">{group.group}</h3>
                <p className="text-[0.92rem] text-ink-muted">{group.note}</p>
              </header>
              <p className="mb-2.5 text-[0.82rem] font-bold tracking-[0.08em] text-ink-muted uppercase">
                Presentaciones disponibles
              </p>
              <ul className="grid gap-2">
                {group.sizes.map((size) => (
                  <li
                    key={size}
                    className="rounded-[10px] bg-cream px-3.5 py-2.5 font-medium"
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
