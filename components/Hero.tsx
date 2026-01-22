import { Reveal } from "@/components/Reveal";
import Link from "next/link";

const WHATSAPP_LINK = "https://wa.me/385915232333?text=Bok%20Duje%2C%20zanima%20me%20trening%20u%20Cudina%20Fitnessu.%20Mo%C5%BEemo%20dogovoriti%20termin%3F";

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-background px-6">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    key="hero-video-webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="h-full w-full object-cover opacity-30 blur-sm"
                    poster="/duje-blue.jpg"
                    preload="auto"
                >
                    <source src="/videos/hero.webm" type="video/webm" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>

            <Reveal className="relative z-10 mx-auto max-w-4xl text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    Pakoštane &bull; Biograd
                </div>

                <h1 className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-black uppercase leading-[0.9] md:leading-[1.1] tracking-tighter text-white mix-blend-difference z-20 relative drop-shadow-2xl flex flex-col items-center gap-2 md:gap-4">
                    <span>Postigni <span className="text-accent inline-block transform hover:skew-x-12 transition-transform duration-500">formu</span></span>
                    <span>života</span>
                </h1>

                <p className="mx-auto mt-8 max-w-xl text-lg text-neutral-300 md:text-xl">
                    Trening ne mora biti pakao. Prilagođen je tebi, za realne rezultate koje možeš održati.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                        href={WHATSAPP_LINK}
                        className="group relative inline-flex min-w-[200px] items-center justify-center overflow-hidden rounded-sm bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-neutral-900 transition-all hover:bg-accent-hover shadow-[0_0_30px_-5px_var(--color-accent)] hover:shadow-[0_0_50px_-5px_var(--color-accent)] hover:scale-105"
                    >
                        <span className="relative z-10">Dogovori Termin</span>
                    </a>
                    <Link
                        href="/upitnik"
                        className="group inline-flex min-w-[200px] items-center justify-center rounded-sm border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-accent hover:text-accent"
                    >
                        Ispuni Upitnik
                    </Link>
                </div>
            </Reveal>
        </section>
    );
}
