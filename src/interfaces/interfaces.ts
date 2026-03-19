export interface Training {
  title: string;
  credential: string;
  date: string;
  institution: string;
}
export interface CardProps {
  src: string;
  alt: string;
}

export interface CardProjectProps {
  src: string;
  title: string;
  href: string;
}

export interface CardProps {
  src: string;
  alt: string;
  opacity?: number;
  background?: string;
}
