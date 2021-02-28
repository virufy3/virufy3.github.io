import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function Dashboard({ data }) {
  return (
    <Layout>
      <SEO title="Dashboard | Virufy" />
      <div className="px-4 lg:px-0 lg:w-4/5 lg:mx-auto">
        <div className="grid mb-14 xl:px-0 justify-items-center grid-col-1 gap-16 overflow-hidden">
          <div className="mb-14 justify-self-start xl:mb-0 2l:mr-9">
            <h1 className="text-3xl font-bold mb-16">
              Collected Data Dashboard
            </h1>
            <p className="mb-12 xl:pr-14 max-w-screen-lg">
              Your cough helps us improve our predictive model, thus being{" "}
              <strong>crucial</strong> in the fight against{" "}
              <strong>Covid-19</strong>. See the progress that we have made and
              donate your cough!
            </p>
            <a
              className="no-underline bg-green text-white px-4 py-2 mb-2 xs:text-xs"
              target="_blank"
              href={"/app"}
            >
              Contribute Your Cough
            </a>
          </div>
          {/* COUNTER */}
          <div className="mt-2 ml-14 md:ml-24 xl:ml-6">
            <iframe
              width="300"
              height="185"
              scrolling="no"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS0ZDjc9QHcMtCMoknKwX8WCzAJQ8Mk-yJ1CGwbCf-JqKKuemlIGL9EPPAe-7Ars2EI6z_ZAQsWEXgX/pubchart?oid=1483123778&amp;format=interactive"
            ></iframe>
          </div>
          {/* INTERACTIVE MAP */}
          <div class="relative w-full h-full pb-2/3 pt-96 md:pt-1/3 lg:ml-24 lg:pb-64">
            <iframe
              className="absolute top-0 bottom-0 right-0 left-0 w-full h-full"
              scrolling="yes"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS0ZDjc9QHcMtCMoknKwX8WCzAJQ8Mk-yJ1CGwbCf-JqKKuemlIGL9EPPAe-7Ars2EI6z_ZAQsWEXgX/pubchart?oid=795469561&amp;format=interactive"
            ></iframe>
          </div>
          {/* NEW COUGHS */}
          <div className="relative pb-2/3 pt-2/3 md:pt-0 md:ml-36 lg:ml-64 xl:ml-96  w-full h-96 lg:pb-96 lg:pt-0">
            <iframe
              className="absolute top-0 bottom-0 right-0 left-0 w-full h-full"
              scrolling="yes"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS0ZDjc9QHcMtCMoknKwX8WCzAJQ8Mk-yJ1CGwbCf-JqKKuemlIGL9EPPAe-7Ars2EI6z_ZAQsWEXgX/pubchart?oid=906630587&amp;format=interactive"
            ></iframe>
          </div>
          {/* TOTAL COUGHS */}
          <div className="relative pb-2/3 pt-2/3 md:pt-0 md:ml-36 lg:ml-64 xl:ml-96 w-full h-96 lg:pb-96 lg:pt-0">
            <iframe
              className="absolute top-0 bottom-0 right-0 left-0 w-full h-full"
              scrolling="yes"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS0ZDjc9QHcMtCMoknKwX8WCzAJQ8Mk-yJ1CGwbCf-JqKKuemlIGL9EPPAe-7Ars2EI6z_ZAQsWEXgX/pubchart?oid=1540583028&amp;format=interactive"
            ></iframe>
          </div>
          {/* PCR */}
          <div className="relative pb-2/3 pt-2/3 md:pt-0 md:ml-36 lg:ml-64 xl:ml-96 w-full h-96 lg:pb-96 lg:pt-0">
            <iframe
              className="absolute top-0 bottom-0 right-0 left-0 w-full h-full"
              scrolling="yes"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS0ZDjc9QHcMtCMoknKwX8WCzAJQ8Mk-yJ1CGwbCf-JqKKuemlIGL9EPPAe-7Ars2EI6z_ZAQsWEXgX/pubchart?oid=320437341&amp;format=interactive"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}
