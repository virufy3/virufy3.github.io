import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import CookieCollapse from "./CookieCollapse";
import cookiesCategories from "../../data/cookiepolicy/cookies_section";

export default () => {
  const intl = useIntl();
  return (
    <>
      <div className="flex">
        <div className="flex-grow">
          <div className="divide-y-1/2 divide-divider-200 border-t-1/2 border-b-1/2 border-divider-200">
            {cookiesCategories.map(({ categoryId, questionIds }) => (
              <CookieCollapse
                categoryId={categoryId}
                questionIds={questionIds}
                key={categoryId}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
