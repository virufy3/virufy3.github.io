import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import HeaderImage from "../images/available-roles-page/header.svg";

export default function AvailableRoles() {
  return (
    <Layout className="bg-green-200">
      <SEO title="Available Roles | Virufy" />
      <HeaderImage />
    </Layout>
  );
}
