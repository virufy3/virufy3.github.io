import "./src/styles/global.css";
// import React from "react";
// import Layout from "./src/components/Layout";

// export const wrapPageElement = ({element}) => <Layout>{element}</Layout>;

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};
