import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import { useIntl } from "gatsby-plugin-intl";
import supporter_links from "../../data/supporters_links";
export default () => {
  const intl = useIntl();
  const data = useStaticQuery(graphql`
      {
        allFile(
          filter: { relativePath: { regex: "/images\\/logos\\/.*\\.((png)|(jpg)|(jpeg))/" } }
        ) {
          edges {
            node {
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `);
  const images = {};

  data.allFile.edges.forEach(
    (edge) => (images[edge.node.name] = edge.node.childImageSharp.fluid)
  );

  return (
    <section id="our-supporters" className="py-8 px-12 bg-gray-200">
      <h1 className="font-bold text-2xl text-black">
        {intl.formatMessage({ id: "team.supportersSection.header" })}
      </h1>
      <div className="flex items-center flex-row flex-wrap md:justify-between pt-8 pb-12">
        <a href={supporter_links.nuvu} target="_blank">
          <GatsbyImage className="w-16 lg:w-16" fluid={images["nuvu"]} />
        </a>
        <a href={supporter_links.responseLab} target="_blank">
          <GatsbyImage
            className="w-16 lg:w-16"
            fluid={images["covid-19-RIL-logo"]}
          />
        </a>
        <a href={supporter_links.oneYoungWorld} target="_blank">
          <GatsbyImage
            imgStyle={{ objectFit: "fill" }}
            className="w-20 lg:w-32 mt-4 my-3 mx-1"
            fluid={images["OYW_blue_rgb"]}
          />
        </a>
        <a href={supporter_links.xoor} target="_blank">
          <GatsbyImage className="w-16 lg:w-20" fluid={images["xoor"]} />
        </a>
        <a href={supporter_links.sherlock} target="_blank">
          <GatsbyImage
            className="w-20 lg:w-36 mt-2 my-3 mx-1"
            fluid={images["sherlock"]}
          />
        </a>
        <a href={supporter_links.stanford} target="_blank">
          <GatsbyImage
            className="w-16 lg:w-16 my-3 mx-1"
            fluid={images["stanford-h4r-logo transparent"]}
          />
        </a>
        <a href={supporter_links.siena} target="_blank">
          <GatsbyImage
            className="w-16 lg:w-16 my-3 mx-1"
            fluid={images["siena-company-logo"]}
          />
        </a>
        <a href={supporter_links.cccadv} target="_blank">
          <GatsbyImage
            className="w-32 lg:w-44 mt-2 my-3 mx-1"
            fluid={images["cccaa"]}
          />
        </a>
        <a href={supporter_links.curative} target="_blank">
          <GatsbyImage
            className="w-32 lg:w-40 my-3 mx-1"
            fluid={images["curative"]}
          />
        </a>
        <a href={supporter_links.fenwick} target="_blank">
          <GatsbyImage
            className="w-32 lg:w-40 my-3 mx-1"
            fluid={images["fenwick"]}
          />
        </a>
      </div>
      <p
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage({
            id: "team.supportersSection.supporterText",
          }),
        }}
      />
    </section>
  );
};
