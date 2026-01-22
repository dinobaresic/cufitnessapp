import type { Metadata } from "next";
import "@/app/globals.css";
import { Oswald, Outfit } from "next/font/google";

const oswald = Oswald({
    subsets: ["latin"],
    variable: "--font-oswald",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Cudina Fitness | Pakoštane",
    description:
        "Fitness trener Duje Čudina. Grupni, individualni i poluindividualni treninzi u Pakoštanima i okolici.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="hr" className={`${oswald.variable} ${outfit.variable}`} suppressHydrationWarning>
            <body className="font-body bg-background text-foreground antialiased selection:bg-accent/30 selection:text-accent" suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
