import React from "react";

import Reading from "./Reading";
import MultipleChoice from "./MultipleChoice";

const ReadingAndMultipleChoiceQuiz = ({ readingData, multipleChoiceData }) => {
  const [graded, setGraded] = React.useState(false);
  const [checked, setChecked] = React.useState(
    multipleChoiceData.map((_) => null)
  );

  const handleGrade = () => {
    setGraded(true);
  };

  const handleClear = () => {
    setGraded(false);
  }

  const handleRadioChange = multipleChoiceData.map((_, index) => (event) => {
    let newChecked = [...checked];
    newChecked[index] = event.target.value;
    setChecked(newChecked);
  });

  return (
    <>
      <Reading data={readingData} graded={graded} />
      <MultipleChoice data={multipleChoiceData} graded={graded} checked={checked} onChange={handleRadioChange} />
      {!graded ? (
        <button className="btn btn-actual-page" onClick={handleGrade}>Revisar</button>
      ) : (
        <button className="btn btn-actual-page" onClick={handleClear}>Reintentar</button>
      )}
    </>
  );
};

export default ReadingAndMultipleChoiceQuiz;
