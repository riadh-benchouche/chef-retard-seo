import {type Metadata} from 'next'

import {RootLayout} from '@/components/RootLayout'

import '@/styles/tailwind.css'
import {SpeedInsights} from "@vercel/speed-insights/next";

export const metadata: Metadata = {
    title: {
        template: '%s - Chef Retard',
        default: 'Chef Retard - Excellence culinaire à son apogée',
    },
}

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="fr" className="h-full bg-neutral-950 text-base antialiased">
        <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
        <SpeedInsights/>
        </body>
        </html>
    )
}
