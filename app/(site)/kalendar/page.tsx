import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kalendar Treninga | Cudina Fitness",
    description: "Raspored treninga i rezervacije termina.",
};

export default function CalendarPage() {
    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 text-center">
                    <h1 className="font-heading text-4xl font-bold uppercase text-white md:text-5xl">
                        Raspored <span className="text-accent">Treninga</span>
                    </h1>
                    <p className="mt-4 text-neutral-400">
                        Rezervirajte svoj termin online.
                    </p>
                </div>

                <div className="mx-auto max-w-5xl overflow-hidden rounded-lg bg-white shadow-xl">
                    <iframe
                        src="https://www.supersaas.com/schedule/CudinaFitness/Grupni_treninzi"
                        width="100%"
                        height="800"
                        frameBorder="0"
                        title="SuperSaaS Calendar"
                        className="w-full"
                    ></iframe>
                </div>

                <div className="mt-8 text-center text-sm text-neutral-500">
                    <p>Ako se kalendar ne učitava ispravno, <a href="https://www.supersaas.com/schedule/CudinaFitness/Grupni_treninzi" target="_blank" className="text-accent hover:underline">kliknite ovdje</a> za otvaranje u novom prozoru.</p>
                </div>
            </div>
        </main>
    );
}
