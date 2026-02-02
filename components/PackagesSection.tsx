'use client';

import { useState, useMemo, useEffect } from "react";
import { Reveal } from "@/components/Reveal";

type PackageId = "group" | "mini" | "semi" | "individual";

const PACKAGES: Array<{
    id: PackageId;
    title: string;
    subtitle: string;
    bullets: string[];
    featured?: boolean;
    badge?: string;
    priceLabel: string;
    priceSub?: string;
    included: string[];
    forWho: string;
}> = [
        {
            id: "individual",
            title: "Individualni",
            subtitle: "1 na 1",
            bullets: ["100% fokus", "Korekcija tehnike", "Plan treninga"],
            priceLabel: "240 €",
            priceSub: "20 € / trening",
            included: [
                "3x tjedno (12 treninga mjesečno)",
                "Individualni plan treninga",
                "Korekcija tehnike",
                "Praćenje napretka",
                "Potpuna pažnja trenera",
                "Pojedinačni treninzi nisu u ponudi"
            ],
            forWho: "Za one koji žele najbrži napredak, maksimalnu posvećenost i 'full accountability'.",
        },
        {
            id: "semi",
            title: "Poluindividualni",
            subtitle: "2 na 1",
            bullets: ["Idealan za parove", "Povoljnija cijena", "Zajednički ciljevi"],
            featured: true,
            badge: "Best Value",
            priceLabel: "180 €",
            priceSub: "15 € / trening",
            included: [
                "3x tjedno (12 treninga mjesečno)",
                "15 € po treningu",
                "Idealno za parove ili prijatelje",
                "Osobe sličnog cilja i kondicije",
                "Zabavnija atmosfera uz partnera"
            ],
            forWho: "Za parove ili prijatelje koji se žele zajedno motivirati uz stručno vodstvo.",
        },
        {
            id: "mini",
            title: "Mini Grupa",
            subtitle: "4 na 1",
            bullets: ["Mala grupa", "Visoka motivacija", "Kvalitetan nadzor"],
            priceLabel: "120 €",
            priceSub: "10 € / trening",
            included: [
                "3x tjedno (12 treninga mjesečno)",
                "10 € po treningu",
                "Visoka motivacija male grupe",
                "Strukturiran trening",
                "Manja cijena uz kvalitetan nadzor"
            ],
            forWho: "Za one koji vole dinamiku grupe, ali i dalje žele da trener pazi na njihovu tehniku.",
        },
        {
            id: "group",
            title: "Grupni",
            subtitle: "Grupni treninzi",
            bullets: ["Motivirajuća grupa", "Kondicijski trening", "Povoljna cijena"],
            priceLabel: "80 €",
            priceSub: "mjesečna članarina",
            included: [
                "3 treninga tjedno",
                "Funkcionalni i kondicijski trening",
                "Rad u motivirajućoj grupi",
                "Ovisno o broju termina"
            ],
            forWho: "Za one koji žele dobar trening u društvu i energiju grupe po pristupačnoj cijeni.",
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
            <div className="mx-auto max-w-[1400px]">
                <Reveal className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter">
                        Cjenik Treninga
                    </h2>
                    <div className="mt-8 max-w-3xl mx-auto bg-accent/5 border border-accent/20 p-6 rounded-sm">
                        <p className="font-bold text-accent uppercase mb-2">Važno</p>
                        <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                            Radim isključivo s klijentima koji treniraju <span className="text-white font-bold">minimalno 3x tjedno</span>,
                            jer samo takav pristup donosi vidljive i dugoročne rezultate.
                            Svi treninzi ugovaraju se u mjesečnim paketima i plaćaju unaprijed.
                        </p>
                    </div>
                </Reveal>

                <Reveal>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {PACKAGES.map((p) => {
                            const isFeatured = !!p.featured;

                            return (
                                <button
                                    key={p.id}
                                    type="button"
                                    onClick={() => setSelectedPackageId(p.id)}
                                    className={[
                                        "relative text-left p-6 md:p-8 rounded-sm group transition-all duration-500 ease-out h-full flex flex-col",
                                        "bg-surface/40 backdrop-blur-md border",
                                        "hover:-translate-y-2 hover:shadow-[0_0_50px_-10px_rgba(0,122,255,0.2)]",
                                        "focus:outline-none focus:ring-2 focus:ring-accent/60",
                                        isFeatured ? "border-accent shadow-[0_0_30px_-10px_rgba(0,122,255,0.15)] bg-surface/60" : "border-white/5 hover:border-accent",
                                    ].join(" ")}
                                >
                                    {p.badge && (
                                        <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-bl-sm">
                                            {p.badge}
                                        </div>
                                    )}

                                    <h3 className={["text-xl font-black uppercase transition-colors group-hover:text-accent", isFeatured ? "text-accent" : "text-white"].join(" ")}>
                                        {p.title}
                                    </h3>

                                    <p className={["mt-1 text-xs font-bold uppercase tracking-wider", isFeatured ? "text-white/80" : "text-neutral-500"].join(" ")}>
                                        {p.subtitle}
                                    </p>

                                    <div className="mt-6">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-3xl font-black text-white">{p.priceLabel}</span>
                                            <span className="text-sm font-bold text-neutral-400">/ mj</span>
                                        </div>
                                        {p.priceSub && (
                                            <p className="text-xs text-neutral-400 mt-1">{p.priceSub}</p>
                                        )}
                                    </div>

                                    <ul className={["mt-6 space-y-3 text-xs flex-grow", isFeatured ? "text-white" : "text-neutral-300"].join(" ")}>
                                        {p.bullets.map((b) => (
                                            <li key={b} className="flex items-center gap-2">
                                                <span className="h-1 w-1 bg-accent rounded-full group-hover:scale-150 transition-transform shrink-0" />
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4 w-full">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors">
                                            Detalji
                                        </span>
                                        <svg
                                            className="h-4 w-4 text-accent transform transition-transform group-hover:translate-x-1"
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
                                        <span className="bg-accent text-white text-xs font-bold px-2 py-1 uppercase rounded-sm">
                                            {selectedPackage.badge || "Popularno"}
                                        </span>
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-4xl font-black text-accent">{selectedPackage.priceLabel}</p>
                                    {selectedPackage.priceSub && (
                                        <p className="text-neutral-400 text-sm mt-1">{selectedPackage.priceSub}</p>
                                    )}
                                </div>
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
