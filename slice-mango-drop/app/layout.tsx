import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Slice Mango Experience',
  description: 'Pure Mango Indulgence. Thick. Juicy. Real.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-dark-900 text-white selection:bg-mango-500 selection:text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
