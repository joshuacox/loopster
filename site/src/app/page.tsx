import Link from 'next/link';
import { Terminal, GitBranch, BookOpen, ShieldCheck, Zap, RefreshCw, Cpu, Layers, Sparkles, AlertCircle } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import AdBanner from '@/components/AdBanner';
import CommandGenerator from '@/components/CommandGenerator';

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-teal-500 selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 font-bold text-xl tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400">
              <RefreshCw className="h-5 w-5 animate-spin-slow" />
            </span>
            <span>Loopster</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
              v1.0.0
            </span>
          </div>

          <nav className="flex items-center gap-4 sm:gap-6 text-sm text-slate-300">
            <a href="#quickstart" className="hover:text-teal-400 transition hidden md:inline-block">Quick Start</a>
            <a href="#generator" className="hover:text-teal-400 transition text-teal-300 font-medium">Generator</a>
            <a href="#options" className="hover:text-teal-400 transition hidden sm:inline-block">CLI Reference</a>
            <a href="#exit-codes" className="hover:text-teal-400 transition hidden lg:inline-block">Exit Codes</a>
            <a href="#examples" className="hover:text-teal-400 transition hidden md:inline-block">Examples</a>
            <Link href="/privacy" className="hover:text-teal-400 transition">Privacy</Link>
            <a
              href="https://github.com/joshuacox/loopster"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition border border-slate-700 text-xs sm:text-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28 border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-medium mb-6">
            <Zap className="w-3.5 h-3.5" />
            Resilient Bash Task & Worker Orchestration
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
            Intelligent Loop Automation for{' '}
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Scripts & Tests
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Loopster repeatedly executes a <strong className="text-slate-200">worker command</strong> until a <strong className="text-slate-200">test command</strong> succeeds or safety bounds are hit. Engineered with exponential backoff, interrupt trapping, cleanups, and seamless CI/CD integration.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <a
              href="#generator"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-center transition shadow-lg shadow-teal-500/20"
            >
              Try Interactive Generator
            </a>
            <a
              href="#quickstart"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-medium border border-slate-700 transition"
            >
              <Terminal className="w-4 h-4 text-teal-400" />
              Quick Installation
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Top AdSense Placement */}
        <AdBanner slot="1029384756" />

        {/* Interactive Command Generator */}
        <section id="generator" className="my-16 scroll-mt-20">
          <CommandGenerator />
        </section>

        {/* Quickstart */}
        <section id="quickstart" className="my-16 scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4 flex items-center gap-3">
            <Terminal className="text-teal-400 w-7 h-7" />
            Quick Start & Installation
          </h2>
          <p className="text-slate-400 mb-6">
            Install Loopster directly into your environment using the bootstrap installer or build with CMake:
          </p>

          <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">One-Line Automated Bootstrap</h3>
          <CodeBlock
            code="curl -sL https://raw.githubusercontent.com/joshuacox/loopster/refs/heads/main/bootstrap.sh | bash"
          />

          <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mt-6 mb-2">Manual CMake & CPack Build</h3>
          <CodeBlock
            code={`git clone https://github.com/joshuacox/loopster.git
cd loopster
cmake .
make
sudo make install

# Or generate .deb and .tar.gz packages:
cpack`}
          />
        </section>

        {/* Key Features */}
        <section id="features" className="my-16 scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-8">
            Engineered for Resilience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-teal-500/40 transition">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Worker & Test Decoupling</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Separate what does the work (<code className="text-teal-300">-l/--loop</code>) from what determines success (<code className="text-teal-300">-t/--test</code>).
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-teal-500/40 transition">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Graceful Signal Trapping</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Clean up reliably even if aborted early via <code className="text-teal-300">SIGINT</code> (Ctrl+C) or <code className="text-teal-300">SIGTERM</code>.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-teal-500/40 transition">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Exponential Backoff</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Prevent service spamming with multiplier backoff (<code className="text-teal-300">--backoff</code>) and max wait limits (<code className="text-teal-300">--max-wait</code>).
              </p>
            </div>
          </div>
        </section>

        {/* Options & Reference */}
        <section id="options" className="my-16 scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-6 flex items-center gap-3">
            <BookOpen className="text-teal-400 w-7 h-7" />
            CLI Options & Environment Variables
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-900/80 text-xs uppercase text-slate-400 font-semibold border-b border-slate-800">
                <tr>
                  <th className="px-6 py-4">Option</th>
                  <th className="px-6 py-4">Default</th>
                  <th className="px-6 py-4">Env Fallback</th>
                  <th className="px-6 py-4">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-950/40 font-mono text-xs">
                <tr className="hover:bg-slate-900/30">
                  <td className="px-6 py-3.5 text-teal-400 font-bold">-c, --count &lt;N&gt;</td>
                  <td className="px-6 py-3.5">11</td>
                  <td className="px-6 py-3.5 text-amber-300">$COUNT</td>
                  <td className="px-6 py-3.5 font-sans text-slate-300">Maximum number of loop iterations</td>
                </tr>
                <tr className="hover:bg-slate-900/30">
                  <td className="px-6 py-3.5 text-teal-400 font-bold">-t, --test &lt;cmd&gt;</td>
                  <td className="px-6 py-3.5">echo ./test.sh</td>
                  <td className="px-6 py-3.5 text-amber-300">$TEST</td>
                  <td className="px-6 py-3.5 font-sans text-slate-300">Verification command that determines success (returns exit code 0)</td>
                </tr>
                <tr className="hover:bg-slate-900/30">
                  <td className="px-6 py-3.5 text-teal-400 font-bold">-l, --loop &lt;cmd&gt;</td>
                  <td className="px-6 py-3.5">echo ./iter.sh</td>
                  <td className="px-6 py-3.5 text-amber-300">$LOOP</td>
                  <td className="px-6 py-3.5 font-sans text-slate-300">Worker action executed on every iteration</td>
                </tr>
                <tr className="hover:bg-slate-900/30">
                  <td className="px-6 py-3.5 text-teal-400 font-bold">-w, --wait &lt;sec&gt;</td>
                  <td className="px-6 py-3.5">0</td>
                  <td className="px-6 py-3.5 text-amber-300">$WAIT</td>
                  <td className="px-6 py-3.5 font-sans text-slate-300">Delay (in seconds) between iterations</td>
                </tr>
                <tr className="hover:bg-slate-900/30">
                  <td className="px-6 py-3.5 text-teal-400 font-bold">--backoff &lt;factor&gt;</td>
                  <td className="px-6 py-3.5">1</td>
                  <td className="px-6 py-3.5 text-amber-300">$BACKOFF</td>
                  <td className="px-6 py-3.5 font-sans text-slate-300">Multiplier factor for wait time on consecutive failures (e.g. 2)</td>
                </tr>
                <tr className="hover:bg-slate-900/30">
                  <td className="px-6 py-3.5 text-teal-400 font-bold">--max-wait &lt;sec&gt;</td>
                  <td className="px-6 py-3.5">0</td>
                  <td className="px-6 py-3.5 text-amber-300">$MAX_WAIT</td>
                  <td className="px-6 py-3.5 font-sans text-slate-300">Upper cap on wait interval when backoff is enabled</td>
                </tr>
                <tr className="hover:bg-slate-900/30">
                  <td className="px-6 py-3.5 text-teal-400 font-bold">--infinite</td>
                  <td className="px-6 py-3.5">false</td>
                  <td className="px-6 py-3.5 text-amber-300">$INFINITE</td>
                  <td className="px-6 py-3.5 font-sans text-slate-300">Keep running continuously until test succeeds</td>
                </tr>
                <tr className="hover:bg-slate-900/30">
                  <td className="px-6 py-3.5 text-teal-400 font-bold">--success-cleanup &lt;cmd&gt;</td>
                  <td className="px-6 py-3.5">echo success</td>
                  <td className="px-6 py-3.5 text-amber-300">$SUCCESS_CLEANUP</td>
                  <td className="px-6 py-3.5 font-sans text-slate-300">Hook command triggered when test finally passes</td>
                </tr>
                <tr className="hover:bg-slate-900/30">
                  <td className="px-6 py-3.5 text-teal-400 font-bold">--fail-cleanup &lt;cmd&gt;</td>
                  <td className="px-6 py-3.5">echo fail</td>
                  <td className="px-6 py-3.5 text-amber-300">$FAIL_CLEANUP</td>
                  <td className="px-6 py-3.5 font-sans text-slate-300">Hook command triggered if attempts fail or loop is interrupted</td>
                </tr>
                <tr className="hover:bg-slate-900/30">
                  <td className="px-6 py-3.5 text-teal-400 font-bold">-V, --version</td>
                  <td className="px-6 py-3.5">-</td>
                  <td className="px-6 py-3.5">-</td>
                  <td className="px-6 py-3.5 font-sans text-slate-300">Print version number and exit</td>
                </tr>
                <tr className="hover:bg-slate-900/30">
                  <td className="px-6 py-3.5 text-teal-400 font-bold">-v, --verbose</td>
                  <td className="px-6 py-3.5">0</td>
                  <td className="px-6 py-3.5 text-amber-300">$VERBOSITY</td>
                  <td className="px-6 py-3.5 font-sans text-slate-300">Increases verbosity output level with '#' squawk padding</td>
                </tr>
                <tr className="hover:bg-slate-900/30">
                  <td className="px-6 py-3.5 text-teal-400 font-bold">--debug</td>
                  <td className="px-6 py-3.5">false</td>
                  <td className="px-6 py-3.5 text-amber-300">-</td>
                  <td className="px-6 py-3.5 font-sans text-slate-300">Activate debug tracking mode (bash set -x)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Exit Codes Reference */}
        <section id="exit-codes" className="my-16 scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-6 flex items-center gap-3">
            <AlertCircle className="text-teal-400 w-7 h-7" />
            Standard Exit Codes for CI/CD Pipelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-5">
              <span className="inline-block px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold text-xs mb-3">
                Exit Code 0
              </span>
              <h3 className="font-semibold text-white mb-1">Success</h3>
              <p className="text-xs text-slate-400">
                The test condition returned 0. Success cleanup executed and the pipeline can safely proceed.
              </p>
            </div>

            <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-5">
              <span className="inline-block px-2.5 py-1 rounded bg-rose-500/20 text-rose-400 font-mono font-bold text-xs mb-3">
                Exit Code 1
              </span>
              <h3 className="font-semibold text-white mb-1">Max Iterations Exceeded</h3>
              <p className="text-xs text-slate-400">
                The test did not pass within the allotted count limit. Fail cleanup ran and the process returned failure.
              </p>
            </div>

            <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-5">
              <span className="inline-block px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 font-mono font-bold text-xs mb-3">
                Exit Code 130
              </span>
              <h3 className="font-semibold text-white mb-1">Interrupted / Terminated</h3>
              <p className="text-xs text-slate-400">
                Loopster was interrupted by SIGINT (Ctrl+C) or SIGTERM. Fail cleanup was triggered for graceful teardown.
              </p>
            </div>
          </div>
        </section>

        {/* Real-World Examples */}
        <section id="examples" className="my-16 scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-6">
            Real-World Use Cases
          </h2>

          <div className="space-y-8">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-teal-300 mb-2">1. Waiting for a Database or Microservice with Exponential Backoff</h3>
              <p className="text-slate-400 text-sm mb-4">
                Poll an API healthcheck starting at 2s interval, doubling each time up to 30s max:
              </p>
              <CodeBlock
                code={`loopster \\
  --test "curl -fsS http://localhost:8080/healthz" \\
  --loop "echo 'Checking microservice readiness...'" \\
  --wait 2 \\
  --backoff 2 \\
  --max-wait 30 \\
  --count 15 \\
  --success-cleanup "./run-migrations.sh" \\
  --fail-cleanup "docker-compose logs --tail 100"`}
              />
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-teal-300 mb-2">2. Automated AI Prompt/Code Refinement Loop (Aider / Coding Agents)</h3>
              <p className="text-slate-400 text-sm mb-4">
                Iteratively fix build and test issues using an agent until unit tests pass:
              </p>
              <CodeBlock
                code={`loopster \\
  --count 10 \\
  --loop "aider --file src/main.c -m 'fix test compilation and pass all assertions'" \\
  --test "make clean && make && ./test_suite" \\
  --success-cleanup "git checkout -b feature-success && git commit -am 'Automated fix succeeded'" \\
  --fail-cleanup "git checkout -b feature-failed"`}
              />
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-teal-300 mb-2">3. Retrying Flaky Network Deployment with Complex Piped Tests</h3>
              <p className="text-slate-400 text-sm mb-4">
                Verify Kubernetes pod rollout status using pipes:
              </p>
              <CodeBlock
                code={`loopster \\
  --loop "kubectl rollout restart deployment/api" \\
  --test "kubectl get deployment api -o jsonpath='{.status.readyReplicas}' | grep -q '3'" \\
  --count 10 \\
  --wait 5 \\
  -vv`}
              />
            </div>
          </div>
        </section>

        {/* Bottom AdSense Placement */}
        <AdBanner slot="9876543210" />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 text-center text-sm text-slate-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Loopster. Open Source under GPL-3.0 License.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition">Terms of Service</Link>
            <a href="https://github.com/joshuacox/loopster" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
