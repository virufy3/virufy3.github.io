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
    <div className="flex flex-col text-left	 mx-auto mb-10 w-full">
      <a className="w-full" target="_blank" rel="noreferrer" href={mediaLink}>
        <GatsbyImage
          className="mx-auto my-2 rounded-md overflow-hidden team-icons"
          imgStyle={{ objectFit: "fill" }}
          fluid={image}
        />

        <h5 className="mt-4 text-xl font-semibold text-black no-underline	">
          {intl.formatMessage({
            id: `OYW.ambassador.ambassador-list.${id}.name`,
            defaultMessage: defaultName,
          })}
        </h5>
      </a>
      <div className="my-2"></div>
      {intl.formatMessage({
        id: `OYW.ambassador.ambassador-list.${id}.description`,
      })}
    </div>
  );
};

export default ({ images }) => {
  const intl = useIntl();
  return (
    <section className="p-8">
      <div className="pb-12">
        <h2 class="mb-4 text-4xl font-bold text-gray-200">
          {intl.formatMessage({ id: "OYW.ambassador.header" })}
        </h2>
      </div>

      <div className="mt-4 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4">
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
