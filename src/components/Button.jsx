import React from "react";
import { Link } from "gatsby-plugin-intl";

const tailwindClasses =
  "inline-block text-xs font-bold py-3 px-7 uppercase no-underline";

const styles = {
  primary: "text-white bg-blue",
  secondary: "text-black bg-white",
};

function generateClassName(classNameProp, style = "primary") {
  return `${tailwindClasses} ${styles[style]} ${classNameProp}`;
}

export function ButtonLink({ children, style, ...props }) {
  return (
    <Link {...props} className={generateClassName(props.className, style)}>
      {children}
    </Link>
  );
}

export default ({ children, style, ...props }) => {
  return (
    <button {...props} className={generateClassName(props.className, style)}>
      {children}
    </button>
  );
};
