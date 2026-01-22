import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cudina Fitness | Pakoštane",
  description: "Fitness trening",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
