import { Reveal } from "@/components/Reveal";
import { TransformationsCarousel } from "@/components/TransformationsCarousel";

export function ResultsSection() {
    return (
        <section id="rezultati" className="py-24 px-6">
            <div className="mx-auto max-w-7xl">
                <Reveal>
                    <div className="mb-12 md:flex md:items-end md:justify-between border-b border-white/10 pb-6">
                        <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter">Rezultati</h2>
                        <p className="text-neutral-400">Pravi ljudi. Realni ciljevi.</p>
                    </div>
                </Reveal>

                {/* Auto-scrolling Carousel */}
                <Reveal>
                    <div className="-mx-6 px-6 md:mx-0 md:px-0">
                        <TransformationsCarousel />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
