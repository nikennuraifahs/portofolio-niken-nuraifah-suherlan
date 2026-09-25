import { useState } from 'react';
import { featuredProject, otherProjects } from '../data/portfolioData';
import { Project } from '../types';
import ProjectScreenshotPlaceholder from './ProjectScreenshotPlaceholder';
import ProjectDetailModal from './ProjectDetailModal';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="project" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
            <span>Portfolio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Project Pilihan
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Kumpulan project akademik, riset, dan analisis sistem yang berfokus pada Machine Learning, Time Series, NLP, dan perancangan solusi berbasis data.
          </p>
        </div>

        {/* Featured Project (Large Card) */}
        <div className="mb-12">
          <div
            id="featured-project-card"
            className="bg-slate-50/70 rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-xs hover:border-teal-200 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column of Featured Card: Info */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100/70 text-teal-800 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{featuredProject.badge}</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                  {featuredProject.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Tech Pills */}
                <div className="pt-2">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Teknologi
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-white text-slate-800 text-xs font-medium border border-slate-200/80 shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(featuredProject)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm shadow-xs hover:shadow-sm transition-all"
                  >
                    <span>Lihat Detail Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column of Featured Card: Large Screenshot Area */}
              <div className="lg:col-span-6">
                <ProjectScreenshotPlaceholder
                  projectId={featuredProject.id}
                  projectTitle={featuredProject.title}
                  aspectClass="aspect-16/10"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Other Projects (2 Columns Grid) */}
        <div>
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Project Lainnya
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Riset machine learning kelompok, analisis sentimen teks, dan perancangan sistem informasi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-2xs hover:shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Screenshot area */}
                  <div className="mb-4">
                    <ProjectScreenshotPlaceholder
                      projectId={project.id}
                      projectTitle={project.title}
                      aspectClass="aspect-16/9"
                    />
                  </div>

                  {/* Badge */}
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-2.5 border border-slate-200/60">
                    {project.badge}
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                    {project.title}
                  </h4>

                  {/* Angka hasil (terlihat tanpa membuka rincian) */}
                  {project.metrics && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.metrics.map((m) => (
                        <span
                          key={m.label}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-100"
                        >
                          <span className="font-medium text-emerald-700/80">{m.label}</span>
                          <span>{m.value}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Algorithm specific listing for Project Stunting if available */}
                  {project.algorithms && (
                    <div className="mb-3">
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                        Algoritma Komparasi:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.algorithms.map((algo) => (
                          <span
                            key={algo}
                            className="px-2 py-0.5 rounded bg-teal-50 text-teal-700 text-[11px] font-medium border border-teal-100"
                          >
                            {algo}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech stack tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer detail trigger */}
                <div className="pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1 group py-1"
                  >
                    <span>Lihat Rincian</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
