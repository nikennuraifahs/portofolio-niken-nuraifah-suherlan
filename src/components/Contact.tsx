import { useState } from 'react';
import { Mail, Linkedin, Send, Copy, Check, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending message or preparing mailto
    const mailtoUrl = `mailto:${personalInfo.email}?subject=Kolaborasi / Diskusi Karir dari ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + `\n\nKontak: ${formData.email}`)}`;
    window.location.href = mailtoUrl;
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setShowContactModal(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section id="kontak" className="py-20 bg-white border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">

        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Informasi Kontak</span>
        </div>

        {/* Big Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Mari Terhubung
        </h2>

        {/* Description */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
          Sebagai fresh graduate, saya masih terus belajar dan berkembang, serta terbuka untuk kesempatan berkolaborasi maupun bekerja di bidang Data, Machine Learning, dan Sistem Informasi
        </p>

        {/* Contact Links Card */}
        <div className="mt-10 p-6 sm:p-8 bg-slate-50/80 rounded-2xl border border-slate-200/80 max-w-xl mx-auto shadow-2xs">
          <div className="space-y-4">

            {/* Email link with quick copy */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 bg-white rounded-xl border border-slate-200/70">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-400 font-medium">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-semibold text-slate-800 hover:text-teal-700 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50 border border-slate-200/60 transition-colors"
                title="Salin alamat email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-medium">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin</span>
                  </>
                )}
              </button>
            </div>

            {/* LinkedIn link */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 bg-white rounded-xl border border-slate-200/70">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-400 font-medium">LinkedIn</p>
                  <a
                    href={personalInfo.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-slate-800 hover:text-teal-700 transition-colors"
                  >
                    Niken Nuraifah Suherlan
                  </a>
                </div>
              </div>

              <a
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-teal-700 hover:bg-teal-50 border border-teal-200/60 transition-colors"
              >
                <span>Buka Profil</span>
              </a>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t border-slate-200/70 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              id="btn-hubungi-saya"
              onClick={() => setShowContactModal(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm sm:text-base shadow-xs hover:shadow-sm transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Hubungi Saya</span>
            </button>
          </div>

        </div>

      </div>

      {/* Simple Contact Form Modal */}
      {showContactModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in"
          onClick={() => setShowContactModal(false)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-2xl border border-slate-200 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Kirim Pesan ke Niken
              </h3>
              <button
                type="button"
                onClick={() => setShowContactModal(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg"
              >
                ✕
              </button>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-5">
              Pesan ini akan membuka aplikasi email Anda untuk mengirim pesan langsung ke <span className="font-semibold text-slate-800">{personalInfo.email}</span>.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nama Anda
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Recruiter / Rekan Kerja"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Anda
                </label>
                <input
                  type="email"
                  required
                  placeholder="nama@perusahaan.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Pesan
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tuliskan tawaran peluang atau pesan kolaborasi..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowContactModal(false)}
                  className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 text-sm font-medium transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium shadow-xs transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim via Email</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
