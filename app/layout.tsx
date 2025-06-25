import type { Metadata } from 'next'
import './globals.css'
import { Kumbh_Sans } from 'next/font/google';

const kumbhSans = Kumbh_Sans({
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={kumbhSans.className}>
      <body>{children}</body>
    </html>
  );
}
