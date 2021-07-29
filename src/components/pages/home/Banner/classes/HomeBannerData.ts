export interface HomeBannerData {
  name: string;
  description: string;
  coverImage: string;
  thumbnail: {
    name: string;
    duration: string;
    date: string;
  };
  href: string;
  location: string;
  layerClasses?: string;
}
