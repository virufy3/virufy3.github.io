import React, { useEffect } from "react";
import { useIntl } from "gatsby-plugin-intl";
import SEO from "../components/SEO";
import question from "../images/404/rafiki.png";
import virufyLogo from "../images/logos/virufy-logo.png";

export default function NotFound() {
  const intl = useIntl();

  useEffect(() => {
    let l = window.location;
    if (/^\/(app|demo|study|demo-predict|demo-edge)\//.test(l.pathname)) {
      var pathSegmentsToKeep = 1; // Keep /app
      l.replace(
        l.protocol +
          "//" +
          l.hostname +
          (l.port ? ":" + l.port : "") +
          l.pathname
            .split("/")
            .slice(0, 1 + pathSegmentsToKeep)
            .join("/") +
          "/?/" +
          l.pathname
            .slice(1)
            .split("/")
            .slice(pathSegmentsToKeep)
            .join("/")
            .replace(/&/g, "~and~") +
          (l.search ? "&" + l.search.slice(1).replace(/&/g, "~and~") : "") +
          l.hash
      );
    } else {
      l.replace(l.protocol + "//" + l.hostname + (l.port ? ":" + l.port : ""));
    }
  }, []);

  return (
    <>
      <SEO title="404: Not found | Virufy" />
      <a
        className="my-8 mx-8 flex items-center justify-between py-3 px-6"
        href="/"
      >
        <img
          className="logo"
          src={virufyLogo}
          alt={intl.formatMessage({
            id: "nav.logoAlt",
            defaultMessage: "home",
          })}
        ></img>
      </a>
      <div className="md:flex mx-auto w-4/5 mt-10">
        <div className="wrapper items-center justify-between md:py-4">
          <h1 className="font-bold text-6xl mb-4">
            {intl.formatMessage({ id: "404.header" })}
          </h1>
          <h2 className="font-bold text-3xl mb-5">
            {intl.formatMessage({ id: "404.error" })}
          </h2>
          <div className="text-xl mb-8">
            {intl.formatMessage({ id: "404.code" })}
          </div>
          <div className="mb-10">
            <a
              className="no-underline bg-blue text-white px-4 py-2 mb-2 rounded-full"
              href={"/"}
            >
              {intl.formatMessage({ id: "404.back" })}
            </a>
          </div>
        </div>

        <div classNam="md:flex">
          <img className="inline-block" src={question}></img>
        </div>
      </div>
    </>
  );
}
