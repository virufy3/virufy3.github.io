import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import CoughSection from "../components/index/ContributeCough";
import GlobalImpact from "../components/index/GlobalImpact";
import RecordCough from "../components/index/RecordCough";
import OurStory from "../components/index/OurStory";
import IndexQuestion from "../components/index/IndexQuestion";
import SEO from "../components/SEO";
import useScript from "../../scripts/cookie-script";

export default function Home({ data }) {
  const images = {};

  // add the images to an object to use in gatsby image
  data.allFile.edges.forEach((edge) => (images[edge.node.name] = edge.node));

  useScript(
    "https://consent.cookiebot.com/fb5fec28-28e3-45e9-baa6-51f9f62f936b/cd.js"
  );

  return (
    <Layout>
      <SEO title="Home | Virufy" />
      <CoughSection images={images} />
      <GlobalImpact images={images} />
      <RecordCough images={images} />
      <IndexQuestion />
      <OurStory images={images} />
    </Layout>
  );
}

// prettier-ignore
export const query = graphql`
  {
    allFile(
      filter: { relativePath: { regex: "/images\\/home\\/.*\\.((png)|(jpg)|(jpeg))/" } }
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
