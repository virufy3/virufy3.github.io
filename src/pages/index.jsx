import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import CoughSection from "../components/index/ContributeCough";
import GlobalImpact from "../components/index/GlobalImpact";
import RecordCough from "../components/index/RecordCough";
import OurStory from "../components/index/OurStory";
import IndexQuestion from "../components/index/IndexQuestion";

export default ({ data }) => {
  const images = {};

  // add the images to an object to use in gatsby image
  data.allFile.edges.forEach((edge) => (images[edge.node.name] = edge.node));

  return (
    <Layout>
      <CoughSection images={images} />
      <GlobalImpact images={images} />
      <RecordCough images={images} />
      <IndexQuestion images={images} />
      <OurStory images={images} />
    </Layout>
  );
};

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
