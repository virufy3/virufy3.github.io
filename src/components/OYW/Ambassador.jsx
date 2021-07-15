import React, { useState } from "react";
import GatsbyImage from "gatsby-image";
import { useIntl } from "gatsby-plugin-intl";
import { oyw } from "../../data/oyw";

const Ambassador = (props) => {
  const intl = useIntl();

  const {
    image,
    person: { id, defaultName, mediaLink },
  } = props;

  return (
    <div className="flex flex-col text-left	 mx-auto mb-4 w-full">
      <a className="w-full" target="_blank" rel="noreferrer" href={mediaLink}>
        <GatsbyImage
          className="mx-auto my-2 rounded-md overflow-hidden team-icons"
          imgStyle={{ objectFit: "fill" }}
          fluid={image}
        />

        <h5 className="mt-4 text-sm font-semibold text-black no-underline	">
          {intl.formatMessage({
            id: `OYW.ambassador.ambassador-list.${id}.name`,
            defaultMessage: defaultName,
          })}
        </h5>
      </a>
      <div className="my-2"></div>
      <p className="leading-4 text-xs">
        {intl.formatMessage({
          id: `OYW.ambassador.ambassador-list.${id}.descriptionOYW`,
        })}
      </p>
      <p className="break-normal mt-2 leading-4 text-xs">
        {intl.formatMessage({
          id: `OYW.ambassador.ambassador-list.${id}.descriptionVirufy`,
        })}
      </p>
    </div>
  );
};

export default ({ images }) => {
  const intl = useIntl();
  return (
    <section className="px-8 pb-24">
      <div className="pb-12">
        <h2 class="mb-4 text-4xl font-bold text-gray-200">
          {intl.formatMessage({ id: "OYW.ambassador.header" })}
        </h2>
      </div>

      <div className="mt-2 grid gap-x-4 grid-cols-2 gap-y-6 sm:gap-x-4 lg:gap-x-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
        {oyw.ambassadors.map((amb, idx) => (
          <Ambassador
            key={`ambs${idx}`}
            image={images[amb.imageName].childImageSharp.fluid}
            person={amb}
          />
        ))}
      </div>
    </section>
  );
};
