export class HomeBannerData {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public name: string,
    public description: string,
    public date: string,
    public coverImage: string,
    public thumbnail: string,
    public href: string,
    public layerClasses?: string,
  ) {}
}
