import { useEffect } from 'react'
import type { MermeladaFlavor } from '../data/content'

type FlavorModalProps = {
  flavor: MermeladaFlavor | null
  onClose: () => void
}

export function FlavorModal({ flavor, onClose }: FlavorModalProps) {
  useEffect(() => {
    if (!flavor) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [flavor, onClose])

  if (!flavor) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center bg-ink/60 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="flavor-modal-title"
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-md overflow-hidden rounded-t-[24px] bg-white shadow-card-lg sm:rounded-card"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-ink/[0.08] px-5 py-4">
          <h3 id="flavor-modal-title" className="font-serif text-xl font-bold text-brand-red">
            {flavor.name}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-xl leading-none text-ink transition-colors hover:bg-cream-dark"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>
        <div className="overflow-y-auto">
          <img
            src={flavor.image}
            alt={flavor.alt}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}
