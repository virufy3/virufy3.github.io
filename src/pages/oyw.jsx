import React, { useState } from "react";
import Layout from "../components/Layout";
import { useIntl } from "gatsby-plugin-intl";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import GatsbyImage from "gatsby-image";
import Ambassador from "../components/OYW/Ambassador";
import Testimonials from "../components/OYW/Testimonials";
import VideoOYW from "../components/OYW/VideoOYW";
import SupportersCarousel from "../components/oursupporters/SupportersCarousel";

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
    <div className="w-full h-full">
      <iframe
        style={{ width: "100%", height: "100%" }}
        key={id}
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
      <div className="items-center justify-between">
        <div className="pr-6">
          <h1 classNmae="font-bold text-5xl w-full"></h1>
        </div>
      </div>
      <div className="bg-blue-100">
        <p
          className="text-center mx-8 justify-items-center text-2xl py-4"
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "OYW.headers.topbanner" }),
          }}
        ></p>
      </div>
      {/* youtube */}
      <div className="px-8 h-auto grid gap-x-4 lg:grid-cols-2 mt-14">
        <div className="w-full h-96 lg:h-full">
          {videos.map((item) => {
            return <VideoList id={item.id} source={item.source} />;
          })}
        </div>
        <div className="flex flex-col justify-center w-full pl-8">
          <p className="font-bold text-3xl mt-8">
            {intl.formatMessage({ id: "OYW.headers.header" })}
          </p>
          <p
            className="mt-6"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "OYW.headers.sub-header" }),
            }}
          ></p>
          <p
            className="font-bold mt-20 mb-4"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "OYW.headers.help" }),
            }}
          ></p>
        </div>
      </div>

      <div className="flex items-start justify-start flex-col xl:flex-row xl:items-end xl:justify-between mt-14 sm:pt-4 px-8 py-14">
        <div>
          <h2 className="mb-8 font-bold text-3xl">
            {intl.formatMessage({ id: "OYW.section1.header" })}
          </h2>
          <ul class="list-disc mx-8">
            <li
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "OYW.section1.sub-header" }),
              }}
            ></li>
            <li
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "OYW.section1.sub-header2" }),
              }}
            ></li>
          </ul>

          <h2 className="font-bold text-2xl mb-4 mt-6">
            {intl.formatMessage({ id: "OYW.sectionHi.header" })}
          </h2>
          <ul class="list-disc mx-8 mb-6">
            <li
              className="text-lg"
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "OYW.sectionHi.amil" }),
              }}
            ></li>
            <li
              className="text-lg"
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "OYW.sectionHi.yulie" }),
              }}
            ></li>
            <li
              className="text-lg"
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "OYW.sectionHi.ayomide" }),
              }}
            ></li>
            <li
              className="text-lg"
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "OYW.sectionHi.shreya" }),
              }}
            ></li>
          </ul>
          <div
            className="text-lg mt-8"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "OYW.sectionHi.join" }),
            }}
          ></div>
        </div>
        <GatsbyImage
          className="w-96 mt-10 xl:mt-0"
          imgStyle={{ objectFit: "contain" }}
          fluid={images["oyw"].childImageSharp.fluid}
        />
      </div>
      <section className="bg-black px-8 py-16 mb-20 h-auto grid gap-10 md:grid-cols-2 xl:grid-cols-4">
        {/* global impact */}
        <div className="bg-white flex flex-col items-center py-10 px-10 md:px-2 rounded-2xl">
          <GatsbyImage
            className="mx-auto my-6 w-16 h-28"
            imgStyle={{ objectFit: "contain" }}
            fluid={images["globe"].childImageSharp.fluid}
          />
          <div className="w-full md:w-10/12">
            <h2 className="mt-2 mb-4 text-center text-xl font-bold text-gray-200">
              {intl.formatMessage({ id: "OYW.section2.header" })}
            </h2>
            <p className="text-center text-sm">
              {intl.formatMessage({ id: "OYW.section2.sub-header" })}
            </p>
          </div>
        </div>

        {/* youth */}
        <div className="bg-white flex flex-col items-center py-10 px-10 md:px-2 rounded-2xl">
          <GatsbyImage
            className="mx-auto w-24 h-40"
            imgStyle={{ objectFit: "contain" }}
            fluid={images["youth"].childImageSharp.fluid}
          />
          <div className="w-full md:w-10/12">
            <h2 className="mt-2 mb-4 text-center text-xl font-bold text-gray-200">
              {intl.formatMessage({ id: "OYW.section2.youth" })}
            </h2>
            <p className="text-center text-sm">
              {intl.formatMessage({ id: "OYW.section2.youth-des" })}
            </p>
          </div>
        </div>
        {/* ambassador impact */}
        <div className="bg-white flex flex-col items-center py-10 px-10 md:px-2 rounded-2xl">
          <GatsbyImage
            className="mx-auto w-24 h-40"
            imgStyle={{ objectFit: "contain" }}
            fluid={images["ambassador"].childImageSharp.fluid}
          />
          <div className="w-full md:w-10/12">
            <h2 className="mt-2 mb-4 text-center text-xl font-bold text-gray-200">
              {intl.formatMessage({ id: "OYW.section2.ambassador" })}
            </h2>
            <p className="text-center text-sm">
              {intl.formatMessage({ id: "OYW.section2.ambassador-des" })}
            </p>
          </div>
        </div>
        {/* diverse */}
        <div className="bg-white flex flex-col items-center py-10 px-10 md:px-2 rounded-2xl">
          <GatsbyImage
            className="mx-auto w-24 h-40"
            imgStyle={{ objectFit: "contain" }}
            fluid={images["diverse"].childImageSharp.fluid}
          />
          <div className="w-full md:w-10/12">
            <h2 className="mt-2 mb-4 text-center text-xl font-bold text-gray-200">
              {intl.formatMessage({ id: "OYW.section2.diverse" })}
            </h2>
            <p className="text-center text-sm">
              {intl.formatMessage({ id: "OYW.section2.diverse-des" })}
            </p>
          </div>
        </div>
      </section>

      <div className="px-8 grid gap-0 xl:grid-cols-2 mb-12">
        <div className="border-b pb-12 xl:border-r xl:pt-4 xl:border-b-0 xl:pr-12 border-gray-400 border-solid">
          <Testimonials images={images} />
        </div>
        <div className="pt-10 pl-0 xl:pl-12 xl:pt-4">
          <SupportersCarousel />
        </div>
      </div>

      {/* Ambassador section */}
      <Ambassador images={images} />
    </Layout>
  );
}
