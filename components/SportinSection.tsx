import { Reveal } from "@/components/Reveal";
import { SPORTIN_APP_STORE_URL, SPORTIN_PLAY_STORE_URL, SPORTIN_VENUE_URL } from "@/lib/sportin";

const STEPS = [
    {
        title: "Preuzmi Sportin",
        desc: "Besplatna aplikacija za iOS i Android. Instalacija traje manje od minute.",
        icon: (
            <>
                <rect width="14" height="20" x="5" y="2" rx="2" />
                <path d="M12 18h.01" />
            </>
        ),
    },
    {
        title: "Registriraj se i odaberi paket",
        desc: "Pronađi C24GYM, odaberi članarinu ili trening i plati online kroz aplikaciju.",
        icon: (
            <>
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
            </>
        ),
    },
    {
        title: "Skeniraj i treniraj",
        desc: "U aplikaciji dobivaš svoj barkod. Skeniraj ga na ulazu i teretana je tvoja 24/7.",
        icon: (
            <>
                <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
                <path d="M8 8v8M11 8v8M14 8v8M17 8v8" />
            </>
        ),
    },
];

function AppleIcon() {
    return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M16.37 12.62c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.83-.81-3-.79-1.55.02-2.97.9-3.77 2.28-1.6 2.79-.41 6.92 1.15 9.18.76 1.11 1.67 2.35 2.86 2.31 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.13 2.77-2.24.87-1.28 1.23-2.52 1.25-2.59-.03-.01-2.39-.92-2.41-3.65zM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.66 1.37-.58.67-1.09 1.75-.96 2.79 1.02.08 2.05-.52 2.68-1.27z" />
        </svg>
    );
}

function PlayIcon() {
    return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M5 3.2v17.6c0 .8.9 1.3 1.6.9l14.8-8.8c.7-.4.7-1.4 0-1.8L6.6 2.3C5.9 1.9 5 2.4 5 3.2z" />
        </svg>
    );
}

export function SportinSection() {
    return (
        <section id="sportin" className="relative py-24 px-6 overflow-hidden">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-72 w-[600px] max-w-full rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

            <div className="relative mx-auto max-w-6xl">
                <Reveal className="text-center mb-14">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4">Upis i ulaz u teretanu</p>
                    <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter">
                        Kreni u <span className="text-accent">3 koraka</span>
                    </h2>
                    <p className="mt-6 mx-auto max-w-2xl text-neutral-400 leading-relaxed">
                        Članarine, treninge i ulaz u C24 Gym vodimo kroz aplikaciju <span className="text-white font-bold">Sportin</span>.
                        Bez čekanja i dopisivanja — sve rješavaš sam, kad ti odgovara.
                    </p>
                </Reveal>

                <div className="grid gap-6 md:grid-cols-3">
                    {STEPS.map((step, i) => (
                        <Reveal key={step.title} delay={i * 120} className="h-full">
                            <div className="relative h-full bg-surface/60 backdrop-blur-md border border-white/5 hover:border-accent transition-all duration-500 p-8 rounded-sm group">
                                <span className="absolute top-4 right-6 text-6xl font-black text-white/5 group-hover:text-accent/15 transition-colors select-none">
                                    {i + 1}
                                </span>
                                <div className="mb-6 h-14 w-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        {step.icon}
                                    </svg>
                                </div>
                                <h3 className="text-xl font-black uppercase text-white mb-3">{step.title}</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed">{step.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={200}>
                    <div className="mt-12 flex flex-col items-center gap-6">
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <a
                                href={SPORTIN_APP_STORE_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-3 rounded-sm border border-white/15 bg-black px-6 py-3 text-white transition-all hover:border-accent hover:-translate-y-0.5"
                            >
                                <AppleIcon />
                                <span className="text-left leading-tight">
                                    <span className="block text-[10px] uppercase tracking-wider text-neutral-400">Preuzmi na</span>
                                    <span className="block text-base font-bold">App Store</span>
                                </span>
                            </a>
                            <a
                                href={SPORTIN_PLAY_STORE_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-3 rounded-sm border border-white/15 bg-black px-6 py-3 text-white transition-all hover:border-accent hover:-translate-y-0.5"
                            >
                                <PlayIcon />
                                <span className="text-left leading-tight">
                                    <span className="block text-[10px] uppercase tracking-wider text-neutral-400">Nabavi na</span>
                                    <span className="block text-base font-bold">Google Play</span>
                                </span>
                            </a>
                        </div>

                        <a
                            href={SPORTIN_VENUE_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent hover:text-white transition-colors"
                        >
                            Pogledaj C24GYM na Sportinu
                            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
