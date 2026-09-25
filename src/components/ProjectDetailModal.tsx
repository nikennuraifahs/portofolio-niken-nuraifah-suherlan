import { X, CheckCircle, ExternalLink, FileText, Image as ImageIcon, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">
              {project.badge}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup Detail"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {project.title}
            </h3>
            {project.details?.role && (
              <p className="text-xs sm:text-sm font-medium text-teal-700 mt-1">
                {project.details.role}
              </p>
            )}
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Peran pribadi (tampil hanya jika diisi) */}
          {project.details?.contribution && (
            <div className="rounded-xl bg-teal-50/60 border border-teal-100 p-4">
              <p className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1">
                Peran saya
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                {project.details.contribution}
              </p>
            </div>
          )}

          {/* Technologies */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Teknologi & Tools
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Algorithms if any */}
          {project.algorithms && (
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Algoritma yang Dikomparasikan
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.algorithms.map((algo) => (
                  <span
                    key={algo}
                    className="px-2.5 py-1 rounded-md bg-teal-50 text-teal-700 text-xs font-medium border border-teal-100"
                  >
                    {algo}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Objectives */}
          {project.details?.objectives && (
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-teal-700" />
                <span>Tujuan & Ruang Lingkup Pengerjaan</span>
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                {project.details.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Highlights */}
          {project.details?.highlights && (
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-700" />
                <span>Poin Utama Pengerjaan</span>
              </h4>

              <ul className="space-y-2 text-sm text-slate-600">
                {project.details.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0 mt-2" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Hasil Project */}
          {project.details?.result && (
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-700" />
                <span>Hasil Project</span>
              </h4>

              <p className="text-sm text-slate-600 leading-relaxed">
                {project.details.result}
              </p>
            </div>
          )}
          {/* Dokumentasi Project */}
          {project.details?.images && project.details.images.length > 0 && (
            <div className="space-y-4 pt-2 border-t border-slate-100">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-teal-700" />
                <span>Dokumentasi Project</span>
              </h4>

              <div className="space-y-4">
                {project.details.images.map((image, i) => (
                  <figure
                    key={i}
                    className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden"
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      loading="lazy"
                      className="w-full h-auto object-contain"
                    />

                    <figcaption className="p-3 bg-white">
                      <p className="text-sm font-semibold text-slate-900">
                        {image.title}
                      </p>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {image.description}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}
          {/* Bukti Project */}
          {(project.details?.evidence?.length || project.details?.links?.length || project.details?.report) && (
            <div className="space-y-4 pt-2 border-t border-slate-100">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-teal-700" />
                <span>Bukti Project</span>
              </h4>

              {project.details.evidence?.map((ev) => (
                <figure key={ev.src} className="space-y-1.5">
                  <a
                    href={ev.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-slate-200 bg-slate-50 p-2 hover:border-teal-300 transition-colors"
                  >
                    <img
                      src={ev.src}
                      alt={ev.caption}
                      loading="lazy"
                      className="w-full h-auto object-contain"
                    />
                  </a>
                  <figcaption className="text-xs text-slate-500 leading-relaxed">{ev.caption}</figcaption>
                </figure>
              ))}

              {(project.details.links?.length || project.details.report) && (
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {project.details.links?.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm font-medium text-slate-700 hover:border-teal-300 hover:text-teal-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{l.label}</span>
                    </a>
                  ))}
                  {project.details.report && (
                    <a
                      href={project.details.report.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-medium transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Baca laporan lengkap (PDF)</span>
                    </a>
                  )}
                </div>
              )}
              {project.details.report?.note && (
                <p className="text-xs text-slate-400">{project.details.report.note}</p>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
