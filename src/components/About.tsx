import { images } from '../data/content'
import { Container } from './layout/Container'
import { Section } from './layout/Section'
import { SectionHeader } from './SectionHeader'

export function About() {
  return (
    <Section id="nosotros">
      <Container className="grid grid-cols-1 items-center gap-12 max-lg:gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative">
          <img
            src={images.mermeladasSizes}
            alt="Presentaciones de mermelada Santiso"
            loading="lazy"
            className="rounded-card shadow-card-lg"
          />
          <div className="absolute right-4 bottom-4 rounded-full bg-brand-green px-4 py-3 text-[0.85rem] font-bold tracking-[0.06em] text-white uppercase">
            Deliciosamente Natural
          </div>
        </div>
        <div>
          <SectionHeader
            align="left"
            className="mb-6"
            eyebrow="Nosotros"
            title="Una forma más natural de disfrutar el sabor"
            description="Somos una empresa dedicada a crear productos con sabores auténticos, frescos y naturalmente irresistibles."
          />
          <p className="mb-4 text-ink-muted">
            En Santiso creemos que la diferencia está en disfrutar el verdadero sabor de cada
            ingrediente, sin excesos, sin sabores artificiales y sin perder su esencia natural.
          </p>
          <p className="mb-4 text-ink-muted">
            Elaboramos productos donde las frutas, verduras y especias son las protagonistas.
            Trabajamos cuidadosamente, seleccionando ingredientes frescos y de alta calidad para
            ofrecer una experiencia diferente a las opciones tradicionales del mercado.
          </p>
          <p className="text-ink-muted">
            Nuestros productos se elaboran sin conservantes, colorantes ni sabores artificiales. El
            resultado son sabores más frescos, equilibrados y genuinos, donde puedes disfrutar la
            calidad y naturalidad en cada bocado.
          </p>
        </div>
      </Container>
    </Section>
  )
}
