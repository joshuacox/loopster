'use client';

import React, { useEffect } from 'react';

interface AdBannerProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: 'true' | 'false';
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export default function AdBanner({
  slot = '1234567890',
  format = 'auto',
  responsive = 'true',
  className = '',
}: AdBannerProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      // Ignore adsbygoogle errors when blocked or initialising
    }
  }, []);

  return (
    <div className={`my-8 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-center ${className}`}>
      <span className="mb-2 block text-xs font-semibold tracking-wider text-slate-500 uppercase">
        Advertisement
      </span>
      <div className="flex min-h-[90px] items-center justify-center">
        <ins
          className="adsbygoogle block w-full"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-8973108060277483"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive}
        />
      </div>
    </div>
  );
}
