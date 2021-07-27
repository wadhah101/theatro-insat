import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

interface IBannerProps {}

const Banner: React.FunctionComponent<IBannerProps> = () => (
  <div className="relative h-screen bg-black">
    <StaticImage
      src="../../../../../assets/home/banner.jpg"
      alt="Banner Image"
      placeholder="dominantColor"
      layout="fullWidth"
      // TODO test load times
      quality={90}
      className="h-screen"
    />
    <div className="absolute top-0 left-0 w-full h-full text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem!
      Libero, fuga? Delectus, molestias vero? Autem at earum neque ipsam.
      Cupiditate omnis quasi placeat temporibus a obcaecati asperiores iure
      voluptatum.
    </div>
  </div>
);

export default Banner;
