import type { Metadata } from 'next';
import './globals.css';
import { Kumbh_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from "@/app/contexts/language-context";

const kumbhSans = Kumbh_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fetch',
  description: 'Helping humans be better dog owners',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
