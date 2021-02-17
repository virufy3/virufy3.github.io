import React from "React";
import { IntlContextConsumer } from "gatsby-plugin-intl";

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
          <select
            value={currentLocale}
            onChange={(event) => changeLocale(event.target.value)}
            className={`${bgColor} ${textColor}`}
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
