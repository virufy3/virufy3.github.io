import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import HeaderImage from "../images/available-roles-page/header.svg";
import { roles } from "../data/available-roles";
import { useIntl } from "gatsby-plugin-intl";

const Role = ({ description, location, title, url, intl }) => (
  <div
    className="flex flex-col md:grid items-center gap-6 md:gap-14 bg-white rounded-xl px-6 md:px-11 py-6 mb-8 md:mb-14"
    style={{
      gridTemplateColumns: "4fr max-content max-content",
      filter: "drop-shadow(0px 15px 47px rgba(0, 165, 136, 0.15))",
    }}
  >
    <div className="min-w-0">
      <p className="font-bold font-heading mb-3 md:mb-0 text-sm md:text-lg">
        {title}
      </p>

      <p className="font-heading md:whitespace-nowrap overflow-hidden overflow-ellipsis text-sm md:text-lg">
        {description}
      </p>
    </div>

    <div className="hidden md:block mr-4">
      <p className="font-bold font-heading">
        {intl.formatMessage({
          id: `getInvolved.availableRoles.location`,
        })}
      </p>

      <p className="font-heading">{location}</p>
    </div>

    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full text-center font-heading text-sm no-underline bg-primary text-white uppercase font-bold px-8 py-4 inline-block rounded-full text-sm md:text-md"
    >
      {intl.formatMessage({
        id: `getInvolved.availableRoles.applyNow`,
      })}
    </a>
  </div>
);

export default function AvailableRoles() {
  const intl = useIntl();
  return (
    <Layout className="bg-green-200 pb-1">
      <SEO title="Available Roles | Virufy" />

      <div className="relative mb-11 md:mb-28">
        <div className="px-8 pt-10 xl:pt-20 xl:pl-20">
          <h1 className="text-2xl md:text-6xl max-w-2xl mb-5 md:mb-8">
            {intl.formatMessage({
              id: `getInvolved.availableRoles.join`,
            })}
          </h1>

          <p className="mb-8 font-heading max-w-2xl text-sm md:text-md">
            {intl.formatMessage({
              id: `getInvolved.availableRoles.fontHeading`,
            })}
          </p>

          <p className="font-bold font-heading text-sm md:text-md">
            {intl.formatMessage({
              id: `getInvolved.availableRoles.fontheadingBold`,
            })}
          </p>
        </div>

        <HeaderImage className="absolute top-0 -right-12 hidden xl:block" />
      </div>

      <div className="px-8 xl:px-40">
        <h2 className="text-lg md:text-3xl mb-6 md:mb-11 font-heading">
          {intl.formatMessage({
            id: `getInvolved.availableRoles.fontheadingBold`,
          })}
        </h2>

        {roles.map((role) => (
          <Role key={role.title} {...role} intl={intl} />
        ))}
      </div>
    </Layout>
  );
}
