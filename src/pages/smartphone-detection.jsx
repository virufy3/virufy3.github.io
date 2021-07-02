import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function Smartphone() {
  return (
    <div>
      <Layout className="bg-blue-100">
        <SEO title="Smartphone Detection | Virufy" />
        <div style={{ padding: "0" }} className="container">
          <iframe
            style={{ width: "100%", height: "100vh" }}
            src="https://docs.google.com/document/d/e/2PACX-1vQqUzFIej5ZXQyH4ggJMY2EJtq4Cv26UoD-spYR7dkYovZ0hD4bIkBqKvU4JuTCbToIv6L56D5x1O7j/pub?embedded=true"
          ></iframe>
        </div>
      </Layout>
    </div>
  );
}
