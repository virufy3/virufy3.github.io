import React, { useCallback } from "react";
import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import Layout from "../components/Layout";
import { ButtonLink } from "../components/Button";
import InfoCard from "../components/ourApproach/InfoCard";
import Principle from "../components/ourApproach/Principle";
import learnMoreCards from "../data/our-approach/learn-more-cards";
import collaborationLinks from "../data/our-approach/collaboration-links";

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

  const findImage = useCallback(
    (imageName, ext = ".png") => {
      return images.find(({ node: { relativePath } }) => {
        return relativePath === `${imageName}${ext}`;
      }).node.childImageSharp.fluid;
    },
    [images]
  );

  return (
    <Layout className="bg-green-100 text-black">
      <div className="max-w-screen-xl mx-auto">
        {/* Top fold */}
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

        {/* Research  */}
        <div className="px-6 py-12 mx-auto">
          <h4 className="uppercase font-heading font-bold mb-6 lg:mb-4">
            Want to learn more?
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learnMoreCards.map((info, index) => {
              const cardIcon = findImage(info.imageName);

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
      {/* Open data  */}
      <div className="bg-white">
        <div className="px-6 py-12 mx-auto text-center">
          <h1 className="text-3xl font-bold pb-2">
            {intl.formatMessage({
              id: "ourApproach.collaboration.title",
            })}
          </h1>

          <p className="text-lg mb-6">
            {intl.formatMessage({
              id: "ourApproach.collaboration.description",
            })}
          </p>
          <p className="text-lg">
            {intl.formatMessage({
              id: "ourApproach.collaboration.sharedData.we",
            })}
            <a href={collaborationLinks.activelyShareLink}>
              {intl.formatMessage({
                id: "ourApproach.collaboration.sharedData.activelyShareLink",
              })}
            </a>
            {intl.formatMessage({
              id: "ourApproach.collaboration.sharedData.withTheAim",
            })}
            <a href={collaborationLinks.communityOfResearchersLink}>
              {intl.formatMessage({
                id:
                  "ourApproach.collaboration.sharedData.communityOfResearchersLink",
              })}
            </a>
          </p>

          <div className="block my-20 mx-auto divide-y md:divide-y-0 md:flex md:max-w-screen-lg">
            <Principle
              title={intl.formatMessage({
                id: "ourApproach.collaboration.accuracy.title",
              })}
              icon={findImage("accuracy")}
            >
              {intl.formatMessage({
                id: "ourApproach.collaboration.accuracy.description",
              })}
            </Principle>
            <Principle
              title={intl.formatMessage({
                id: "ourApproach.collaboration.privacy.title",
              })}
              icon={findImage("privacy")}
            >
              {intl.formatMessage({
                id: "ourApproach.collaboration.privacy.description",
              })}
            </Principle>
            <Principle
              title={intl.formatMessage({
                id: "ourApproach.collaboration.collaboration.title",
              })}
              icon={findImage("collaboration")}
            >
              {intl.formatMessage({
                id: "ourApproach.collaboration.collaboration.segmentedSamples",
              })}
              <a href={collaborationLinks.activelyShareLink}>
                {intl.formatMessage({
                  id: "ourApproach.collaboration.collaboration.githubLink",
                })}
              </a>
              {intl.formatMessage({
                id: "ourApproach.collaboration.collaboration.labelled",
              })}
            </Principle>
          </div>
        </div>
      </div>
    </Layout>
  );
};
