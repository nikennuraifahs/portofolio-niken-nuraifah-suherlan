export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectEvidence {
  src: string;
  caption: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectImage {
  src: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  badge: string;
  technologies: string[];
  description: string;
  algorithms?: string[];
  metrics?: ProjectMetric[];
  isFeatured?: boolean;

  details: {
    overview: string;
    objectives: string[];
    role: string;
    highlights: string[];
    result?: string;
    contribution?: string;
    images?: ProjectImage[];
    evidence?: ProjectEvidence[];
    links?: ProjectLink[];
    report?: {
      url: string;
      note?: string;
    };
  };
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  bullets: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  major: string;
  gpa: string;
  graduationDate: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  fileUrl: string;
  fileUrls?: string[];
  category?: string;
}