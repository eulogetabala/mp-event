import { Reveal } from "@/components/reveal"

const steps = [
  {
    number: "01",
    title: "Vous nous contactez",
    description: "Décrivez votre besoin : type de mission, nombre de personnes, dates et lieu.",
  },
  {
    number: "02",
    title: "Nous sélectionnons",
    description: "Nous identifions les profils qualifiés correspondant à vos exigences précises.",
  },
  {
    number: "03",
    title: "Validation & devis",
    description: "Vous recevez une proposition claire et transparente, sans surprise.",
  },
  {
    number: "04",
    title: "Mission sur le terrain",
    description: "Nos équipes interviennent et un référent assure le suivi tout au long.",
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Comment ça marche
          </span>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Un accompagnement simple en 4 étapes
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 120} as="li">
              <div className="relative h-full rounded-3xl border border-border bg-card p-7">
                <span className="text-5xl font-bold text-accent/25">{step.number}</span>
                <h3 className="mt-4 text-lg font-bold text-card-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <span
                    className="absolute right-6 top-9 hidden text-2xl text-border lg:block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
