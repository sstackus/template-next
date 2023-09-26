import type {Metadata} from 'next';
import {DM_Sans} from 'next/font/google';

const fontDisplay = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Title',
  description: 'Description',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${fontDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
