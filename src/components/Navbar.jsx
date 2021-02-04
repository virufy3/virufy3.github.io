import React, { useState } from "react";
import { changeLocale, IntlContextConsumer, useIntl } from "gatsby-plugin-intl";
import { Link } from "gatsby";
import virufyLogo from "../images/logos/virufy-logo.svg";

// svg for opening nav
const HamburgerOpen = () => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-6 menu"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    ></path>
  </svg>
);

// svg for closing nav
const HamburgerClose = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 x">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

const navLinks = [
  {
    id: "nav.our_approach",
    defMsg: "Our Approach",
    path: "/our-approach",
    styles: "mr-6",
  },
  { id: "nav.our_org", defMsg: "Our Org", path: "", styles: "mr-6" },
  { id: "nav.in_the_news", defMsg: "In the News", path: "", styles: "mr-6" },
  {
    id: "nav.get_involved",
    defMsg: "GET INVOLVED",
    path: "/get-involved",
    styles: "text-white bg-primary py-2 px-6",
  },
];

const MobileNav = ({ intl }) => {
  return (
    <div className="flex flex-wrap px-4 py-4 border-t border-gray-200">
      {navLinks.map((link) => (
        <Link className="w-1/2 no-underline text-black" to={link.path}>
          {intl.formatMessage({ id: link.id, defaultMessage: link.defMsg })}
        </Link>
      ))}
    </div>
  );
};

const LangSelect = () => {
  const langText = {
    en: "Language - EN",
    es: "Español - ES",
    pt: "Português - PT",
    hi: "हिन्दी - HI",
    ja: "日本語 - JA",
  };
  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => {
        return (
          <select
            value={currentLocale}
            onChange={(event) => changeLocale(event.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {langText[lang]}
              </option>
            ))}
          </select>
        );
      }}
    </IntlContextConsumer>
  );
};

const MobileNavToggle = ({ mobileNavOpen, setMobileNavOpen }) => {
  const toggleNav = () => setMobileNavOpen(!mobileNavOpen);

  return (
    <button
      className="inline-block cursor-pointer lg:hidden"
      onClick={toggleNav}
    >
      {mobileNavOpen ? <HamburgerClose /> : <HamburgerOpen />}
    </button>
  );
};

export default () => {
  const intl = useIntl();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <nav>
      <div className="flex items-center justify-between py-3 px-6">
        <Link to="/">
          <img
            className="logo"
            src={virufyLogo}
            alt={intl.formatMessage({
              id: "nav.logoAlt",
              defaultMessage: "home",
            })}
          />
        </Link>
        <div className="flex items-center justify-between md:py-4">
          <span className="mr-2 lg:mr-5">
            <LangSelect />
          </span>
          {navLinks.map((link) => (
            <Link
              className={`hidden no-underline text-black lg:inline-block ${link.styles}`}
              to={link.path}
            >
              {intl.formatMessage({ id: link.id, defaultMessage: link.defMsg })}
            </Link>
          ))}
          <MobileNavToggle
            mobileNavOpen={mobileNavOpen}
            setMobileNavOpen={setMobileNavOpen}
          />
        </div>
      </div>
      {mobileNavOpen && <MobileNav intl={intl} />}
    </nav>
  );
};
