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
              style={{ width: "300px" }}
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
                style={{ width: "300px" }}
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
        <span key={index} className="fill-blank-black-text">{item.original}&nbsp;</span>
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
    <div className="fill-blank-item font-size-18 form-group mb-2">
      {exercise}
    </div>
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
const FillBlank = ({ data }) => {
  const [inputValue, setInputValue] = React.useState(
    data.map((item) => item.filter((elem) => elem.blank).map((elem) => ""))
  );
  const [isGraded, setIsGraded] = React.useState(false);
  const [isCorrect, setIsCorrect] = React.useState(
    data.map((item) => item.filter((elem) => elem.blank).map((elem) => false))
  );

  const handleInputChange = data.map((item, i) =>
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

  const handleGrade = (event) => {
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

  const handleClear = (event) => {
    setInputValue(
      data.map((item) => item.filter((elem) => elem.blank).map((elem) => ""))
    );
    setIsCorrect(
      data.map((item) => item.filter((elem) => elem.blank).map((elem) => false))
    );
    setIsGraded(false);
  };

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
      {isGraded ? (
        <button className="btn btn-actual-page" onClick={handleClear}>
          Reintentar
        </button>
      ) : (
        <button className="btn btn-actual-page" onClick={handleGrade}>
          Revisar
        </button>
      )}
    </div>
  );
};

export default FillBlank;
