import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import dynamic from "next/dynamic";


const BenefitsSection = dynamic(() => import("@/components/BenefitsSection").then(mod => mod.BenefitsSection));
const ResultsSection = dynamic(() => import("@/components/ResultsSection").then(mod => mod.ResultsSection));
const AboutSection = dynamic(() => import("@/components/AboutSection").then(mod => mod.AboutSection));
const FAQSection = dynamic(() => import("@/components/FAQ").then(mod => mod.FAQSection));
const PackagesSection = dynamic(() => import("@/components/PackagesSection").then(mod => mod.PackagesSection));
const ContactSection = dynamic(() => import("@/components/Contact").then(mod => mod.ContactSection));

export const metadata: Metadata = {
  title: "Cudina Fitness - Profesionalni Trening Pakoštane",
  description: "Postigni formu života uz individualni pristup. Grupni i osobni treninzi u Pakoštanima. Više od 100 zadovoljnih klijenata. Prijavi se za besplatne konzultacije.",
  openGraph: {
    title: "Cudina Fitness - Postigni Formu Života",
    description: "Profesionalni trening u Pakoštanima. Individualni pristup, grupni treninzi i dokazani rezultati.",
    url: "https://cudinafitness.hr",
    siteName: "Cudina Fitness",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cudina Fitness Trening",
      },
    ],
    locale: "hr_HR",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-col bg-grain font-body text-foreground overflow-x-hidden selection:bg-accent selection:text-black">
      <div id="top" className="absolute top-0 -z-10 h-0 w-0" />
      <Hero />
      <BenefitsSection />
      <ResultsSection />
      <AboutSection />
      <FAQSection />
      <PackagesSection />
      <ContactSection />
    </main>
  );
}
