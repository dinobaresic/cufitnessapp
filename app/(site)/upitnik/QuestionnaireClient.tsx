/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

const AGE_OPTIONS = ["18-25", "26-35", "36-45", "46+"];
const GOAL_OPTIONS = [
    "Mršavljenje",
    "Izgradnja mišićne mase",
    "Povećanje snage",
    "Općenita kondicija",
    "Rehabilitacija nakon ozljede",
];
const EXPERIENCE_OPTIONS = [
    "Potpuni početnik",
    "Imam nešto iskustva",
    "Napredan/la sam",
];
const TYPE_OPTIONS = [
    "Grupni treninzi",
    "Poluindividualni (do 4 osobe)",
    "Individualni (1 na 1)",
    "Nisam siguran/na, trebam savjet",
];
const SOURCE_OPTIONS = [
    "Instagram",
    "Facebook",
    "Preporuka prijatelja",
    "Google pretraga",
    "Drugo",
];

interface FormData {
    name: string;
    email: string;
    phone: string;
    age: string;
    goal: string;
    experience: string;
    type: string;
    health: string;
    source: string;
    notes: string;
    gdpr: boolean;
}

export function QuestionnaireClient() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        age: "",
        goal: "",
        experience: "",
        type: "",
        health: "",
        source: "",
        notes: "",
        gdpr: false,
    });

    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

    const validate = () => {
        const newErrors: Partial<Record<keyof FormData, string>> = {};

        if (!formData.name.trim()) newErrors.name = "Ime i prezime je obavezno.";
        if (!formData.email.trim()) newErrors.email = "Email adresa je obavezna.";
        if (!formData.phone.trim()) newErrors.phone = "Broj telefona je obavezan.";
        if (!formData.age) newErrors.age = "Molimo odaberite dobnu skupinu.";
        if (!formData.goal) newErrors.goal = "Molimo odaberite primarni cilj.";
        if (!formData.experience) newErrors.experience = "Molimo označite iskustvo.";
        if (!formData.type) newErrors.type = "Molimo odaberite vrstu treninga.";
        if (!formData.gdpr) newErrors.gdpr = "Morate prihvatiti uvjete obrade podataka.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        const message = `NOVA PRIJAVA ZA TRENING

Ime: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone}
Dob: ${formData.age}
Cilj: ${formData.goal}
Iskustvo: ${formData.experience}
Tip treninga: ${formData.type}
Zdravstvena stanja: ${formData.health || "Nema"}
Izvor: ${formData.source || "Nije navedeno"}
Napomene: ${formData.notes || "Nema"}`;

        const whatsappUrl = `https://wa.me/385915232333?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <main className="min-h-screen bg-background pt-24 pb-12">
            <div className="mx-auto max-w-3xl px-6">
                <Reveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-black uppercase text-white mb-4">
                            Prijavi se za trening
                        </h1>
                        <p className="text-neutral-400 text-lg">
                            Ispuni kratki upitnik i javit ćemo ti se u roku 24h.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8 bg-surface/50 p-6 md:p-8 rounded-sm border border-white/5">

                        {/* Osobni Podaci */}
                        <div className="space-y-6">
                            <InputField
                                label="Ime i prezime"
                                name="name"
                                value={formData.name}
                                onChange={(e: any) => setFormData({ ...formData, name: e.target.value })}
                                error={errors.name}
                                placeholder="Ivan Ivanić"
                                required
                            />
                            <div className="grid gap-6 md:grid-cols-2">
                                <InputField
                                    label="Email adresa"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e: any) => setFormData({ ...formData, email: e.target.value })}
                                    error={errors.email}
                                    placeholder="ivan@email.com"
                                    required
                                />
                                <InputField
                                    label="Broj telefona"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e: any) => setFormData({ ...formData, phone: e.target.value })}
                                    error={errors.phone}
                                    placeholder="091 234 5678"
                                    required
                                />
                            </div>
                        </div>

                        {/* Dob */}
                        <div>
                            <label className="block text-xs font-bold uppercase text-neutral-500 mb-2">
                                Koliko imaš godina? *
                            </label>
                            <select
                                value={formData.age}
                                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                className="w-full bg-surface border border-white/10 p-4 text-white focus:border-accent focus:outline-none transition-colors rounded-sm appearance-none"
                            >
                                <option value="" disabled>Odaberi...</option>
                                {AGE_OPTIONS.map((opt) => (
                                    <option key={opt} value={opt} className="bg-neutral-900">{opt}</option>
                                ))}
                            </select>
                            {errors.age && <p className="text-red-500 text-xs mt-1 font-bold">{errors.age}</p>}
                        </div>

                        {/* Ciljevi i Iskustvo */}
                        <div className="space-y-8 border-t border-white/5 pt-8">
                            <RadioGroup
                                label="Koji je tvoj primarni cilj?"
                                name="goal"
                                value={formData.goal}
                                onChange={(e: any) => setFormData({ ...formData, goal: e.target.value })}
                                error={errors.goal}
                                options={GOAL_OPTIONS}
                            />
                            <RadioGroup
                                label="Kakvo je tvoje iskustvo s treningom?"
                                name="experience"
                                value={formData.experience}
                                onChange={(e: any) => setFormData({ ...formData, experience: e.target.value })}
                                error={errors.experience}
                                options={EXPERIENCE_OPTIONS}
                            />
                            <RadioGroup
                                label="Koja vrsta treninga te zanima?"
                                name="type"
                                value={formData.type}
                                onChange={(e: any) => setFormData({ ...formData, type: e.target.value })}
                                error={errors.type}
                                options={TYPE_OPTIONS}
                            />
                        </div>

                        {/* Dodatno */}
                        <div className="space-y-6 border-t border-white/5 pt-8">
                            <div>
                                <label className="block text-xs font-bold uppercase text-neutral-500 mb-2">
                                    Imaš li ozljeda ili zdravstvenih stanja?
                                </label>
                                <textarea
                                    value={formData.health}
                                    onChange={(e) => setFormData({ ...formData, health: e.target.value })}
                                    className="w-full bg-surface border border-white/10 p-4 text-white focus:border-accent focus:outline-none transition-colors rounded-sm min-h-[100px]"
                                    placeholder="Npr. bol u leđima, operacija koljena, dijabetes..."
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase text-neutral-500 mb-2">
                                    Kako si čuo/la za Cudina Fitness?
                                </label>
                                <select
                                    value={formData.source}
                                    onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                                    className="w-full bg-surface border border-white/10 p-4 text-white focus:border-accent focus:outline-none transition-colors rounded-sm appearance-none"
                                >
                                    <option value="" disabled>Odaberi...</option>
                                    {SOURCE_OPTIONS.map((opt) => (
                                        <option key={opt} value={opt} className="bg-neutral-900">{opt}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase text-neutral-500 mb-2">
                                    Dodatne napomene ili pitanja
                                </label>
                                <textarea
                                    value={formData.notes}
                                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                    className="w-full bg-surface border border-white/10 p-4 text-white focus:border-accent focus:outline-none transition-colors rounded-sm min-h-[100px]"
                                    placeholder="Slobodno napiši bilo što bitno..."
                                />
                            </div>
                        </div>

                        {/* GDPR & Submit */}
                        <div className="border-t border-white/5 pt-8">
                            <label className="flex items-start gap-3 cursor-pointer group mb-6">
                                <input
                                    type="checkbox"
                                    checked={formData.gdpr}
                                    onChange={(e) => setFormData({ ...formData, gdpr: e.target.checked })}
                                    className="peer sr-only"
                                />
                                <div className="w-6 h-6 rounded-sm border border-white/20 peer-checked:border-accent peer-checked:bg-accent relative flex items-center justify-center transition-colors shrink-0 mt-0.5">
                                    <svg className="w-4 h-4 text-neutral-900 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-sm text-neutral-400">
                                    Pristajem na obradu mojih osobnih podataka u svrhu kontaktiranja i dogovaranja treninga. Pročitao/la sam <Link href="/privatnost" className="text-accent hover:underline">Politiku privatnosti</Link>.
                                </span>
                            </label>
                            {errors.gdpr && <p className="text-red-500 text-xs -mt-4 mb-4 font-bold">{errors.gdpr}</p>}

                            <button
                                type="submit"
                                className="w-full bg-accent text-neutral-900 font-bold uppercase tracking-wider py-4 hover:bg-accent-hover transition-colors rounded-sm text-lg"
                            >
                                Pošalji Prijavu
                            </button>
                        </div>

                    </form>

                    {/* Fallback Contact */}
                    <div className="mt-12 text-center">
                        <p className="text-neutral-400 mb-4">Ili nas kontaktiraj direktno:</p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <a href="https://wa.me/385915232333" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-accent transition-colors font-bold">
                                <span className="bg-[#25D366] text-white p-2 rounded-full">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                </span>
                                WhatsApp
                            </a>
                            <a href="mailto:dujecudina@gmail.com" className="flex items-center gap-2 text-white hover:text-accent transition-colors font-bold">
                                <span className="bg-neutral-800 text-white p-2 rounded-full">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </span>
                                dujecudina@gmail.com
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </main>
    );
}

const InputField = ({ label, name, type = "text", placeholder, required = false, value, onChange, error }: any) => (
    <div>
        <label className="block text-xs font-bold uppercase text-neutral-500 mb-2">
            {label} {required && "*"}
        </label>
        <input
            type={type}
            value={value}
            onChange={onChange}
            className="w-full bg-surface border border-white/10 p-4 text-white focus:border-accent focus:outline-none transition-colors rounded-sm"
            placeholder={placeholder}
        />
        {error && (
            <p className="text-red-500 text-xs mt-1 font-bold">{error}</p>
        )}
    </div>
);

const RadioGroup = ({ label, options, value, onChange, error }: any) => (
    <div>
        <label className="block text-xs font-bold uppercase text-neutral-500 mb-3">
            {label} *
        </label>
        <div className="space-y-2">
            {options.map((opt: string) => (
                <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                    <input
                        type="radio"
                        name={name}
                        value={opt}
                        checked={value === opt}
                        onChange={onChange}
                        className="peer sr-only"
                    />
                    <div className="w-5 h-5 rounded-full border border-white/20 peer-checked:border-accent peer-checked:bg-accent relative flex items-center justify-center transition-colors">
                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-neutral-300 group-hover:text-white transition-colors">
                        {opt}
                    </span>
                </label>
            ))}
        </div>
        {error && (
            <p className="text-red-500 text-xs mt-1 font-bold">{error}</p>
        )}
    </div>
);
