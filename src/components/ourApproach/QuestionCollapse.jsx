import React, { useState } from "react";
import PropTypes from "prop-types";
import { useIntl } from "gatsby-plugin-intl";
import CloseIcon from "../../images/our-approach-page/close-icon.svg";
import PlusIcon from "../../images/our-approach-page/plus-icon.svg";

function QuestionCollapse({ categoryId, questionIds }) {
  const intl = useIntl();
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <div>
      <button
        className="flex items-center w-full text-left py-4 focus:outline-none"
        onClick={toggleOpen}
      >
        <h2 className="text-xl flex-grow">
          {intl.formatMessage({
            id: `ourApproach.faq.${categoryId}`,
          })}
        </h2>

        {open ? <CloseIcon /> : <PlusIcon />}
      </button>
      {open && (
        <ol className="list-decimal pl-5 pb-4 text-sm">
          {questionIds.map((questionId) => (
            <li className="text-secondary-200 font-bold mb-4" key={questionId}>
              {intl.formatMessage({
                id: `ourApproach.faq.${questionId}Q`,
              })}
              <p className="text-black font-normal mt-1">
                {intl.formatMessage({
                  id: `ourApproach.faq.${questionId}A`,
                })}
              </p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

QuestionCollapse.propTypes = {
  categoryId: PropTypes.string.isRequired,
  questionIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default QuestionCollapse;
