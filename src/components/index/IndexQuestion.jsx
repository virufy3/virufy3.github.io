import React, { useState } from "react";
import PropTypes from "prop-types";
import { useIntl } from "gatsby-plugin-intl";

function QuestionCollapse({ categoryId, questionIds }) {
  const intl = useIntl();
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <div className="px-4 w-8/12	">
      <button className="flex w-full text-left py-3" onClick={toggleOpen}>
        <h2 className="text-xl flex-grow">
          {intl.formatMessage({
            id: `index.section3.${categoryId}Q`,
          })}
        </h2>
        <h3 className="float-right mt-1">{open ? "\u2716" : "\u2795"}</h3>
      </button>
      {open && (
        <ol className="list-decimal pl-5 py-5 border-solid border-t-1/2 border-divider-200">
          {questionIds.map((questionId) => (
            <li className="text-secondary-200 font-bold mb-7" key={questionId}>
              {intl.formatMessage({
                id: `index.section3.${questionId}A`,
              })}
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
