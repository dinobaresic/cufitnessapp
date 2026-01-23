'use client';

import { useState, useMemo, useEffect } from "react";
import { Reveal } from "@/components/Reveal";

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

const WHATSAPP_BASE = "https://wa.me/385992013971";
const WHATSAPP_DEFAULT_TEXT = "Bok Duje, zanima me trening u Cudina Fitnessu. Možemo dogovoriti termin?";
const WHATSAPP_LINK = `${WHATSAPP_BASE}?text=${encodeURIComponent(WHATSAPP_DEFAULT_TEXT)}`;

export function PackagesSection() {
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
        <section id="paketi" className="py-24 px-6 bg-surface border-y border-white/5">
            <div className="mx-auto max-w-7xl">
                <Reveal className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter">
                        Coaching Paketi
                    </h2>
                    <p className="mt-3 text-neutral-400">Klikni na paket za više detalja i cijene.</p>
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
                                        "relative text-left p-8 rounded-sm group transition-all duration-500 ease-out",
                                        "bg-surface/40 backdrop-blur-md border",
                                        "hover:-translate-y-2 hover:shadow-[0_0_50px_-10px_rgba(255,94,0,0.2)]",
                                        "focus:outline-none focus:ring-2 focus:ring-accent/60",
                                        isFeatured ? "border-accent shadow-[0_0_30px_-10px_rgba(255,94,0,0.15)] bg-surface/60" : "border-white/5 hover:border-accent",
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

                                    <p className={["mt-2 text-sm", isFeatured ? "text-white" : "text-neutral-300"].join(" ")}>
                                        {p.subtitle}
                                    </p>

                                    <div className="mt-6 flex items-baseline gap-2">
                                        <span className="text-3xl font-black text-white">{p.priceLabel}</span>
                                        <span className="text-sm text-neutral-400">/ mj</span>
                                    </div>

                                    <ul className={["mt-8 space-y-4 text-sm", isFeatured ? "text-white" : "text-neutral-200"].join(" ")}>
                                        {p.bullets.map((b) => (
                                            <li key={b} className="flex items-center gap-3">
                                                <span className="h-1.5 w-1.5 bg-accent rounded-full group-hover:scale-125 transition-transform" /> {b}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
                                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors">
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
                                className="absolute top-4 right-4 p-2 text-neutral-300 hover:text-white transition-colors"
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
                                <p className="text-lg text-accent">{selectedPackage.priceLabel} <span className="text-neutral-400 text-sm">/ mjesečno</span></p>
                            </div>

                            {/* Body */}
                            <div className="grid gap-8 md:grid-cols-2">
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4">
                                        Uključeno u paket
                                    </h4>
                                    <ul className="space-y-3 text-neutral-200">
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
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4">
                                            Za koga je
                                        </h4>
                                        <p className="text-sm text-neutral-200 leading-relaxed mb-6">
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
                                        <div className="text-center text-xs text-neutral-400">
                                            Javi se direktno Duji na WhatsApp
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
