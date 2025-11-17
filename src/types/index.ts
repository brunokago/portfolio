export interface NavbarProps {
  links: { name: string; href: string }[];
}

export interface HeroProps {
  title: string;
  subtitle: string;
}

export interface AboutProps {
  bio: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

export interface ProjectsProps {
  projects: Project[];
}

export interface ContactProps {
  email: string;
  phone?: string;
}

export interface FooterProps {
  year: number;
  author: string;
}