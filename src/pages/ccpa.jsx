import React from "react";
import { graphql } from "gatsby";
import { IntlContextConsumer } from "gatsby-plugin-intl";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import bgWave from "../images/logos/background-wave.png";

export default ({ data }) => {
  return (
    <Layout>
      <SEO title={"CCPA | Virufy"} />
      <IntlContextConsumer>
        {({ language: currentLocale }) =>
          data[currentLocale] ? (
            <div>
              <img className="absolute" src={bgWave} alt="waves" />
              <div
                className="p-8"
                dangerouslySetInnerHTML={{
                  __html: data[currentLocale].html,
                }}
              />
            </div>
          ) : (
            <></>
          )
        }
      </IntlContextConsumer>
    </Layout>
  );
};

//prettier-ignore
export const query = graphql`
  {
    en: markdownRemark(frontmatter: { page: { eq: "ccpa" }, lang: { eq: "en" } }) {
      html
    }
    es: markdownRemark(frontmatter: { page: { eq: "ccpa" }, lang: { eq: "es" } }) {
      html
    }
  }
`;
// export const query = graphql`
//   {
//     allMarkdownRemark(filter: { frontmatter: { page: { eq: "ccpa" } } }) {
//       edges {
//         node {
//           html
//           frontmatter {
//             lang
//           }
//         }
//       }
//     }
//   }
// `;
