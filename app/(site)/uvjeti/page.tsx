import { Reveal } from "@/components/Reveal";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-12">
            <div className="mx-auto max-w-4xl px-6">
                <Reveal>
                    <div className="max-w-none text-neutral-300">
                        <h1 className="mb-6 text-4xl font-black uppercase text-white">Opći Uvjeti Poslovanja</h1>

                        <div className="mb-12 border-b border-white/10 pb-8 text-neutral-400">
                            <p><strong className="text-white">CudinaFitness</strong></p>
                            <p>ul. Ivana Meštrovića 30, 23210 Pakoštane, Hrvatska</p>
                            <p>OIB: [UPISATI OIB]</p>
                            <p>E-mail: dujecudina@gmail.com</p>
                            <p>Datum stupanja na snagu: [UPISATI DATUM]</p>
                        </div>

                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">1. OPĆE ODREDBE</h2>
                                <p className="leading-relaxed mb-4">
                                    Ovim Općim uvjetima poslovanja uređuju se uvjeti korištenja usluga koje pruža CudinaFitness (u daljnjem tekstu: "Pružatelj usluga"), a koje uključuju osobne treninge, grupne treninge, poluindividualne treninge, korištenje teretane te prateće usluge.
                                </p>
                                <p className="leading-relaxed">
                                    Korištenjem bilo koje od navedenih usluga, Korisnik potvrđuje da je pročitao, razumio i prihvatio ove Opće uvjete poslovanja.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">2. DEFINICIJE</h2>
                                <ul className="space-y-3">
                                    <li className="bg-surface p-4 rounded-sm border border-white/5">
                                        <strong className="text-white block mb-1">Pružatelj usluga</strong>
                                        CudinaFitness, vlasnik Duje Čudina
                                    </li>
                                    <li className="bg-surface p-4 rounded-sm border border-white/5">
                                        <strong className="text-white block mb-1">Korisnik</strong>
                                        svaka fizička osoba koja koristi usluge Pružatelja usluga
                                    </li>
                                    <li className="bg-surface p-4 rounded-sm border border-white/5">
                                        <strong className="text-white block mb-1">Usluge</strong>
                                        individualni treninzi, poluindividualni treninzi, grupni treninzi, pristup teretani (free gym), planovi prehrane i drugi prateći sadržaji
                                    </li>
                                    <li className="bg-surface p-4 rounded-sm border border-white/5">
                                        <strong className="text-white block mb-1">Paket</strong>
                                        unaprijed definirani skup usluga s određenom cijenom i trajanjem
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">3. UVJETI KORIŠTENJA USLUGA</h2>

                                <h3 className="text-lg font-bold text-white mt-8 mb-3">3.1. Pravo na korištenje</h3>
                                <p className="leading-relaxed">Usluge mogu koristiti punoljetne osobe (18+). Maloljetne osobe mogu koristiti usluge isključivo uz pisanu suglasnost roditelja ili zakonskog zastupnika.</p>

                                <h3 className="text-lg font-bold text-white mt-8 mb-3">3.2. Zdravstveno stanje</h3>
                                <p className="leading-relaxed">Korisnik je dužan prije početka korištenja usluga obavijestiti Pružatelja usluga o svim zdravstvenim stanjima, ozljedama ili ograničenjima koja mogu utjecati na sigurnost vježbanja. Pružatelj usluga zadržava pravo zatražiti liječničku potvrdu o sposobnosti za fizičku aktivnost.</p>

                                <h3 className="text-lg font-bold text-white mt-8 mb-3">3.3. Pravila ponašanja</h3>
                                <p className="mb-2">Korisnik se obvezuje:</p>
                                <ul className="list-disc pl-5 space-y-2 marker:text-accent">
                                    <li>Poštovati pravila prostora i upute trenera</li>
                                    <li>Dolaziti na treninge u čistoj i prikladnoj sportskoj opremi</li>
                                    <li>Pažljivo rukovati opremom i prijaviti svako oštećenje</li>
                                    <li>Poštovati druge korisnike i osoblje</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">4. CIJENE I PLAĆANJE</h2>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="bg-surface p-6 rounded-sm border border-white/5">
                                        <h3 className="text-lg font-bold text-white mb-3">4.1. Cijene</h3>
                                        <p className="leading-relaxed text-sm">Aktualne cijene usluga i paketa dostupne su na web stranici ili na upit. Pružatelj usluga zadržava pravo promjene cijena uz prethodnu najavu. Promjena cijena ne utječe na već uplaćene pakete.</p>
                                    </div>
                                    <div className="bg-surface p-6 rounded-sm border border-white/5">
                                        <h3 className="text-lg font-bold text-white mb-3">4.2. Rok plaćanja</h3>
                                        <p className="leading-relaxed text-sm">Paketi se plaćaju unaprijed, prije početka korištenja usluga. Pojedinačni treninzi plaćaju se prije ili neposredno nakon treninga.</p>
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-white mt-8 mb-3">4.3. Načini plaćanja</h3>
                                <ul className="list-disc pl-5 space-y-2 marker:text-accent">
                                    <li>Gotovinom na licu mjesta</li>
                                    <li>Bankovnim prijenosom na račun Pružatelja usluga</li>
                                    <li>Online plaćanjem putem Stripe platne platforme (kada bude omogućeno)</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">5. OTKAZIVANJE I POVRAT SREDSTAVA</h2>

                                <h3 className="text-lg font-bold text-white mt-6 mb-3">5.1. Otkazivanje termina</h3>
                                <ul className="list-disc pl-5 space-y-2 marker:text-accent">
                                    <li><strong className="text-white">Individualni i poluindividualni treninzi:</strong> otkazivanje najmanje 24 sata unaprijed</li>
                                    <li><strong className="text-white">Grupni treninzi:</strong> otkazivanje najmanje 12 sati unaprijed</li>
                                    <li><strong className="text-white">Kasno otkazivanje ili nedolazak:</strong> termin se smatra iskorištenim</li>
                                </ul>

                                <h3 className="text-lg font-bold text-white mt-8 mb-3">5.2. Povrat sredstava</h3>
                                <p className="leading-relaxed">Uplaćeni paketi se ne vraćaju, osim u slučaju trajne nesposobnosti za vježbanje potvrđene liječničkom dokumentacijom. U tom slučaju, povrat se vrši razmjerno neiskorištenom dijelu paketa.</p>

                                <h3 className="text-lg font-bold text-white mt-8 mb-3">5.3. Zamrzavanje paketa</h3>
                                <p className="leading-relaxed">Korisnik može zatražiti zamrzavanje paketa u slučaju bolesti, ozljede ili izvanrednih okolnosti. Zahtjev se podnosi pisanim putem, a odobrava ga Pružatelj usluga.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">6. ODGOVORNOST</h2>
                                <div className="space-y-4">
                                    <div className="border-l-2 border-accent pl-4">
                                        <strong className="text-white block mb-1">6.1. Odgovornost Pružatelja usluga</strong>
                                        <p className="text-sm">Pružatelj usluga obvezuje se pružati usluge stručno i profesionalno. Nije odgovoran za ozljede nastale uslijed nepoštivanja uputa trenera ili prikrivanja zdravstvenih stanja.</p>
                                    </div>
                                    <div className="border-l-2 border-neutral-700 pl-4">
                                        <strong className="text-white block mb-1">6.2. Odgovornost Korisnika</strong>
                                        <p className="text-sm">Korisnik vježba na vlastitu odgovornost. Odgovoran je za štetu nastalu na opremi uslijed nepravilnog korištenja ili namjernog oštećenja.</p>
                                    </div>
                                    <div className="border-l-2 border-neutral-700 pl-4">
                                        <strong className="text-white block mb-1">6.3. Osobne stvari</strong>
                                        <p className="text-sm">Pružatelj usluga ne odgovara za gubitak, krađu ili oštećenje osobnih stvari Korisnika.</p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">7. INTELEKTUALNO VLASNIŠTVO</h2>
                                <p className="leading-relaxed">Svi materijali, planovi treninga, programi prehrane i drugi sadržaji koje Pružatelj usluga izradi za Korisnika ili objavi na web stranici i društvenim mrežama zaštićeni su autorskim pravom. Zabranjeno je kopiranje, dijeljenje ili komercijalno korištenje bez pisane suglasnosti.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">8. ZAŠTITA OSOBNIH PODATAKA</h2>
                                <p className="leading-relaxed">Prikupljanje i obrada osobnih podataka regulirani su posebnom Politikom privatnosti koja je sastavni dio ovih Općih uvjeta poslovanja.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">9. RJEŠAVANJE SPOROVA</h2>
                                <p className="leading-relaxed">Sve eventualne sporove Pružatelj usluga i Korisnik nastojat će riješiti sporazumno. U slučaju nemogućnosti sporazumnog rješenja, nadležan je sud u Zadru.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">10. IZMJENE OPĆIH UVJETA</h2>
                                <p className="leading-relaxed">Pružatelj usluga zadržava pravo izmjene ovih Općih uvjeta poslovanja. O izmjenama će Korisnici biti obaviješteni putem web stranice ili e-maila najmanje 15 dana prije stupanja na snagu.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">11. ZAVRŠNE ODREDBE</h2>
                                <p className="leading-relaxed">Ovi Opći uvjeti poslovanja stupaju na snagu danom objave na web stranici. Na sve što nije regulirano ovim Općim uvjetima primjenjuju se odredbe pozitivnih propisa Republike Hrvatske.</p>
                            </section>

                        </div>

                        <div className="mt-16 border-t border-white/10 pt-8 text-sm text-neutral-500 text-center">
                            <p className="font-bold text-white mb-1">CudinaFitness</p>
                            <p>Duje Čudina, vlasnik</p>
                            <p>Pakoštane, [UPISATI DATUM]</p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </main>
    );
}
