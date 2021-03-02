import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import HeaderImage from "../images/available-roles-page/header.svg";

export default function AvailableRoles() {
  return (
    <Layout className="bg-green-200">
      <SEO title="Available Roles | Virufy" />

      <div className="relative">
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
    </Layout>
  );
}
