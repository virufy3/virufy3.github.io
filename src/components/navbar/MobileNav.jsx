import React, { useState } from "react";
import MobileNavToggle from "./MobileNavToggle";
import LangSelect from "./LangSelect";
import Overlay from "../Overlay";
import navLinks from "./nav_links";
import { IntlContextConsumer, useIntl } from "gatsby-plugin-intl";
import { Link } from "gatsby";
import useEscape from "../../hooks/useEscape";
import { useLocation } from "@reach/router";

// Helpers
import { isActivePath } from "./helpers/navHelper";

export default ({ textColor, bgColor, virufyLogo }) => {
  const [navOpen, setNavOpen] = useState(false);
  const intl = useIntl();
  const location = useLocation();

  useEscape(true, () => setNavOpen(false));

  const getLinkClasses = (link) => {
    const isActiveLink = isActivePath(location, link);

    return link.btnStyle
      ? `no-underline text-white py-2 px-6 ${
          isActiveLink ? "bg-black" : "bg-primary"
        }`
      : `no-underline ${isActiveLink ? "font-bold" : ""}`;
  };

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) => (
        <>
          <div className="flex items-end justify-between lg:hidden p-4">
            <MobileNavToggle
              mobileNavOpen={navOpen}
              setMobileNavOpen={setNavOpen}
              textColor={textColor}
            />
            <span className="flex items-end">
              <Link to="/">
                <img
                  src={virufyLogo}
                  alt="virufy"
                  className="mr-8 inline-block w-20"
                />
              </Link>
              <LangSelect bgColor={bgColor} textColor={textColor} />
            </span>
          </div>
          {
            <Overlay active={navOpen} onClick={() => setNavOpen(false)}>
              <div
                className="inline-flex flex-col p-4 bg-white"
                style={{ transform: "translate(1.5rem, 50%)" }}
                onClick={(e) => e.stopPropagation()}
              >
                {navLinks.map((link) => (
                  <Link
                    className={getLinkClasses(link)}
                    to={`/${currentLocale}${link.path}`}
                  >
                    {intl.formatMessage({
                      id: link.intlId,
                      defaultMessage: link.defMsg,
                    })}
                  </Link>
                ))}
              </div>
            </Overlay>
          }
        </>
      )}
    </IntlContextConsumer>
  );
};
