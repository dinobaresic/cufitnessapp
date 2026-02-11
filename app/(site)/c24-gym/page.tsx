import { Reveal } from "@/components/Reveal";
import { GymRules } from "@/components/GymRules";

export default function C24GymPage() {
    return (
        <main className="min-h-screen bg-neutral-950 pt-24 pb-12 overflow-hidden">
            <section className="relative px-6">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-accent/5 blur-[100px]" />

                <div className="mx-auto max-w-7xl">
                    <Reveal>
                        <div className="mb-24 text-center">
                            <h1 className="text-6xl md:text-9xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent tracking-tighter absolute left-1/2 -translate-x-1/2 -mt-12 select-none pointer-events-none opacity-50 w-full">
                                COMING SOON
                            </h1>
                            <h1 className="relative text-5xl md:text-7xl font-black uppercase text-white tracking-tighter">
                                C24 <span className="text-accent">GYM</span>
                            </h1>
                            <p className="mt-8 mx-auto max-w-2xl text-xl text-neutral-400 leading-relaxed">
                                Uskoro otvaramo vrata najmodernijeg centra u regiji. Oprema vrhunske kvalitete, 24/7 pristup i atmosfera koja te tjera da radiš jače.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mb-24">
                        {[
                            { title: "24/7 Pristup", desc: "Treniraj kad god želiš. Nema radnog vremena. Tvoj ključ, tvoj termin." },
                            { title: "Top oprema", desc: "Oprema vrhunske kvalitete." },
                        ].map((feature, i) => (
                            <Reveal key={i} delay={i * 150}>
                                <div className="bg-surface border border-white/5 p-10 rounded-sm hover:border-accent transition-all hover:bg-accent/5 h-full">
                                    <div className="mb-6 h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                        <span className="text-xl font-bold">{i + 1}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold uppercase text-white mb-4">{feature.title}</h3>
                                    <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* PRICING */}
                    <Reveal>
                        <div className="mb-12 text-center mt-24">
                            <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter mb-4">
                                Cjenik
                            </h2>
                            <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
                        </div>
                    </Reveal>

                    <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mb-24">
                        <Reveal delay={100} className="h-full">
                            <div className="bg-surface border border-white/5 p-10 rounded-sm hover:border-accent transition-all hover:bg-accent/5 flex flex-col items-center text-center group relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
                                </div>
                                <h3 className="text-xl font-bold uppercase text-neutral-400 mb-2">Mjesečna članarina</h3>
                                <div className="text-5xl font-black text-white mb-6 tracking-tighter">
                                    50<span className="text-2xl align-top text-accent">€</span>
                                </div>
                                <ul className="text-neutral-300 space-y-3 mb-8 text-sm">
                                    <li className="flex items-center gap-2 justify-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        Neograničen pristup
                                    </li>
                                    <li className="flex items-center gap-2 justify-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        24/7 radno vrijeme
                                    </li>
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal delay={200} className="h-full">
                            <div className="bg-surface border border-white/5 p-10 rounded-sm hover:border-accent transition-all hover:bg-accent/5 flex flex-col items-center text-center group relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                </div>
                                <h3 className="text-xl font-bold uppercase text-neutral-400 mb-2">Dnevni trening</h3>
                                <div className="text-5xl font-black text-white mb-6 tracking-tighter">
                                    7<span className="text-2xl align-top text-accent">€</span>
                                </div>
                                <ul className="text-neutral-300 space-y-3 mb-8 text-sm">
                                    <li className="flex items-center gap-2 justify-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        Jednokratni ulaz
                                    </li>
                                    <li className="flex items-center gap-2 justify-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        24/7 pristup
                                    </li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>

                    <GymRules />

                    <Reveal>
                        <div className="mt-24 text-center p-12 bg-surface/30 border border-white/5 rounded-sm">
                            <h2 className="text-2xl font-bold uppercase text-white mb-4">Želiš postati član?</h2>
                            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                                Prijave za prve članove. Prati nas za više informacija.
                            </p>
                            <a
                                href="https://wa.me/385992013971?text=Bok%20Duje,%20želim%20postati%20član%20c24%20gyma"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block rounded-sm bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-accent-hover transition-colors shadow-[0_0_20px_-5px_var(--color-accent)]"
                            >
                                PRIJAVI SE
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}
