import React, { useState } from "react";
import { navLinks } from "./nav_links";
import { Link } from "gatsby";
import LangSelect from "./LangSelect";
import { useLocation } from "@reach/router";
import { IntlContextConsumer, useIntl } from "gatsby-plugin-intl";

// Helpers
import { isActivePath } from "./helpers/navHelper";

export default ({ bgColor, textColor, virufyLogo }) => {
  const intl = useIntl();
  const location = useLocation();

  // index in array of nav links that mouse is hovering over empty -1 = none
  const [mouseOverLinkIdx, setMouseOverLinkIdx] = useState(-1);

  const getLinkClasses = (link) => {
    const isActiveLink = isActivePath(location, link);
    return link.btnStyle
      ? `ml-4 mr-0 no-underline text-white py-2 px-6 ${
          isActiveLink ? "bg-black" : "bg-blue"
        }`
      : `ml-4 mr-0 no-underline ${textColor} ${
          isActiveLink ? "font-bold border-b-4 border-blue" : ""
        }`;
  };

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) => (
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
              <span
                onMouseEnter={() => setMouseOverLinkIdx(idx)}
                onMouseLeave={() => setMouseOverLinkIdx(-1)}
                key={idx}
              >
                <Link
                  className={getLinkClasses(link)}
                  to={`/${currentLocale}${link.path}`}
                >
                  <span className="px-2">
                    {intl.formatMessage({
                      id: link.intlId,
                      defaultMessage: link.defMsg,
                    })}
                  </span>
                </Link>
                {link.dropDownLinks && mouseOverLinkIdx === idx && (
                  // have to include locale in url or intl plugin will redirect without the id...

                  <div className="absolute ml-4 bg-gray-100">
                    {link.dropDownLinks.map(
                      ({ intlId, sectionId, path }, idx) => (
                        <Link
                          className="p-4 block text-black hover:bg-gray-200 no-underline"
                          // to={path}
                          to={`/${currentLocale}${
                            path || link.path
                          }#${sectionId}`}
                          key={idx}
                        >
                          {intl.formatMessage({ id: intlId })}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </span>
            ))}
          </div>
        </div>
      )}
    </IntlContextConsumer>
  );
};
