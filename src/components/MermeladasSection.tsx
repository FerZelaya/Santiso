import { useState } from "react";
import {
  images,
  mermeladaFlavors,
  mermeladaPresentations,
  pricingNote,
  type MermeladaFlavor,
} from "../data/content";
import { cn } from "../lib/cn";
import { FlavorModal } from "./FlavorModal";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./SectionHeader";

export function MermeladasSection() {
  const [selectedFlavor, setSelectedFlavor] = useState<MermeladaFlavor | null>(
    null,
  );

  return (
    <Section id="mermeladas">
      <Container className="grid grid-cols-1 items-start gap-10 max-lg:gap-10 lg:grid-cols-2">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Bajas en calorías"
            title="Mermeladas y Jaleas Bajas en Calorías"
            description="Disfruta sabores frutales con una propuesta más natural, equilibrada y artesanal."
          />
          <div
            className="mt-5 flex flex-wrap gap-2"
            aria-label="Sabores disponibles"
          >
            {mermeladaFlavors.map((flavor) => (
              <button
                key={flavor.name}
                type="button"
                onClick={() => setSelectedFlavor(flavor)}
                className={cn(
                  "cursor-pointer rounded-full border border-ink/[0.08] bg-white px-3 py-1.5 text-[0.88rem] font-medium transition-colors",
                  "hover:border-brand-green/30 hover:bg-brand-green/5",
                  selectedFlavor?.name === flavor.name &&
                    "border-brand-green bg-brand-green/10 text-brand-green",
                )}
              >
                {flavor.name}
              </button>
            ))}
          </div>
          <p className="mt-3 text-[0.85rem] text-ink-muted">
            Toca un sabor para ver el producto.
          </p>
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
            <article
              key={group.group}
              className="rounded-card bg-white p-5 shadow-card"
            >
              <header className="mb-4">
                <h3 className="mb-1.5 font-serif text-[1.4rem]">
                  {group.group}
                </h3>
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

      <FlavorModal
        flavor={selectedFlavor}
        onClose={() => setSelectedFlavor(null)}
      />
    </Section>
  );
}
