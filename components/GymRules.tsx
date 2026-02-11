"use client";

import { Reveal } from "./Reveal";

const rules = [
    {
        title: "1. Opći uvjeti korištenja",
        items: [
            "Teretana je dostupna članovima 24 sata dnevno, 7 dana u tjednu.",
            "Ulaz je dopušten isključivo uz važeću člansku karticu.",
            "Svaki član dobiva svoju osobnu karticu za ulaz.",
            "Zabranjeno je ustupanje kartice drugim osobama.",
            "Minimalna dob korisnika: 16 / 18 godina.",
            "Maloljetnici mogu trenirati isključivo uz suglasnost roditelja ili skrbnika.",
            "Svaki član trenira na vlastitu odgovornost.",
            "Teretana ne odgovara za izgubljene ili ukradene stvari.",
            "Obavezna je čista sportska obuća i odjeća.",
            "Objekt je pod stalnim video nadzorom radi sigurnosti korisnika i zaštite imovine."
        ]
    },
    {
        title: "2. Sigurnosna pravila",
        items: [
            "Obavezno brisanje sprava nakon korištenja.",
            "Korištenje ručnika na spravama je obavezno.",
            "Zabranjeno bacanje utega.",
            "Nakon korištenja, utege vratiti na predviđeno mjesto.",
            "Ne koristiti neispravnu opremu — kvar odmah prijaviti.",
            "Zabranjeno vježbanje pod utjecajem alkohola, droga ili lijekova koji utječu na koordinaciju.",
            "U slučaju ozljede odmah kontaktirati osoblje ili nazvati istaknuti kontakt broj.",
            "Poštivanje maksimalnog broja osoba u prostoru.",
            "Korisnici su dužni upoznati se s pravilnim korištenjem sprava prije treninga."
        ]
    },
    {
        title: "3. Pravila ponašanja",
        items: [
            "Obavezno poštivanje drugih korisnika.",
            "Zabranjeno vrijeđanje, uznemiravanje i agresivno ponašanje.",
            "Zabranjeno glasno puštanje vlastite glazbe bez slušalica.",
            "Zabranjeno fotografiranje ili snimanje drugih osoba bez dopuštenja.",
            "Zabranjeno unošenje staklenih boca.",
            "Zabranjeno unošenje hrane s jakim mirisima.",
            "Obavezno održavanje osobne higijene."
        ]
    },
    {
        title: "4. Pristup i sigurnost objekta (24/7 režim)",
        items: [
            "Objekt je pod video nadzorom 24/7.",
            "Ulazak je moguć samo registriranim članovima s vlastitom članskom karticom.",
            "Zabranjeno je otvaranje vrata drugim osobama.",
            "Zabranjeno spavanje ili zadržavanje bez treninga.",
            "U slučaju alarma ili evakuacije, obavezno slijediti upute."
        ]
    },
    {
        title: "5. Open Gym tijekom grupnih treninga",
        items: [
            "U terminima kada se održavaju grupni treninzi, prostor je rezerviran isključivo za polaznike tog treninga.",
            "Korisnicima koji nisu upisani na grupni trening ulaz nije dopušten do završetka termina.",
            "Obavezno je poštivanje rasporeda treninga radi sigurnosti i kvalitete rada."
        ]
    },
    {
        title: "6. Korištenje teretane u satima bez osoblja",
        items: [
            "U razdobljima kada nema prisutnog osoblja, korisnici su dužni strogo se pridržavati svih pravila.",
            "Posebno se naglašava odgovorno ponašanje u kasnim noćnim satima.",
            "Svaki korisnik koristi prostor i opremu na vlastitu odgovornost.",
            "U slučaju bilo kakvog problema, kvara, ozljede ili hitne situacije, a nema prisutnog vlasnika ili radnika, korisnici su dužni nazvati kontakt broj istaknut na ulaznim vratima teretane."
        ]
    },
    {
        title: "7. Recepcija i oprema",
        items: [
            "Zabranjeno je dirati, koristiti ili premještati stvari na recepciji.",
            "Iznimka je moguća isključivo uz izričito dopuštenje vlasnika teretane."
        ]
    },
    {
        title: "8. Glazba i buka",
        items: [
            "Glazba se gasi u 22:00 sata.",
            "Od 22:00 do 07:00 sati nije dopušteno puštanje glazbe niti stvaranje buke.",
            "U noćnim satima obavezno je održavanje tišine i mirnog ponašanja."
        ]
    },
    {
        title: "9. Sankcije za kršenje pravila",
        items: [
            "Usmeno upozorenje.",
            "Privremena zabrana ulaska.",
            "Trajno ukidanje članstva bez povrata novca.",
            "Naknada štete u slučaju oštećenja opreme ili prostora."
        ]
    },
    {
        title: "10. Zdravstvena izjava",
        items: [
            "Član potvrđuje da je zdravstveno sposoban za fizičku aktivnost.",
            "Trening se odvija na vlastitu odgovornost.",
            "Preporučuje se liječnički pregled prije početka vježbanja."
        ]
    }
];

export function GymRules() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter mb-4">
                            Pravilnik <span className="text-accent">za Gym</span>
                        </h2>
                        <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
                        <p className="mt-6 text-neutral-400 max-w-2xl mx-auto">
                            Molimo sve članove da se pridržavaju navedenih pravila kako bi osigurali ugodno i sigurno okruženje za trening.
                        </p>
                    </div>
                </Reveal>

                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    {rules.map((section, index) => (
                        <Reveal key={index} delay={index * 50} className="h-full">
                            <div className="bg-surface/50 backdrop-blur-sm border border-white/5 p-8 rounded-sm hover:border-accent/30 transition-colors duration-300 h-full group">
                                <h3 className="text-xl font-bold uppercase text-white mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-black border border-accent/20 group-hover:bg-accent group-hover:text-black transition-colors duration-300">
                                        {index + 1}
                                    </span>
                                    {section.title.substring(section.title.indexOf(' ') + 1)}
                                </h3>
                                <ul className="space-y-3">
                                    {section.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="text-neutral-400 text-sm leading-relaxed flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-2 shrink-0 group-hover:bg-accent transition-colors duration-300" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
