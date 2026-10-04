import Link from 'next/link';
import { Terminal, GitBranch, BookOpen, ShieldCheck, Zap, RefreshCw, Cpu, Layers } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import AdBanner from '@/components/AdBanner';

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
              v1.0
            </span>
          </div>

          <nav className="flex items-center gap-6 text-sm text-slate-300">
            <a href="#quickstart" className="hover:text-teal-400 transition">Quick Start</a>
            <a href="#features" className="hover:text-teal-400 transition">Features</a>
            <a href="#options" className="hover:text-teal-400 transition">CLI Reference</a>
            <a href="#examples" className="hover:text-teal-400 transition">Examples</a>
            <Link href="/privacy" className="hover:text-teal-400 transition">Privacy</Link>
            <a
              href="https://github.com/joshuacox/loopster"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition border border-slate-700"
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
            Loopster repeatedly runs a <strong className="text-slate-200">worker command</strong> until a <strong className="text-slate-200">test command</strong> passes or max bounds are met. Engineered for flaky test suites, async service polling, automated CI/CD retries, and AI-driven development loops.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <a
              href="#quickstart"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-center transition shadow-lg shadow-teal-500/20"
            >
              Get Started in 30 Seconds
            </a>
            <a
              href="https://github.com/joshuacox/loopster"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-medium border border-slate-700 transition"
            >
              <GithubIcon className="w-5 h-5" />
              View Source Repository
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Top AdSense Placement */}
        <AdBanner slot="1029384756" />

        {/* Quickstart */}
        <section id="quickstart" className="my-16 scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4 flex items-center gap-3">
            <Terminal className="text-teal-400 w-7 h-7" />
            Quick Start & Installation
          </h2>
          <p className="text-slate-400 mb-6">
            Install Loopster instantly via curl or clone the repository and build via CMake:
          </p>

          <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">One-Line Automated Install</h3>
          <CodeBlock
            code="curl -sL https://raw.githubusercontent.com/joshuacox/loopster/refs/heads/main/bootstrap.sh | bash"
          />

          <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mt-6 mb-2">Manual CMake Build & Installation</h3>
          <CodeBlock
            code={`git clone https://github.com/joshuacox/loopster.git
cd loopster
cmake .
make
sudo make install`}
          />
        </section>

        {/* Key Features */}
        <section id="features" className="my-16 scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-8">
            Why Loopster?
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
              <h3 className="text-lg font-semibold text-white mb-2">Failure & Success Hooks</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Execute dedicated cleanup actions on final outcome (<code className="text-teal-300">--fail-cleanup</code> and <code className="text-teal-300">--success-cleanup</code>).
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-teal-500/40 transition">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Granular Verbosity</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Control terminal output with <code className="text-teal-300">-v</code> or squawk levels up to automated bash trace debugging (<code className="text-teal-300">set -x</code>).
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
                  <td className="px-6 py-3.5 font-sans text-slate-300">Verification command that determines success (exit code 0)</td>
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
                  <td className="px-6 py-3.5 text-teal-400 font-bold">--infinite</td>
                  <td className="px-6 py-3.5">false</td>
                  <td className="px-6 py-3.5 text-amber-300">$INFINITE</td>
                  <td className="px-6 py-3.5 font-sans text-slate-300">Keep running continuously until test succeeds</td>
                </tr>
                <tr className="hover:bg-slate-900/30">
                  <td className="px-6 py-3.5 text-teal-400 font-bold">--success-cleanup &lt;cmd&gt;</td>
                  <td className="px-6 py-3.5">echo success</td>
                  <td className="px-6 py-3.5 text-amber-300">$SUCCESS_CLEANUP</td>
                  <td className="px-6 py-3.5 font-sans text-slate-300">Command to trigger when the test finally passes</td>
                </tr>
                <tr className="hover:bg-slate-900/30">
                  <td className="px-6 py-3.5 text-teal-400 font-bold">--fail-cleanup &lt;cmd&gt;</td>
                  <td className="px-6 py-3.5">echo fail</td>
                  <td className="px-6 py-3.5 text-amber-300">$FAIL_CLEANUP</td>
                  <td className="px-6 py-3.5 font-sans text-slate-300">Command to trigger if max loop attempts fail</td>
                </tr>
                <tr className="hover:bg-slate-900/30">
                  <td className="px-6 py-3.5 text-teal-400 font-bold">-v, --verbose</td>
                  <td className="px-6 py-3.5">0</td>
                  <td className="px-6 py-3.5 text-amber-300">$VERBOSITY</td>
                  <td className="px-6 py-3.5 font-sans text-slate-300">Increases verbosity output level with '#' squawk padding</td>
                </tr>
                <tr className="hover:bg-slate-900/30">
                  <td className="px-6 py-3.5 text-teal-400 font-bold">--verbosity &lt;lvl&gt;</td>
                  <td className="px-6 py-3.5">0</td>
                  <td className="px-6 py-3.5 text-amber-300">$VERBOSITY</td>
                  <td className="px-6 py-3.5 font-sans text-slate-300">Directly set numeric squawk verbosity level</td>
                </tr>
                <tr className="hover:bg-slate-900/30">
                  <td className="px-6 py-3.5 text-teal-400 font-bold">--debug</td>
                  <td className="px-6 py-3.5">false</td>
                  <td className="px-6 py-3.5 text-amber-300">-</td>
                  <td className="px-6 py-3.5 font-sans text-slate-300">Activate debug tracking mode</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Real-World Examples */}
        <section id="examples" className="my-16 scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-6">
            Real-World Use Cases
          </h2>

          <div className="space-y-8">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-teal-300 mb-2">1. Waiting for a Database or Microservice to be Healthy</h3>
              <p className="text-slate-400 text-sm mb-4">
                Poll an API healthcheck endpoint every 3 seconds up to 20 times while executing a progress heartbeat:
              </p>
              <CodeBlock
                code={`loopster \\
  --test "curl -fsS http://localhost:8080/healthz" \\
  --loop "echo 'Waiting for service container to boot...'" \\
  --wait 3 \\
  --count 20 \\
  --success-cleanup "echo 'Backend is ready!' && ./run-migrations.sh" \\
  --fail-cleanup "echo 'Backend failed to start!' && docker-compose logs"`}
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
              <h3 className="text-lg font-bold text-teal-300 mb-2">3. Retrying Flaky Network Deployment</h3>
              <p className="text-slate-400 text-sm mb-4">
                Retry an intermittent deployment step up to 5 times with a 10s backoff:
              </p>
              <CodeBlock
                code={`loopster \\
  --loop "terraform apply -auto-approve" \\
  --test "terraform plan -detailed-exitcode" \\
  --count 5 \\
  --wait 10 \\
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
