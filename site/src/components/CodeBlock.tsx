'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CodeBlock({ code, language = 'bash' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // Fallback
    }
  };

  return (
    <div className="relative group my-4 rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-sm text-slate-200 shadow-xl overflow-x-auto">
      <div className="flex justify-between items-center pb-2 mb-2 border-b border-slate-800/80 text-xs text-slate-400">
        <span className="uppercase font-semibold tracking-wider text-teal-400">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded bg-slate-800/60 px-2 py-1 hover:bg-slate-700 transition text-slate-300 hover:text-white"
          title="Copy command"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="text-slate-100 whitespace-pre">
        <code>{code}</code>
      </pre>
    </div>
  );
}
