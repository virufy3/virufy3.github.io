import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import SEO from "../components/SEO";
import question from "../images/404/rafiki.png";
import virufyLogo from "../images/logos/virufy-logo.svg";

export default ({}) => {
  const intl = useIntl();
  return (
    <>
      <SEO title="404: Not found | Virufy" />
      <a className="flex items-center justify-between py-3 px-6" href="/">
        <img
          className="logo"
          src={virufyLogo}
          alt={intl.formatMessage({
            id: "nav.logoAlt",
            defaultMessage: "home",
          })}
        ></img>
      </a>
      <div className="wrapper md:flex">
        <div className="wrapper items-center justify-between md:py-4">
          <h1 classNmae="font-bold text-4xl">
            {intl.formatMessage({ id: "404.header" })}
          </h1>
          <h2 classNmae="font-bold text-3xl">
            {intl.formatMessage({ id: "404.error" })}
          </h2>
          <div classNmae="text-2xl">
            {intl.formatMessage({ id: "404.code" })}
          </div>
          <div className="my-16">
            <a
              className="no-underline bg-green text-white px-4 py-2 mb-2 rounded-full"
              href={"/"}
            >
              {intl.formatMessage({ id: "404.back" })}
            </a>
          </div>
        </div>

        <div classNam="wrapper md:flex">
          <img className="inline-block" src={question}></img>
        </div>
      </div>
    </>
  );
};
