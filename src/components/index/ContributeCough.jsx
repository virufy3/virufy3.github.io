import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { Link } from "gatsby";
import GatsbyImage from "gatsby-image";
import links from "../../data/get-involved/links";

export default ({ images }) => {
  const intl = useIntl();
  return (
    <section className="px-4 lg:px-0 lg:w-4/5 lg:mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        {intl.formatMessage({ id: "index.section1.header" })}
      </h1>
      <div className="flex justify-between">
        <div className="py-8 flex flex-col items-start justify-center">
          <p
            className="mb-5"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "index.section1.pg" }),
            }}
          />
          <a
            className="no-underline bg-green text-white px-4 py-2 mb-2"
            target="_blank"
            href={"/app"}
          >
            {intl.formatMessage({ id: "index.section1.coughLink" })}
          </a>
          <a
            className="no-underline bg-green text-white px-4 py-2"
            target="_blank"
            href={links.donateLink}
          >
            {intl.formatMessage({ id: "index.section1.donateLink" })}
          </a>
        </div>
        <div className="w-2/5 lg:flex items-end hidden">
          <GatsbyImage
            className="w-full"
            fluid={images["hero-illustration"].childImageSharp.fluid}
          />
        </div>
      </div>
    </section>
  );
};
