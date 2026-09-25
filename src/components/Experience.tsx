import { Building2, Calendar, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="pengalaman" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
            <span>Riwayat Kerja</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Pengalaman
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Pengalaman praktik profesional di instansi pemerintahan bidang komunikasi dan informatika.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-teal-100 space-y-8">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                id="experience-diskominfo"
                className="relative group"
              >
                {/* Node indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-teal-600 shadow-xs" />

                {/* Content Card */}
                <div className="bg-slate-50/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs hover:border-teal-200 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-100/80 text-teal-800 text-xs font-semibold">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-1.5 text-slate-600 text-sm font-medium mt-1 mb-4">
                    <Building2 className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>{exp.company}</span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
