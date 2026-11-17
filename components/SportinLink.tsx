'use client';

import type { MouseEvent, ReactNode } from "react";
import { SPORTIN_APP_STORE_URL, SPORTIN_PLAY_STORE_URL, SPORTIN_VENUE_URL } from "@/lib/sportin";

// Sportin's venue URL has no app deep link (universal links only cover qr.sportin.app),
// so on phones we open the store listing, which shows "Open" when the app is installed.
function mobileStoreUrl(): string | null {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) return SPORTIN_PLAY_STORE_URL;
    if (/iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1)) {
        return SPORTIN_APP_STORE_URL;
    }
    return null;
}

export function SportinLink({ className, children }: { className?: string; children: ReactNode }) {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        const storeUrl = mobileStoreUrl();
        if (!storeUrl) return;
        e.preventDefault();
        window.location.href = storeUrl;
    };

    return (
        <a href={SPORTIN_VENUE_URL} target="_blank" rel="noreferrer" onClick={handleClick} className={className}>
            {children}
        </a>
    );
}
