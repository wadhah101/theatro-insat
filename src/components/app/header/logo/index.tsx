import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as React from 'react';

interface ILogoProps {}

const Logo: React.FunctionComponent<ILogoProps> = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          sourceInstanceName: { eq: "assets" }
          relativePath: { eq: "logo.png" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                width: 100
                height: 100
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  `);

  const image = getImage(data.allFile.edges[0].node);

  return (
    <div>
      <GatsbyImage
        className="w-20 h-20 rounded-full shadow "
        image={image}
        alt="logo"
      />
    </div>
  );
};

export default Logo;
