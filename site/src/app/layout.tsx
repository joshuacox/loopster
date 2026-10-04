import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Loopster - Modern CLI & Bash Loop Automation Tool',
  description: 'Loopster is a resilient CLI wrapper that executes worker commands repeatedly until a test passes or safety thresholds are hit. Perfect for CI/CD, flaky tests, and service readiness.',
  keywords: ['loopster', 'bash automation', 'cli retry', 'service polling', 'test loop', 'bash wrapper', 'ci retry tool'],
  openGraph: {
    title: 'Loopster - Modern CLI & Bash Loop Automation Tool',
    description: 'Execute worker tasks until test conditions succeed with smart retry bounds and cleanups.',
    type: 'website',
  },
  other: {
    'google-adsense-account': 'ca-pub-8973108060277483',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google AdSense Script Integration */}
        <Script
          id="adsense-init"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8973108060277483"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body className="antialiased selection:bg-teal-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
