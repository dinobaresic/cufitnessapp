export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="hr" suppressHydrationWarning>
            <body suppressHydrationWarning>{children}</body>
        </html>
    );
}
