import { images, pricingNote, tomateProducts } from "../data/content";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./SectionHeader";

export function TomateSection() {
  return (
    <Section id="tomate" variant="warm">
      <Container>
        <SectionHeader
          className="mb-10"
          eyebrow="Salsas y antipastos"
          title="Conservas de Tomate"
          description="Salsas y antipastos artesanales listos para acompañar tus comidas con el sabor auténtico del tomate y vegetales seleccionados."
        />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <img
            src={images.antipasto}
            alt="Antipasto Santiso con bruschetta"
            loading="lazy"
            className="w-full rounded-card shadow-card-lg"
          />

          <div className="grid gap-5">
            <p className="rounded-card-sm border-l-3 border-brand-green bg-brand-green/8 px-4 py-3.5 text-[0.95rem] text-ink-muted">
              {pricingNote}
            </p>
            {tomateProducts.map((product) => (
              <article
                key={product.name}
                className="relative rounded-card bg-white p-6 shadow-card"
              >
                {"badge" in product && product.badge && (
                  <span className="mb-3 inline-block rounded-full bg-brand-red/10 px-2.5 py-1.5 text-[0.78rem] font-bold text-brand-red uppercase">
                    {product.badge}
                  </span>
                )}
                <h3 className="mb-2 font-serif text-[1.4rem]">
                  {product.name}
                </h3>
                <p className="mb-4 text-ink-muted">{product.description}</p>
                <p className="mb-2.5 text-[0.82rem] font-bold tracking-[0.08em] text-ink-muted uppercase">
                  Presentaciones disponibles
                </p>
                <ul className="grid gap-2">
                  {product.sizes.map((size) => (
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
        </div>
      </Container>
    </Section>
  );
}
