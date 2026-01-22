import Link from "next/link";
import { Header } from "@/components/Header";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";

const WHATSAPP_LINK =
    "https://wa.me/385915232333?text=Bok%20Duje%2C%20zanima%20me%20trening%20u%20Cudina%20Fitnessu.";
const CALL_LINK = "tel:+385915232333";

export default function SiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative min-h-screen">
            <BackgroundOrbs />
            <Header />

            {children}

            <footer className="border-t border-white/5 bg-surface py-16">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-12 md:grid-cols-3">

                        {/* Column 1: Navigation */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-bold uppercase text-white tracking-wider mb-2">Navigacija</h4>
                            <Link href="/o-meni" className="text-neutral-400 hover:text-accent transition-colors text-sm">O meni</Link>
                            <Link href="/#coaching" className="text-neutral-400 hover:text-accent transition-colors text-sm">Coaching</Link>
                            <Link href="/#paketi" className="text-neutral-400 hover:text-accent transition-colors text-sm">Paketi</Link>
                            <Link href="/transformacije" className="text-neutral-400 hover:text-accent transition-colors text-sm">Transformacije</Link>
                            <Link href="/blog" className="text-neutral-400 hover:text-accent transition-colors text-sm">Blog</Link>
                        </div>

                        {/* Column 2: Information */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-bold uppercase text-white tracking-wider mb-2">Informacije</h4>
                            <div className="text-neutral-400 text-sm">
                                <a href="https://www.google.com/maps?q=43.907558,15.507878" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Lokacija: Pakoštane</a>
                            </div>
                            <a href={WHATSAPP_LINK} className="text-neutral-400 hover:text-accent transition-colors text-sm">Besplatne konzultacije</a>
                            <Link href="/#kontakt" className="text-neutral-400 hover:text-accent transition-colors text-sm">Kontakt</Link>
                        </div>

                        {/* Column 3: Legal */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-bold uppercase text-white tracking-wider mb-2">Pravno</h4>
                            <Link href="/uvjeti" className="text-neutral-400 hover:text-accent transition-colors text-sm">Opći uvjeti poslovanja</Link>
                            <Link href="/privatnost" className="text-neutral-400 hover:text-accent transition-colors text-sm">Politika privatnosti</Link>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                        <div>
                            <h3 className="text-lg font-bold uppercase text-white">Cudina Fitness</h3>
                            <p className="text-sm text-neutral-500 mt-1">Profesionalni trening. Pakoštane.</p>
                        </div>

                        <div className="text-neutral-500 text-sm flex flex-col md:items-end gap-1">
                            <a href={CALL_LINK} className="hover:text-white transition-colors">Poziv</a>
                            <a href={WHATSAPP_LINK} className="hover:text-white transition-colors">WhatsApp</a>
                            <span className="mt-2 text-xs opacity-50">ul. Ivana Meštrovića 30, 23210 Pakoštane</span>
                        </div>
                    </div>

                    <div className="mt-8 text-center text-xs text-neutral-700">
                        © {new Date().getFullYear()} Cudina Fitness.
                    </div>
                </div>
            </footer>
        </div>
    );
}
