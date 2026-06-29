import Image from "next/image"
import { ArrowUpRight, Sparkles, ConciergeBell, ShieldCheck, Users } from "lucide-react"

const marquee = [
  "Hôtesses d'accueil",
  "Agents de sécurité",
  "Personnel évènementiel",
  "Manutention",
  "Accueil VIP",
  "Sécurité incendie",
  "Renfort logistique",
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* animated grid */}
      <div className="mp-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      {/* glow blobs */}
      <div
        className="mp-glow pointer-events-none absolute -left-40 top-10 size-[28rem] rounded-full bg-accent/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="mp-glow pointer-events-none absolute -right-32 bottom-0 size-[24rem] rounded-full bg-chart-2/40 blur-3xl"
        style={{ animationDelay: "2s" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-8 lg:pb-28 lg:pt-40">
        {/* left copy */}
        <div className="mp-reveal is-visible">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary-foreground/80">
            <Sparkles className="size-3.5 text-accent" />
            Agence de mise à disposition de personnel
          </span>

          <h1 className="mt-6 text-balance text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Le bon profil,
            <br />
            <span className="text-accent">au bon moment.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/75">
            MPServices met à disposition des entreprises des hôtesses d&apos;accueil, des agents de
            sécurité et du personnel qualifié. Des équipes fiables, formées et disponibles à
            Brazzaville, Pointe-Noire et dans tout le Congo.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Demander un devis
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Nos prestations
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { value: "500+", label: "Missions/an" },
              { value: "24/7", label: "Disponibilité" },
              { value: "98%", label: "Clients fidèles" },
            ].map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-bold text-primary-foreground">{s.value}</dt>
                <dd className="mt-1 text-sm text-primary-foreground/60">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* right visual */}
        <div className="relative mp-reveal is-visible" style={{ animationDelay: "150ms" }}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-primary-foreground/15 shadow-2xl">
            <Image
              src="/images/hero.png"
              alt="Équipe MPServices : hôtesses et agents de sécurité dans un hall d'entreprise moderne"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
          </div>

          {/* floating badges */}
          <div className="mp-float absolute -left-2 top-10 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-card-foreground shadow-xl sm:-left-6">
            <span className="grid size-9 place-items-center rounded-xl bg-accent/15 text-accent">
              <ConciergeBell className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">Hôtesses</p>
              <p className="text-xs text-muted-foreground">Accueil premium</p>
            </div>
          </div>

          <div
            className="mp-float absolute -right-2 top-1/2 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-card-foreground shadow-xl sm:-right-6"
            style={{ animationDelay: "1.5s" }}
          >
            <span className="grid size-9 place-items-center rounded-xl bg-accent/15 text-accent">
              <ShieldCheck className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">Sécurité</p>
              <p className="text-xs text-muted-foreground">Agents certifiés</p>
            </div>
          </div>

          <div
            className="mp-float absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-card-foreground shadow-xl"
            style={{ animationDelay: "0.8s" }}
          >
            <span className="grid size-9 place-items-center rounded-xl bg-accent/15 text-accent">
              <Users className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">Personnel</p>
              <p className="text-xs text-muted-foreground">Qualifié & formé</p>
            </div>
          </div>
        </div>
      </div>

      {/* marquee */}
      <div className="relative border-t border-primary-foreground/10 py-5">
        <div className="flex w-max mp-marquee gap-3">
          {[...marquee, ...marquee].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 whitespace-nowrap px-4 text-sm font-medium uppercase tracking-widest text-primary-foreground/55"
            >
              {item}
              <span className="size-1.5 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
