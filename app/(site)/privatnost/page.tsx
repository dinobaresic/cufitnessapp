import { Reveal } from "@/components/Reveal";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-12">
            <div className="mx-auto max-w-4xl px-6">
                <Reveal>
                    <div className="max-w-none text-neutral-300">
                        <h1 className="mb-6 text-4xl font-black uppercase text-white">Politika Privatnosti</h1>

                        <div className="mb-12 border-b border-white/10 pb-8 text-neutral-400">
                            <p><strong className="text-white">CudinaFitness</strong></p>
                            <p>ul. Ivana Meštrovića 30, 23210 Pakoštane, Hrvatska</p>
                            <p>OIB: [UPISATI OIB]</p>
                            <p>E-mail: dujecudina@gmail.com</p>
                            <p>Datum stupanja na snagu: [UPISATI DATUM]</p>
                        </div>

                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">1. UVOD</h2>
                                <p className="leading-relaxed">
                                    CudinaFitness (u daljnjem tekstu: "Voditelj obrade") posvećen je zaštiti privatnosti svojih korisnika. Ova Politika privatnosti objašnjava koje osobne podatke prikupljamo, kako ih koristimo, s kime ih dijelimo i koja su vaša prava.
                                    Ova Politika usklađena je s Općom uredbom o zaštiti podataka (GDPR) - Uredba (EU) 2016/679 i Zakonom o provedbi Opće uredbe o zaštiti podataka Republike Hrvatske.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">2. VODITELJ OBRADE PODATAKA</h2>
                                <ul className="space-y-2">
                                    <li><strong className="text-white">Naziv:</strong> CudinaFitness</li>
                                    <li><strong className="text-white">Vlasnik:</strong> Duje Čudina</li>
                                    <li><strong className="text-white">Adresa:</strong> ul. Ivana Meštrovića 30, 23210 Pakoštane, Hrvatska</li>
                                    <li><strong className="text-white">OIB:</strong> [UPISATI OIB]</li>
                                    <li><strong className="text-white">E-mail za pitanja o privatnosti:</strong> dujecudina@gmail.com</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">3. KOJE OSOBNE PODATKE PRIKUPLJAMO</h2>

                                <h3 className="text-lg font-bold text-white mt-6 mb-3">3.1. Podaci koje nam izravno dajete</h3>
                                <ul className="list-disc pl-5 space-y-2 marker:text-accent">
                                    <li>Ime i prezime</li>
                                    <li>Kontakt podaci (e-mail adresa, broj telefona)</li>
                                    <li>Datum rođenja i spol</li>
                                    <li>Adresa stanovanja</li>
                                    <li>Zdravstveni podaci relevantni za trening (ozljede, kronična stanja, ograničenja)</li>
                                    <li>Tjelesne mjere i fitness ciljevi</li>
                                    <li>Fotografije napretka (uz vašu izričitu suglasnost)</li>
                                </ul>

                                <h3 className="text-lg font-bold text-white mt-8 mb-3">3.2. Podaci koje prikupljamo automatski</h3>
                                <p className="mb-3">Prilikom posjeta našoj web stranici možemo prikupljati:</p>
                                <ul className="list-disc pl-5 space-y-2 marker:text-accent">
                                    <li>IP adresu</li>
                                    <li>Vrstu preglednika i uređaja</li>
                                    <li>Stranice koje posjećujete i vrijeme provedeno na njima</li>
                                    <li>Podatke putem kolačića (cookies)</li>
                                </ul>

                                <h3 className="text-lg font-bold text-white mt-8 mb-3">3.3. Podaci o plaćanju</h3>
                                <p className="leading-relaxed">Za online plaćanja koristimo Stripe platformu. CudinaFitness ne pohranjuje podatke o vašoj kreditnoj kartici. Stripe obrađuje plaćanja u skladu sa standardom PCI DSS.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">4. SVRHA I PRAVNA OSNOVA OBRADE</h2>
                                <div className="space-y-4">
                                    <p><strong className="text-white">4.1. Izvršenje ugovora</strong><br />Obrađujemo vaše podatke kako bismo vam pružili ugovorene usluge: organizaciju treninga, izradu planova, praćenje napretka i komunikaciju vezanu uz usluge.</p>
                                    <p><strong className="text-white">4.2. Legitimni interes</strong><br />Koristimo podatke za poboljšanje naših usluga, analizu korištenja web stranice i prevenciju prijevara.</p>
                                    <p><strong className="text-white">4.3. Privola</strong><br />Za obradu zdravstvenih podataka, objavu fotografija transformacija i slanje marketinških poruka tražimo vašu izričitu suglasnost koju možete povući u bilo kojem trenutku.</p>
                                    <p><strong className="text-white">4.4. Zakonska obveza</strong><br />Određene podatke čuvamo radi ispunjavanja zakonskih obveza (npr. računovodstveni propisi).</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">5. S KIME DIJELIMO VAŠE PODATKE</h2>
                                <p className="mb-3">Vaše podatke možemo dijeliti sa:</p>
                                <ul className="list-disc pl-5 space-y-2 marker:text-accent mb-4">
                                    <li>Stripe: za obradu online plaćanja</li>
                                    <li>Google Analytics: za analizu posjećenosti web stranice</li>
                                    <li>Pružatelji hosting usluga: za tehničko funkcioniranje web stranice</li>
                                    <li>Državna tijela: kada je to zakonom propisano</li>
                                </ul>
                                <p>Ne prodajemo niti ustupamo vaše osobne podatke trećim stranama u marketinške svrhe.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">6. KOLAČIĆI (COOKIES)</h2>
                                <p className="mb-3">Naša web stranica koristi kolačiće:</p>
                                <ul className="list-disc pl-5 space-y-2 marker:text-accent mb-4">
                                    <li>Nužni kolačići: potrebni za funkcioniranje stranice</li>
                                    <li>Analitički kolačići: pomažu nam razumjeti kako koristite stranicu</li>
                                    <li>Marketinški kolačići: koriste se za prikazivanje relevantnih oglasa</li>
                                </ul>
                                <p>Možete upravljati postavkama kolačića putem svog preglednika ili kroz našu cookie obavijest na web stranici.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">7. KOLIKO DUGO ČUVAMO VAŠE PODATKE</h2>
                                <ul className="list-disc pl-5 space-y-2 marker:text-accent">
                                    <li>Podaci o korisnicima i treninzima: 3 godine od završetka suradnje</li>
                                    <li>Računovodstvena dokumentacija: 11 godina (zakonska obveza)</li>
                                    <li>Fotografije transformacija: do povlačenja privole</li>
                                    <li>Newsletter pretplate: do odjave</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">8. VAŠA PRAVA</h2>
                                <p className="mb-4">U skladu s GDPR-om imate pravo:</p>
                                <ul className="grid gap-3 md:grid-cols-2">
                                    <li className="bg-surface p-4 rounded-sm border border-white/5"><strong className="text-white block mb-1">Pravo pristupa</strong> zatražiti informacije o podacima koje obrađujemo</li>
                                    <li className="bg-surface p-4 rounded-sm border border-white/5"><strong className="text-white block mb-1">Pravo ispravka</strong> zatražiti ispravak netočnih podataka</li>
                                    <li className="bg-surface p-4 rounded-sm border border-white/5"><strong className="text-white block mb-1">Pravo brisanja</strong> zatražiti brisanje vaših podataka ("pravo na zaborav")</li>
                                    <li className="bg-surface p-4 rounded-sm border border-white/5"><strong className="text-white block mb-1">Pravo ograničenja</strong> zatražiti ograničenje obrade u određenim situacijama</li>
                                    <li className="bg-surface p-4 rounded-sm border border-white/5"><strong className="text-white block mb-1">Pravo prenosivosti</strong> zatražiti prijenos podataka drugom voditelju obrade</li>
                                    <li className="bg-surface p-4 rounded-sm border border-white/5"><strong className="text-white block mb-1">Pravo prigovora</strong> prigovoriti obradi koja se temelji na legitimnom interesu</li>
                                    <li className="bg-surface p-4 rounded-sm border border-white/5"><strong className="text-white block mb-1">Pravo povlačenja</strong> povući danu suglasnost u bilo kojem trenutku</li>
                                </ul>
                                <p className="mt-6 text-neutral-400">Za ostvarivanje svojih prava kontaktirajte nas na: <a href="mailto:dujecudina@gmail.com" className="text-accent hover:underline">dujecudina@gmail.com</a>. Na vaš zahtjev odgovorit ćemo u roku od 30 dana.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">9. SIGURNOST PODATAKA</h2>
                                <p className="leading-relaxed">Primjenjujemo odgovarajuće tehničke i organizacijske mjere za zaštitu vaših osobnih podataka od neovlaštenog pristupa, gubitka ili zlouporabe. To uključuje: SSL enkripciju web stranice, sigurne lozinke, ograničen pristup podacima.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">10. MEĐUNARODNI PRIJENOS PODATAKA</h2>
                                <p className="leading-relaxed">Neki od naših pružatelja usluga (npr. Google, Stripe) mogu obrađivati podatke izvan Europskog gospodarskog prostora (EGP). U tim slučajevima osiguravamo odgovarajuće zaštitne mjere u skladu s GDPR-om (standardne ugovorne klauzule).</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">11. PODACI MALOLJETNIKA</h2>
                                <p className="leading-relaxed">Usluge su namijenjene osobama starijim od 18 godina. Za osobe mlađe od 18 godina potrebna je pisana suglasnost roditelja ili zakonskog zastupnika.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">12. PRAVO NA PRITUŽBU</h2>
                                <p className="mb-4">Ako smatrate da obrađujemo vaše podatke nezakonito, imate pravo podnijeti pritužbu nadzornom tijelu:</p>
                                <div className="bg-surface p-6 rounded-sm border border-white/5 border-l-4 border-l-accent">
                                    <strong className="text-white block mb-2">Agencija za zaštitu osobnih podataka (AZOP)</strong>
                                    <p>Selska cesta 136, 10000 Zagreb</p>
                                    <p>E-mail: azop@azop.hr | Web: <a href="http://www.azop.hr" target="_blank" rel="noreferrer" className="text-accent">www.azop.hr</a></p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">13. IZMJENE POLITIKE PRIVATNOSTI</h2>
                                <p className="leading-relaxed">Zadržavamo pravo izmjene ove Politike privatnosti. O značajnim izmjenama obavijestit ćemo vas putem web stranice ili e-maila. Preporučujemo povremeno pregledavanje ove stranice.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-accent mb-4">14. KONTAKT</h2>
                                <p className="mb-4">Za sva pitanja vezana uz zaštitu vaših osobnih podataka obratite se na:</p>
                                <div className="bg-neutral-900 p-6 rounded-sm">
                                    <p className="mb-1"><span className="text-neutral-500 w-20 inline-block">E-mail:</span> <a href="mailto:dujecudina@gmail.com" className="text-white hover:text-accent">dujecudina@gmail.com</a></p>
                                    <p><span className="text-neutral-500 w-20 inline-block">Adresa:</span> <span className="text-white">ul. Ivana Meštrovića 30, 23210 Pakoštane</span></p>
                                </div>
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
