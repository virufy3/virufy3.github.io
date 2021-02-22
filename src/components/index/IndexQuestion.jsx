import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import QuestionCollapse from "../../components/index/QuestionCollapse";
import faqCategories from "../../data/index/questions_section";
// import faqCategories from "../../data/our-approach/faq";

export default () => {
  const intl = useIntl();
  return (
    <>
      <div className="container flex">
        <div className="flex-grow">
          <div className="divide-y-1/2 divide-divider-100 border-t-1/2 border-b-1/2 border-divider-100 lg:w-2/3">
            {faqCategories.map(({ categoryId, questionIds }) => (
              <QuestionCollapse
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
