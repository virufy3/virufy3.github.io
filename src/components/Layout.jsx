import React from "react";
import SEO from "./SEO";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default ({ children, className }) => {
  return (
    <>
      <SEO />
      <header>
        <Navbar />
      </header>
      <main className={className}>{children}</main>
      <footer className="bg-secondary-100 py-16">
        <Footer />
      </footer>
    </>
  );
};
