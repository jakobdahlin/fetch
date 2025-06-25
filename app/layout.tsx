import type { Metadata } from 'next';
import './globals.css';
import { Kumbh_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar'; // 👈 Import Navbar

const kumbhSans = Kumbh_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'K9Coach',
  description: 'Helping humans be better dog owners',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={kumbhSans.className}>
      <body>
        <Navbar /> {/* 👈 Navbar globally visible */}
        {children}
      </body>
    </html>
  );
}
