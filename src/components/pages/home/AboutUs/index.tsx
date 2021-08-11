import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';

interface IAboutUsProps {}

const AboutUs: React.FunctionComponent<IAboutUsProps> = () => {
  const data = useStaticQuery(graphql`
    {
      thumbnail: allFile(
        filter: {
          sourceInstanceName: { eq: "assets" }
          relativePath: { eq: "jkarim.jpg" }
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(
                height: 800
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  `);

  const r = getImage(data.thumbnail.edges[0].node);

  return (
    <div className="relative flex flex-col md:items-start md:flex-row">
      <div className="relative">
        <h2 className="pr-4 text-4xl font-black text-blue-900 md:mb-0 whitespace-nowrap md:text-7xl">
          Qui Somme Nous ?
        </h2>
        <div className="flex w-11/12 flex-col absolute z-10 text-xl bg-white md:mt-10 md:w-[120%] shadow-xl md:px-8 md:py-14 py-8 px-4  top-full">
          <p className="font-serif font-medium md:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            veritatis, itaque ipsa deserunt eos officiis voluptate qui numquam
            aliquam repellat? Dolore est eligendi laborum officia voluptatem
            maxime ipsa quo rerum!
          </p>
          <button
            type="button"
            className="self-center py-3 font-bold text-black border-2 border-black mt-14 px-14 text-opacity-80"
          >
            Theatro
          </button>
        </div>
      </div>
      <GatsbyImage
        className="flex-grow mt-8 md:mt-0 "
        image={r}
        alt="about figure"
      />
      <div className="absolute top-0 left-0 hidden shadow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
        blanditiis, quibusdam perferendis molestias asperiores aut iusto
        tenetur? Maiores, culpa a, magni labore soluta aliquid qui ab nam
        numquam debitis consequatur.
      </div>
    </div>
  );
};

export default AboutUs;
