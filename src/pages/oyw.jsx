import React, { useState } from "react";
import Layout from "../components/Layout";
import { useIntl } from "gatsby-plugin-intl";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import GatsbyImage from "gatsby-image";
import Ambassador from "../components/OYW/Ambassador";
import Testimonials from "../components/OYW/Testimonials";
import VideoOYW from "../components/OYW/VideoOYW";

export const query = graphql`
  {
    allFile(
      filter: { relativePath: { regex: "/images\\/oyw\\/.*\\.((png)|(jpg)|(jpeg))/" } }
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
const VideoList = (props) => {
  const { id, source } = props;
  return (
    <div className=" wrapper md:flex">
      <iframe
        key={id}
        width="560"
        height="315"
        title="YouTube video player"
        class="video"
        src={source}
        data-cookieconsent="marketing"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
const videos = [
  {
    id: "video1",
    source: "https://www.youtube.com/embed/hvJgwPNYnZo",
  },
];
export default function OYW({ data }) {
  const intl = useIntl();
  const images = {};

  // add the images to an object to use in gatsby image
  data.allFile.edges.forEach((edge) => (images[edge.node.name] = edge.node));

  return (
    <Layout>
      <SEO title="OYW | Virufy" />
      <div className="wrapper items-center justify-between md:py-4">
        <div className="pb-10 md:pb-0 pr-6">
          <h1 classNmae="font-bold text-5xl w-full">
            <div className="flex-initial">
              <GatsbyImage
                className="my-6 md:w-32 md:my-0 sm:w-6/12 md:flex "
                fluid={images["virufy&oyw"].childImageSharp.fluid}
              />
            </div>
          </h1>
        </div>
      </div>
      <div className="bg-blue-100 mx-0">
        <p
          className="text-xl text-center mt-8 mx-8 justify-items-center"
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "OYW.headers.topbanner" }),
          }}
        ></p>
      </div>
      {/* youtube */}
      <div className="wrapper md:flex items-center justify-between md:py-4">
        <div className="w-full">
          {videos.map((item) => {
            return <VideoList id={item.id} source={item.source} />;
          })}
        </div>
        <div className="w-full">
          <p
            className="text-xl mt-8"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "OYW.headers.help" }),
            }}
          ></p>
        </div>
      </div>

      {/* Virufy & OYW */}
      <div className="wrapper md:flex items-center justify-between md:py-4">
        <div className="pb-10 md:pb-0 pr-6">
          <h1 classNmae="font-bold text-5xl w-full">
            <p
              className="text-xl mt-8"
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "OYW.headers.header" }),
              }}
            ></p>
          </h1>
          <p
            className="text-xl mt-8"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "OYW.headers.sub-header" }),
            }}
          ></p>
        </div>
        <div className="w-full">
          <GatsbyImage
            className="my-6 md:my-0 items-end w-7-12 lg:flex hidden"
            fluid={images["oyw"].childImageSharp.fluid}
          />
        </div>
      </div>
      <div className="my-10 wrapper">
        <h2 className="mb-4 text-2xl font-bold text-gray-200">
          {intl.formatMessage({ id: "OYW.section1.header" })}
        </h2>
        <ul class="list-disc mx-8">
          <li
            className="text-lg mt-8"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "OYW.section1.sub-header" }),
            }}
          ></li>
          <li
            className="text-lg mt-8"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "OYW.section1.sub-header2" }),
            }}
          ></li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold text-gray-200">
          {intl.formatMessage({ id: "OYW.sectionHi.header" })}
        </h2>
        <ul class="list-disc mx-8">
          <li
            className="text-lg mt-4"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "OYW.sectionHi.amil" }),
            }}
          ></li>
          <li
            className="text-lg mt-8"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "OYW.sectionHi.yulie" }),
            }}
          ></li>
          <li
            className="text-lg mt-8"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "OYW.sectionHi.ayomide" }),
            }}
          ></li>
          <li
            className="text-lg mt-8"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "OYW.sectionHi.shreya" }),
            }}
          ></li>
        </ul>
        <div
          className="text-xl mt-8"
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "OYW.sectionHi.join" }),
          }}
        ></div>

        <section className="flex flex-wrap mb-20 wrapper md:justify-between">
          {/* global impact */}
          <div className="flex flex-wrap justify-center my-5 md:w-1/2 md:my-10 md:flex-no-wrap md:justify-start">
            <div className="w-full">
              <GatsbyImage
                className="my-6 md:my-0 md:w-2/12 mb-4 lg:flex hidden"
                fluid={images["globe"].childImageSharp.fluid}
              />
            </div>

            <div className="w-full md:w-10/12">
              <h2 className="mb-2 text-2xl font-bold text-gray-200">
                {intl.formatMessage({ id: "OYW.section2.header" })}
              </h2>
              <p>{intl.formatMessage({ id: "OYW.section2.sub-header" })}</p>
            </div>
          </div>

          {/* youth */}
          <div className="flex flex-wrap justify-center my-5 md:w-1/2 md:my-10 md:flex-no-wrap md:justify-start">
            <div className="w-full">
              <GatsbyImage
                className="my-6 md:my-0 md:pr-2 md:w-3/12 mb-4 lg:flex hidden"
                fluid={images["youth"].childImageSharp.fluid}
              />
            </div>
            <div className="w-full md:w-10/12">
              <h2 className="mb-2 text-2xl font-bold text-gray-200">
                {intl.formatMessage({ id: "OYW.section2.youth" })}
              </h2>
              <p>{intl.formatMessage({ id: "OYW.section2.youth-des" })}</p>
            </div>
          </div>
          {/* ambassador impact */}
          <div className="flex flex-wrap justify-center my-5 md:w-1/2 md:my-10 md:flex-no-wrap md:justify-start">
            <div className="w-full">
              <GatsbyImage
                className="my-6 md:my-0 md:w-3/12 mb-4 lg:flex hidden"
                fluid={images["ambassador"].childImageSharp.fluid}
              />
            </div>
            <div className="w-full md:w-10/12">
              <h2 className="mb-2 text-2xl font-bold text-gray-200">
                {intl.formatMessage({ id: "OYW.section2.ambassador" })}
              </h2>
              <p>{intl.formatMessage({ id: "OYW.section2.ambassador-des" })}</p>
            </div>
          </div>
          {/* diverse */}
          <div className="flex flex-wrap justify-center my-5 md:w-1/2 md:my-10 md:flex-no-wrap md:justify-start">
            <div className="w-full">
              <GatsbyImage
                className="my-6 md:my-0 md:pr-2 md:w-3/12 mb-4 lg:flex hidden"
                fluid={images["diverse"].childImageSharp.fluid}
              />
            </div>
            <div className="w-full md:w-10/12">
              <h2 className="mb-2 text-2xl font-bold text-gray-200">
                {intl.formatMessage({ id: "OYW.section2.diverse" })}
              </h2>
              <p>{intl.formatMessage({ id: "OYW.section2.diverse-des" })}</p>
            </div>
          </div>
        </section>
      </div>

      {/* Ambassador section */}
      <Ambassador images={images} />
      <Testimonials images={images} />
      <VideoOYW />
    </Layout>
  );
}
