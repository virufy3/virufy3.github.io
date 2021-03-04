import React from "react";
import { graphql } from "gatsby";
import { IntlContextConsumer } from "gatsby-plugin-intl";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import bgWave from "../images/logos/background-wave.png";
import Accordion from "../components/Accordion";

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Virufy | Cookie Policy" />
      <IntlContextConsumer>
        {({ language: currentLocale }) => {
          if (data[currentLocale] === undefined) return <></>;

          //prettier-ignore
          const markdown = data[currentLocale].edges.reduce(
            (accu, {node: { html, frontmatter: { name, title } }}) => {
              return { ...accu, [name]: {html, name, title} };
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
              <div dangerouslySetInnerHTML={{ __html: markdown["top"].html }} />
              <Accordion
                items={[
                  {
                    title: markdown["essential cookies"].title,
                    contents: (
                      <div
                        className="text-left"
                        dangerouslySetInnerHTML={{
                          __html: markdown["essential cookies"].html,
                        }}
                      />
                    ),
                  },
                  {
                    title: markdown["preference cookies"].title,
                    contents: (
                      <div
                        className="text-left"
                        dangerouslySetInnerHTML={{
                          __html: markdown["preference cookies"].html,
                        }}
                      />
                    ),
                  },
                  {
                    title: markdown["performance cookies"].title,
                    contents: (
                      <div
                        className="text-left"
                        dangerouslySetInnerHTML={{
                          __html: markdown["performance cookies"].html,
                        }}
                      />
                    ),
                  },
                  {
                    title: markdown["marketing cookies"].title,
                    contents: (
                      <div
                        className="text-left"
                        dangerouslySetInnerHTML={{
                          __html: markdown["marketing cookies"].html,
                        }}
                      />
                    ),
                  },
                ]}
              />
            </div>
          );
        }}
      </IntlContextConsumer>
    </Layout>
  );
};

//prettier-ignore
export const query = graphql`
{
  en: allMarkdownRemark(filter: {frontmatter: {page: {eq: "cookie-policy"} lang: {eq:"en"}}}) {
    edges {
      node {
        html
        frontmatter {
          name
          title
        }        
      }
    }
  }
}`;
