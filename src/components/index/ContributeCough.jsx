import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import GatsbyImage from "gatsby-image";
import links from "../../data/get-involved/links";

export default ({ images }) => {
  const intl = useIntl();
  return (
    <section className="px-4 lg:px-0 lg:mx-auto lg:w-10/12 mt-10">
      <h1 className="md:text-5xl font-bold md:mr-20">
        {intl.formatMessage({ id: "index.section1.header" })}
      </h1>
      <div className="flex justify-between">
        <div className="flex flex-col items-start justify-center">
          <p
            className="md:text-xl"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "index.section1.pg" }),
            }}
          />
          <ul className="list-none my-12">
            <li className="inline">
              <a
                className="no-underline bg-green text-white px-4 py-2 mb-2 xs:text-xs"
                target="_blank"
                href={"/app"}
              >
                {intl.formatMessage({ id: "index.section1.coughLink" })}
              </a>
            </li>
            <li className="inline ml-8">
              <a
                className="no-underline border-solid border border-primary text-primary px-4 py-2 xs:text-xs"
                target="_blank"
                href={links.donateLink}
              >
                {intl.formatMessage({ id: "index.section1.donateLink" })}
              </a>
            </li>
          </ul>
        </div>
        <div className="w-4/5 lg:flex items-end hidden">
          <GatsbyImage
            className="w-full"
            fluid={images["hero-illustration"].childImageSharp.fluid}
          />
        </div>
      </div>
    </section>
  );
};
