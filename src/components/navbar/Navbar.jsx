import React, { useState } from "react";
import { changeLocale, IntlContextConsumer, useIntl } from "gatsby-plugin-intl";
import { Link } from "gatsby";
import virufyLogoLight from "../../images/logos/virufy-logo.svg";
import virufyLogoDark from "../../images/logos/virufy_logo_whitetext.png";
import { useLocation } from "@reach/router";
import MobileNav from "./MobileNav";

const navLinks = [
  {
    id: "nav.our_approach",
    defMsg: "Our Approach",
    path: "/our-approach",
    styles: "mr-6",
  },
  {
    id: "nav.our_org",
    defMsg: "Our Org",
    path: "/team",
    styles: "mr-6",
  },
  {
    id: "nav.in_the_news",
    defMsg: "In the News",
    path: "/news",
    styles: "mr-6",
  },
  {
    id: "nav.get_involved",
    defMsg: "GET INVOLVED",
    path: "/get-involved",
    styles: "text-white bg-primary py-2 px-6",
  },
];

// const MobileNav = ({ intl, textColor }) => {
//   return (
//     <div className="flex flex-wrap px-4 py-4 border-t border-gray-200">
//       {navLinks.map((link) => (
//         <Link className={`w-1/2 no-underline ${textColor}`} to={link.path}>
//           {intl.formatMessage({ id: link.id, defaultMessage: link.defMsg })}
//         </Link>
//       ))}
//     </div>
//   );
// };

// const LangSelect = ({ bgColor, textColor }) => {
//   const langText = {
//     en: "Language - EN",
//     es: "Español - ES",
//     pt: "Português - PT",
//     hi: "हिन्दी - HI",
//     ja: "日本語 - JA",
//   };
//   return (
//     <IntlContextConsumer>
//       {({ languages, language: currentLocale }) => {
//         return (
//           <select
//             value={currentLocale}
//             onChange={(event) => changeLocale(event.target.value)}
//             className={`${bgColor} ${textColor}`}
//           >
//             {languages.map((lang) => (
//               <option key={lang} value={lang}>
//                 {langText[lang]}
//               </option>
//             ))}
//           </select>
//         );
//       }}
//     </IntlContextConsumer>
//   );
// };

export default () => {
  const intl = useIntl();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  //prettier-ignore
  const [
    bgColor, 
    textColor, 
    virufyLogo
  ] = location.pathname.includes("/team")
    ? ["bg-black", "text-white", virufyLogoDark]
    : ["bg-white", "text-black", virufyLogoLight];

  const getLinkClasses = (link) => {
    return `hidden no-underline ${textColor} lg:inline-block ${link.styles}\
    ${
      link.path &&
      location.pathname.includes(link.path) &&
      "font-bold border-b-4 border-green"
    }`;
  };

  return (
    <nav className={`${bgColor}`}>
      <MobileNav
        textColor={textColor}
        bgColor={bgColor}
        virufyLogo={virufyLogo}
      />
      {/* <div className="flex items-center justify-between py-3 px-6">
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
        <div className="flex items-center justify-between md:py-4 text-base">
          <span className="mr-2 lg:mr-5">
            <LangSelect bgColor={bgColor} textColor={textColor} />
          </span>
          {navLinks.map((link) => (
            <Link className={getLinkClasses(link)} to={link.path}>
              {intl.formatMessage({ id: link.id, defaultMessage: link.defMsg })}
            </Link>
          ))}
          <MobileNavToggle
            mobileNavOpen={mobileNavOpen}
            setMobileNavOpen={setMobileNavOpen}
            textColor={textColor}
          />
        </div>
      </div>
      {mobileNavOpen && <MobileNav textColor={textColor} intl={intl} />} */}
    </nav>
  );
};
