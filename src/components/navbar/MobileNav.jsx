import React, { useState } from "react";
import MobileNavToggle from "./MobileNavToggle";
import LangSelect from "./LangSelect";
import LangSelectMobile from "./LangSelectMobile";
import Overlay from "../Overlay";
import { navLinks, buttonInvolved } from "./nav_links";
import { IntlContextConsumer, useIntl } from "gatsby-plugin-intl";
import { Link } from "gatsby";
import useEscape from "../../hooks/useEscape";
import { useLocation } from "@reach/router";
import "./mobile.css";
import { info } from "autoprefixer";
import { IoIosArrowForward } from "react-icons/io";

export default ({ textColor, bgColor, virufyLogo }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [expanded, setExpanded] = useState([]);
  const intl = useIntl();
  const location = useLocation();

  useEscape(true, () => setNavOpen(false));

  const getLinkClasses = (link) => {
    const isActiveLink = location.pathname.includes(link.path);

    return link.btnStyle
      ? `no-underline text-white py-2 px-6 ${
          isActiveLink ? "bg-black" : "bg-primary"
        }`
      : `no-underline ${isActiveLink ? "font-bold" : ""}`;
  };

  const expandNavbar = (link) => {
    setToggle(!toggle);
    setExpanded(...link.id);
    if (expanded.includes(link.id) === false) {
      setToggle(true);
      setExpanded([...link.id]);
    }
  };

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) => (
        <>
          <div className="flex items-end justify-between lg:hidden p-4">
            <span className="flex items-end">
              <Link to="/">
                <img
                  src={virufyLogo}
                  alt="virufy"
                  className="mr-8 inline-block w-20"
                />
              </Link>
            </span>
            <LangSelect />
            <MobileNavToggle
              mobileNavOpen={navOpen}
              setMobileNavOpen={setNavOpen}
              textColor={textColor}
            />
          </div>
          {
            <Overlay active={navOpen} onClick={() => setNavOpen(false)}>
              <div
                className="inline-flex flex-col bg-white"
                style={{
                  transform: "translate(3.5rem, 40%)",
                  width: "75%",
                  height: "100%",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mobileNavHeader">
                  <MobileNavToggle
                    mobileNavOpen={navOpen}
                    setMobileNavOpen={setNavOpen}
                    textColor={textColor}
                  />
                  <Link className="positionLogo" to="/">
                    <img
                      src={virufyLogo}
                      alt="virufy"
                      className="mr-8 inline-block w-20"
                    />
                  </Link>
                </div>
                <div>
                  <hr />
                  {navLinks.map((link, idx) => (
                    <>
                      <div
                        key={link.intlId}
                        onClick={() => expandNavbar(link)}
                        style={{ display: "flex", height: "auto" }}
                      >
                        <Link
                          to={`/${currentLocale}${link.path}`}
                          className={getLinkClasses(link)}
                        >
                          <div className="mobileNavLinks">
                            {intl.formatMessage({
                              id: link.intlId,
                              defaultMessage: link.defMsg,
                            })}{" "}
                          </div>
                        </Link>
                        <div
                          className={`arrow ${
                            toggle && expanded.includes(...link.id)
                              ? "open"
                              : null
                          }`} //need to add drop down links
                        >
                          <div>
                            {link.defMsg === "In the News" ||
                            link.defMsg === "FAQs" ? null : (
                              <IoIosArrowForward color="#8C8CA1" />
                            )}
                          </div>
                        </div>
                      </div>
                      {toggle && expanded.includes(...link.id) ? (
                        <div>
                          {link.dropDownLinks && (
                            // have to include locale in url or intl plugin will redirect without the id...

                            <div>
                              {link.dropDownLinks.map(
                                ({ intlId, sectionId, path }, idx) => (
                                  <li className="sublink">
                                    <Link
                                      className="sublink-link"
                                      // to={path}
                                      to={`/${currentLocale}${
                                        path || link.path
                                      }#${sectionId}`}
                                      key={idx}
                                    >
                                      {intlId === "language-selection" ? (
                                        <LangSelectMobile />
                                      ) : (
                                        intl.formatMessage({ id: intlId })
                                      )}
                                    </Link>
                                  </li>
                                )
                              )}
                            </div>
                          )}
                        </div>
                      ) : null}

                      <hr />
                    </>
                  ))}
                  <hr />
                </div>
                <div>
                  {buttonInvolved.map((button) => (
                    <div style={{ marginTop: "8rem" }}>
                      <Link
                        to={`/${currentLocale}${button.path}`}
                        className="getInvolvedBtn text-white bg-primary py-2 px-6"
                      >
                        {intl.formatMessage({
                          id: button.intlId,
                          defaultMessage: button.defMsg,
                        })}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </Overlay>
          }
        </>
      )}
    </IntlContextConsumer>
  );
};
