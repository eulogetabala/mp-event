import Image from "next/image"
import { ConciergeBell, ShieldCheck, Users, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

const services = [
  {
    icon: ConciergeBell,
    title: "Hôtesses d'accueil",
    image: "/images/hotesses.png",
    description:
      "Accueil physique et téléphonique, orientation des visiteurs, gestion des vestiaires et animation de stands. Une première impression toujours soignée.",
    points: ["Salons & congrès", "Accueil en entreprise", "Événements VIP"],
  },
  {
    icon: ShieldCheck,
    title: "Agents de sécurité",
    image: "/images/securite.png",
    description:
      "Agents qualifiés et certifiés pour la surveillance, le contrôle d'accès et la sécurité incendie. Sérénité garantie sur tous vos sites.",
    points: ["Gardiennage", "Contrôle d'accès", "Sécurité événementielle"],
  },
  {
    icon: Users,
    title: "Personnel qualifié",
    image: "/images/personnel.png",
    description:
      "Renfort logistique, manutention, service et personnel polyvalent. Des équipes formées, ponctuelles et opérationnelles immédiatement.",
    points: ["Logistique", "Manutention", "Renfort ponctuel"],
  },
]

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Nos prestations
          </span>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Trois métiers, une exigence commune
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Quelle que soit votre activité, nous sélectionnons et formons les profils qui
            représenteront fidèlement votre image.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image || "/placeholder.svg"}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                  <span className="absolute left-4 top-4 grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground shadow-lg">
                    <s.icon className="size-5" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-card-foreground">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-primary"
                  >
                    En savoir plus
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
