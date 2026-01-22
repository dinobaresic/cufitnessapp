"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

import { BLOG_POSTS } from "@/lib/blogData";

const CATEGORIES = ["Sve", "Recepti", "Trening", "Lifestyle", "Suplementacija"];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("Sve");

    const filteredPosts = useMemo(() => {
        if (activeCategory === "Sve") return BLOG_POSTS;
        return BLOG_POSTS.filter((p) => p.category === activeCategory);
    }, [activeCategory]);

    return (
        <main className="flex min-h-screen flex-col bg-background pt-24">

            {/* Hero */}
            <section className="px-6 py-12 md:py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-neutral-800/30 to-background pointer-events-none" />
                <Reveal>
                    <div className="inline-flex items-center gap-2 rounded-sm border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent mb-6">
                        Znanje & Inspiracija
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter mb-6">
                        Blog & Savjeti
                    </h1>
                    <p className="max-w-xl mx-auto text-neutral-400 text-lg">
                        Recepti, trening savjeti i sve što ti treba da ostaneš na pravom putu.
                    </p>
                </Reveal>
            </section>

            {/* Filters */}
            <section className="px-6 mb-12">
                <div className="mx-auto max-w-7xl">
                    <Reveal>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`
                                        rounded-sm px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all
                                        ${activeCategory === cat
                                            ? "bg-accent text-neutral-900 shadow-[0_0_20px_-5px_rgba(245,158,11,0.3)]"
                                            : "border border-white/10 text-neutral-400 hover:border-accent hover:text-white"
                                        }
                                    `}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Grid */}
            <section className="px-6 pb-24">
                <div className="mx-auto max-w-7xl">
                    <Reveal>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {filteredPosts.map((post) => (
                                <Link
                                    key={post.id}
                                    href={post.link}
                                    // If affiliate, open in new tab
                                    target={post.isAffiliate ? "_blank" : undefined}
                                    rel={post.isAffiliate ? "noopener noreferrer" : undefined}
                                    className="group relative flex flex-col justify-between rounded-sm border border-white/5 bg-surface p-8 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.15)]"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-bold uppercase tracking-wider text-accent">
                                                {post.category}
                                            </span>
                                            <span className="text-xs text-neutral-500">{post.date}</span>
                                        </div>

                                        <h3 className="text-xl font-bold uppercase text-white leading-tight mb-3 group-hover:text-accent transition-colors">
                                            {post.title}
                                        </h3>

                                        <p className="text-sm text-neutral-400 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-wider text-neutral-500 group-hover:text-white transition-colors">
                                        {post.isAffiliate ? "Pogledaj Ponudu" : "Pročitaj više"}
                                        <span className="ml-2 text-lg">→</span>
                                    </div>
                                </Link>
                            ))}

                            {filteredPosts.length === 0 && (
                                <div className="col-span-full py-20 text-center text-neutral-500">
                                    Nema objava u ovoj kategoriji.
                                </div>
                            )}
                        </div>
                    </Reveal>
                </div>
            </section>

        </main>
    );
}
