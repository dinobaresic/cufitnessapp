"use client";

import { useMemo, useState, useEffect } from "react";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import Link from "next/link";
import Image from "next/image";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name) {
      setError("Molim unesite vaše ime i prezime.");
      return;
    }

    const message = `Bok Duje, zovem se ${formData.name} i želim se prijaviti za trening. Moj email je ${formData.email}.${formData.phone ? ` Moj broj je ${formData.phone}.` : ''}`;

    // Encode and open WhatsApp
    const whatsappUrl = `https://wa.me/385915232333?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-xs font-bold uppercase text-neutral-500 mb-2">Ime i Prezime *</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-surface border border-white/10 p-4 text-white focus:border-accent focus:outline-none transition-colors rounded-sm"
          placeholder="IVAN IVANIĆ"
        />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase text-neutral-500 mb-2">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-surface border border-white/10 p-4 text-white focus:border-accent focus:outline-none transition-colors rounded-sm"
          placeholder="IVAN@EMAIL.COM"
        />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase text-neutral-500 mb-2">Telefon (Opcionalno)</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full bg-surface border border-white/10 p-4 text-white focus:border-accent focus:outline-none transition-colors rounded-sm"
          placeholder="091 234 5678"
        />
      </div>

      {error && <p className="text-red-500 text-sm font-bold">{error}</p>}

      <button type="submit" className="w-full bg-accent text-neutral-900 font-bold uppercase tracking-wider py-4 hover:bg-accent-hover transition-colors rounded-sm">
        Pošalji Prijavu
      </button>
    </form>
  );
}

const WHATSAPP_NUMBER = "385915232333";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
const WHATSAPP_DEFAULT_TEXT =
  "Bok Duje, zanima me trening u Cudina Fitnessu. Možemo dogovoriti termin?";

type PackageId = "grupni" | "poli" | "oneonone";

const PACKAGES: Array<{
  id: PackageId;
  title: string;
  subtitle: string;
  bullets: string[];
  featured?: boolean;
  badge?: string;
  priceLabel: string;
  included: string[];
  forWho: string;
}> = [
    {
      id: "grupni",
      title: "Grupni",
      subtitle: "Motivirajuća atmosfera.",
      bullets: ["Vođeni treninzi", "Fokus na tehniku"],
      priceLabel: "70 €",
      included: [
        "Vođeni treninzi u grupi",
        "Praćenje progresa",
        "Tehnika i ispravci",
        "Podrška i motivacija",
      ],
      forWho: "Za ekipu koja želi ritam, atmosferu i rezultat bez komplikacija.",
    },
    {
      id: "poli",
      title: "Poluindividualni",
      subtitle: "Individualiziran pristup.",
      bullets: ["Max 4 osobe", "Osobni program", "Fleksibilni termini"],
      featured: true,
      badge: "Popularno",
      priceLabel: "150 €",
      included: [
        "Rad u maloj grupi (do 4)",
        "Osobni program i progresija",
        "Fleksibilniji termini",
        "Kontinuirano praćenje",
        "Prioritet na tehnici i progresu",
      ],
      forWho: "Za ljude koji žele ozbiljniji pristup, ali vole mali tim.",
    },
    {
      id: "oneonone",
      title: "1 na 1",
      subtitle: "Maksimalna posvećenost.",
      bullets: ["100% fokus", "Nutricionistički savjeti"],
      priceLabel: "200 €",
      included: [
        "100% fokus na tebe",
        "Individualni plan treninga",
        "Praćenje i korekcije",
        "Nutricionističke smjernice",
        "Najbrži put do rezultata",
      ],
      forWho: "Za one koji žele najbrži napredak i full accountability.",
    },
  ];

const WHATSAPP_LINK = `${WHATSAPP_BASE}?text=${encodeURIComponent(WHATSAPP_DEFAULT_TEXT)}`;

function FaqItem({ question, answer, delay }: { question: string; answer: string; delay: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Reveal delay={delay}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left bg-background border transition-all duration-300 rounded-sm overflow-hidden ${isOpen ? "border-accent" : "border-white/10 hover:border-white/30"}`}
      >
        <div className="p-6 flex items-center justify-between">
          <span className="text-lg font-bold uppercase text-white pr-8">{question}</span>
          <div className={`relative h-4 w-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
            <div className="absolute top-1/2 left-0 h-0.5 w-full bg-accent -translate-y-1/2" />
            <div className="absolute top-0 left-1/2 h-full w-0.5 bg-accent -translate-x-1/2" />
          </div>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <p className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4">
            {answer}
          </p>
        </div>
      </button>
    </Reveal>
  );
}

export default function HomePage() {
  const [selectedPackageId, setSelectedPackageId] = useState<PackageId | null>(null);

  const selectedPackage = useMemo(
    () => PACKAGES.find((p) => p.id === selectedPackageId),
    [selectedPackageId]
  );

  const packageWhatsAppLink = useMemo(() => {
    if (!selectedPackage) return WHATSAPP_LINK;
    const msg = `Bok Duje, zanima me paket "${selectedPackage.title}" u Cudina Fitnessu. Možemo dogovoriti termin?`;
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;
  }, [selectedPackage]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedPackageId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPackageId]);

  return (
    <main className="flex flex-col">
      <div id="top" className="absolute top-0 -z-10 h-0 w-0" />

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-background px-6">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-30 blur-sm"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <Reveal className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
            <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Pakoštane &bull; Biograd
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-tight tracking-tighter text-white">
            Postigni <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">formu</span>
            <br /> života
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg text-neutral-400 md:text-xl">
            Trening ne mora biti pakao. Prilagođen je tebi, za realne rezultate koje možeš održati.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              className="group relative inline-flex min-w-[200px] items-center justify-center overflow-hidden rounded-sm bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-neutral-900 transition-all hover:bg-accent-hover"
            >
              <span className="relative z-10">Dogovori Termin</span>
            </a>
            <Link
              href="/upitnik"
              className="group inline-flex min-w-[200px] items-center justify-center rounded-sm border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-accent hover:text-accent"
            >
              Ispuni Upitnik
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Benefits Grid - Coaching Methodology */}
      <section id="coaching" className="bg-surface py-24 px-6 border-y border-white/5">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { title: "TVOJ ŽIVOT, TVOJ TEMPO", desc: "Nemaš 2 sata dnevno za teretanu? Nije problem. Program se gradi oko tebe — ne ti oko programa." },
                { title: "ZNANJE, NE NAGAĐANJE", desc: "Licencirani trener s redovnim usavršavanjima. Svaka vježba ima razlog, svaki plan ima strukturu." },
                { title: "PODRŠKA KOJA TRAJE", desc: "Grupni ili individualni — imaš nekoga tko prati tvoj napredak i korigira kad treba." }
              ].map((item, i) => (
                <div key={i} className="group relative p-8 bg-background border border-white/5 hover:border-accent/50 transition-colors rounded-sm">
                  <div className="mb-4 h-10 w-10 text-accent">
                    {/* Icon placeholder */}
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-neutral-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Results / Transformations */}
      <section id="rezultati" className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 md:flex md:items-end md:justify-between border-b border-white/10 pb-6">
              <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter">Rezultati</h2>
              <p className="text-neutral-500">Pravi ljudi. Realni ciljevi.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="aspect-[3/4] w-full bg-surface border border-white/5 relative group cursor-pointer overflow-hidden rounded-sm">
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold uppercase text-neutral-600 group-hover:text-accent transition-colors">
                    Transformacija {i + 1}
                  </div>
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-meni" className="py-24 px-6 bg-surface/50 border-y border-white/5">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              {/* Image Placeholder - Link to About */}
              <Link href="/o-meni" className="group relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-neutral-800 border border-white/10 cursor-pointer block">
                <Image
                  src="/duje-red.jpg"
                  alt="Duje Čudina - Trener"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 border-l-4 border-accent pl-4 z-10">
                  <p className="text-2xl font-black uppercase text-white group-hover:text-accent transition-colors">Duje Čudina</p>
                  <p className="text-sm font-bold uppercase text-accent tracking-wider">Head Coach</p>
                </div>

                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500 z-20" />
              </Link>

              {/* Text */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-sm border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent mb-6">
                  Tvoj Trener
                </div>
                <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter mb-6">
                  Više od <span className="text-accent">treninga</span>.
                </h2>
                <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                  Moje ime je Duje. Vjerujem da fitness ne smije biti još jedna obaveza koja ti stvara stres.
                  Moj pristup je jednostavan: **teški treninzi, pametna prehrana i održiv životni stil.**
                </p>

                <Link
                  href="/o-meni"
                  className="inline-flex items-center font-bold uppercase tracking-wider text-accent hover:text-white transition-colors"
                >
                  Pročitaj više o meni <span className="ml-2">→</span>
                </Link>

                <div className="mt-8 grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                  <div>
                    <div className="text-3xl font-black text-white flex items-center gap-1">
                      <Counter end={5} />+
                    </div>
                    <div className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Godina iskustva</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white flex items-center gap-1">
                      <Counter end={100} />+
                    </div>
                    <div className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Zadovoljnih klijenata</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section (Accordion) */}
      <section className="py-24 px-6 bg-surface/30 border-y border-white/5">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter">
              Česta Pitanja
            </h2>
            <p className="text-neutral-500 mt-2 font-bold uppercase tracking-wider">Sve što te zanima</p>
          </Reveal>

          <div className="space-y-4">
            {[
              { q: "Kako mogu rezervirati svoje mjesto na grupnim treninzima?", a: "Rezervacije se vrše direktno putem WhatsAppa ili naše aplikacije za članove." },
              { q: "Plaćaju li se grupni treninzi posebno?", a: "Ne, ako uzmeš 'Grupni' ili 'Poluindividualni' paket, treninzi su uključeni u cijenu." },
              { q: "Moram li izabrati jedan program?", a: "Možeš kombinirati programe u dogovoru s trenerom, ovisno o tvojim ciljevima." },
              { q: "Mogu li otkazati trening?", a: "Trening se može otkazati najkasnije 24h ranije. U suprotnom se termin računa kao iskorišten." },
              { q: "Što ako ne dođem na termin?", a: "Ako ne otkažeš na vrijeme, termin propada. Poštujemo tvoje i naše vrijeme." },
              { q: "Imate li parking?", a: "Da, ispred C24 GYM-a osiguran je besplatni parking za sve članove." }
            ].map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Packages */}
      <section id="paketi" className="py-24 px-6 bg-surface border-y border-white/5">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter">
              Coaching Paketi
            </h2>
            <p className="mt-3 text-neutral-500">Klikni na paket za više detalja i cijene.</p>
          </Reveal>

          <Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {PACKAGES.map((p) => {
                const isFeatured = !!p.featured;

                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedPackageId(p.id)}
                    className={[
                      "relative text-left bg-background border p-8 rounded-sm group",
                      "transition-all duration-300 ease-out",
                      "hover:-translate-y-2 hover:shadow-[0_0_40px_-5px_rgba(245,158,11,0.15)]",
                      "focus:outline-none focus:ring-2 focus:ring-accent/60",
                      // Apply amber border to all on hover/active as requested, or default for featured
                      isFeatured ? "border-accent" : "border-white/10 hover:border-accent",
                    ].join(" ")}
                  >
                    {p.badge && (
                      <div className="absolute top-0 right-0 bg-accent text-neutral-900 text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-bl-sm">
                        {p.badge}
                      </div>
                    )}

                    <h3 className={["text-2xl font-black uppercase transition-colors group-hover:text-accent", isFeatured ? "text-accent" : "text-white"].join(" ")}>
                      {p.title}
                    </h3>

                    <p className={["mt-2 text-sm", isFeatured ? "text-white" : "text-neutral-400"].join(" ")}>
                      {p.subtitle}
                    </p>

                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="text-3xl font-black text-white">{p.priceLabel}</span>
                      <span className="text-sm text-neutral-500">/ mj</span>
                    </div>

                    <ul className={["mt-8 space-y-4 text-sm", isFeatured ? "text-white" : "text-neutral-300"].join(" ")}>
                      {p.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3">
                          <span className="h-1.5 w-1.5 bg-accent rounded-full group-hover:scale-125 transition-transform" /> {b}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 group-hover:text-white transition-colors">
                        Saznaj više
                      </span>
                      <svg
                        className="h-5 w-5 text-accent transform transition-transform group-hover:translate-x-1"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Package Details Modal (Popup) */}
      {selectedPackage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-neutral-950/90 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedPackageId(null)}
          />

          {/* Content */}
          <div className="relative w-full max-w-2xl bg-surface border border-accent rounded-sm shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="relative p-8 md:p-12">
              {/* Close Button */}
              <button
                onClick={() => setSelectedPackageId(null)}
                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight">
                    {selectedPackage.title}
                  </h3>
                  {selectedPackage.featured && (
                    <span className="bg-accent text-neutral-900 text-xs font-bold px-2 py-1 uppercase rounded-sm">
                      Popularno
                    </span>
                  )}
                </div>
                <p className="text-lg text-accent">{selectedPackage.priceLabel} <span className="text-neutral-500 text-sm">/ mjesečno</span></p>
              </div>

              {/* Body */}
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-4">
                    Uključeno u paket
                  </h4>
                  <ul className="space-y-3 text-neutral-300">
                    {selectedPackage.included.map((x) => (
                      <li key={x} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 bg-accent rounded-full shrink-0" />
                        <span className="text-sm leading-relaxed">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-4">
                      Za koga je
                    </h4>
                    <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                      {selectedPackage.forWho}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <a
                      href={packageWhatsAppLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-full items-center justify-center rounded-sm bg-accent px-6 py-4 text-sm font-bold uppercase tracking-wider text-neutral-900 transition-colors hover:bg-accent-hover"
                    >
                      Odaberi {selectedPackage.title}
                    </a>
                    <div className="text-center text-xs text-neutral-500">
                      Javi se direktno Duji na WhatsApp
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact & Map */}
      <section id="kontakt" className="py-24 px-6 relative">

        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2">

          {/* Form */}
          <Reveal id="upitnik">
            <h2 className="text-3xl font-black uppercase text-white mb-8">Započni Danas</h2>
            <ContactForm />
          </Reveal>

          {/* Map Info */}
          <Reveal delay={200}>
            <h2 className="text-3xl font-black uppercase text-white mb-8">Lokacija</h2>
            <div className="bg-surface border border-white/10 p-2 rounded-sm h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=43.907558,15.507878&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
            <div className="mt-8 flex flex-col gap-4 text-neutral-400">
              <div className="flex items-center gap-4">
                <span className="text-accent font-bold">ADRESA:</span> ul. Ivana Meštrovića 30, 23210 Pakoštane
              </div>
              <div className="flex items-center gap-4">
                <span className="text-accent font-bold">RADNO VRIJEME:</span> Pon - Pet: 08:00 - 22:00
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
