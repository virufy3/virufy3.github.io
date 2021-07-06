import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import GatsbyImage from "gatsby-image";
import links from "../../data/get-involved/links";

export default ({ images }) => {
  const intl = useIntl();
  return (
    <section className="px-4 lg:px-0 md:mx-auto lg:w-10/12 mt-10">
      <h1
        className="md:text-5xl font-bold lg:w-8/12"
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage({ id: "index.section1.header" }),
        }}
      />
      <div className="flex justify-between">
        <div className="flex flex-col items-start justify-center lg:-mt-16 lg:w-10/12">
          <p
            className="md:text-2xl md:mb-8 mt-4"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "index.section1.pg" }),
            }}
          />
          <ul className="list-none my-4">
            <li className="md:inline">
              <a
                className="no-underline bg-blue text-white px-4 py-2 mb-2 xs:text-xs font-bold"
                target="_blank"
                href={"/study"}
              >
                {intl.formatMessage({ id: "index.section1.coughLink" })}
              </a>
            </li>
            <li className="md:inline md:ml-8 mt-4">
              <a
                className="no-underline border-solid border border-primary text-primary md:px-4 py-2 xs:text-xs px-12 font-bold"
                target="_blank"
                href={links.donateLink}
              >
                {intl.formatMessage({ id: "index.section1.donateLink" })}
              </a>
            </li>
          </ul>
        </div>
        <div className="w-5/12 lg:flex items-end hidden">
          <GatsbyImage
            className="w-full"
            fluid={images["hero-illustration"].childImageSharp.fluid}
          />
        </div>
      </div>
    </section>
  );
};
