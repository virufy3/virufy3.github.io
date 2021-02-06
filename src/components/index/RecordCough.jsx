import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import GatsbyImage from "gatsby-image";
import { Link } from "gatsby";

export default ({ images }) => {
  const intl = useIntl();

  return (
    <section style={{ padding: "5vw" }}>
      <div className="flex w-full justify-center mx-auto">
        <div
          style={{ width: "30vw", height: "30vw" }}
          className="rounded-full inline-block bg-gray-100"
        >
          <h2 className="font-normal text-base">
            {intl.formatMessage({ id: "index.section3.howItWorks" })}
          </h2>
        </div>
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
          width: "70vw",
          left: "10vw",
          height: "22vw",
          marginBottom: "-22vw",
          display: "flex",
          flexWrap: "wrap",
          alignContent: "space-around",
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
              <div className="bg-black mr-4 text-white test-white text-lg rounded-full font-header w-8 h-8 flex justify-center items-center flex-shrink-0">
                1
              </div>
              <h2 className="text-black text-md text-sm font-bold">
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
              <div className="bg-black mr-4 text-white test-white text-lg rounded-full font-header w-8 h-8 flex justify-center items-center flex-shrink-0">
                1
              </div>
              <h2 className="text-black text-md text-sm font-bold">
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
              <div className="bg-black mr-4 text-white test-white text-lg rounded-full font-header w-8 h-8 flex justify-center items-center flex-shrink-0">
                1
              </div>
              <h2 className="text-black text-md text-sm font-bold">
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
              className="w-4/5"
              fluid={images["cough-to-app"].childImageSharp.fluid}
              imgStyle={{ objectFit: "fill" }}
            />
          </div>
          <div
            className="flex justify-center items-center"
            style={{ width: "18vw" }}
          >
            <GatsbyImage
              className="w-4/5"
              fluid={images["cough-waves"].childImageSharp.fluid}
              imgStyle={{ objectFit: "fill" }}
            />
          </div>
          <div
            className="flex justify-center items-center"
            style={{ width: "18vw" }}
          >
            <GatsbyImage
              className="w-2/5"
              fluid={images["clipboard"].childImageSharp.fluid}
              imgStyle={{ objectFit: "fill" }}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Link
          to="/"
          className="inline-block text-sm px-4 py-2 relative bottom-4 no-underline text-white bg-green"
        >
          {intl.formatMessage({ id: "index.section3.tryItOutLink" })}
        </Link>
      </div>
    </section>
  );
};
