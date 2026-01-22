"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Link from "next/link";

const TRANSFORMATIONS = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    label: `Transformacija ${i + 1}`,
    slug: `transformacija-${i + 1}`,
}));

export function TransformationsCarousel() {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, dragFree: true },
        [
            AutoScroll({
                playOnInit: true,
                stopOnInteraction: false, // Keep scrolling after drag release
                stopOnMouseEnter: true,   // Pause on hover for interaction
                speed: 1,                 // Slow drift
            }),
        ]
    );

    return (
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-4">
                {TRANSFORMATIONS.map((item) => (
                    <div key={item.id} className="flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_20%] min-w-0 pl-4 text-white">
                        <Link
                            href="/transformacije"
                            className="group relative block aspect-[3/4] w-full overflow-hidden rounded-sm border border-white/5 bg-surface transition-all duration-300 hover:border-accent"
                        >
                            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold uppercase text-neutral-600 transition-colors group-hover:text-accent">
                                {item.label}
                            </div>
                            <div className="absolute inset-0 bg-accent/0 transition-colors group-hover:bg-accent/5" />

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-t from-background/90 to-transparent">
                                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                                    Pogledaj detalje
                                </span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
