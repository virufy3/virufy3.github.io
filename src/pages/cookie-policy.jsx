import React from "react";
import { graphql } from "gatsby";
import { IntlContextConsumer } from "gatsby-plugin-intl";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import bgWave from "../images/logos/background-wave.png";

export default function CookiePolicy({ data }) {
  return (
    <Layout>
      <SEO title="Virufy | Cookie Policy" />
      <IntlContextConsumer>
        {({ language: currentLocale }) => {
          if (data[currentLocale] === undefined) return <></>;

          //prettier-ignore
          const { top, bot } = data[currentLocale].edges.reduce(
            (accu, {node: { html, frontmatter: { name } }}) => {
              return { ...accu, [name]: html };
            },
            {}
          );

          // console.log(top);
          return (
            <div className="px-6 py-8">
              <img
                className="absolute w-screen left-0"
                src={bgWave}
                alt="waves"
              />
              <div dangerouslySetInnerHTML={{ __html: top }} />
            </div>
          );
        }}
      </IntlContextConsumer>
    </Layout>
  );
}

//prettier-ignore
export const query = graphql`
{
  en: allMarkdownRemark(filter: {frontmatter: {page: {eq: "cookie_policy"} lang: {eq:"en"}}}) {
    edges {
      node {
        html
        frontmatter {
          name
        }        
      }
    }
  }
}`;
