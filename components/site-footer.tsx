import Image from "next/image"

const groups = [
  {
    title: "Services",
    links: ["Hôtesses d'accueil", "Agents de sécurité", "Personnel qualifié", "Renfort logistique"],
  },
  {
    title: "Entreprise",
    links: ["À propos", "Pourquoi nous", "Process", "Recrutement"],
  },
  {
    title: "Contact",
    links: ["+242 06 000 00 00", "contact@mpservices.cg", "Brazzaville · Pointe-Noire"],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#" aria-label="MP Services - Accueil" className="inline-flex items-center">
              <span className="grid place-items-center rounded-lg bg-white px-3 py-2 shadow-sm">
                <Image
                  src="/images/logo.png"
                  alt="MP Services"
                  width={140}
                  height={48}
                  className="h-11 w-auto"
                />
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              Mise à disposition d&apos;hôtesses, d&apos;agents de sécurité et de personnel qualifié
              pour les entreprises.
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/60 transition-colors hover:text-accent"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 text-sm text-primary-foreground/50 sm:flex-row">
          <p>© {new Date().getFullYear()} MPServices. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-accent">
              Mentions légales
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
