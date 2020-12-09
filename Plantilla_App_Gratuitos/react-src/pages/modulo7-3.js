import React from "react";
import ReactDOM from "react-dom";

import MultipleChoice from "../MultipleChoice";

const exercise5MultipleChoiceData = [
  {
    question: {
      original: "1. Pour manger j'utilise...",
      translation: "1. Para comer utilizo...",
    },
    options: [
      {
        original: "La bouche",
        translation: "La boca",
      },
      {
        original: "L'oreille",
        translation: "La oreja",
      },
      {
        original: "La tête",
        translation: "La cabeza",
      },
    ],
    correct: "La bouche",
  },
  {
    question: {
      original: "2.	Pour marcher j'ai besoin...",
      translation: "2. Para caminar necesito...",
    },
    options: [
      {
        original: "Des mains",
        translation: "Manos",
      },
      {
        original: "Des pieds",
        translation: "Pies",
      },
      {
        original: "Du ventre",
        translation: "Desde el vientre",
      },
    ],
    correct: "Des pieds",
  },
  {
    question: {
      original: "3. Pour toucher j'utilise...",
      translation: "3. Para tocar utilizo ...",
    },
    options: [
      {
        original: "L'oreille",
        translation: "La oreja",
      },
      {
        original: "Les yeux",
        translation: "Ojos",
      },
      {
        original: "Les mains",
        translation: "Manos",
      },
    ],
    correct: "Les mains",
  },
];

ReactDOM.render(
  <MultipleChoice
    data={exercise5MultipleChoiceData}
  />,
  document.querySelector("#exercise-5")
);
