import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import navLinks from "./nav_links";
import { Link } from "gatsby";
import LangSelect from "./LangSelect";
import { useLocation } from "@reach/router";

export default ({ bgColor, textColor, virufyLogo }) => {
  const intl = useIntl();
  const location = useLocation();

  const getLinkClasses = (link) => {
    const isActiveLink = location.pathname.includes(link.path);

    return link.btnStyle
      ? `ml-4 mr-0 no-underline text-white py-2 px-6 ${
          isActiveLink ? "bg-black" : "bg-primary"
        }`
      : `ml-4 mr-0 no-underline ${textColor} ${
          isActiveLink ? "font-bold border-b-4 border-green" : ""
        }`;
  };

  return (
    <div className="lg:flex justify-between py-3 px-6 hidden">
      <Link to="/" className="inline-block">
        <img
          className="logo"
          src={virufyLogo}
          alt={intl.formatMessage({
            id: "nav.logoAlt",
            defaultMessage: "home",
          })}
        />
      </Link>
      <div className="flex items-center text-base">
        <LangSelect bgColor={bgColor} textColor={textColor} />
        {navLinks.map((link, idx) => (
          <Link key={idx} className={getLinkClasses(link)} to={link.path}>
            {intl.formatMessage({ id: link.id, defaultMessage: link.defMsg })}
          </Link>
        ))}
      </div>
    </div>
  );
};
