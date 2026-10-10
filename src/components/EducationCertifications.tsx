import { useMemo, useState } from 'react';
import { GraduationCap, Award, Calendar, X, ZoomIn, ExternalLink } from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

export default function EducationCertifications() {
  const [selectedCert, setSelectedCert] = useState<typeof certificationsData[number] | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('Semua');

  const filters = ['Semua', 'Sertifikasi', 'Pelatihan', 'Workshop', 'Seminar', 'Kegiatan'];

  const filteredCertificates = useMemo(() => {
    if (activeFilter === 'Semua') return certificationsData;
    return certificationsData.filter((cert) => cert.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="pendidikan" className="py-20 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
            <span>Kualifikasi Akademik & Profesional</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Pendidikan & Sertifikat
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Pendidikan formal, sertifikasi kompetensi, pelatihan, workshop, dan seminar yang relevan dengan bidang teknologi dan data.
          </p>
        </div>

        <div className="mb-12 max-w-4xl">
          <div
            id="card-pendidikan"
            className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs hover:border-teal-200 transition-all"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Pendidikan
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mt-3">
                  {educationData.institution}
                </h3>
                <p className="text-sm font-semibold text-teal-700 mt-1">
                  {educationData.degree}
                </p>
              </div>
              <div className="w-10 h-10 shrink-0 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
                <GraduationCap className="w-5 h-5" />
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-slate-500">
                <Award className="w-4 h-4 text-teal-600" />
                <span>IPK <strong className="text-slate-900">{educationData.gpa}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Calendar className="w-4 h-4 text-teal-600" />
                <span>{educationData.graduationDate}</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Dokumentasi
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Sertifikat, Pelatihan & Seminar</h3>
              <p className="text-sm text-slate-500 mt-1">{certificationsData.length} dokumen ditampilkan</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${activeFilter === filter
                    ? 'bg-teal-700 text-white border-teal-700'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-teal-300 hover:text-teal-700'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCertificates.map((cert) => (
              <button
                key={`${cert.title}-${cert.year}`}
                type="button"
                onClick={() => { setSelectedCert(cert); setSelectedImageIndex(0); }}
                className="group text-left bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:border-teal-300 hover:shadow-md transition-all overflow-hidden"
              >
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  {cert.fileUrl ? (
                    <img
                      src={cert.fileUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                      <Award className="w-10 h-10 text-teal-600 mb-3" />
                      <span className="text-sm font-bold text-slate-800">Sertifikat BNSP</span>
                      <span className="text-xs text-slate-500 mt-1">Tambahkan gambar secara manual</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/25 transition-colors flex items-center justify-center">
                    <span className="w-10 h-10 rounded-full bg-white/90 text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-700">
                      {cert.category}
                    </span>
                    <span className="text-xs text-slate-400">{cert.year}</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-900 leading-snug line-clamp-2">
                    {cert.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-1">{cert.issuer}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>

      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Detail ${selectedCert.title}`}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 p-4 border-b border-slate-100">
              <div className="min-w-0">
                <p className="font-semibold text-slate-900 truncate">{selectedCert.title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{selectedCert.issuer} • {selectedCert.year}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {(selectedCert.fileUrls?.[selectedImageIndex] || selectedCert.fileUrl) && (
                  <a
                    href={selectedCert.fileUrls?.[selectedImageIndex] || selectedCert.fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg text-slate-500 hover:text-teal-700 hover:bg-teal-50 transition-colors"
                    aria-label="Buka gambar di tab baru"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {(selectedCert.fileUrls?.length || selectedCert.fileUrl) ? (
              <div className="max-h-[calc(92vh-82px)] overflow-auto bg-slate-100 p-3 sm:p-5">
                <div className="relative">
                  <img
                    src={selectedCert.fileUrls?.[selectedImageIndex] || selectedCert.fileUrl}
                    alt={`${selectedCert.title} - halaman ${selectedImageIndex + 1}`}
                    className="w-full h-auto rounded-lg shadow-sm"
                  />

                  {selectedCert.fileUrls && selectedCert.fileUrls.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => setSelectedImageIndex((i) => (i - 1 + selectedCert.fileUrls!.length) % selectedCert.fileUrls!.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-slate-800 shadow-lg hover:bg-white transition-colors"
                        aria-label="Gambar sebelumnya"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedImageIndex((i) => (i + 1) % selectedCert.fileUrls!.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-slate-800 shadow-lg hover:bg-white transition-colors"
                        aria-label="Gambar berikutnya"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>

                {selectedCert.fileUrls && selectedCert.fileUrls.length > 1 && (
                  <div className="flex justify-center gap-2 mt-4">
                    {selectedCert.fileUrls.map((url, index) => (
                      <button
                        key={url}
                        type="button"
                        onClick={() => setSelectedImageIndex(index)}
                        className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${selectedImageIndex === index ? 'border-teal-600 ring-2 ring-teal-100' : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                        aria-label={`Lihat halaman ${index + 1}`}
                      >
                        <img src={url} alt={`Thumbnail halaman ${index + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {selectedCert.fileUrls && selectedCert.fileUrls.length > 1 && (
                  <p className="text-center text-xs text-slate-500 mt-3">
                    {selectedImageIndex + 1} / {selectedCert.fileUrls.length} • Gunakan tombol ← → untuk melihat halaman lainnya
                  </p>
                )}
              </div>
            ) : (
              <div className="p-12 sm:p-20 text-center">
                <Award className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h4 className="font-bold text-slate-900">Slot Sertifikat BNSP</h4>
                <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
                  Tambahkan dua gambar BNSP dengan nama <code className="mx-1 px-1.5 py-0.5 bg-slate-100 rounded text-xs">bnsp-cads-1.jpg</code> dan <code className="px-1.5 py-0.5 bg-slate-100 rounded text-xs">bnsp-cads-2.jpg</code>.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
