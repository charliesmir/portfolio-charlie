export interface Test {
  title: string;
}
export interface SanityImage {
  image: string;
  altText: string;
}
export interface SanityLink {
  title: string;
  url: string;
}

export interface SanityMain {
  name: { title: string };
  profession: { title: string };
  profile: { image: string };
  aboutCards: {
    title: string;
    type: "image" | "text";
    description?: string;
    images?: SanityImage[];
  }[];
  filters: {
    title: string;
    image: string;
  }[];
  projectCards: {
    description: string;
    image?: string;
    projectTag: {
      title: string;
      image: string;
    };
  }[];
  experienceCards: {
    title: string;
    company?: string;
    dates: string;
    description: string;
  }[];
}
