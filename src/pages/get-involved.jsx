import React, { useCallback } from "react";
import { graphql, Link } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import Layout from "../components/Layout";

import { ButtonLink } from "../components/Button";
import links from "../data/get-involved/links";

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "images/get-involved-page" } }) {
      edges {
        node {
          relativePath
          name
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

function NextStep({ id, href, findImage, className }) {
  const intl = useIntl();

  return (
    <div className={`flex-1 ${className}`}>
      <div className="flex mb-9">
        <Img className="w-20 mr-7" fluid={findImage(`${id}-person-1`)} />
        <Img className="w-20" fluid={findImage(`${id}-person-2`)} />
      </div>
      <h2 className="mb-4">
        {intl.formatMessage({
          id: `getInvolved.nextSteps.${id}.title`,
        })}
      </h2>
      <p className="max-w-md mb-6">
        {intl.formatMessage({
          id: `getInvolved.nextSteps.${id}.details`,
        })}
      </p>

      <p className="mt-4">
        {intl.formatMessage({
          id: `getInvolved.nextSteps.${id}.question`,
        })}
      </p>
      {id === "join" ? (
        <Link to="/available-roles" className="text-white">
          {intl.formatMessage({
            id: `getInvolved.nextSteps.${id}.linkText`,
          })}
        </Link>
      ) : (
        <a href={href} target="_blank" className="text-white">
          {intl.formatMessage({
            id: `getInvolved.nextSteps.${id}.linkText`,
          })}
        </a>
      )}
    </div>
  );
}

export default function GetInvolved({ data }) {
  const images = data.allFile.edges;
  const intl = useIntl();
  const breakpoints = useBreakpoint();

  const findImage = useCallback(
    (imageName) => {
      const result = images.find(({ node: { name } }) => {
        return name === imageName;
      });

      if (!result) throw new Error(`Could not find image named: ${imageName}`);

      return result.node.childImageSharp.fluid;
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
          <div className="flex flex-col items-start justify-center ">
            <p className="whitespace-pre-line md:text-xl">
              {intl.formatMessage({
                id: "getInvolved.donate.details",
              })}
            </p>
            <Link
              className="no-underline bg-green text-white px-4 py-2 mt-24"
              target="_blank"
              to={links.donateLink}
            >
              {intl.formatMessage({
                id: "getInvolved.donate.donateButton",
              })}
            </Link>
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
          <p className="whitespace-pre-line mt-4 md:text-xl">
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
          <ButtonLink to="/app" style="secondary">
            {intl.formatMessage({
              id: "getInvolved.shareCough.getTheApp",
            })}
          </ButtonLink>
        </BackgroundImage>
      </div>

      {/* Join Team */}
      <div className="bg-black text-white">
        <div className="container lg:flex">
          <NextStep
            id="contribute"
            href={links.getInTouchLink}
            findImage={findImage}
          />
          <NextStep
            className="mt-20 lg:mt-0"
            id="join"
            href={links.viewAvailableRolesLink}
            findImage={findImage}
          />
        </div>
      </div>
    </Layout>
  );
}
