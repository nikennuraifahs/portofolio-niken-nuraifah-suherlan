import { GraduationCap, BarChart3, Award, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlightCards = [
    {
      id: 'about-card-degree',
      icon: GraduationCap,
      title: 'S1 Sistem Informasi',
      subtitle: 'Universitas Komputer Indonesia',
      accentColor: 'text-teal-700 bg-teal-50 border-teal-100',
    },
    {
      id: 'about-card-gpa',
      icon: BarChart3,
      title: 'IPK 3.80 / 4.00',
      subtitle: 'Skala 4.00',
      accentColor: 'text-teal-700 bg-teal-50 border-teal-100',
    },
    {
      id: 'about-card-cads',
      icon: Award,
      title: 'Certified Associate Data Scientist',
      subtitle: 'Sertifikasi BNSP',
      accentColor: 'text-teal-700 bg-teal-50 border-teal-100',
    },
    {
      id: 'about-card-focus',
      icon: Code2,
      title: 'Fokus & Minat',
      subtitle: 'Data Science & Sistem Informasi',
      accentColor: 'text-teal-700 bg-teal-50 border-teal-100',
    },
  ];

  return (
    <section id="tentang-saya" className="py-20 bg-slate-50/70 border-y border-slate-200/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
            <span>Profil Singkat</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Tentang Saya
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {personalInfo.aboutText}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlightCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                id={card.id}
                className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-2xs hover:border-teal-200 hover:shadow-xs transition-all duration-200 group"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3.5 border ${card.accentColor} transition-transform group-hover:scale-105`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {card.subtitle}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
