import { categories } from "../data/content";
import { Button } from "./Button";
import { Container } from "./layout/Container";
import { Section } from "./layout/Section";
import { SectionHeader } from "./SectionHeader";

export function ProductCategories() {
  return (
    <Section id="productos" variant="cream">
      <Container>
        <SectionHeader
          eyebrow=""
          title="Nuestros productos"
          description="Conservas artesanales creadas para disfrutar sabores frescos, auténticos y naturalmente irresistibles."
        />
        <div className="grid grid-cols-1 gap-6 max-lg:grid-cols-2 lg:grid-cols-3 max-md:grid-cols-1">
          {categories.map((category) => (
            <article
              key={category.id}
              className="group flex flex-col overflow-hidden rounded-card bg-white shadow-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-350 ease-in-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="font-serif text-[1.35rem] leading-[1.15]">
                  {category.title}
                </h3>
                <p className="flex-1 text-ink-muted">{category.description}</p>
                <Button href={category.href} variant="secondary" size="md">
                  Ver sabores
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
