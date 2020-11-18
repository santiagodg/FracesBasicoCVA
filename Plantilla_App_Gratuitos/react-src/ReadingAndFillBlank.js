import React from "react";

import Reading from "./Reading";
import FillBlank from "./FillBlank";

const ReadingAndFillBlank = ({ readingData, fillBlankData }) => {
  const [inputValue, setInputValue] = React.useState(
    fillBlankData.map((item) =>
      item.filter((elem) => elem.blank).map((elem) => "")
    )
  );
  const [isGraded, setIsGraded] = React.useState(false);
  const [isCorrect, setIsCorrect] = React.useState(
    fillBlankData.map((item) =>
      item.filter((elem) => elem.blank).map((elem) => false)
    )
  );

  const handleInputChange = fillBlankData.map((item, i) =>
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
    const newIsCorrect = fillBlankData.map((item, i) =>
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
      fillBlankData.map((item) =>
        item.filter((elem) => elem.blank).map((elem) => "")
      )
    );
    setIsCorrect(
      fillBlankData.map((item) =>
        item.filter((elem) => elem.blank).map((elem) => false)
      )
    );
    setIsGraded(false);
  };

  return (
    <>
      <Reading data={readingData} graded={isGraded} />
      <div className="px-md-5">
        <FillBlank
          data={fillBlankData}
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          isCorrect={isCorrect}
          isGraded={isGraded}
        />
        {!isGraded ? (
          <button className="btn btn-actual-page" onClick={handleGrade}>
            Revisar
          </button>
        ) : (
          <button className="btn btn-actual-page" onClick={handleClear}>
            Reintentar
          </button>
        )}
      </div>
    </>
  );
};

export default ReadingAndFillBlank;
