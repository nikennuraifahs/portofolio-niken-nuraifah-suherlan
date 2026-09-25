import React from 'react';
import { ArrowDown, Linkedin, Mail, Camera } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useProfilePhoto } from '../utils/imageStore';

export default function Hero() {
  const { photoUrl } = useProfilePhoto();

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle decorative background glow */}
      <div className="absolute top-1/4 right-5 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-slate-100/70 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Greeting & Intro */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs sm:text-sm font-medium">
              <span>Selamat datang di portofolio saya, Niken Nuraifah Suherlan</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Fresh Graduate Sistem Informasi <br className="hidden sm:inline" />
              <span className="text-teal-700">yang Tertarik pada Data & Teknologi</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {personalInfo.heroDescription}
            </p>

            {/* Call to Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#project"
                id="btn-lihat-project"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm sm:text-base shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
              >
                <span>Lihat Project</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center gap-4 text-slate-500">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Hubungi:
              </span>

              <a
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Niken Nuraifah Suherlan"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-teal-50 text-slate-700 hover:text-teal-700 border border-slate-200/60 hover:border-teal-200 text-xs font-medium transition-colors"
              >
                <Linkedin className="w-4 h-4 text-teal-600" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Niken Nuraifah Suherlan"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-teal-50 text-slate-700 hover:text-teal-700 border border-slate-200/60 hover:border-teal-200 text-xs font-medium transition-colors"
              >
                <Mail className="w-4 h-4 text-teal-600" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Foto Profesional Niken */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm w-full">

              {/* Subtle background decoration frame */}
              <div className="absolute -inset-3 bg-linear-to-tr from-teal-100/70 to-slate-100 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-300 -z-10" />
              <div className="absolute inset-0 rounded-2xl bg-white border border-slate-200/80 shadow-sm -z-10" />

              {/* Main Photo Card Container */}
              <div
                id="profile-photo-container"
                className="relative bg-white rounded-2xl p-3 border border-slate-100 shadow-md overflow-hidden"
              >
                <div className="relative aspect-4/5 w-full rounded-xl overflow-hidden bg-gradient-to-b from-slate-50 to-teal-50/40 flex flex-col items-center justify-center border border-slate-200/70">

                  {photoUrl ? (
                    <img
                      src={photoUrl}
                      alt="Foto Profesional Niken Nuraifah Suherlan"
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div className="p-6 text-center flex flex-col items-center justify-center space-y-4">
                      <div className="w-24 h-24 rounded-full bg-teal-50 border-4 border-white shadow-xs flex items-center justify-center text-teal-600">
                        <Camera className="w-10 h-10 opacity-80" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-slate-800">Foto Profesional Niken</p>
                        <p className="text-xs text-slate-500 max-w-[220px]">
                          Tambahkan foto ke folder public/images/profile.jpg
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom mini card badge */}
                <div className="mt-3 px-2 py-1.5 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-medium text-slate-700">Fresh Graduate UNIKOM</span>
                  </div>
                  <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">
                    S1 Sistem Informasi
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
