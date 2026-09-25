import { ArrowUp, Heart, Mail, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 text-slate-600">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Identity */}
          <div className="text-center md:text-left space-y-1">
            <p className="font-bold text-slate-900 text-lg">
              {personalInfo.name}
            </p>
            <p className="text-xs sm:text-sm text-slate-500">
              S1 Sistem Informasi • {personalInfo.institution}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-teal-700 hover:border-teal-200 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-teal-700 hover:border-teal-200 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Kembali ke Atas"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-teal-700 hover:border-teal-200 shadow-2xs transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Ke Atas</span>
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            © {new Date().getFullYear()} Niken Nuraifah Suherlan. Portfolio Fresh Graduate Sistem Informasi.
          </p>
        </div>
      </div>
    </footer>
  );
}
