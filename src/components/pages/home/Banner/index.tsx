import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import NewLineP from '@comp/utils/NewLineP';
import { HOME_BANNER_DATA } from './data';

interface IBannerProps {}

const Banner: React.FunctionComponent<IBannerProps> = () => {
  const [current, setCurrent] = React.useState(0);

  const currentData = HOME_BANNER_DATA[current];

  const data = useStaticQuery(graphql`
    {
      thumbnails: allFile(
        filter: {
          sourceInstanceName: { eq: "assets" }
          relativeDirectory: { eq: "home/banner/thumbnails" }
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(
                height: 150
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
      covers: allFile(
        filter: {
          sourceInstanceName: { eq: "assets" }
          relativeDirectory: { eq: "home/banner/covers" }
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(
                width: 1920
                quality: 90
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  `);

  const coverImage = getImage(
    data.covers.edges.find((e) => e.node.name === currentData.coverImage).node,
  );

  const thumbnailImage = getImage(
    data.thumbnails.edges.find(
      (e) => e.node.name === currentData.thumbnail.name,
    ).node,
  );

  return (
    <div className="relative h-screen bg-black">
      <GatsbyImage
        className="h-screen "
        image={coverImage}
        alt="banner cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30" />
      <div className="absolute top-0 left-0 flex flex-col-reverse w-full h-full mx-auto text-white ">
        <div className="container flex items-end mx-auto ">
          <div className="mb-24">
            <p className="mb-2 text-2xl tracking-widest text-white text-opacity-50">
              Theatro
            </p>
            <h1 className="mb-6 font-serif text-6xl font-medium ">
              {currentData.name}
            </h1>
            <div className="mb-12 ml-36 ">
              <div className="mb-8 text-2xl font-semibold text-white text-opacity-50">
                <NewLineP data={currentData.description} />
              </div>
              {/* TODO later */}
              <button
                type="button"
                className="px-8 py-3 text-xl bg-transparent border border-white"
              >
                Plus d&apos;information
              </button>
            </div>
            <div className="flex items-center text-lg ">
              {HOME_BANNER_DATA.map((e, ind) => (
                <button
                  type="button"
                  onClick={() => setCurrent(ind)}
                  className={clsx(
                    `text-white   border-white border-b-2  py-2 mr-8 `,
                    ind === current
                      ? `text-opacity-80 border-opacity-75 `
                      : `text-opacity-50 border-opacity-50`,
                  )}
                >
                  {`${String(ind + 1).padStart(2, String(0))}   ${e.name}`}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-grow" />
          <div className="mb-32 ">
            <h2 className="mb-6 font-serif text-5xl text-white ">
              {currentData.thumbnail.date}
            </h2>
            <p className="mb-8 text-2xl text-white text-opacity-50">
              {currentData.location}
            </p>
            <div className="relative ">
              <GatsbyImage
                className="rounded-lg "
                image={thumbnailImage}
                alt="jti"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 " />
              <p className="absolute top-3 left-3 ">
                {currentData.thumbnail.duration}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
