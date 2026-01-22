export function BackgroundOrbs() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Primary Accent Orb - Top Left */}
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent/15 blur-[120px] animate-pulse-slow" />

            {/* Secondary Accent Orb - Bottom Right */}
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent/10 blur-[120px] animate-pulse-slow delay-1000" />

            {/* Subtle White Glow - Center */}
            <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-white/5 blur-[100px] animate-pulse-slow delay-2000" />
        </div>
    );
}
