import React from "react";
import Layout from "../components/Layout";
import { useIntl } from "gatsby-plugin-intl";
import SEO from "../components/SEO";
import bgWave from "../images/logos/background-wave.png";
import Cookie from "../components/CookiePolicy/Cookie";
import IndexQuestion from "../components/index/IndexQuestion";

export default function CookiePolicy({ data }) {
  const intl = useIntl();

  return (
    <Layout>
      <SEO title="Cookie Policy | Virufy" />
      <img className="absolute -z-10 w-full" src={bgWave} alt="waves" />
      <div className="wrapper items-center justify-between md:py-4">
        <h1 classNmae="font-bold">
          {intl.formatMessage({ id: "cookie_policy.cookiePolicyHeader" })}
        </h1>

        <p className="mt-4">
          {intl.formatMessage({ id: "cookie_policy.lastUpdated" })}
        </p>

        <div className="my-8">
          {/* General */}
          <h4 className="font-bold mt-6 text-2xl">
            {intl.formatMessage({ id: "cookie_policy.section1.header" })}
          </h4>
          <p>
            {intl.formatMessage({
              id: "cookie_policy.section1.pg1",
            })}
          </p>
          <h4 className="font-bold mt-4">
            {intl.formatMessage({ id: "cookie_policy.section1.EuOrPeru" })}
          </h4>
          <p>{intl.formatMessage({ id: "cookie_policy.section1.Eu_des" })}</p>
          <h4 className="font-bold">
            {intl.formatMessage({ id: "cookie_policy.section1.ar" })}
          </h4>
          <p>{intl.formatMessage({ id: "cookie_policy.section1.ar_des" })}</p>
          <h4 className="font-bold">
            {intl.formatMessage({ id: "cookie_policy.section1.br" })}
          </h4>
          <p>{intl.formatMessage({ id: "cookie_policy.section1.br_des" })}</p>
          <h4 className="font-bold">
            {intl.formatMessage({ id: "cookie_policy.section1.co" })}
          </h4>
          <p>{intl.formatMessage({ id: "cookie_policy.section1.co_des" })}</p>

          <p className="my-4">
            {intl.formatMessage({ id: "cookie_policy.section1.pg2" })}
          </p>

          <p
            className="mb-4"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "cookie_policy.section1.pg3" }),
            }}
          />

          {/* What are cookies? */}
          <h4 className="font-bold mt-6 text-2xl">
            {intl.formatMessage({ id: "cookie_policy.section2.header" })}
          </h4>
          <p>
            {intl.formatMessage({
              id: "cookie_policy.section2.pg1",
            })}
          </p>

          {/* What cookies do we use? */}
          <h4 className="font-bold mt-6 text-2xl">
            {intl.formatMessage({ id: "cookie_policy.section3.header" })}
          </h4>
          <p>
            {intl.formatMessage({
              id: "cookie_policy.section3.pg1",
            })}
          </p>

          {/* collapse  */}
          <div className="my-4">
            <Cookie />
          </div>

          <p
            className="mt-4"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "cookie_policy.section3.pg2" }),
            }}
          />

          {/* How can you control cookies? */}
          <h4 className="font-bold mt-6 text-2xl">
            {intl.formatMessage({ id: "cookie_policy.section4.header" })}
          </h4>
          <p className="mt-4">
            {intl.formatMessage({
              id: "cookie_policy.section4.pg1",
            })}
          </p>
          <p className="mt-4">
            {intl.formatMessage({
              id: "cookie_policy.section4.pg2",
            })}
          </p>
          <p className="mt-4">
            {intl.formatMessage({
              id: "cookie_policy.section4.pg3",
            })}
          </p>
          <p className="mt-4">
            {intl.formatMessage({
              id: "cookie_policy.section4.pg4",
            })}
          </p>
          <p
            className="mt-4 no-underline"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({
                id: "cookie_policy.section4.browser",
              }),
            }}
          />
        </div>
      </div>
    </Layout>
  );
}
