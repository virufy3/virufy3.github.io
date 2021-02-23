import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

function Principle({ title, className, icon, children }) {
  return (
    <div
      className={`flex-grow mx-auto w-full max-w-none py-12 md:py-0 ${className}`}
    >
      <Img
        className="h-24 w-auto mb-8"
        fluid={icon}
        imgStyle={{ objectFit: "contain" }}
        aria-hidden
      />
      <h2 className="text-2xl font-bold pb-3">{title}</h2>
      <p>{children}</p>
    </div>
  );
}

Principle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Principle;
