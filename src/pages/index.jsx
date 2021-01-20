import React from "react";
import Layout from "../components/Layout";
import { useIntl } from "gatsby-plugin-intl";
import { Link, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import GatsbyBgImage from "gatsby-background-image";

export default ({ data }) => {
  const intl = useIntl();
  const images = {};

  // add the images to an object to use in gatsby image
  data.allFile.edges.forEach((edge) => (images[edge.node.name] = edge.node));

  return (
    <Layout>
      <section className="px-4 lg:px-0 lg:w-4/5 lg:mx-auto">
        <h1 className="text-5xl font-bold">
          {intl.formatMessage({ id: "index.section1.header" })}
        </h1>
        <div className="flex">
          <div className="py-8 flex flex-col items-start justify-center">
            <p
              className="mb-5"
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "index.section1.pg" }),
              }}
            />
            <Link className="bg-green text-white px-4 py-2 mb-2" to="">
              {intl.formatMessage({ id: "index.section1.coughLink" })}
            </Link>
            <Link className="bg-green text-white px-4 py-2" to="">
              {intl.formatMessage({ id: "index.section1.donateLink" })}
            </Link>
          </div>
          <div className="w-3/5 lg:flex items-end hidden w-full">
            <GatsbyImage
              className="w-full"
              fluid={images["hero-illustration"].childImageSharp.fluid}
            />
          </div>
        </div>
      </section>
      <section>
        <GatsbyBgImage
          style={{ backgroundColor: "#393939" }}
          fluid={images["globe"].childImageSharp.fluid}
        >
          <div className="py-20 w-4/5 flex flex-col mx-auto items-start">
            <h2 className="text-white bold text-3xl mb-4">
              {intl.formatMessage({ id: "index.section2.header" })}
            </h2>
            <p
              className="text-white mb-4"
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "index.section2.pg1" }),
              }}
            />
            <p className="text-white">
              {intl.formatMessage({ id: "index.section2.pg2" })}
            </p>
            <button className="bg-white mx-auto my-8 px-8 py-4 font-bold">
              LEARN MORE
            </button>
          </div>
        </GatsbyBgImage>
      </section>
      <section style={{ padding: "5vw" }}>
        <div className="flex w-full justify-center mx-auto">
          <div
            style={{ width: "30vw", height: "30vw" }}
            className="rounded-full inline-block bg-gray-100 justify-center items-center"
          >
            <div
              style={{
                width: "70%",
                height: "70%",
              }}
              className="flex flex-col items-center"
            >
              <h2
                style={{
                  marginBottom: "-1.5rem",
                  bottom: "25%",
                  right: "34%",
                  position: "relative",
                }}
              >
                {intl.formatMessage({
                  id: "index.section3.howItWorks",
                  defaultMessage: "HOW IT WORKS",
                })}
              </h2>
              <div className="flex w-full justify-between items-center mb-4">
                <div className="text-white text-lg rounded-full bg-green-600 w-8 h-8 flex justify-center items-center">
                  1
                </div>
                <h2 className="text-md text-sm font-bold">
                  {intl.formatMessage({
                    id: "header1",
                    defaultMessage: "Record your cough",
                  })}
                </h2>
              </div>
              <GatsbyImage
                className="w-3/5"
                fluid={images["cough-to-app"].childImageSharp.fluid}
              />
            </div>
          </div>
          <div
            style={{ width: "30vw", height: "30vw", margin: "0 -5vw" }}
            className="rounded-full inline-block bg-gray-100"
          ></div>
          <div
            style={{ width: "30vw", height: "30vw" }}
            className="rounded-full inline-block bg-gray-100"
          ></div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "images/home" } }) {
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
