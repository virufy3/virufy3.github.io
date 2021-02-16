import React from "react";
import GatsbyBgImage from "gatsby-background-image";
import { Link } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import links from "../../data/get-involved/links";

export default ({ images }) => {
  const intl = useIntl();

  return (
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
          <Link
            className="no-underline bg-white text-black mx-auto my-8 px-8 py-4 font-bold"
            target="_blank"
            to={links.getTheAppLink}
          >
            {intl.formatMessage({ id: "index.section2.learnMoreLink" })}
          </Link>
        </div>
      </GatsbyBgImage>
    </section>
  );
};
