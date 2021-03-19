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
        className="flex w-full text-left py-3 focus:outline-none"
        onClick={toggleOpen}
      >
        <h2 className="text-xl flex-grow">
          {intl.formatMessage({
            id: `index.faq.${categoryId}`,
          })}
        </h2>
        {open ? <CloseIcon /> : <PlusIcon />}
      </button>
      {open && (
        <ul className=" pl-5 py-5 ">
          {questionIds.map((questionId) => (
            <li className="text-secondary-200 font-bold mb-7" key={questionId}>
              <p className="text-black font-normal mt-2">
                {intl.formatMessage({
                  id: `index.faq.${questionId}A`,
                })}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

QuestionCollapse.propTypes = {
  categoryId: PropTypes.string.isRequired,
  questionIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default QuestionCollapse;
