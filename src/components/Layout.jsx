import React from "react";
import SEO from "./SEO";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

export default ({ children, className }) => {
  return (
    <>
      <SEO />
      <header className="sticky top-0 z-10">
        <Navbar />
      </header>
      <main className={className}>{children}</main>
      <footer className="bg-secondary-100 py-16">
        <Footer />
      </footer>
    </>
  );
};
