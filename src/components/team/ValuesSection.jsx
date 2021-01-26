import React, { useState } from "react";
import { useIntl } from "gatsby-plugin-intl";
import GatsbyImage from "gatsby-image";

export default ({ images }) => {
  const intl = useIntl();
  const [panelOpen, setPanelOpen] = useState("false");

  const moreBtnClick = () => setPanelOpen(!panelOpen);

  <div className="flex justify-between">
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
      <button onClick={moreBtnClick}>
        {panelOpen
          ? intl.formatMessage({ id: "team.valuesSection.less" })
          : intl.formatMessage({ id: "team.valuesSection.more" })}
      </button>
    </div>
    <GatsbyImage
      className="w-1/3"
      fluid={images["Woman w world"].childImageSharp.fluid}
    />
  </div>;
};
