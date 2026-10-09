import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'The days we keep — A memory book', description: 'A little book of us. Nine chapters, one summer, and the moments worth keeping.' };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {return <html lang="en"><body>{children}</body></html>}
