import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import GatsbyImage from "gatsby-image";
import { Link } from "gatsby";

export default ({ images }) => {
  const intl = useIntl();

  return (
    <section
      className="md:flex justify-between bg-green-100"
      style={{ padding: "5rem 10vw" }}
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
        <Link className="text-black bg-white px-8 py-4 mb-16 inline-block font-bold">
          {intl.formatMessage({ id: "index.section4.knowUsLink" })}
        </Link>
        <GatsbyImage
          className="md:hidden mb-8 w-3/5"
          fluid={images["Virufighters"].childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
        />
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
        className="hidden md:block w-2/5"
        fluid={images["Virufighters"].childImageSharp.fluid}
        imgStyle={{ objectFit: "contain" }}
      />
    </section>
  );
};
