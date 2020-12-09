import React from "react";
import ReactDOM from "react-dom";

import MultipleChoice from "../MultipleChoice";

const exercise2MultipleChoiceData = [
  {
    question: {
      original: "Vous arrêtez quelqu’un dans la rue:",
      translation: "",
    },
    options: [
      {
        original: "Pardon, Monsieur.",
        translation: "",
      },
      {
        original: "Je voudrais...",
        translation: "",
      },
      {
        original: "Bon, je vous laisse...",
        translation: "",
      },
    ],
    correct: "Pardon, Monsieur.",
  },
  {
    question: {
      original: "Au téléphone, vous voulez terminer la conversation:",
      translation: "",
    },
    options: [
      {
        original: "Ne quittez pas",
        translation: "",
      },
      {
        original: "Bon, je vous laisse",
        translation: "",
      },
      {
        original: "Merci bien",
        translation: "",
      },
    ],
    correct: "Bon, je vous laisse",
  },
  {
    question: {
      original: "Vous avez un momento d’hésitation:",
      translation: "",
    },
    options: [
      {
        original: "Allô?",
        translation: "",
      },
      {
        original: "Voyons",
        translation: "",
      },
      {
        original: "Comment?",
        translation: "",
      },
    ],
    correct: "Comment?",
  },
  {
    question: {
      original: "Pendent une conversation, vous désirez demander une clarification:",
      translation: "",
    },
    options: [
      {
        original: "C’est-à-dire que...",
        translation: "",
      },
      {
        original: "Voyons...",
        translation: "",
      },
      {
        original: "Comment?",
        translation: "",
      },
    ],
    correct: "C’est-à-dire que...",
  },
  {
    question: {
      original: "Vous répondez au téléphone et demandez qui parle...",
      translation: "",
    },
    options: [
      {
        original: "Qui est á l’appareil?",
        translation: "",
      },
      {
        original: "Un instant, je vous prie?",
        translation: "",
      },
      {
        original: "Porriez-vous m’expliquer...?",
        translation: "",
      },
    ],
    correct: "Qui est á l’appareil?",
  },
];

ReactDOM.render(
  <MultipleChoice
    data={exercise2MultipleChoiceData}
  />,
  document.querySelector("#exercise-2")
);
