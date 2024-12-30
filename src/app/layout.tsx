import type { Metadata } from 'next';

import './globals.css';

import { siteConfig } from '@/config/site';

import Footer from './footer';
import Header from './header';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.URL),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  robots: {
    follow: true,
    index: true,
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@dev_rafiu',
    site: siteConfig.URL,
  },
  creator: siteConfig.author.name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
