"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowUpRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "/images/hotesses.png",
    badge: "Accueil & Événementiel Premium",
    title: "Sublimez l'image de votre entreprise",
    subtitle: "Des hôtesses d'accueil professionnelles et du personnel événementiel qualifié pour un accueil irréprochable à Brazzaville, Pointe-Noire et partout au Congo.",
    ctaPrimary: "Demander un devis",
    ctaSecondary: "Nos prestations",
  },
  {
    image: "/images/securite.png",
    badge: "Sécurité & Protection 24/7",
    title: "Protégez vos collaborateurs et vos biens",
    subtitle: "Des agents de sécurité certifiés, rigoureux et formés aux interventions d'urgence pour assurer la sécurité de vos locaux et événements.",
    ctaPrimary: "Demander un devis",
    ctaSecondary: "Nos prestations",
  },
]

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
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 8000)
    return () => clearInterval(timer)
  }, [currentSlide])

  return (
    <section className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] lg:h-[90vh] min-h-[550px] flex flex-col justify-between overflow-hidden bg-primary text-primary-foreground">
      {/* Background images container */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              idx === currentSlide ? "opacity-100 z-0" : "opacity-0 pointer-events-none -z-10"
            )}
          >
            <Image
              src={slide.image}
              alt={slide.badge}
              fill
              priority={idx === 0}
              sizes="100vw"
              className={cn(
                "object-cover transition-transform",
                idx === currentSlide ? "mp-ken-burns" : "scale-100"
              )}
            />
          </div>
        ))}
        {/* Dark elegant overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35 z-10" />
        {/* Animated grid overlay */}
        <div className="mp-grid pointer-events-none absolute inset-0 opacity-20 z-10" aria-hidden="true" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 flex-grow flex items-center pt-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={cn(
                "transition-all duration-1000 ease-in-out flex flex-col max-w-3xl",
                idx === currentSlide
                  ? "opacity-100 translate-y-0 relative z-20"
                  : "opacity-0 translate-y-8 absolute inset-x-0 top-0 -z-10 pointer-events-none"
              )}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white w-fit">
                <Sparkles className="size-3.5 text-white animate-pulse" />
                {slide.badge}
              </span>

              <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
                {slide.title}
              </h1>

              <p className="mt-6 max-w-2xl text-pretty text-base sm:text-lg md:text-xl leading-relaxed text-white">
                {slide.subtitle}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  {slide.ctaPrimary}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {slide.ctaSecondary}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 hidden md:flex size-12 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-md transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95"
        aria-label="Diapositive précédente"
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 hidden md:flex size-12 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-md transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95"
        aria-label="Diapositive suivante"
      >
        <ChevronRight className="size-6" />
      </button>

      {/* Slide indicators (dots) */}
      <div className="absolute bottom-24 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              idx === currentSlide
                ? "w-8 bg-accent"
                : "w-2.5 bg-white/35 hover:bg-white/60"
            )}
            aria-label={`Aller à la diapositive ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scrolling marquee */}
      <div className="relative z-20 border-t border-white/10 py-5 bg-black/10 backdrop-blur-xs">
        <div className="flex w-max mp-marquee gap-3">
          {[...marquee, ...marquee].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 whitespace-nowrap px-4 text-sm font-medium uppercase tracking-widest text-white/70"
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
