import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import { useIntl, FormattedMessage } from "gatsby-plugin-intl";
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
    <section
      id="our-supporters"
      className="flex flex-col items-center py-10 px-14"
    >
      <h1 className="font-bold text-2xl text-black text-center mb-12 mt-2">
        {intl.formatMessage({ id: "team.supportersSection.header" })}
      </h1>
      <p className="w-10/12 text-sm text-black text-center">
        {intl.formatMessage({ id: "team.supportersSection.description" })}
      </p>
      <div className="w-full flex items-center justify-center flex-row flex-wrap pt-8">
        <div className="flex-grow min-w-250 w-1/5 px-16 py-8">
          <a href={supporter_links.oneYoungWorld} target="_blank">
            <GatsbyImage
              imgStyle={{ objectFit: "contain" }}
              className="h-full max-h-24"
              fluid={images["oneyoungworld-logo-color"]}
            />
          </a>
        </div>
        <div className="flex-grow min-w-250 w-1/5 px-16 py-8">
          <a href={supporter_links.stanford} target="_blank">
            <GatsbyImage
              imgStyle={{ objectFit: "contain" }}
              className="h-full max-h-24"
              fluid={images["h4r-logo-color"]}
            />
          </a>
        </div>
        <div className="flex-grow min-w-250 w-1/5 px-16 py-8">
          <a href={supporter_links.xoor} target="_blank">
            <GatsbyImage
              imgStyle={{ objectFit: "contain" }}
              className="h-full max-h-24"
              fluid={images["xoor-logo-color"]}
            />
          </a>
        </div>
        <div className="flex-grow min-w-250 w-1/5 px-16 py-8">
          <a href={supporter_links.responseLab} target="_blank">
            <GatsbyImage
              imgStyle={{ objectFit: "contain" }}
              className="h-full max-h-24"
              fluid={images["responselab-logo-color"]}
            />
          </a>
        </div>
        <div className="flex-grow min-w-250 w-1/5 px-16 py-8">
          <a href={supporter_links.sherlock} target="_blank">
            <GatsbyImage
              imgStyle={{ objectFit: "contain" }}
              className="h-full max-h-24"
              fluid={images["sherlock-logo-color"]}
            />
          </a>
        </div>
        <div className="flex-grow min-w-250 w-1/5 px-16 py-8">
          <a href={supporter_links.nuvu} target="_blank">
            <GatsbyImage
              imgStyle={{ objectFit: "contain" }}
              className="h-full max-h-24"
              fluid={images["nuvu-logo-color"]}
            />
          </a>
        </div>
        <div className="flex-grow min-w-250 w-1/5 px-16 py-8">
          <a href={supporter_links.fenwick} target="_blank">
            <GatsbyImage
              imgStyle={{ objectFit: "contain" }}
              className="h-full max-h-24"
              fluid={images["fenwick-logo-color"]}
            />
          </a>
        </div>
        <div className="flex-grow min-w-250 w-1/5 px-16 py-8">
          <a href={supporter_links.curative} target="_blank">
            <GatsbyImage
              imgStyle={{ objectFit: "contain" }}
              className="h-full max-h-24"
              fluid={images["curative-logo-color"]}
            />
          </a>
        </div>
        <div className="flex-grow min-w-250 w-1/5 px-16 py-8">
          <a href={supporter_links.cccadv} target="_blank">
            <GatsbyImage
              imgStyle={{ objectFit: "contain" }}
              className="h-full max-h-24"
              fluid={images["cccadv-logo-color"]}
            />
          </a>
        </div>
      </div>
      <p
        className="text-center mt-4"
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage({
            id: "team.supportersSection.supporterText",
          }),
        }}
      />
    </section>
  );
};
