import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
    return (
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
                            <p className="text-xl text-neutral-100 leading-loose tracking-wide mb-8">
                                Moje ime je Duje. Vjerujem da fitness ne smije biti još jedna obaveza koja ti stvara stres.
                                Moj pristup je jednostavan: <strong className="text-white bg-accent/10 px-1 py-0.5 rounded-sm">teški treninzi, pametna prehrana i održiv životni stil.</strong>
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
                                    <div className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Godina iskustva</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-white flex items-center gap-1">
                                        <Counter end={100} />+
                                    </div>
                                    <div className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Zadovoljnih klijenata</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
