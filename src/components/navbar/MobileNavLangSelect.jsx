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

  const locale = {
    en: "en",
    es: "es",
    pt: "pt",
  };

  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => {
        return (
          <>
            {languages.map((lang) => (
              <Link
                style={{ textDecoration: "none" }}
                onClick={() => changeLocale(lang)}
                to={`/${locale[lang]}/`}
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
