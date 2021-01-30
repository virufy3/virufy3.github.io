import React from "react";
import { graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import GatsbyBgImage from "gatsby-background-image";
import { useIntl } from "gatsby-plugin-intl";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { leadership, advisors } from "../data/team-members";
import ValuesSection from "../components/team/ValuesSection";
import TeamSection from "../components/team/TeamSection";
import Supporters from "../components/team/Supporters";

export default ({ data }) => {
  const images = {};

  // add the images to an object to use in gatsby image
  data.allFile.edges.forEach((edge) => (images[edge.node.name] = edge.node));

  return (
    <Layout>
      <SEO title="Team | Virufy" />
      <ValuesSection images={images} />
      <TeamSection images={images} />
      <Supporters />
    </Layout>
  );
};

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
