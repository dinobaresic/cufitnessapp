'use client';

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!formData.name) {
            setError("Molim unesite vaše ime i prezime.");
            return;
        }

        const message = `Bok Duje, zovem se ${formData.name} i želim se prijaviti za trening. Moj email je ${formData.email}.${formData.phone ? ` Moj broj je ${formData.phone}.` : ''}`;

        // Encode and open WhatsApp
        const whatsappUrl = `https://wa.me/385992013971?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-xs font-bold uppercase text-neutral-400 mb-2">Ime i Prezime *</label>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-surface border border-white/10 p-4 text-white focus:border-accent focus:outline-none transition-colors rounded-sm"
                    placeholder="IVAN IVANIĆ"
                />
            </div>
            <div>
                <label className="block text-xs font-bold uppercase text-neutral-400 mb-2">Email</label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-surface border border-white/10 p-4 text-white focus:border-accent focus:outline-none transition-colors rounded-sm"
                    placeholder="IVAN@EMAIL.COM"
                />
            </div>
            <div>
                <label className="block text-xs font-bold uppercase text-neutral-400 mb-2">Telefon (Opcionalno)</label>
                <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-surface border border-white/10 p-4 text-white focus:border-accent focus:outline-none transition-colors rounded-sm"
                    placeholder="091 234 5678"
                />
            </div>

            {error && <p className="text-red-500 text-sm font-bold">{error}</p>}

            <button type="submit" className="w-full bg-accent text-neutral-900 font-bold uppercase tracking-wider py-4 hover:bg-accent-hover transition-colors rounded-sm">
                Pošalji Prijavu
            </button>
        </form>
    );
}

export function ContactSection() {
    return (
        <section id="kontakt" className="py-24 px-6 relative">
            <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2">

                {/* Form */}
                <Reveal id="upitnik">
                    <h2 className="text-3xl font-black uppercase text-white mb-8">Započni Danas</h2>
                    <ContactForm />
                </Reveal>

                {/* Map Info */}
                <Reveal delay={200}>
                    <h2 className="text-3xl font-black uppercase text-white mb-8">Lokacija</h2>
                    <div className="bg-surface border border-white/10 p-2 rounded-sm h-[400px]">
                        <iframe
                            src="https://www.google.com/maps?q=43.907558,15.507878&z=17&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        />
                    </div>
                    <div className="mt-8 flex flex-col gap-4 text-neutral-300">
                        <div className="flex items-center gap-4">
                            <span className="text-accent font-bold">ADRESA:</span> ul. Ivana Meštrovića 30, 23210 Pakoštane
                        </div>
                        <div className="flex gap-4">
                            <span className="text-accent font-bold uppercase min-w-[140px]">RADNO VRIJEME:</span>
                            <div className="flex flex-col gap-1 text-white">
                                <div className="flex gap-2">
                                    <span className="text-neutral-400 w-24">Recepcija:</span>
                                    <span>Pon - Pet: 08:00 - 20:00</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-neutral-400 w-24">Gym:</span>
                                    <span>0/24 svaki dan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
