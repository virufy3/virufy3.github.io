import React, { useState } from "react";
import Layout from "../components/Layout";
import { useIntl } from "gatsby-plugin-intl";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import GatsbyImage from "gatsby-image";
export const query = graphql`
  {
    allFile(
      filter: { relativePath: { regex: "/images\\/paper\\/.*\\.((png)|(jpg)|(jpeg))/" } }
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
`;

export default function Papers({ data }) {
  const images = data.allFile.edges;
  data.allFile.edges.forEach((edge) => (images[edge.node.name] = edge.node));
  const intl = useIntl();

  return (
    <Layout>
      <SEO title="Papers | Virufy" />
      <div className="wrapper lg:flex items-center justify-between md:py-4">
        <h1 classNmae="font-bold text-4xl">
          {intl.formatMessage({ id: "paper.headers.header" })}
        </h1>
      </div>
      <section className="wrapper md:flex">
        <div className="lg:w-2/5">
          <GatsbyImage
            className="mx-auto w-1\/2"
            fluid={images["ads"].childImageSharp.fluid}
          />
        </div>
        <div className="lg:w-2/3 mx-10">
          <p className="mb-8">
            {intl.formatMessage({ id: `paper.papers.section2.date` })}
          </p>
          <h3 className="mb-8 font-bold text-2xl">
            {intl.formatMessage({ id: `paper.papers.section2.title` })}
          </h3>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://ui.adsabs.harvard.edu/abs/2020arXiv201113320C/abstract"
            className="text-black"
          >
            <u>
              {intl.formatMessage({ id: `paper.papers.section2.readMoreLink` })}
            </u>
          </a>
        </div>

        <div className="lg:w-2/5">
          <GatsbyImage
            className="mx-auto w-1\/2"
            fluid={images["ads"].childImageSharp.fluid}
          />
        </div>
        <div className="lg:w-2/3 mx-10">
          <p className="mb-8">
            {intl.formatMessage({ id: `paper.papers.section3.date` })}
          </p>
          <h3 className="mb-8 font-bold text-2xl">
            {intl.formatMessage({ id: `paper.papers.section3.title` })}
          </h3>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://ui.adsabs.harvard.edu/abs/2021arXiv210301806F/abstract"
            className="text-black"
          >
            <u>
              {intl.formatMessage({ id: `paper.papers.section3.readMoreLink` })}
            </u>
          </a>
        </div>
      </section>
    </Layout>
  );
}
