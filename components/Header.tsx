"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import { usePathname, useRouter } from "next/navigation";
import { SportinLink } from "@/components/SportinLink";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            router.push("/");
        }
        setIsMobileMenuOpen(false);
    };

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-[100] border-b border-white/10 bg-background/50 backdrop-blur-sm transition-all duration-300">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/" onClick={handleLogoClick} className="flex items-center gap-0 group">
                    <div className="relative h-14 w-32 overflow-hidden">
                        <Image
                            src="/logo-new.png"
                            alt="Cudina Fitness Logo"
                            fill
                            className="object-contain object-left"
                        />
                    </div>
                    <span className="text-lg font-bold uppercase tracking-wider text-white group-hover:text-accent transition-colors">
                        Cudina Fitness
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-400 lg:flex">
                    <Link href="/o-meni" className="hover:text-white transition-colors">O meni</Link>
                    <Link href="/#coaching" className="hover:text-white transition-colors">Coaching</Link>
                    <Link href="/#paketi" className="hover:text-white transition-colors">Paketi</Link>
                    {/* <Link href="/transformacije" className="hover:text-white transition-colors">Transformacije</Link> */}
                    <Link href="/c24-gym" className="hover:text-white transition-colors">C24 Gym</Link>
                    <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                    <Link href="/#kontakt" className="hover:text-white transition-colors">Kontakt</Link>
                </nav>

                <div className="hidden lg:flex items-center gap-4">
                    <SportinLink
                        className="rounded-sm bg-accent px-5 py-2 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-hover shadow-[0_0_20px_-5px_var(--color-accent)]">
                        Upiši se
                    </SportinLink>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="text-white lg:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && createPortal(
                <div className="fixed inset-0 z-[9999] bg-black text-white lg:hidden animate-in slide-in-from-right duration-300 overscroll-contain flex flex-col">
                    <div className="flex flex-col h-full p-6">
                        <div className="flex items-center justify-between mb-12">
                            <span className="text-lg font-bold uppercase tracking-wider text-white">
                                Cudina Fitness
                            </span>
                            <button
                                className="text-neutral-400 hover:text-white p-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <nav className="flex flex-col gap-6 text-xl font-bold uppercase text-white">
                            <Link href="/o-meni" onClick={handleLinkClick}>O meni</Link>
                            <Link href="/#coaching" onClick={handleLinkClick}>Coaching</Link>
                            <Link href="/#paketi" onClick={handleLinkClick}>Paketi</Link>
                            {/* <Link href="/transformacije" onClick={handleLinkClick}>Transformacije</Link> */}
                            <Link href="/c24-gym" onClick={handleLinkClick}>C24 Gym</Link>
                            <Link href="/blog" onClick={handleLinkClick}>Blog</Link>
                            <Link href="/#kontakt" onClick={handleLinkClick}>Kontakt</Link>

                            <div className="flex gap-6 mt-4">
                                <a href="https://www.instagram.com/_u/cudina_fitness/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neutral-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    <span className="text-sm">@cudina_fitness</span>
                                </a>
                                <a href="https://www.instagram.com/_u/c24gym/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neutral-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    <span className="text-sm">@c24gym</span>
                                </a>
                            </div>
                        </nav>

                        <div className="mt-auto">
                            <SportinLink
                                className="flex w-full items-center justify-center rounded-sm bg-accent px-6 py-4 text-base font-bold uppercase tracking-wider text-white hover:bg-accent-hover">
                                Upiši se na Sportinu
                            </SportinLink>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </header>
    );
}
