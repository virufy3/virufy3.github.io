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
    <Layout className="bg-blue-100">
      <SEO title="Our Approach | Virufy" />
      {/* Top fold */}
      <div className="container md:flex">
        <div className="flex-1 pb-10 md:pb-0 pr-6 text-5xl font-bold">
          {intl.formatMessage({ id: `ourApproach.topFold.diagnoseDisease` })}
        </div>
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

      {/* FAQ */}
      <div id="faq" className="bg-blue-200">
        <div className="container flex items-center">
          <div className="flex-grow">
            <h1 className="mb-9">
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
          <div className="w-1/4 flex-shrink-0 hidden md:block md:mx-16 lg:mx-24 pt-32 self-start">
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
