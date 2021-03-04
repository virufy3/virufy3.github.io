import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import HeaderImage from "../images/available-roles-page/header.svg";
import { roles } from "../data/available-roles";

const Role = ({ description, location, title, url }) => (
  <div
    className="grid items-center gap-14 bg-white rounded-xl px-11 py-6 mb-14"
    style={{ gridTemplateColumns: "4fr max-content max-content" }}
  >
    <div className="min-w-0">
      <p className="font-bold font-heading">{title}</p>

      <p className="font-heading whitespace-nowrap overflow-hidden overflow-ellipsis">
        {description}
      </p>
    </div>

    <div className="mr-4">
      <p className="font-bold font-heading">Location</p>

      <p className="font-heading">{location}</p>
    </div>

    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-heading text-sm no-underline bg-primary text-white uppercase font-bold px-8 py-4 inline-block rounded-full"
    >
      Read More
    </a>
  </div>
);

export default function AvailableRoles() {
  return (
    <Layout className="bg-green-200">
      <SEO title="Available Roles | Virufy" />

      <div className="relative mb-28">
        <div className="pt-20 pl-20">
          <h1 className="text-6xl max-w-2xl mb-8">Join the Virufighter team</h1>

          <p className="mb-8 font-heading max-w-2xl">
            Our youth-led team fosters a positive learning environment with a
            focus on mentorship to allow volunteers to hone their skills to make
            worldwide impact. Our volunteers span more than 15 countries,
            contributing their unique perspectives.
          </p>

          <p className="font-bold font-heading">
            Got what it takes? Check out opportunities below!
          </p>
        </div>

        <HeaderImage className="absolute top-0 -right-12" />
      </div>

      <div className="px-40">
        <h2 className="text-3xl mb-11 font-heading">Job Openings</h2>

        {roles.map((role) => (
          <Role key={role.title} {...role} />
        ))}
      </div>
    </Layout>
  );
}
