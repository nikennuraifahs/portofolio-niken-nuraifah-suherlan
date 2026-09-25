import { portfolioAssets } from '../data/portfolioAssets';

/**
 * Gambar portfolio sengaja dibuat statis agar tersimpan di source code,
 * bukan di localStorage browser.
 */
export function useProfilePhoto() {
  return { photoUrl: portfolioAssets.profile };
}

export function useProjectImage(projectId: string) {
  const imageUrl = portfolioAssets.projects[projectId as keyof typeof portfolioAssets.projects] ?? null;
  return { imageUrl };
}
