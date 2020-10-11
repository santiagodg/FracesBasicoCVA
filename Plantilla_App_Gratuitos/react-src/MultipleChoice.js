import React from "react";
import "./MultipleChoice.css";

import Tooltip from "@material-ui/core/Tooltip";
import "./custom-tooltip.css";

const MultipleChoiceQuestion = ({
  question,
  options,
  correctValue,
  checked,
  onChange,
  graded,
}) => {
  return (
    <div className="mb-3">
      <p className="mb-0">
        {!graded ? (
          <span>{question.original}</span>
        ) : (
          <Tooltip title={question.translation} placement="top" classes={{tooltip: "font-size-18"}}>
            <span className="underline-on-hover">{question.original}</span>
          </Tooltip>
        )}
      </p>
      {options.map((opt, index) => {
        if (!graded) {
          return (
            <div key={index} className="form-check">
              <input
                type="radio"
                value={opt.original}
                checked={opt.original === checked}
                onChange={onChange}
                className="form-check-input"
              />
              &nbsp;&nbsp;
              <label className="form-check-label multiple-choice-label">
                {opt.original}
              </label>
            </div>
          );
        } else {
          return (
            <div key={index} className="form-check">
              <input
                type="radio"
                value={opt.original}
                checked={opt.original === checked}
                onChange={() => {}}
                className="form-check-input"
              />
              &nbsp;&nbsp;
              <Tooltip title={opt.translation} placement="top" classes={{tooltip: "font-size-18"}}>
                <label
                  className={
                    "form-check-label " +
                    "multiple-choice-label " +
                    "underline-on-hover " +
                    (opt.original === correctValue
                      ? opt.original === checked
                        ? "multiple-choice-label-checked-correct"
                        : "multiple-choice-label-unchecked-correct"
                      : opt.original === checked
                      ? "multiple-choice-label-checked-incorrect"
                      : "")
                  }
                >
                  {opt.original}
                </label>
              </Tooltip>
            </div>
          );
        }
      })}
    </div>
  );
};

const MultipleChoice = ({ data, graded, checked, onChange }) => {
  const questions = data.map((q, index) => (
    <MultipleChoiceQuestion
      key={index}
      question={q.question}
      options={q.options}
      correctValue={q.correct}
      checked={checked[index]}
      onChange={onChange[index]}
      graded={graded}
    />
  ));
  return <>{questions}</>;
};

export default MultipleChoice;
