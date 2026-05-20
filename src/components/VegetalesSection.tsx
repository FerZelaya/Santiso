import { images, pricingNote, vegetalesPresentations, vegetalesProducts } from '../data/content'
import { Container } from './layout/Container'
import { Section } from './layout/Section'
import { SectionHeader } from './SectionHeader'

export function VegetalesSection() {
  return (
    <Section id="vegetales" variant="green">
      <Container className="grid grid-cols-1 items-center gap-10 max-lg:gap-10 lg:grid-cols-2">
        <div>
          <img
            src={images.vegetales}
            alt="Conservas de vegetales Santiso"
            loading="lazy"
            className="rounded-card shadow-card-lg"
          />
        </div>
        <div>
          <SectionHeader
            align="left"
            light
            eyebrow="Pickles artesanales"
            title="Conservas de vegetales"
            description="Pickles artesanales preparados con vegetales seleccionados, ideales para quienes disfrutan sabores frescos, intensos y naturales."
          />
          <ul className="my-5 grid gap-2">
            {vegetalesProducts.map((product) => (
              <li
                key={product}
                className="relative pl-4 text-white/92 before:absolute before:left-0 before:text-accent-gold before:content-['•']"
              >
                {product}
              </li>
            ))}
          </ul>
          <div className="grid gap-4">
            <p className="rounded-card-sm border-l-3 border-accent-gold bg-white/10 px-4 py-3.5 text-[0.95rem] text-white/92">
              {pricingNote}
            </p>
            <article className="rounded-card border border-white/15 bg-white/10 p-5">
              <p className="mb-2.5 text-[0.82rem] font-bold tracking-[0.08em] text-white/75 uppercase">
                Presentaciones disponibles
              </p>
              <ul className="grid gap-2">
                {vegetalesPresentations.map((row) => (
                  <li
                    key={row.product}
                    className="flex justify-between gap-4 rounded-[10px] bg-white/12 px-3.5 py-2.5 text-white"
                  >
                    <strong className="font-semibold">{row.product}</strong>
                    <span className="text-[0.92rem] text-white/80">{row.presentation}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </Container>
    </Section>
  )
}
