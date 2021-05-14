import React, { useEffect } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import GatsbyImage from "gatsby-image";
import supporter_links from "../../data/supporters_links";
import "../../styles/ourStory.css";

export default ({ images }) => {
  useEffect(() => {
    console.log(images);
  }, []);

  const intl = useIntl();
  return (
    <>
      <section
        className="md:flex justify-between bg-green-100"
        style={{ padding: "5rem 10vw 2.25rem 10vw" }}
      >
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
      </section>
      <section
        className="md:flex flex-col justify-between"
        style={{ padding: "2.25rem 10vw 1rem 10vw" }}
      >
        <h2
          className="text-black font-bold mb-4"
          style={{ marginBottom: "2.4rem" }}
        >
          {intl.formatMessage({ id: "index.section4.header2" })}
        </h2>
        <div className="partners">
          <div className="partner_item">
            <a href={supporter_links.nuvu} target="_blank">
              <GatsbyImage
                imgStyle={{
                  objectFit: "contain",
                  outerHeight: "auto",
                  outerWidth: "auto",
                }}
                className="partner_item"
                fluid={images["nuvu-logo-gray"].childImageSharp.fluid}
              />
            </a>
          </div>
          <div className="partner_item">
            <a href={supporter_links.oneYoungWorld} target="_blank">
              <GatsbyImage
                imgStyle={{ objectFit: "contain" }}
                className="partner_item"
                fluid={images["oneyoungworld-logo-gray"].childImageSharp.fluid}
              />
            </a>
          </div>
          <div className="partner_item">
            <a href={supporter_links.xoor} target="_blank">
              <GatsbyImage
                imgStyle={{ objectFit: "contain" }}
                className="partner_item"
                fluid={images["xoor-logo-gray"].childImageSharp.fluid}
              />
            </a>
          </div>
          <div className="partner_item">
            <a href={supporter_links.siena} target="_blank">
              <GatsbyImage
                imgStyle={{ objectFit: "contain" }}
                className="partner_item"
                fluid={images["siena-logo-gray"].childImageSharp.fluid}
              />
            </a>
          </div>
          <div className="partner_item">
            <a href={supporter_links.fenwick} target="_blank">
              <GatsbyImage
                imgStyle={{ objectFit: "contain" }}
                className="partner_item"
                fluid={images["fenwick-logo-gray"].childImageSharp.fluid}
              />
            </a>
          </div>
        </div>
        <div className="partners">
          <div className="partner_item">
            <a href={supporter_links.stanford} target="_blank">
              <GatsbyImage
                imgStyle={{ objectFit: "contain" }}
                className="partner_item"
                fluid={images["h4r-logo-gray"].childImageSharp.fluid}
              />
            </a>
          </div>
          <div className="partner_item">
            <a href={supporter_links.sherlock} target="_blank">
              <GatsbyImage
                imgStyle={{ objectFit: "contain" }}
                className="partner_item"
                fluid={images["sherlock-logo-gray"].childImageSharp.fluid}
              />
            </a>
          </div>
          <div className="partner_item">
            {" "}
            <a href={supporter_links.responseLab} target="_blank">
              <GatsbyImage
                imgStyle={{ objectFit: "contain" }}
                className="partner_item"
                fluid={images["responselab-logo-gray"].childImageSharp.fluid}
              />
            </a>
          </div>
          <div className="partner_item">
            {" "}
            <a href={supporter_links.curative} target="_blank">
              <GatsbyImage
                imgStyle={{ objectFit: "contain" }}
                className="partner_item"
                fluid={images["curative-logo-gray"].childImageSharp.fluid}
              />
            </a>
          </div>
          <div className="partner_item">
            {" "}
            <a href={supporter_links.cccadv} target="_blank">
              <GatsbyImage
                imgStyle={{ objectFit: "contain" }}
                className="partner_item"
                fluid={images["cccadv-logo-gray"].childImageSharp.fluid}
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
