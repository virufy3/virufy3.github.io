import React, { useState } from "react";
import { useIntl } from "gatsby-plugin-intl";
import GatsbyImage from "gatsby-image";
import CaretDown from "../svg/CaretDown";
import CaretUp from "../svg/CaretUp";

const PanelMobile = ({ intl }) => {
  return (
    <div className="flex justify-between lg:pb-32">
      <div className="flex flex-col items-baseline">
        <h2 className="font-bold mt-8 mb-4 text-lg">
          {intl.formatMessage({ id: "team.valuesSection.values.header" })}
        </h2>
        <div className="md:flex mb-4">
          <h3 className="font-bold w-40 flex-shrink-0 mb-4">
            {intl.formatMessage({
              id: "team.valuesSection.values.transform.header",
            })}
          </h3>
          <p className="w-full">
            {intl.formatMessage({
              id: "team.valuesSection.values.transform.pg",
            })}
          </p>
        </div>
        <div className="md:flex mb-4">
          <h3 className="font-bold w-40 flex-shrink-0 mb-4">
            {intl.formatMessage({
              id: "team.valuesSection.values.world.header",
            })}
          </h3>
          <p className="w-full">
            {intl.formatMessage({
              id: "team.valuesSection.values.world.pg",
            })}
          </p>
        </div>
        <div className="md:flex mb-4">
          <h3 className="font-bold w-40 flex-shrink-0 mb-4">
            {intl.formatMessage({
              id: "team.valuesSection.values.free.header",
            })}
          </h3>
          <p className="w-full">
            {intl.formatMessage({
              id: "team.valuesSection.values.free.pg",
            })}
          </p>
        </div>
        <div className="md:flex mb-4">
          <h3 className="font-bold w-40 flex-shrink-0 mb-4">
            {intl.formatMessage({
              id: "team.valuesSection.values.health.header",
            })}
          </h3>
          <p className="w-full">
            {intl.formatMessage({
              id: "team.valuesSection.values.health.pg",
            })}
          </p>
        </div>
        <div className="md:flex mb-4">
          <h3 className="font-bold w-40 flex-shrink-0 mb-4">
            {intl.formatMessage({
              id: "team.valuesSection.values.oneTap.header",
            })}
          </h3>
          <p className="w-full">
            {intl.formatMessage({
              id: "team.valuesSection.values.oneTap.pg",
            })}
          </p>
        </div>
        <div className="md:flex">
          <h3 className="font-bold w-40 flex-shrink-0">
            {intl.formatMessage({
              id: "team.valuesSection.values.mobile.header",
            })}
          </h3>
          <p className="w-full">
            {intl.formatMessage({
              id: "team.valuesSection.values.mobile.pg",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

const PanelDesktop = ({ images, intl }) => {
  return (
    <>
      <h2 className="font-bold mt-8 mb-4 text-lg">
        {intl.formatMessage({ id: "team.valuesSection.values.header" })}
      </h2>
      <div className="flex lg:pb-6">
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
      </div>
    </>
  );
};

export default ({ images }) => {
  const intl = useIntl();
  const [panelOpen, setPanelOpen] = useState(false);

  const moreBtnClick = () => setPanelOpen(!panelOpen);

  return (
    <section
      id="our-vision"
      className="bg-black text-white px-4 lg:px-20 py-12"
    >
      <div className="flex justify-between">
        <div className="flex flex-col items-baseline lg:w-1/2">
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
          imgStyle={{ objectFit: "contain" }}
          className="w-60 lg:flex items-end hidden"
        />
      </div>
      {panelOpen && (
        <>
          <div className="hidden md:block">
            <PanelDesktop images={images} intl={intl} />
          </div>
          <div className="md:hidden">
            <PanelMobile images={images} intl={intl} />
          </div>
        </>
      )}
    </section>
  );
};
