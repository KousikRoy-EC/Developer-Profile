
export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface Project {
  title: string;
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Achievement {
  description: string;
}
