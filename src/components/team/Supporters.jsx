import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import { useIntl } from "gatsby-plugin-intl";

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
    <section className="py-8 px-12 bg-gray-200">
      <h1 className="font-bold text-2xl text-black">
        {intl.formatMessage({ id: "team.supportersSection.header" })}
      </h1>
      <div className="flex flex-wrap justify-between pt-8 pb-12">
        <GatsbyImage className="w-20" fluid={images["covid-19-RIL-logo"]} />
        <GatsbyImage
          imgStyle={{ objectFit: "fill" }}
          className="w-20 h-8"
          fluid={images["OYW_blue_rgb"]}
        />
        <GatsbyImage className="w-20" fluid={images["xoor"]} />
        <GatsbyImage className="w-20" fluid={images["jig-jp-logo"]} />
        <GatsbyImage
          className="w-20"
          fluid={images["stanford-h4r-logo transparent"]}
        />
        <GatsbyImage className="w-20" fluid={images["siena-company-logo"]} />
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
