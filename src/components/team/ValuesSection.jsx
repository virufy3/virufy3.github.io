import React, { useState } from "react";
import { useIntl } from "gatsby-plugin-intl";
import GatsbyImage from "gatsby-image";
import CaretDown from "../svg/CaretDown";
import CaretUp from "../svg/CaretUp";

export default ({ images }) => {
  const intl = useIntl();
  const [panelOpen, setPanelOpen] = useState(false);

  const moreBtnClick = () => setPanelOpen(!panelOpen);

  return (
    <div className="flex justify-between bg-black text-white px-20 py-12">
      <div>
        <h2 className="mb-8">
          {intl.formatMessage({ id: "team.valuesSection.vision.header" })}
        </h2>
        <p className="mb-8">
          {intl.formatMessage({ id: "team.valuesSection.vision.pg1" })}
        </p>
        <p className="mb-8">
          {intl.formatMessage({ id: "team.valuesSection.vision.pg2" })}
        </p>
        <p>{intl.formatMessage({ id: "team.valuesSection.vision.pg3" })}</p>
        <button onClick={moreBtnClick} style={{ outline: "none" }}>
          {panelOpen ? (
            <>
              <p className="underline mr-2 inline-block text-sm">
                {intl.formatMessage({ id: "team.valuesSection.less" })}
              </p>
              <CaretUp />
            </>
          ) : (
            <>
              <p className="underline mr-2 inline-block text-sm">
                {intl.formatMessage({ id: "team.valuesSection.more" })}
              </p>
              <CaretDown />
            </>
          )}
        </button>
      </div>
      <GatsbyImage
        className="w-1/3"
        fluid={images["women-with-world"].childImageSharp.fluid}
        imgStyle={{ objectFit: "fill" }}
      />
    </div>
  );
};
