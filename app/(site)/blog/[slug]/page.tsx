import { BLOG_POSTS } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const WHATSAPP_LINK = "https://wa.me/385915232333?text=Bok%20Duje%2C%20pro%C4%8Ditao%20sam%20tvoj%20blog%20i%20zanima%20me%20personalizirani%20plan%20treninga.";

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background pt-24 pb-12">
            <article className="mx-auto max-w-4xl px-6">
                <Reveal>
                    {/* Header */}
                    <header className="mb-12 text-center">
                        <div className="inline-flex items-center gap-2 rounded-sm border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent mb-6">
                            {post.category}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tighter mb-4 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-center gap-2 text-sm md:text-base font-bold uppercase tracking-wider text-accent mb-8">
                            <time>{post.date}</time>
                            {post.readTime && (
                                <>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </>
                            )}
                        </div>
                    </header>

                    {/* Hero Image */}
                    <div className="relative w-full aspect-video mb-12 bg-surface rounded-sm overflow-hidden border border-white/5">
                        {/* Placeholder Image - In real app, this would be dynamic */}
                        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 text-neutral-700 font-bold uppercase tracking-widest text-2xl">
                            Blog Hero Image
                        </div>
                    </div>

                    {/* Content */}
                    <div
                        className="blog-content mx-auto mb-16"
                        dangerouslySetInnerHTML={{ __html: post.content || "<p>Sadržaj se priprema...</p>" }}
                    />

                    {/* Navigation */}
                    <div className="border-t border-white/10 pt-8 mb-16">
                        <Link href="/blog" className="text-neutral-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                            ← Povratak na Blog
                        </Link>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-surface border border-accent/20 rounded-sm p-8 md:p-12 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-4">
                                Želiš personalizirani plan?
                            </h3>
                            <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
                                Ako ti se svidio ovaj članak, zamisli što možemo postići s planom krojenim točno po tvojim mjerama.
                            </p>
                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-sm bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-neutral-900 transition-colors hover:bg-accent-hover"
                            >
                                Javi se Duji
                            </a>
                        </div>
                    </div>

                </Reveal>
            </article>
        </main>
    );
}
