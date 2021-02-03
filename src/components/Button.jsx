import React from "react";
import { Link } from "gatsby-plugin-intl";

const tailwindClasses =
  "inline-block text-white bg-primary text-xs font-bold py-3 px-7 uppercase no-underline";

export function ButtonLink({ children, ...props }) {
  return (
    <Link {...props} className={`${tailwindClasses} ${props.className}`}>
      {children}
    </Link>
  );
}

export default ({ children, ...props }) => {
  return (
    <button {...props} className={`${tailwindClasses} ${props.className}`}>
      {children}
    </button>
  );
};
