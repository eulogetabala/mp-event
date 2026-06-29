import { BadgeCheck, Clock, MapPin, HeartHandshake } from "lucide-react"
import { Reveal } from "@/components/reveal"

const reasons = [
  {
    icon: BadgeCheck,
    title: "Profils certifiés",
    description:
      "Chaque collaborateur est sélectionné, formé et qualifié selon les exigences de votre secteur.",
  },
  {
    icon: Clock,
    title: "Réactivité 24/7",
    description:
      "Un besoin urgent ? Nous mobilisons les équipes adaptées en un temps record, jour et nuit.",
  },
  {
    icon: MapPin,
    title: "Couverture nationale",
    description:
      "Présents partout en France, nous intervenons sur tous vos sites et événements.",
  },
  {
    icon: HeartHandshake,
    title: "Interlocuteur dédié",
    description:
      "Un référent unique suit vos missions de A à Z pour une relation simple et durable.",
  },
]

export function WhyUs() {
  return (
    <section id="pourquoi" className="relative scroll-mt-20 overflow-hidden bg-primary py-24 text-primary-foreground sm:py-32">
      <div
        className="mp-grid pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Pourquoi MPServices
            </span>
            <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Une exigence qui fait la différence
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/70">
              Nous ne fournissons pas seulement du personnel : nous devenons le prolongement de vos
              équipes, avec le même souci du détail et de la qualité.
            </p>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-primary-foreground/10 bg-primary-foreground/10 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <div className="h-full bg-primary p-7 transition-colors hover:bg-primary-foreground/[0.04]">
                  <span className="grid size-12 place-items-center rounded-2xl bg-accent/15 text-accent">
                    <r.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">
                    {r.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
