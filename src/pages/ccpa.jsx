import React from "react";
import { graphql } from "gatsby";
import { IntlContextConsumer } from "gatsby-plugin-intl";
import useGetMarkdownByLanguage from "../hooks/useGetMarkdownByLanguage";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import bgWave from "../images/logos/background-wave.png";

export default ({ data }) => {
  const langMarkdown = useGetMarkdownByLanguage(data);

  return (
    <Layout>
      <SEO title={"CCPA | Virufy"} />
      <IntlContextConsumer>
        {({ language: currentLocale }) => (
          <div>
            <img className="absolute" src={bgWave} alt="waves" />
            <div
              className="p-8"
              dangerouslySetInnerHTML={{
                __html: langMarkdown[currentLocale].html,
              }}
            />
          </div>
        )}
      </IntlContextConsumer>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { page: { eq: "ccpa" } } }) {
      edges {
        node {
          html
          frontmatter {
            lang
          }
        }
      }
    }
  }
`;
