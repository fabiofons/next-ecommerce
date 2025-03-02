import type { Metadata } from 'next';
import { geistMono, geistSans } from '@/config/fonts';
import './globals.css';
import { Providers } from '@/components';

export const metadata: Metadata = {
  title: {
    default: 'Home - Teslo | Shop',
    template: '%s - Teslo | Shop',
  },
  description: 'Tienda de ropa',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
