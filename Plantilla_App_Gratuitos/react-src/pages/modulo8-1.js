import React from "react";
import ReactDOM from "react-dom";

import MultipleChoice from "../MultipleChoice";

const exercise1MultipleChoiceData = [
  {
    question: {
      original: "Où est partie étudier Emilie?",
      translation: "",
    },
    options: [
      {
        original: "À Paris",
        translation: "",
      },
      {
        original: "À Londres",
        translation: "",
      },
      {
        original: "En France",
        translation: "",
      },
      {
        original: "À Oxford",
        translation: "",
      },
    ],
    correct: "À Londres",
  },
  {
    question: {
      original: "Qu’étudie Emilie?",
      translation: "",
    },
    options: [
      {
        original: "Le commerce",
        translation: "",
      },
      {
        original: "Le tourisme",
        translation: "",
      },
      {
        original: "Le marketing",
        translation: "",
      },
      {
        original: "Le droit",
        translation: "",
      },
    ],
    correct: "Le marketing",
  },
  {
    question: {
      original: "De quelle couleur sont les bus à Londres?",
      translation: "",
    },
    options: [
      {
        original: "Bleus",
        translation: "",
      },
      {
        original: "Blancs",
        translation: "",
      },
      {
        original: "Verts",
        translation: "",
      },
      {
        original: "Rouges",
        translation: "",
      },
    ],
    correct: "Rouges",
  },
  {
    question: {
      original: "Où habite Emilie?",
      translation: "",
    },
    options: [
      {
        original: "Chez ses parents",
        translation: "",
      },
      {
        original: "Dans un appartement",
        translation: "",
      },
      {
        original: "À l’hôtel",
        translation: "",
      },
      {
        original: "À l’université",
        translation: "",
      },
    ],
    correct: "Dans un appartement",
  },
  {
    question: {
      original: "Où va-t-elle aller voir des concerts?",
      translation: "",
    },
    options: [
      {
        original: "À Oxford Street",
        translation: "",
      },
      {
        original: "Au musée",
        translation: "",
      },
      {
        original: "À Covent Garden",
        translation: "",
      },
      {
        original: "À Camden Town",
        translation: "",
      },
    ],
    correct: "À Camden Town",
  },
  {
    question: {
      original: "Quand Sonia va-t-elle venir à Londres?",
      translation: "",
    },
    options: [
      {
        original: "Demain",
        translation: "",
      },
      {
        original: "C’est Emilie qui va aller à Paris",
        translation: "",
      },
      {
        original: "La semaine prochaine",
        translation: "",
      },
      {
        original: "Le mois prochain",
        translation: "",
      },
    ],
    correct: "Le mois prochain",
  },
];

ReactDOM.render(
  <MultipleChoice
    data={exercise1MultipleChoiceData}
  />,
  document.querySelector("#exercise-1")
);
