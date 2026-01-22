import { Reveal } from "@/components/Reveal";

export function BenefitsSection() {
    return (
        <section id="coaching" className="bg-surface py-24 px-6 border-y border-white/5">
            <div className="mx-auto max-w-7xl">
                <Reveal>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            { title: "TVOJ ŽIVOT, TVOJ TEMPO", desc: "Nemaš 2 sata dnevno za teretanu? Nije problem. Program se gradi oko tebe — ne ti oko programa." },
                            { title: "ZNANJE, NE NAGAĐANJE", desc: "Licencirani trener s redovnim usavršavanjima. Svaka vježba ima razlog, svaki plan ima strukturu." },
                            { title: "PODRŠKA KOJA TRAJE", desc: "Grupni ili individualni — imaš nekoga tko prati tvoj napredak i korigira kad treba." }
                        ].map((item, i) => (
                            <div key={i} className="group relative p-8 bg-surface/50 backdrop-blur-sm border border-white/5 hover:border-accent/50 transition-all duration-500 rounded-sm hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                                <div className="mb-4 h-10 w-10 text-accent">
                                    {/* Icon placeholder */}
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-tight">{item.title}</h3>
                                <p className="mt-2 text-neutral-300">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
