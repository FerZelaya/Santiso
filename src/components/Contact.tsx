import { useState } from 'react'
import type { FormEvent } from 'react'
import { orderTypes, WHATSAPP_DISPLAY } from '../data/content'
import { whatsappUrl } from '../utils/whatsapp'
import { Button } from './Button'
import { Container } from './layout/Container'
import { Section } from './layout/Section'
import { SectionHeader } from './SectionHeader'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const nombre = String(data.get('nombre') ?? '')
    const telefono = String(data.get('telefono') ?? '')
    const correo = String(data.get('correo') ?? '')
    const tipo = String(data.get('tipo') ?? '')
    const mensaje = String(data.get('mensaje') ?? '')

    const text = [
      'Hola Santiso,',
      '',
      `Nombre: ${nombre}`,
      `Teléfono: ${telefono}`,
      `Correo: ${correo}`,
      `Tipo de pedido: ${tipo}`,
      '',
      mensaje,
    ].join('\n')

    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    form.reset()
  }

  return (
    <Section id="contacto">
      <Container className="grid grid-cols-1 items-start gap-10 max-lg:gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Estamos para ayudarte"
            title="Contáctanos"
            description="¿Quieres hacer un pedido, consultar disponibilidad o comprar al por mayor? Escríbenos y con gusto te atenderemos."
          />
          <ul className="my-6 grid gap-4">
            <li>
              <strong className="mb-0.5 block text-[0.82rem] font-bold tracking-[0.08em] text-brand-green uppercase">
                WhatsApp
              </strong>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-red"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <strong className="mb-0.5 block text-[0.82rem] font-bold tracking-[0.08em] text-brand-green uppercase">
                Instagram
              </strong>
              <a
                href="https://instagram.com/Santisohn"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-red"
              >
                @Santisohn
              </a>
            </li>
            <li>
              <strong className="mb-0.5 block text-[0.82rem] font-bold tracking-[0.08em] text-brand-green uppercase">
                Facebook
              </strong>
              <a
                href="https://facebook.com/Santisohn"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-red"
              >
                @Santisohn
              </a>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 rounded-card bg-white p-7 shadow-card-lg"
        >
          <div className="grid gap-1.5">
            <label htmlFor="nombre" className="text-[0.9rem] font-semibold">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              autoComplete="name"
              className="w-full rounded-card-sm border border-ink/[0.12] bg-cream px-3.5 py-3 text-ink focus:border-brand-green focus:outline-2 focus:outline-brand-green/25"
            />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="telefono" className="text-[0.9rem] font-semibold">
              Teléfono
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              required
              autoComplete="tel"
              className="w-full rounded-card-sm border border-ink/[0.12] bg-cream px-3.5 py-3 text-ink focus:border-brand-green focus:outline-2 focus:outline-brand-green/25"
            />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="correo" className="text-[0.9rem] font-semibold">
              Correo
            </label>
            <input
              id="correo"
              name="correo"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-card-sm border border-ink/[0.12] bg-cream px-3.5 py-3 text-ink focus:border-brand-green focus:outline-2 focus:outline-brand-green/25"
            />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="tipo" className="text-[0.9rem] font-semibold">
              Tipo de pedido
            </label>
            <select
              id="tipo"
              name="tipo"
              required
              defaultValue=""
              className="w-full rounded-card-sm border border-ink/[0.12] bg-cream px-3.5 py-3 text-ink focus:border-brand-green focus:outline-2 focus:outline-brand-green/25"
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              {orderTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="mensaje" className="text-[0.9rem] font-semibold">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              required
              className="w-full rounded-card-sm border border-ink/[0.12] bg-cream px-3.5 py-3 text-ink focus:border-brand-green focus:outline-2 focus:outline-brand-green/25"
            />
          </div>
          <Button type="submit" variant="primary" size="lg">
            Enviar mensaje
          </Button>
          {submitted && (
            <p className="text-[0.92rem] text-brand-green" role="status">
              Tu mensaje se abrirá en WhatsApp para que puedas enviarlo.
            </p>
          )}
        </form>
      </Container>
    </Section>
  )
}
