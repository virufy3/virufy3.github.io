import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import ValuesSection from "../components/our-org/ValuesSection";
import TeamSection from "../components/our-org/TeamSection";
import Supporters from "../components/our-org/Supporters";

export default function OurOrg({ data }) {
  const images = {};

  // add the images to an object to use in gatsby image
  data.allFile.edges.forEach((edge) => (images[edge.node.name] = edge.node));

  return (
    <Layout>
      <SEO title="Our org | Virufy" />
      <ValuesSection images={images} />
      <TeamSection images={images} />
      <Supporters />
    </Layout>
  );
}

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "images/team" } }) {
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
