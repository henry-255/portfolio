export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: Technology[];
  status: 'completed' | 'in-progress' | 'planned';
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  features: string[];
}

export interface Technology {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'devops' | 'tools';
  icon: React.ReactNode;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}