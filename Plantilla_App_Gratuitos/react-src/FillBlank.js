import React, { Fragment } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import "./FillBlank.css";
import "./custom-tooltip.css";

const FillBlankItem = ({
  data,
  isGraded,
  isCorrect,
  inputValue,
  handleInputChange,
}) => {
  let inputsCreated = 0;
  let exercise = data.map((item, index) => {
    let res;
    if (item.blank) {
      let className = "";
      if (isGraded) {
        if (isCorrect[inputsCreated]) {
          className += "fill-blank-item-correct ";
        } else {
          className += "fill-blank-item-incorrect ";
        }
      }

      if (!isGraded) {
        res = (
          <Fragment key={index}>
            &nbsp;
            <input
              type="text"
              className={`fill-blank-black-text form-control d-inline-block ${className}`}
              style={{ maxWidth: "250px" }}
              value={inputValue[inputsCreated]}
              onChange={handleInputChange[inputsCreated]}
            ></input>
            &nbsp;
          </Fragment>
        );
      } else {
        res = (
          <Fragment key={index}>
            &nbsp;
            <Tooltip
              title={item.original}
              placement="top"
              classes={{ tooltip: "custom-tooltip" }}
            >
              <input
                type="text"
                className={`fill-blank-black-text form-control d-inline-block ${className}`}
                style={{ maxWidth: "250px" }}
                value={inputValue[inputsCreated]}
                onChange={handleInputChange[inputsCreated]}
              ></input>
            </Tooltip>
            &nbsp;
          </Fragment>
        );
      }
      inputsCreated++;
    } else {
      res = !isGraded ? (
        <span key={index} className="fill-blank-black-text">
          {item.original}&nbsp;
        </span>
      ) : (
        <Tooltip
          key={index}
          title={item.translation}
          placement="top"
          classes={{ tooltip: "custom-tooltip" }}
        >
          <span className="fill-blank-black-text fill-blank-item-tooltip-on-hover">
            {item.original}&nbsp;
          </span>
        </Tooltip>
      );
    }
    return res;
  });

  return (
    <>
      <div className="fill-blank-item font-size-16 form-group my-1">
        {exercise}
      </div>
      <hr className="my-3 my-sm-1" />
    </>
  );
};

// [
//   [
//     {
//       blank: false,
//       original: "Mon fils a une sœur.",
//       translation: "Mi hijo tiene una hermana.",
//     },
//     {
//       blank: false,
//       original: "Elle est aussi ma",
//       translation: "Ella es también mi",
//     },
//     {
//       blank: true,
//       original: "fille",
//       translation: "hija",
//     },
//     {
//       blank: false,
//       original: ".",
//       translation: ".",
//     },
//   ],
// ]
const FillBlank = ({
  data,
  inputValue,
  handleInputChange,
  isCorrect,
  isGraded,
}) => {
  let setInputValue,
    setIsGraded,
    setIsCorrect,
    handleGrade,
    handleClear,
    gradedWasUndefined = false;

  if (inputValue === undefined) {
    [inputValue, setInputValue] = React.useState(
      data.map((item) => item.filter((elem) => elem.blank).map((elem) => ""))
    );
  }

  if (isGraded === undefined) {
    gradedWasUndefined = true;
    [isGraded, setIsGraded] = React.useState(false);
    handleGrade = (event) => {
      const newIsCorrect = data.map((item, i) =>
        item
          .filter((elem) => elem.blank)
          .map((elem, j) => {
            if (inputValue[i][j] === elem.original) return true;
            else return false;
          })
      );
      setIsCorrect(newIsCorrect);
      setIsGraded(true);
    };

    handleClear = (event) => {
      setInputValue(
        data.map((item) => item.filter((elem) => elem.blank).map((elem) => ""))
      );
      setIsCorrect(
        data.map((item) =>
          item.filter((elem) => elem.blank).map((elem) => false)
        )
      );
      setIsGraded(false);
    };
  }

  if (isCorrect === undefined) {
    [isCorrect, setIsCorrect] = React.useState(
      data.map((item) => item.filter((elem) => elem.blank).map((elem) => false))
    );
  }

  if (handleInputChange === undefined) {
    handleInputChange = data.map((item, i) =>
      !isGraded
        ? item
            .filter((elem) => elem.blank)
            .map((_, j) => (event) => {
              let newInputValue = [...inputValue];
              newInputValue[i][j] = event.target.value;
              setInputValue(newInputValue);
            })
        : () => {}
    );
  }

  const fillBlankItems = data.map((item, index) => (
    <FillBlankItem
      key={index}
      data={item}
      inputValue={inputValue[index]}
      handleInputChange={handleInputChange[index]}
      isCorrect={isCorrect[index]}
      isGraded={isGraded}
    />
  ));

  return (
    <div>
      <div className="fill-blank">{fillBlankItems}</div>
      {gradedWasUndefined ? (
        isGraded ? (
          <button className="btn btn-actual-page" onClick={handleClear}>
            Reintentar
          </button>
        ) : (
          <button className="btn btn-actual-page" onClick={handleGrade}>
            Revisar
          </button>
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default FillBlank;
