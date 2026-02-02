import { Reveal } from "@/components/Reveal";

export default function C24GymPage() {
    return (
        <main className="min-h-screen bg-neutral-950 pt-24 pb-12">
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

                        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
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
