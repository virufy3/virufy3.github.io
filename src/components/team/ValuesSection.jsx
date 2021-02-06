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
    <section className="bg-black text-white px-20 py-12">
      <div className="flex justify-between">
        <div className="flex flex-col items-baseline w-1/2">
          <h2 className="mb-8 text-2xl font-bold">
            {intl.formatMessage({ id: "team.valuesSection.vision.header" })}
          </h2>
          <p className="mb-8">
            {intl.formatMessage({ id: "team.valuesSection.vision.pg1" })}
          </p>
          <p className="mb-8">
            {intl.formatMessage({ id: "team.valuesSection.vision.pg2" })}
          </p>
          <p className="mb-12">
            {intl.formatMessage({ id: "team.valuesSection.vision.pg3" })}
          </p>
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
          fluid={images["women-with-world"].childImageSharp.fluid}
          imgStyle={{ objectFit: "fill" }}
          className="w-60 lg:flex items-end hidden"
        />
      </div>
      {panelOpen && (
        <>
          <h2 className="font-bold mt-8 mb-4 text-lg">
            {intl.formatMessage({ id: "team.valuesSection.values.header" })}
          </h2>
          <div className="flex lg:pb-32">
            <table>
              {["transform", "world", "free", "health", "oneTap", "mobile"].map(
                (rowName) => (
                  <tr>
                    <td className="align-top pr-4 font-bold">
                      {intl.formatMessage({
                        id: `team.valuesSection.values.${rowName}.header`,
                      })}
                    </td>
                    <td className="align-top pb-4">
                      {intl.formatMessage({
                        id: `team.valuesSection.values.${rowName}.pg`,
                      })}
                    </td>
                  </tr>
                )
              )}
            </table>
            <div className="lg:flex items-end hidden">
              <GatsbyImage
                fluid={images["people_looking_at_phone"].childImageSharp.fluid}
                imgStyle={{ objectFit: "fill" }}
                className="w-60 h-60  flex self-end transform translate-y-32  "
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
};
