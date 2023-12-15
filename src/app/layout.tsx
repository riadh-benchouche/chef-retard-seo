import {type Metadata} from 'next'

import {RootLayout} from '@/components/RootLayout'

import '@/styles/tailwind.css'
import {SpeedInsights} from "@vercel/speed-insights/next";
import {Analytics} from '@vercel/analytics/react';
import React from "react";

export const metadata: Metadata = {
    title: {
        template: '%s - Chef Retard',
        default: 'Chef Retard',
    },
    applicationName: 'Chef Retard',
    robots: {
        index: true,
        follow: true
    },
    verification: {
        google: "lEKRrtnRo-658p-aP_t9X5WGT5yi5qj9ct1p6QTn4Jw"
    },
}

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="fr" className="h-full bg-neutral-950 text-base antialiased">
        <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
        <SpeedInsights/>
        <Analytics/>
        </body>
        </html>
    )
}
