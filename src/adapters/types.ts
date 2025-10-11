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
}
