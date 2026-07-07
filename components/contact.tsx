"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Check } from "lucide-react"

const services = ["Hôtesses d'accueil", "Agents de sécurité", "Personnel qualifié", "Autre besoin"]

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="scroll-mt-20 bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Contact
            </span>
            <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Parlons de votre besoin
            </h2>
            <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Recevez une proposition personnalisée sous 24h. Notre équipe vous recontacte
              rapidement pour cadrer votre projet.
            </p>

            <ul className="mt-10 space-y-5">
              {[
                { icon: Phone, label: "Téléphone", value: "05 021 03 03 · 066 273 833" },
                { icon: Mail, label: "Email", value: "contact@ste-mpservices.com" },
                { icon: MapPin, label: "Zone d'intervention", value: "Brazzaville · Pointe-Noire · tout le Congo" },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-4">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8">
            {sent ? (
              <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                <span className="grid size-14 place-items-center rounded-full bg-accent/15 text-accent">
                  <Check className="size-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-card-foreground">Demande envoyée !</h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                  Merci pour votre message. Notre équipe vous recontacte sous 24h ouvrées.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nom complet" id="name">
                    <input
                      id="name"
                      required
                      placeholder="Jean Dupont"
                      className="mp-input"
                    />
                  </Field>
                  <Field label="Entreprise" id="company">
                    <input id="company" placeholder="Votre société" className="mp-input" />
                  </Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" id="email">
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jean@entreprise.cg"
                      className="mp-input"
                    />
                  </Field>
                  <Field label="Téléphone" id="phone">
                    <input
                      id="phone"
                      type="tel"
                      placeholder="06 000 00 00"
                      className="mp-input"
                    />
                  </Field>
                </div>
                <Field label="Type de prestation" id="service">
                  <select id="service" className="mp-input" defaultValue="">
                    <option value="" disabled>
                      Sélectionnez un service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Votre message" id="message">
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Décrivez votre besoin, dates, lieu..."
                    className="mp-input resize-none"
                  />
                </Field>
                <button
                  type="submit"
                  className="w-full rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Envoyer ma demande
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  id,
  children,
}: {
  label: string
  id: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}
