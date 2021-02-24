import React, { useCallback } from "react";
import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import { ButtonLink } from "../components/Button";
import InfoCard from "../components/ourApproach/InfoCard";
import Principle from "../components/ourApproach/Principle";
import QuestionCollapse from "../components/ourApproach/QuestionCollapse";
import learnMoreCards from "../data/our-approach/learn-more-cards";
import collaborationLinks from "../data/our-approach/collaboration-links";
import faqCategories from "../data/our-approach/faq";
import SEO from "../components/SEO";

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "images/our-approach-page" } }) {
      edges {
        node {
          relativePath
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

export default function OurApproach({ data }) {
  const images = data.allFile.edges;
  const intl = useIntl();

  const findImage = useCallback(
    (imageName) => {
      return images.find(({ node: { name } }) => {
        return name === imageName;
      }).node.childImageSharp.fluid;
    },
    [images]
  );

  return (
    <Layout className="bg-green-100">
      <SEO title="Our Approach | Virufy" />
      {/* Top fold */}
      <div className="container md:flex">
        <h1 className="flex-1 pb-10 md:pb-0 pr-6">
          {intl.formatMessage({ id: `ourApproach.topFold.diagnoseDisease` })}
        </h1>
        <div className="flex-1">
          <h2 className="text-xl pb-3">
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
      <div className="container mx-auto">
        <h4 className="uppercase font-heading font-bold mb-6 lg:mb-4">
          {intl.formatMessage({
            id: "ourApproach.topFold.wantToLearnMore",
          })}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
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

      {/* Open data  */}
      <div id="open-data" className="bg-white">
        <div className="container text-center">
          <h1 className="pb-2">
            {intl.formatMessage({
              id: "ourApproach.collaboration.title",
            })}
          </h1>

          <p className="text-lg mb-6 ">
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

          <div className="wrapper my-8 mx-auto md:flex ">
            <Principle
              className="wrapper"
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
              className="wrapper"
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
              className="wrapper"
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

      {/* FAQ */}
      <div id="faq" className="bg-green-200">
        <div className="container flex">
          <div className="flex-grow">
            <h1 className="mb-8">
              {intl.formatMessage({ id: "ourApproach.faq.title" })}
            </h1>
            <div className="divide-y-1/2 divide-divider-100 border-t-1/2 border-b-1/2 border-divider-100">
              {faqCategories.map(({ categoryId, questionIds }) => (
                <QuestionCollapse
                  categoryId={categoryId}
                  questionIds={questionIds}
                  key={categoryId}
                />
              ))}
            </div>
          </div>
          <div className="w-1/4 flex-shrink-0 hidden md:block md:mx-16 lg:mx-24">
            <Img
              className="mx-auto"
              fluid={findImage("faq-illustration")}
              imgStyle={{ objectFit: "contain" }}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
