import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service - Loopster Documentation',
  description: 'Terms of Service for the Loopster documentation site.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition">
            <ArrowLeft className="w-4 h-4" /> Back to Loopster Docs
          </Link>
          <span className="font-semibold text-white">Loopster</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
            <p className="text-sm text-slate-400">Effective Date: October 2026</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p>
            By accessing and reading this website, you agree to comply with and be bound by the following terms of use.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-3">1. Use of Documentation and Code</h2>
          <p>
            The Loopster project and the scripts provided are licensed under the GNU General Public License v3.0 (GPL-3.0). All documentation code snippets are offered for educational, informational, and automation purposes.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-3">2. Disclaimer of Warranties</h2>
          <p>
            Loopster is provided &ldquo;as is&rdquo;, without warranty of any kind, express or implied. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability arising from the use of the software.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-3">3. Changes to Terms</h2>
          <p>
            We reserve the right to revise or update these Terms of Service at any time without notice. Continued use of the site signifies your acceptance of any updated terms.
          </p>
        </div>
      </main>
    </div>
  );
}
