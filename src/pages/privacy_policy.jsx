import React from "react";
import Layout from "../components/Layout";
import { useIntl } from "gatsby-plugin-intl";
import GatsbyBgImage from "gatsby-background-image";
import SEO from "../components/SEO";

export default ({ data }) => {
  const intl = useIntl();
  const images = {};

  data.allFile.edges.forEach((edge) => (images[edge.node.name] = edge.node));

  return (
    <Layout>
      <SEO title="Privacy Policy | Virufy" />
      <GatsbyBgImage fluid={images["footer-bg"].childImageSharp.fluid}>
        <div className="wrapper items-center justify-between md:py-4">
          <h1 classNmae="font-bold text-4xl">
            {intl.formatMessage({ id: "privacy_policy.headers.header" })}
          </h1>

          <p>
            {intl.formatMessage({ id: "privacy_policy.headers.sub-header" })}
          </p>

          <div className="my-16">
            <h3 class="text-2xl font-bold mt-6">
              {intl.formatMessage({ id: "privacy_policy.countries.argentina" })}
            </h3>
            <p>
              <a target="_blank" href="/policies/ar/privacy_policy.pdf">
                {intl.formatMessage({
                  id: "privacy_policy.countries.arg_policy",
                })}
              </a>
            </p>

            <h3 class="text-2xl font-bold mt-6">
              {intl.formatMessage({ id: "privacy_policy.countries.bolivia" })}
            </h3>
            <p>
              <a target="_blank" href="/policies/bo/privacy_policy.pdf">
                {intl.formatMessage({
                  id: "privacy_policy.countries.bol_policy",
                })}
              </a>
            </p>

            <h3 class="text-2xl font-bold mt-6">
              {intl.formatMessage({ id: "privacy_policy.countries.brazil" })}
            </h3>
            <p>
              <a target="_blank" href="/policies/br/privacy_policy.pdf">
                {intl.formatMessage({
                  id: "privacy_policy.countries.brazil_policy",
                })}
              </a>
            </p>

            <h3 class="text-2xl font-bold mt-6">
              {intl.formatMessage({ id: "privacy_policy.countries.columbia" })}
            </h3>
            <p>
              <a target="_blank" href="/policies/br/privacy_policy.pdf">
                {intl.formatMessage({
                  id: "privacy_policy.countries.col_policy",
                })}
              </a>
            </p>

            <h3 class="text-2xl font-bold mt-6">
              {intl.formatMessage({ id: "privacy_policy.countries.mexico" })}
            </h3>
            <p>
              <a target="_blank" href="/policies/mx/privacy_policy.pdf">
                {intl.formatMessage({
                  id: "privacy_policy.countries.mex_policy",
                })}
              </a>
            </p>

            <h3 class="text-2xl font-bold mt-6">
              {intl.formatMessage({ id: "privacy_policy.countries.peru" })}
            </h3>
            <p>
              <a target="_blank" href="/policies/pe/privacy_policy.pdf">
                {intl.formatMessage({
                  id: "privacy_policy.countries.peru_policy",
                })}
              </a>
            </p>

            <h3 class="text-2xl font-bold mt-6">
              {intl.formatMessage({ id: "privacy_policy.countries.us" })}
            </h3>
            <p>
              <a target="_blank" href="/policies/us/privacy_policy.pdf">
                {intl.formatMessage({
                  id: "privacy_policy.countries.us_policy",
                })}
              </a>
            </p>

            <h3 class="text-2xl font-bold mt-6">
              {intl.formatMessage({ id: "privacy_policy.countries.eu" })}
            </h3>
            <p>
              <a target="_blank" href="/policies/eu/privacy_policy.pdf">
                {intl.formatMessage({
                  id: "privacy_policy.countries.eu_policy",
                })}
              </a>
            </p>
          </div>
        </div>
      </GatsbyBgImage>
    </Layout>
  );
};

export const query = graphql`
  {
    allFile(
      filter: { relativePath: { regex: "/images\\/data\\/.*\\.((png)|(jpg)|(jpeg))/" } }
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
