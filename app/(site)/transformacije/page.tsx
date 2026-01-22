import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Transformacije i Rezultati - Cudina Fitness",
    description: "Pogledaj stvarne rezultate naših klijenata. Nema laži, samo disciplina i pravi plan. Preko 100 uspješnih priča.",
    openGraph: {
        title: "Transformacije - Cudina Fitness",
        description: "Inspiriraj se uspjesima naših klijenata. Tvoja priča može biti sljedeća.",
    },
};

export default function TransformationsPage() {
    return (
        <main className="min-h-screen text-foreground bg-grain flex flex-col pt-24">

            <div className="container mx-auto px-6 py-12 max-w-7xl">
                <header className="mb-20 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 rounded-sm border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent mb-6">
                        Rezultati govore sve
                    </div>
                    <h1 className="font-heading text-6xl md:text-8xl font-black uppercase text-white tracking-tighter mb-6">
                        Priče o <span className="text-accent">uspjehu</span>
                    </h1>
                    <p className="max-w-2xl text-lg text-neutral-400">
                        Nema čarobnog štapića. Samo disciplina, plan i podrška. Ovi ljudi su odlučili promijeniti svoj život.
                    </p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <div
                            key={i}
                            className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-surface border border-white/5 transition-all duration-300 hover:border-accent hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(255,94,0,0.2)]"
                        >
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 bg-neutral-800 transition-transform duration-700 group-hover:scale-110"></div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90">
                                <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                                    <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 block">
                                        Transformacija #{i + 1}
                                    </span>
                                    <h3 className="text-2xl font-black uppercase text-white mb-4">
                                        Ime Prezime
                                    </h3>
                                    <p className="text-sm text-neutral-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100 line-clamp-2">
                                        "Trening mi je promijenio ne samo izgled, već i način na koji razmišljam o hrani i disciplini."
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-32 mb-12 rounded-sm bg-surface border border-white/10 p-12 text-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-500"></div>

                    <h2 className="relative z-10 text-4xl md:text-5xl font-black uppercase text-white mb-6">
                        Spreman za svoju <span className="text-accent">priču?</span>
                    </h2>
                    <p className="relative z-10 text-neutral-400 mb-8 max-w-xl mx-auto">
                        Prvi korak je najteži. Javi se i idemo napraviti plan za tvoj uspjeh.
                    </p>
                    <Link
                        href="/upitnik"
                        className="relative z-10 inline-flex items-center justify-center bg-accent text-neutral-900 font-bold uppercase tracking-wider py-4 px-10 rounded-sm hover:bg-accent-hover hover:scale-105 transition-all shadow-[0_0_20px_-5px_var(--color-accent)]"
                    >
                        Ispuni Upitnik
                    </Link>
                </div>
            </div>
        </main>
    );
}
