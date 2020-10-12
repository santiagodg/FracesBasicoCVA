import React from "react";
import ReactDOM from "react-dom";

import FillBlank from "../FillBlank";

const fillBlankData = [
  [
    {
      blank: false,
      original: "À",
      translation: "¿A qué hora llega?",
    },
    {
      blank: true,
      original: "quelle",
      translation: "",
    },
    {
      blank: false,
      original: "heure arrivez-vous?",
      translation: "¿A qué hora llega?",
    },
  ],
  [
    {
      blank: true,
      original: "Quelles",
      translation: "",
    },
    {
      blank: false,
      original: "pages étudiez-vous?",
      translation: "¿Que páginas estudias?",
    },
  ],
  [
    {
      blank: true,
      original: "Quelles",
      translation: "",
    },
    {
      blank: false,
      original: "sont tes matières préférées? ",
      translation: "¿Cuáles son tus materias preferidas?",
    },
  ],
  [
    {
      blank: true,
      original: "Quel",
      translation: "",
    },
    {
      blank: false,
      original: "sport aimes-tu le plus?",
      translation: "¿Que deporte te gusta más?",
    },
  ],
  [
    {
      blank: true,
      original: "Quel",
      translation: "",
    },
    {
      blank: false,
      original: "est le libre qu’ils lisent?",
      translation: "¿Que libro es el que ellos leen?",
    },
  ],
  [
    {
      blank: false,
      original: "De",
      translation: "¿De que color es tu suéter?",
    },
    {
      blank: true,
      original: "quelle",
      translation: "",
    },
    {
      blank: false,
      original: "couleur est ton pull?",
      translation: "¿De que color es tu suéter?",
    },
  ],
  [
    {
      blank: true,
      original: "Quel",
      translation: "",
    },
    {
      blank: false,
      original: "âge as-tu?",
      translation: "¿Cuántos años tienes?",
    },
  ],
  [
    {
      blank: false,
      original: "De",
      translation: "¿De que bolso hablas?",
    },
    {
      blank: true,
      original: "quelle",
      translation: "",
    },
    {
      blank: false,
      original: "sac est-ce que tu parles?",
      translation: "¿De que bolso hablas?",
    },
  ],
];

ReactDOM.render(
  <FillBlank data={fillBlankData} />,
  document.querySelector("#fillBlank")
);
