import React from "react";
import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import Layout from "../components/Layout";
import { ButtonLink } from "../components/Button";
import InfoCard from "../components/ourApproach/InfoCard";
import { learnMoreCards } from "../data/our-approach/learn-more-cards";

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "our-approach-images" } }) {
      edges {
        node {
          relativePath
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

export default ({ data }) => {
  const images = data.allFile.edges;
  const intl = useIntl();

  return (
    <Layout className="bg-green-100 text-black">
      <div className="max-w-screen-xl mx-auto">
        <div className="px-6 py-16 mx-auto md:flex">
          <h1 className="flex-1 text-3xl pb-10 md:pb-0 font-heading font-bold pr-6">
            {intl.formatMessage({ id: `ourApproach.topFold.diagnoseDisease` })}
          </h1>
          <div className="flex-1">
            <h2 className="text-xl font-heading font-bold pb-3">
              {intl.formatMessage({
                id: `ourApproach.topFold.acrossNations`,
              })}
            </h2>
            <p className="pb-3">
              {intl.formatMessage({
                id: `ourApproach.topFold.usingTechnology`,
              })}
            </p>
            <p className="pb-8">
              {intl.formatMessage({
                id: `ourApproach.topFold.algorithmInfo`,
              })}
            </p>
            <ButtonLink to="/paper">
              {intl.formatMessage({
                id: `ourApproach.topFold.readWhitePaper`,
              })}
            </ButtonLink>
          </div>
        </div>

        <div className="px-6 py-12 mx-auto">
          <h4 className="uppercase font-heading font-bold mb-6 lg:mb-4">
            Want to learn more?
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learnMoreCards.map((info, index) => {
              const cardIcon = images.find(({ node: { relativePath } }) => {
                return relativePath === `${info.imageName}.png`;
              }).node.childImageSharp.fluid;

              return (
                <InfoCard
                  key={info.id}
                  sourceNum={index + 1}
                  title={intl.formatMessage({
                    id: `ourApproach.research.${info.id}.title`,
                  })}
                  description={intl.formatMessage({
                    id: `ourApproach.research.${info.id}.description`,
                  })}
                  icon={cardIcon}
                  source={intl.formatMessage({
                    id: `ourApproach.research.${info.id}.source`,
                  })}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};
