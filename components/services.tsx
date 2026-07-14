import Image from "next/image"
import { ConciergeBell, ShieldCheck, Users, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: ConciergeBell,
    title: "Hôtesses d'accueil",
    image: "/images/hotesses.png",
    description:
      "Accueil physique et téléphonique, orientation des visiteurs, gestion des vestiaires et animation de stands. Une première impression toujours soignée pour valoriser votre image de marque.",
    points: ["Salons & congrès", "Accueil en entreprise", "Événements VIP", "Gestion de vestiaires"],
  },
  {
    icon: ShieldCheck,
    title: "Agents de sécurité",
    image: "/images/securite.png",
    description:
      "Agents qualifiés et certifiés pour la surveillance, le contrôle d'accès, la rondes de sécurité et la sécurité incendie. Une sérénité garantie sur tous vos sites industriels et tertiaires.",
    points: ["Gardiennage 24/7", "Contrôle d'accès", "Sécurité événementielle", "Sécurité Incendie (SSIAP)"],
  },
  {
    icon: Users,
    title: "Personnel qualifié",
    image: "/images/personnel.png",
    description:
      "Renfort logistique, manutention, service en salle et personnel polyvalent. Des équipes motivées, ponctuelles et opérationnelles immédiatement pour vos surcharges d'activité.",
    points: ["Logistique & Dépôt", "Manutention lourde", "Renfort événementiel", "Personnel de service"],
  },
]

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 bg-white py-24 sm:py-32 overflow-hidden">
      {/* Background decoration blobs */}
      <div
        className="pointer-events-none absolute -right-40 top-1/3 size-[30rem] rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-1/4 size-[30rem] rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-black">
            Nos prestations
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-black sm:text-5xl leading-none">
            Trois métiers, une exigence commune
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-black">
            Quelle que soit votre activité, nous sélectionnons et formons les profils qui
            représenteront fidèlement votre image et sécuriseront vos opérations.
          </p>
        </Reveal>

        <div className="space-y-24 md:space-y-36">
          {services.map((s, i) => {
            const isEven = i % 2 === 0
            return (
              <div
                key={s.title}
                className="grid gap-8 md:gap-12 lg:grid-cols-12 items-center"
              >
                {/* Image Column */}
                <Reveal
                  className={cn(
                    "lg:col-span-6 w-full",
                    isEven ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  <div className="relative aspect-video md:aspect-[16/10] overflow-hidden rounded-3xl border border-border shadow-xl group">
                    <Image
                      src={s.image || "/placeholder.svg"}
                      alt={s.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  </div>
                </Reveal>

                {/* Text Column */}
                <Reveal
                  delay={150}
                  className={cn(
                    "lg:col-span-6 w-full flex flex-col justify-center",
                    isEven ? "lg:order-2 lg:pl-8 xl:pl-12" : "lg:order-1 lg:pr-8 xl:pr-12"
                  )}
                >
                  {/* Outline Number */}
                  <span className="block text-6xl font-extrabold text-black tracking-tight select-none mb-3">
                    {`0${i + 1}`}
                  </span>

                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent">
                      <s.icon className="size-5" />
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                      {s.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-base sm:text-lg leading-relaxed text-black">
                    {s.description}
                  </p>

                  {/* Point list */}
                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-border pt-6">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2.5 text-sm font-medium text-black"
                      >
                        <span className="size-2 rounded-full bg-accent animate-pulse" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors hover:text-foreground relative pb-1 w-fit"
                    >
                      Demander cette prestation
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent transition-transform scale-x-100 group-hover:scale-x-0 origin-left" />
                    </a>
                  </div>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
