'use client';
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

function FaqItem({ question, answer, delay }: { question: string; answer: React.ReactNode; delay: number }) {
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
                    <div className="px-6 pb-6 text-neutral-300 text-sm leading-relaxed border-t border-white/5 pt-4">
                        {answer}
                    </div>
                </div>
            </button>
        </Reveal>
    );
}

export function FAQSection() {
    const FAQs: { q: string; a: React.ReactNode }[] = [
        {
            q: "Kako mogu rezervirati svoje mjesto na grupnim treninzima?",
            a: (
                <div className="flex flex-col gap-4 items-start">
                    <p>Rezerviraj sada svoj trening, otvori kalendar i pogledaj termine.</p>
                    <Link
                        href="/kalendar"
                        className="bg-accent text-white px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-[0_0_15px_-3px_var(--color-accent)]"
                    >
                        Kalendar
                    </Link>
                </div>
            )
        },
        { q: "Moram li izabrati jedan program?", a: "Možeš kombinirati programe u dogovoru s trenerom, ovisno o tvojim ciljevima." },
        { q: "Mogu li otkazati trening?", a: "Trening se može otkazati najkasnije 24h ranije. U suprotnom se termin računa kao iskorišten." },
        { q: "Što ako ne dođem na termin?", a: "Ako ne otkažeš na vrijeme, termin propada. Poštujemo tvoje i naše vrijeme." },
    ];

    return (
        <section className="py-24 px-6 bg-surface/30 border-y border-white/5">
            <div className="mx-auto max-w-5xl">
                <Reveal className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter">
                        Česta Pitanja
                    </h2>
                    <p className="text-neutral-400 mt-2 font-bold uppercase tracking-wider">Sve što te zanima</p>
                </Reveal>

                <div className="space-y-4">
                    {FAQs.map((faq, i) => (
                        <FaqItem key={i} question={faq.q} answer={faq.a} delay={i * 100} />
                    ))}
                </div>
            </div>
        </section>
    );
}
