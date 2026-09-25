import { Image as ImageIcon } from 'lucide-react';
import { useProjectImage } from '../utils/imageStore';

interface ProjectScreenshotProps {
  projectId: string;
  projectTitle: string;
  aspectClass?: string;
}

export default function ProjectScreenshotPlaceholder({
  projectId,
  projectTitle,
  aspectClass = 'aspect-16/9',
}: ProjectScreenshotProps) {
  const { imageUrl } = useProjectImage(projectId);

  return (
    <div
      className={`relative w-full ${aspectClass} rounded-xl overflow-hidden border border-slate-200/80 bg-white`}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`Screenshot ${projectTitle}`}
          className="w-full h-full object-contain object-center"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-2.5">
            <ImageIcon className="w-5 h-5" />
          </div>
          <span className="text-sm font-semibold text-slate-700">
            Screenshot Project
          </span>
          <span className="text-xs text-slate-400 mt-1">
            Tambahkan gambar di folder public/images/projects/
          </span>
        </div>
      )}
    </div>
  );
}
