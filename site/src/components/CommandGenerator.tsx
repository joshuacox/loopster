'use client';

import { useState } from 'react';
import { Copy, Check, Sparkles, RefreshCw } from 'lucide-react';

export default function CommandGenerator() {
  const [testCmd, setTestCmd] = useState('curl -fsS http://localhost:8080/healthz');
  const [loopCmd, setLoopCmd] = useState('echo "Waiting for service container to be ready..."');
  const [count, setCount] = useState(20);
  const [wait, setWait] = useState(3);
  const [backoff, setBackoff] = useState(1);
  const [infinite, setInfinite] = useState(false);
  const [verbose, setVerbose] = useState(false);
  const [successCleanup, setSuccessCleanup] = useState('./run-migrations.sh');
  const [failCleanup, setFailCleanup] = useState('docker-compose logs --tail 50');
  const [copied, setCopied] = useState(false);

  const generateCommand = () => {
    const parts = ['loopster'];

    if (testCmd.trim()) {
      parts.push(`  --test "${testCmd.trim()}"`);
    }
    if (loopCmd.trim()) {
      parts.push(`  --loop "${loopCmd.trim()}"`);
    }
    if (infinite) {
      parts.push('  --infinite');
    } else if (count !== 11) {
      parts.push(`  --count ${count}`);
    }
    if (wait > 0) {
      parts.push(`  --wait ${wait}`);
    }
    if (backoff > 1) {
      parts.push(`  --backoff ${backoff}`);
    }
    if (successCleanup.trim()) {
      parts.push(`  --success-cleanup "${successCleanup.trim()}"`);
    }
    if (failCleanup.trim()) {
      parts.push(`  --fail-cleanup "${failCleanup.trim()}"`);
    }
    if (verbose) {
      parts.push('  -vv');
    }

    return parts.join(' \\\n');
  };

  const command = generateCommand();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command.replace(/ \\\n/g, ' '));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="rounded-2xl border border-teal-500/30 bg-slate-900/70 p-6 md:p-8 backdrop-blur shadow-2xl">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Interactive CLI Command Generator</h3>
            <p className="text-xs text-slate-400">Configure parameters below to generate your tailored Loopster command</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-teal-300 mb-2">
            Test Command (Must return 0 for success)
          </label>
          <input
            type="text"
            value={testCmd}
            onChange={(e) => setTestCmd(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-sm text-slate-200 font-mono outline-none"
            placeholder='e.g. make test or curl -f http://localhost:3000'
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-teal-300 mb-2">
            Worker / Loop Command (Runs each attempt)
          </label>
          <input
            type="text"
            value={loopCmd}
            onChange={(e) => setLoopCmd(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-sm text-slate-200 font-mono outline-none"
            placeholder='e.g. echo "retry..." or aider --message "fix"'
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Max Attempts: <span className="text-teal-400 font-bold">{infinite ? 'Infinite' : count}</span>
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer text-xs text-slate-400">
              <input
                type="checkbox"
                checked={infinite}
                onChange={(e) => setInfinite(e.target.checked)}
                className="rounded border-slate-700 bg-slate-950 text-teal-500 focus:ring-0"
              />
              Infinite Loop
            </label>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            disabled={infinite}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-full accent-teal-500 disabled:opacity-30 cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Wait Interval: <span className="text-teal-400 font-bold">{wait}s</span>
            </label>
            <div className="flex items-center gap-3">
              <label className="text-xs text-slate-400 flex items-center gap-1.5">
                Backoff:
                <select
                  value={backoff}
                  onChange={(e) => setBackoff(Number(e.target.value))}
                  className="bg-slate-950 border border-slate-800 text-xs rounded px-1.5 py-0.5 text-teal-400 focus:outline-none"
                >
                  <option value={1}>None (1x)</option>
                  <option value={2}>2x (Exp)</option>
                  <option value={3}>3x</option>
                </select>
              </label>
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="60"
            value={wait}
            onChange={(e) => setWait(Number(e.target.value))}
            className="w-full accent-teal-500 cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Success Cleanup Hook (Optional)
          </label>
          <input
            type="text"
            value={successCleanup}
            onChange={(e) => setSuccessCleanup(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 text-sm text-slate-300 font-mono outline-none"
            placeholder="Command to run when test succeeds"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Fail Cleanup Hook (Optional)
          </label>
          <input
            type="text"
            value={failCleanup}
            onChange={(e) => setFailCleanup(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 text-sm text-slate-300 font-mono outline-none"
            placeholder="Command to run on exhaust or interruption"
          />
        </div>
      </div>

      <div className="flex items-center gap-6 mb-4 text-sm text-slate-300">
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={verbose}
            onChange={(e) => setVerbose(e.target.checked)}
            className="rounded border-slate-700 bg-slate-950 text-teal-500 focus:ring-0"
          />
          Enable Verbose Squawk Tracing (<code className="text-teal-400 text-xs">-vv</code>)
        </label>
      </div>

      {/* Live Generated Command Block */}
      <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 shadow-xl">
        <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-800 text-xs text-slate-400">
          <span className="font-semibold text-teal-400 uppercase tracking-wider">Generated Bash Command</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 border border-teal-500/30 px-3 py-1.5 transition text-xs font-semibold"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Command</span>
              </>
            )}
          </button>
        </div>
        <pre className="text-teal-200 font-mono text-sm overflow-x-auto whitespace-pre p-2">
          <code>{command}</code>
        </pre>
      </div>
    </div>
  );
}
