import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import GatsbyImage from "gatsby-image";

export default ({ images }) => {
  const intl = useIntl();

  function constructHeader(num) {
    return (
      <div className="flex w-full">
        <div
          style={{ position: "relative", top: "-5px" }}
          className="bg-black mr-4 text-white test-white text-lg rounded-full font-header w-8 h-8 flex justify-center items-center flex-shrink-0"
        >
          {num}
        </div>
        <h2 className="text-black text-md text-sm font-bold">
          {intl.formatMessage({
            id: `index.section3.header${num}`,
          })}
        </h2>
      </div>
    );
  }

  function constructImage(id, className, width = "18vw") {
    return (
      <div className="flex justify-center items-center" style={{ width }}>
        <GatsbyImage
          // style={{ width: "9rem", height: "7rem" }}
          className={className}
          fluid={images[id].childImageSharp.fluid}
          imgStyle={{ objectFit: "fill" }}
        />
      </div>
    );
  }

  return (
    <>
      {/* Desktop */}
      <section className="hidden md:block" style={{ padding: "5vw" }}>
        <div className="flex w-full justify-center mx-auto">
          <div
            style={{ width: "30vw", height: "30vw" }}
            className="rounded-full inline-block bg-gray-100 justify-center items-center"
          />
          <div
            style={{ width: "30vw", height: "30vw", margin: "0 -5vw" }}
            className="rounded-full inline-block bg-gray-100"
          />
          <div
            style={{ width: "30vw", height: "30vw" }}
            className="rounded-full inline-block bg-gray-100"
          />
        </div>
        <div
          style={{
            position: "relative",
            bottom: "26vw",
            width: "70vw",
            left: "10vw",
            height: "22vw",
            marginBottom: "-22vw",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "space-around",
          }}
        >
          <div className="flex justify-between w-full">
            <span
              style={{
                width: "18vw",
                display: "flex",
                alignContent: "space-between",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {constructHeader(1)}
            </span>
            <span
              style={{
                width: "18vw",
                display: "flex",
                alignContent: "space-between",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {constructHeader(2)}
            </span>
            <span
              style={{
                width: "18vw",
                display: "flex",
                alignContent: "space-between",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {constructHeader(3)}
            </span>
          </div>
          <div className="flex justify-between w-full h-1/2">
            {constructImage("cough-to-app", "w-4/5")}
            {constructImage("cough-waves", "w-4/5")}
            {constructImage("clipboard", "w-2/5")}
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section
        className="flex flex-col items-center divide-none max-w-sm mx-auto md:hidden"
        style={{ padding: "5vw", paddingTop: "4.5rem" }}
      >
        {constructHeader(1)}
        {constructImage("cough-to-app", "w-full mx-auto mt-4 mb-12", "30vw")}
        {constructHeader(2)}
        {constructImage("cough-waves", "w-full mx-auto mt-4 mb-12", "30vw")}
        {constructHeader(3)}
        {constructImage("clipboard", "w-3/5 mx-auto mt-4 mb-12", "30vw")}
      </section>
    </>
  );
};
