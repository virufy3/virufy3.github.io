import React, { useEffect } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import GatsbyImage from "gatsby-image";
import supporter_links from "../../data/supporters_links";
import "../../styles/hideScrollbar.css";

export default ({ images }) => {
  const intl = useIntl();
  return (
    <>
      <section className="bg-blue-100 pt-20 pb-9">
        <div className="md:flex justify-between w-4/5 mx-auto">
          <div className="md:w-1/2">
            <h2 className="mb-2 font-bold text-3xl">
              {intl.formatMessage({ id: "index.section4.header" })}
            </h2>
            <p className="mb-8">
              {intl.formatMessage({ id: "index.section4.pg1" })}
            </p>
            <p className="mb-12">
              {intl.formatMessage({ id: "index.section4.pg2" })}
            </p>
            <Link
              className="no-underline text-black bg-white px-8 py-4 mb-16 inline-block font-bold"
              target="_blank"
              to={"/team"}
            >
              {intl.formatMessage({ id: "index.section4.knowUsLink" })}
            </Link>
            <GatsbyImage
              className="md:hidden mb-8 md:w-3/5 items-center justify-between justify-center"
              fluid={images["Virufighters"].childImageSharp.fluid}
              imgStyle={{ objectFit: "contain" }}
            />
          </div>
          <GatsbyImage
            className="hidden md:block w-2/5"
            fluid={images["Virufighters"].childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
          />
        </div>
      </section>
      <section className="md:flex flex-col justify-between py-14 w-4/5 mx-auto">
        <h2 className="text-black font-bold mb-4 mb-6">
          {intl.formatMessage({ id: "index.section4.header2" })}
        </h2>
        <div className="overflow-x-scroll">
          <div className="sponsor_container inline-flex flex-row animate-bannermove lg:w-full lg:justify-between lg:animate-none -webkit-scrollbar:invisible">
            <div className="flex items-center min-w-110 h-auto object-contain lg:min-w-1/10 lg:mx-3 mx-10 my-3 ml-0 lg:ml-0">
              <a href={supporter_links.oneYoungWorld} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="flex items-center min-w-110 h-auto object-contain lg:min-w-1/10"
                  fluid={
                    images["oneyoungworld-logo-gray"].childImageSharp.fluid
                  }
                />
              </a>
            </div>
            <div className="flex items-center min-w-110 h-auto object-contain lg:min-w-1/10 lg:mx-3 mx-10 my-3">
              <a href={supporter_links.stanford} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="flex items-center min-w-110 h-auto object-contain lg:min-w-1/10"
                  fluid={images["h4r-logo-gray"].childImageSharp.fluid}
                />
              </a>
            </div>
            <div className="flex items-center min-w-110 h-auto object-contain lg:min-w-1/10 lg:mx-3 mx-10 my-3">
              <a href={supporter_links.xoor} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="flex items-center min-w-110 h-auto object-contain lg:min-w-1/10"
                  fluid={images["xoor-logo-gray"].childImageSharp.fluid}
                />
              </a>
            </div>
            <div className="flex items-center min-w-110 h-auto object-contain lg:min-w-1/10 lg:mx-3 mx-10 my-3">
              {" "}
              <a href={supporter_links.responseLab} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="flex items-center min-w-110 h-auto object-contain lg:min-w-1/10"
                  fluid={images["responselab-logo-gray"].childImageSharp.fluid}
                />
              </a>
            </div>
            <div className="flex items-center min-w-110 h-auto object-contain lg:min-w-1/10 lg:mx-3 mx-10 my-3 mr-0 lg:mr-0">
              <a href={supporter_links.sherlock} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="flex items-center min-w-110 h-auto object-contain lg:min-w-1/10"
                  fluid={images["sherlock-logo-gray"].childImageSharp.fluid}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="overflow-x-scroll mt-2">
          <div className="sponsor_container inline-flex flex-row animate-bannermove lg:w-full lg:justify-between lg:animate-none">
            <div className="flex items-center min-w-110 h-auto object-contain lg:min-w-1/10 lg:mx-3 mx-10 my-3 ml-0 lg:ml-0">
              <a href={supporter_links.nuvu} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="flex items-center min-w-110 h-auto object-contain lg:min-w-1/10"
                  fluid={images["nuvu-logo-gray"].childImageSharp.fluid}
                />
              </a>
            </div>
            <div className="flex items-center min-w-110 h-auto object-contain lg:min-w-1/10 lg:mx-3 mx-10 my-3">
              <a href={supporter_links.fenwick} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="flex items-center min-w-110 h-auto object-contain lg:min-w-1/10"
                  fluid={images["fenwick-logo-gray"].childImageSharp.fluid}
                />
              </a>
            </div>
            <div className="flex items-center min-w-110 h-auto object-contain lg:min-w-1/10 lg:mx-3 mx-10 my-3">
              {" "}
              <a href={supporter_links.curative} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="flex items-center min-w-110 h-auto object-contain lg:min-w-1/10"
                  fluid={images["curative-logo-gray"].childImageSharp.fluid}
                />
              </a>
            </div>
            <div className="flex items-center min-w-110 h-auto object-contain lg:min-w-1/10 lg:mx-3 mx-10 my-3">
              {" "}
              <a href={supporter_links.cccadv} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="flex items-center min-w-110 h-auto object-contain lg:min-w-1/10"
                  fluid={images["cccadv-logo-gray"].childImageSharp.fluid}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
