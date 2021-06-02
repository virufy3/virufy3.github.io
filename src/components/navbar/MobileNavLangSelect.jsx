import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";
import { Link } from "gatsby";

export default ({ bgColor, textColor }) => {
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
          <>
            {languages.map((lang) => (
              <Link
                onClick={() => changeLocale(lang)}
                to={`/${currentLocale}/`}
              >
                <div className="mobileNavLinks">{langText[lang]}</div>
              </Link>
            ))}
          </>
        );
      }}
    </IntlContextConsumer>
  );
};
