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

  console.log(data);

  return (
    <Layout>
      <section className="px-4 lg:px-0 lg:w-4/5 lg:mx-auto">
        <h1 className="text-5xl font-bold mb-4">
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
          <div className="w-2/5 lg:flex items-end hidden">
            <GatsbyImage
              className="w-full"
              fluid={images["hero-illustration"].childImageSharp.fluid}
            />
          </div>
        </div>
      </section>
      <section className="bg-black">
        <GatsbyBgImage fluid={images["globe"].childImageSharp.fluid}>
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
          />
          <div
            style={{ width: "30vw", height: "30vw", margin: "0 -5vw" }}
            className="rounded-full inline-block bg-gray-100"
          />
          <div
            style={{ width: "30vw", height: "30vw" }}
            className="rounded-full inline-block bg-gray-100"
          />
        </div>
        <div
          style={{
            position: "relative",
            bottom: "26vw",
            width: "69vw",
            left: "10vw",
            height: "22vw",
            marginBottom: "-22vw",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "space-between",
          }}
        >
          <div className="flex justify-between w-full">
            <span
              style={{
                width: "18vw",
                display: "flex",
                alignContent: "space-between",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <div className="w-full flex">
                <div className="bg-black mr-4 text-white test-white text-lg rounded-full w-8 h-8 flex justify-center items-center">
                  1
                </div>
                <h2
                  className="text-black text-md text-sm font-bold"
                  style={{ maxWidth: "calc(100% - 3rem)" }}
                >
                  {intl.formatMessage({
                    id: "index.section3.header1",
                  })}
                </h2>
              </div>
            </span>
            <span
              style={{
                width: "18vw",
                display: "flex",
                alignContent: "space-between",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <div className="w-full flex">
                <div className="bg-black mr-4 text-white test-white text-lg rounded-full w-8 h-8 flex justify-center items-center">
                  1
                </div>
                <h2
                  className="text-black text-md text-sm font-bold"
                  style={{ maxWidth: "calc(100% - 3rem)" }}
                >
                  {intl.formatMessage({
                    id: "index.section3.header2",
                  })}
                </h2>
              </div>
            </span>
            <span
              style={{
                width: "18vw",
                display: "flex",
                alignContent: "space-between",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <div className="w-full flex ">
                <div className="bg-black mr-4 text-white test-white text-lg rounded-full w-8 h-8 flex justify-center items-center">
                  1
                </div>
                <h2
                  className="text-black text-md text-sm font-bold"
                  style={{ maxWidth: "calc(100% - 3rem)" }}
                >
                  {intl.formatMessage({
                    id: "index.section3.header3",
                  })}
                </h2>
              </div>
            </span>
          </div>
          <div className="flex justify-between w-full h-1/2">
            <div
              className="flex justify-center items-center h-full"
              style={{ width: "18vw" }}
            >
              <GatsbyImage
                style={{ width: "9rem", height: "7rem" }}
                fluid={images["cough-to-app"].childImageSharp.fluid}
                imgStyle={{ objectFit: "fill" }}
              />
            </div>
            <div
              className="flex justify-center items-center"
              style={{ width: "18vw" }}
            >
              <GatsbyImage
                style={{ width: "9rem", height: "4rem" }}
                fluid={images["cough-waves"].childImageSharp.fluid}
                imgStyle={{ objectFit: "fill" }}
              />
            </div>
            <div
              className="flex justify-center items-center"
              style={{ width: "18vw" }}
            >
              <GatsbyImage
                style={{ width: "5rem", height: "7rem" }}
                fluid={images["clipboard"].childImageSharp.fluid}
                imgStyle={{ objectFit: "fill" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex justify-between bg-green-100"
        style={{ padding: "5rem 10vw" }}
      >
        <div className="w-1/2">
          <h2 className="mb-2 font-bold text-3xl">
            {intl.formatMessage({ id: "index.section4.header" })}
          </h2>
          <p className="mb-8">
            {intl.formatMessage({ id: "index.section4.pg1" })}
          </p>
          <p className="mb-12">
            {intl.formatMessage({ id: "index.section4.pg2" })}
          </p>
          <Link className="text-black bg-white px-8 py-4 mb-16 inline-block font-bold">
            {intl.formatMessage({ id: "index.section4.knowUsLink" })}
          </Link>
          <h2 className="text-black font-bold mb-4">
            {intl.formatMessage({ id: "index.section4.header2" })}
          </h2>
          <div className="flex items-center">
            <GatsbyImage
              className="w-16 mr-4"
              fluid={
                images["stanford-h4r-logo transparent"].childImageSharp.fluid
              }
            />
            <GatsbyImage
              className="w-20"
              fluid={images["OYW_blue_rgb"].childImageSharp.fluid}
            />
          </div>
        </div>
        <GatsbyImage
          className="w-2/5"
          fluid={images["Virufighters"].childImageSharp.fluid}
          imgStyle={{ objectFit: "fill" }}
        />
      </section>
    </Layout>
  );
};

// prettier-ignore
export const query = graphql`
  {
    allFile(
      filter: { relativePath: { regex: "/images\\/home\\/.*\\.((png)|(jpg)|(jpeg))/" } }
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
// export const query = graphql`
//   {
//     allFile(filter: { relativeDirectory: { eq: "images/home" } }) {
//       edges {
//         node {
//           name
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;
