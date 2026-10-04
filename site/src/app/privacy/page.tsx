import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';
import AdBanner from '@/components/AdBanner';

export const metadata = {
  title: 'Privacy Policy - Loopster Documentation',
  description: 'Privacy Policy for the Loopster project documentation site and Google AdSense compliance.',
};

export default function PrivacyPage() {
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
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
            <p className="text-sm text-slate-400">Effective Date: October 2026</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p>
            Welcome to the documentation website for <strong>Loopster</strong>. We are committed to transparency and respecting your privacy while you browse our documentation and usage guides.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-3">1. Information We Collect</h2>
          <p>
            Our website does not collect personally identifiable information (PII) directly from users. We do not require account registration, and we do not maintain a user database.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-3">2. Google AdSense & Cookies</h2>
          <p>
            We use Google AdSense to serve advertisements when you visit our website. Google and its third-party advertising partners may use cookies (such as the DoubleClick cookie) to serve ads based on your prior visits to this website or other websites on the Internet:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to your sites and/or other sites on the Internet.</li>
            <li>Users may opt out of personalized advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noreferrer" className="text-teal-400 underline">Google Ads Settings</a>.</li>
            <li>Alternatively, you can opt out of third-party vendor use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noreferrer" className="text-teal-400 underline">www.aboutads.info</a>.</li>
          </ul>

          <h2 className="text-xl font-bold text-white mt-8 mb-3">3. Log Files and Analytics</h2>
          <p>
            Like most standard website servers, hosting platforms (such as GitHub Pages) may log basic access requests, including IP addresses, browser user agent, referring/exit pages, date/time stamps, and ISP data for maintenance and security purposes.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-3">4. Open Source Transparency</h2>
          <p>
            Loopster is an open-source tool. The code for the application and this documentation is openly auditable on GitHub.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-3">5. Contact</h2>
          <p>
            For questions regarding this policy or the Loopster project, please open an issue or reach out via our GitHub repository at <a href="https://github.com/joshuacox/loopster" target="_blank" rel="noreferrer" className="text-teal-400 underline">github.com/joshuacox/loopster</a>.
          </p>
        </div>

        <AdBanner slot="2345678901" className="mt-12" />
      </main>
    </div>
  );
}
