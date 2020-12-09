import React from "react";

import Reading from "./Reading";
import MultipleChoice from "./MultipleChoice";

// const readingData = [
//   [
//     {
//       original: "Le lundi, Daniela reste toute la journée à l’université.",
//       translation: "El lunes, Daniela se queda en la universidad todo el día.",
//     },
//   ],
// ];

// const multipleChoiceData = [
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

const ReadingAndMultipleChoiceQuiz = ({ readingData, multipleChoiceData }) => {
  const [graded, setGraded] = React.useState(false);
  const [checked, setChecked] = React.useState(
    multipleChoiceData.map((_) => null)
  );

  const handleGrade = () => {
    setGraded(true);
  }

  const handleClear = () => {
    setChecked(multipleChoiceData.map((_) => null));
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
