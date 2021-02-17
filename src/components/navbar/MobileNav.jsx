import React, { useState } from "react";
import MobileNavToggle from "./MobileNavToggle";
import LangSelect from "./LangSelect";
import Overlay from "../Overlay";
import navLinks from "./nav_links";
import { useIntl } from "gatsby-plugin-intl";
import { Link } from "gatsby";

export default ({ textColor, bgColor, virufyLogo }) => {
  const [navOpen, setNavOpen] = useState(false);
  const intl = useIntl();

  const getLinkClasses = (link) => {
    const isActiveLink = location.pathname.includes(link.path);

    return link.btnStyle
      ? `no-underline text-white py-2 px-6 ${
          isActiveLink ? "bg-black" : "bg-primary"
        }`
      : `no-underline ${
          isActiveLink ? "font-bold border-b-4 border-green" : ""
        }`;
  };

  return (
    <>
      <div className="flex items-baseline justify-between lg:hidden p-4">
        <MobileNavToggle
          mobileNavOpen={navOpen}
          setMobileNavOpen={setNavOpen}
          textColor={textColor}
        />
        <span className="flex items-end">
          <img
            src={virufyLogo}
            alt="virufy"
            className="mr-8 inline-block h-12"
          />
          <LangSelect bgColor={bgColor} textColor={textColor} />
        </span>
      </div>
      {
        <Overlay active={navOpen} onClick={() => setNavOpen(false)}>
          <div
            className="inline-flex flex-col p-4 bg-white"
            style={{ transform: "translate(1.5rem, 50%)" }}
          >
            {navLinks.map((link) => (
              <Link
                // className={`no-underline ${link.classes ? link.classes : ""}`}
                className={getLinkClasses(link)}
                to={link.path}
              >
                {intl.formatMessage({
                  id: link.id,
                  defaultMessage: link.defMsg,
                })}
              </Link>
            ))}
          </div>
          {/* <div className="flex px-4 py-4">
            {navLinks.map((link) => (
              <Link
                className={`w-1/2 no-underline ${textColor}`}
                to={link.path}
              >
                {intl.formatMessage({
                  id: link.id,
                  defaultMessage: link.defMsg,
                })}
              </Link>
            ))}
          </div> */}
        </Overlay>
      }
    </>
  );
};
