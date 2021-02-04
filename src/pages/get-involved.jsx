import React, { useCallback } from "react";
import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import Layout from "../components/Layout";
import { ButtonLink } from "../components/Button";
import links from "../data/get-involved/links";

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "get-involved-images" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(quality: 90, maxWidth: 2000) {
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
  const breakpoints = useBreakpoint();

  const findImage = useCallback(
    (imageName, ext = ".png") => {
      return images.find(({ node: { relativePath } }) => {
        return relativePath === `${imageName}${ext}`;
      }).node.childImageSharp.fluid;
    },
    [images]
  );

  return (
    <Layout className="bg-green-200">
      {/* Top fold */}
      <div className="container md:flex py-12">
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl tracking-tight pb-9">
            {intl.formatMessage({
              id: "getInvolved.topFold.joinTitle",
            })}
          </h1>
          <p className="whitespace-pre-line md:text-xl">
            {intl.formatMessage({
              id: "getInvolved.topFold.details",
            })}
          </p>
        </div>
        <div className="w-1/3 flex-shrink-0 hidden lg:block ml-16">
          <Img
            className="mx-auto"
            fluid={findImage("join-the-fight")}
            imgStyle={{ objectFit: "contain" }}
            aria-hidden
          />
        </div>
      </div>

      {/* Donate */}
      <BackgroundImage
        className="bg-white py-0 lg:py-16"
        fluid={findImage("background-artwork")}
        style={{
          backgroundSize: "cover",
          backgroundPosition: breakpoints.md
            ? "top 2.8rem right"
            : "bottom -10rem left",
        }}
      >
        <div className="container lg:flex">
          <div className="lg:w-1/3 flex-shrink-0 lg:mr-12">
            <h1 className="tracking-tight pb-9">
              {intl.formatMessage({
                id: "getInvolved.donate.title",
              })}
            </h1>
          </div>
          <div className="flex-1">
            <p className="whitespace-pre-line md:text-xl">
              {intl.formatMessage({
                id: "getInvolved.donate.details",
              })}
            </p>
            <ButtonLink className="mt-24 lg:mb-16" to={links.donateLink}>
              {intl.formatMessage({
                id: "getInvolved.donate.donateButton",
              })}
            </ButtonLink>
          </div>
        </div>
      </BackgroundImage>

      {/* Share Cough */}
      <div className="bg-green-100">
        <div className="container-short py-12 md:py-20 text-center">
          <h1>
            {intl.formatMessage({
              id: "getInvolved.shareCough.title",
            })}
          </h1>
          <p className="whitespace-pre-line mt-4">
            {intl.formatMessage({
              id: "getInvolved.shareCough.details",
            })}
          </p>
        </div>
        <BackgroundImage
          className="md:mx-8 py-12 md:py-16 text-center"
          fluid={findImage("cough-artwork")}
          style={{
            backgroundSize: breakpoints.sm ? "cover" : "contain",
          }}
        >
          <ButtonLink to={links.getTheAppLink} style="secondary">
            {intl.formatMessage({
              id: "getInvolved.shareCough.getTheApp",
            })}
          </ButtonLink>
        </BackgroundImage>
        <div className="container-short py-8">
          <sub>
            {intl.formatMessage({
              id: "getInvolved.shareCough.irbDisclaimer",
            }) + " "}
            <a href={links.learnMoreDisclaimerLink} className="text-black">
              {intl.formatMessage({
                id: "getInvolved.shareCough.learnMoreLink",
              })}
            </a>
          </sub>
        </div>
      </div>
    </Layout>
  );
};
