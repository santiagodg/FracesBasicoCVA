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
    <div className="col-md-6 my-2">
      <p className="mb-0">
        {!graded ? (
          <span dangerouslySetInnerHTML={{ __html: question.original }} />
        ) : (
          <Tooltip
            title={
              <span
                dangerouslySetInnerHTML={{ __html: question.translation }}
              />
            }
            placement="top"
            classes={{ tooltip: "font-size-18" }}
          >
            <span
              className="underline-on-hover"
              dangerouslySetInnerHTML={{ __html: question.original }}
            />
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
              <Tooltip
                title={opt.translation}
                placement="top"
                classes={{ tooltip: "font-size-18" }}
              >
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

// const data = [
//   {
//     question: {
//       original: "Quelle activité Daniela practique-t-elle le mercredi après-midi?",
//       translation: "¿Qué actividad realiza Daniela los miércoles por la tarde?",
//     },
//     options: [
//       {
//         original: "Le tennis",
//         translation: "Tenis",
//       },
//     ],
//     correct: "Le tennis",
//   },
// ];

const MultipleChoice = ({ data, graded, checked, onChange }) => {
  let setGraded,
    setChecked,
    handleGrade,
    handleClear,
    gradedWasUndefined = false;

  if (graded === undefined) {
    gradedWasUndefined = true;
    [graded, setGraded] = React.useState(false);
    handleGrade = () => {
      setGraded(true);
    };
    handleClear = () => {
      setChecked(data.map((_) => null));
      setGraded(false);
    };
  }

  if (checked === undefined) {
    [checked, setChecked] = React.useState(data.map((_) => null));
  }

  if (onChange === undefined) {
    onChange = data.map((_, index) => (event) => {
      let newChecked = [...checked];
      newChecked[index] = event.target.value;
      setChecked(newChecked);
    });
  }

  return (
    <>
      <div className="row">
        {data.map((q, index) => (
          <MultipleChoiceQuestion
            key={index}
            question={q.question}
            options={q.options}
            correctValue={q.correct}
            checked={checked[index]}
            onChange={onChange[index]}
            graded={graded}
          />
        ))}
      </div>
      {gradedWasUndefined ? (
        graded ? (
          <button class="btn btn-actual-page" onClick={handleClear}>
            Reintentar
          </button>
        ) : (
          <button class="btn btn-actual-page" onClick={handleGrade}>
            Revisar
          </button>
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default MultipleChoice;
