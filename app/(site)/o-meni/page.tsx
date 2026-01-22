

import { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "O Meni - Duje Čudina | Cudina Fitness",
    description: "Upoznaj trenera Duju Čudinu. 5+ godina iskustva, 100+ transformacija. Saznaj više o mojoj filozofiji treninga i pristupu.",
    openGraph: {
        title: "O Meni - Duje Čudina",
        description: "Trener, motivator i osnivač C24 GYM-a. Nema prečaca, samo rad.",
    },
};

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col pt-24 bg-grain text-foreground">
            {/* Hero */}
            <section className="relative px-6 py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/10 to-transparent pointer-events-none" />

                <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">
                    <Reveal>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 rounded-sm border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent mb-6">
                                O Meni
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter mb-8 leading-tight">
                                Nema <span className="text-accent">prečaca</span>.<br />Samo rad.
                            </h1>
                            <p className="text-xl text-neutral-300 leading-relaxed max-w-lg mb-8">
                                Ja sam Duje Čudina. Trener, motivator i osnivač C24 GYM-a. Moj cilj je jednostavan: pomoći ti da postaneš najjača verzija sebe.
                            </p>
                            <Link
                                href="/#upitnik"
                                className="inline-flex items-center justify-center rounded-sm bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-neutral-900 transition-all hover:bg-accent-hover"
                            >
                                Kreni s treningom
                            </Link>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="relative aspect-[4/5] w-full rounded-sm bg-neutral-800 border-2 border-white/5 overflow-hidden transition-all duration-500">
                            <Image
                                src="/duje-blue.jpg"
                                alt="Duje Čudina trening"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Story / Philosophy */}
            <section className="px-6 py-24 bg-surface border-y border-white/5">
                <div className="mx-auto max-w-3xl text-center">
                    <Reveal>
                        <h2 className="text-3xl font-black uppercase text-white tracking-tight mb-8">Moja Filozofija</h2>
                        <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                            Fitness industrija je puna laži. Čarobne pilule, 5-minutni treninzi za trbušnjake i dijete izgladnjivanjem. Ja ne vjerujem u to.
                        </p>
                        <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                            Vjerujem u <strong className="text-white">konzistentnost</strong>. Vjerujem u <strong className="text-white">težak rad</strong>. I vjerujem da svatko, uz pravi plan i podršku, može transformirati svoje tijelo i um.
                        </p>
                        <p className="text-lg text-neutral-400 leading-relaxed">
                            Kroz proteklih 5 godina radio sam s preko 100 klijenata. Od potpunih početnika do naprednih vježbača. Svima je zajedničko jedno: oni koji su odustali od izgovora, postigli su rezultate.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Credentials */}
            <section className="px-6 py-24">
                <div className="mx-auto max-w-5xl">
                    <Reveal>
                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="bg-background border border-white/10 p-8 rounded-sm text-center hover:border-accent transition-colors">
                                <div className="text-4xl font-black text-accent mb-2">5+</div>
                                <div className="text-sm font-bold uppercase text-neutral-500 tracking-wider">Godina Iskustva</div>
                            </div>
                            <div className="bg-background border border-white/10 p-8 rounded-sm text-center hover:border-accent transition-colors">
                                <div className="text-4xl font-black text-accent mb-2">100+</div>
                                <div className="text-sm font-bold uppercase text-neutral-500 tracking-wider">Transformacija</div>
                            </div>
                            <div className="bg-background border border-white/10 p-8 rounded-sm text-center hover:border-accent transition-colors">
                                <div className="text-4xl font-black text-accent mb-2">24/7</div>
                                <div className="text-sm font-bold uppercase text-neutral-500 tracking-wider">Podrška</div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}
