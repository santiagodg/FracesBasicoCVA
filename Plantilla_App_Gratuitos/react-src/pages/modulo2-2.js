import React from "react";
import ReactDOM from "react-dom";

import ChooseBlank from "../ChooseBlank";
import ChooseBetween from "../ChooseBetween";

const chooseBlankData = [
  {
    firstPart: "Elle téléphone à",
    secondPart: "amis.",
    options: [
      {
        answer: "leur",
        correct: false,
      },
      {
        answer: "mon",
        correct: false,
      },
      {
        answer: "ses",
        correct: true,
      },
    ],
    translation: "Ella llama a sus amigos.",
  },
  {
    firstPart: "J'ai besoin d'une boîte pour ranger",
    secondPart: "affaires.",
    options: [
      {
        answer: "mes",
        correct: true,
      },
      {
        answer: "notre",
        correct: false,
      },
      {
        answer: "ton",
        correct: false,
      },
    ],
    translation: "Necesito una caja para ordenar mis cosas.",
  },
  {
    firstPart: "Quelle est",
    secondPart: "profession?",
    options: [
      {
        answer: "leurs",
        correct: false,
      },
      {
        answer: "vos",
        correct: false,
      },
      {
        answer: "votre",
        correct: true,
      },
    ],
    translation: "¿Cuál es tu profesión?",
  },
  {
    firstPart: "Quels sont",
    secondPart: "loisirs?",
    options: [
      {
        answer: "ton",
        correct: false,
      },
      {
        answer: "vos",
        correct: true,
      },
      {
        answer: "votre",
        correct: false,
      },
    ],
    translation: "¿Cuáles son tus aficiones?",
  },
  {
    firstPart: "Ce chien obéit à tout le monde, sauf à",
    secondPart: "maître.",
    options: [
      {
        answer: "mes",
        correct: false,
      },
      {
        answer: "vos",
        correct: false,
      },
      {
        answer: "son",
        correct: true,
      },
    ],
    translation: "Ese perro obedece a todo el mundo, menos a su dueño.",
  },
  {
    firstPart: "Il parle à",
    secondPart: "amie.",
    options: [
      {
        answer: "sa",
        correct: false,
      },
      {
        answer: "ses",
        correct: false,
      },
      {
        answer: "son",
        correct: true,
      },
    ],
    translation: "",
  },
  {
    firstPart: "Nous sommes voisins.",
    secondPart: "appartement est à côté du mien.",
    options: [
      {
        answer: "Mon",
        correct: false,
      },
      {
        answer: "Notre",
        correct: false,
      },
      {
        answer: "Son",
        correct: true,
      },
    ],
    translation: "Nosotros somos vecinos. Su apartamento esta al lado del mío.",
  },
];

const chooseBetweenData = [
  {
    textParts: [
      "Camille? Elle est dans",
      "chambre.",
    ],
    options: [
      [
        {
          answer: "sa",
          correct: true,
        },
        {
          answer: "son",
          correct: false,
        },
      ],
    ],
  },
  {
    textParts: [
      "Vous allez bien? Oui, je vais bien. Et",
      "sœur?",
    ],
    options: [
      [
        {
          answer: "ma",
          correct: false,
        },
        {
          answer: "votre",
          correct: true,
        },
      ],
    ],
  },
  {
    textParts: [
      "C'est l'amie de",
      "fils.",
    ],
    options: [
      [
        {
          answer: "mon",
          correct: true,
        },
        {
          answer: "ma",
          correct: false,
        },
      ],
    ],
  },
  {
    textParts: [
      "C’est",
      "ami? -Non, c’est",
      "petit ami."
    ],
    options: [
      [
        {
          answer: "ton",
          correct: true,
        },
        {
          answer: "ta",
          correct: false,
        },
      ],
      [
        {
          answer: "mon",
          correct: true,
        },
        {
          answer: "ma",
          correct: false,
        },
      ],
    ],
  },
  {
    textParts: [
      "Gil est à Paris maintenant? Oui, j'ai",
      "adresse.",
    ],
    options: [
      [
        {
          answer: "son",
          correct: true,
        },
        {
          answer: "sa",
          correct: false,
        },
      ],
    ],
  },
  {
    textParts: [
      "Tu as mon numéro? Oui, j'ai",
      "numéro de téléphone.",
    ],
    options: [
      [
        {
          answer: "ton",
          correct: true,
        },
        {
          answer: "votre",
          correct: false,
        },
      ],
    ],
  },
];

ReactDOM.render(
  <ChooseBlank data={chooseBlankData} />,
  document.querySelector("#chooseBlank")
);

ReactDOM.render(
  <ChooseBetween data={chooseBetweenData} />,
  document.querySelector("#chooseBetween")
);