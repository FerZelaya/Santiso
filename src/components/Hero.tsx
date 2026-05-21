import { heroBadges, images } from "../data/content";
import { whatsappUrl } from "../utils/whatsapp";
import { Button } from "./Button";
import { Container } from "./layout/Container";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-[8.5rem] pb-20 max-md:pt-28"
    >
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_20%,rgba(217,119,6,0.12),transparent_28%),radial-gradient(circle_at_10%_80%,rgba(47,90,71,0.1),transparent_30%),linear-gradient(180deg,#fff_0%,#faf7f2_100%)]"
        aria-hidden="true"
      />
      <Container className="grid grid-cols-1 items-center gap-12 max-lg:gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-4 text-[0.82rem] font-bold tracking-[0.14em] text-brand-green uppercase">
            Conservas artesanales
          </p>
          <h1 className="mb-5 font-serif text-[clamp(2.6rem,5vw,4.2rem)] leading-[1.02] font-bold max-md:text-[clamp(3.35rem,11vw,4.2rem)]">
            Santiso,{" "}
            <span className="block text-brand-red">deliciosamente natural</span>
          </h1>
          <p className="mb-4 max-w-[34rem] text-[1.1rem] text-ink-muted">
            Mermeladas y conservas artesanales con sabor auténtico. Productos
            elaborados con frutas, verduras y especias seleccionadas, sin
            conservantes, colorantes ni sabores artificiales.
          </p>
          <p className="mb-7 max-w-[34rem] text-[1.1rem] text-ink-muted">
            En Santiso creamos sabores auténticos, frescos y naturalmente
            irresistibles. Cada producto conserva la esencia real de sus
            ingredientes para que disfrutes una experiencia artesanal,
            equilibrada y llena de sabor.
          </p>
          <div className="mb-6 flex flex-wrap gap-3.5 max-md:[&_a]:w-full max-md:[&_button]:w-full">
            <Button
              href={whatsappUrl("Hola Santiso, quiero hacer un pedido.")}
              variant="whatsapp"
              size="lg"
            >
              Hacer pedido por WhatsApp
            </Button>
            <Button href="#productos" variant="outline" size="lg">
              Ver productos
            </Button>
          </div>
          <ul className="flex flex-wrap gap-2.5">
            {heroBadges.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-brand-green/12 bg-white px-3.5 py-1.5 text-[0.82rem] font-semibold text-brand-green"
              >
                {badge}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="aspect-[3/4] max-h-[min(85vh,680px)] overflow-hidden rounded-[28px] border-6 border-white shadow-card-lg lg:aspect-[4/5]">
            <img
              src={images.hero}
              alt="Pasta con salsa de tomate artesanal Santiso"
              loading="eager"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute -left-4 bottom-6 flex flex-col gap-0.5 rounded-card-sm bg-brand-red p-4 px-5 text-white shadow-card max-lg:left-4">
            <span className="font-serif text-[1.35rem] leading-none font-bold">
              + Sabor Auténtico
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
