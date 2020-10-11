import React from "react";
import ReactDOM from "react-dom";

import Translator from "../Translator";
import FillBlank from "../FillBlank";

const assetsPath = "../../assets/";

const translationData1 = [
  {
    phrase: "Comment t’appelles-tu?",
    translation: "¿Cómo te llamas?",
    audio: `${assetsPath}audio/Comment t'appelles-tu_.m4a`,
  },
  {
    phrase: "Où habitez-vous?",
    translation: "¿En donde vive?",
    audio: `${assetsPath}audio/Où habitez-vous_.m4a`,
  },
  {
    phrase: "Que faites-vous dans la vie?",
    translation: "¿A qué se dedica usted?",
    audio: `${assetsPath}audio/Que faites-vous dans la vie_.m4a`,
  },
];

const translationData2 = [
  {
    phrase: "Comment est-ce que tu t’appelles?",
    translation: "¿Cómo te llamas?",
    audio: `${assetsPath}audio/Comment est-ce que tu t'appelles_.m4a`,
  },
  {
    phrase: "Où est-ce que vous habitez?",
    translation: "¿En donde vive?",
    audio: `${assetsPath}audio/Où est-ce que vous habitez_.m4a`,
  },
  {
    phrase: "Qu’est-ce qu’il fait dans la vie?",
    translation: "¿A qué se dedica él?",
    audio: `${assetsPath}audio/Qu'est-ce qu’il fait dans la vie_.m4a`,
  },
];

const translationData3 = [
  {
    phrase: "Tu t’appelles comment?",
    translation: "¿Tu te llamas cómo?",
    audio: `${assetsPath}audio/Tu t'appelles comment_.m4a`,
  },
  {
    phrase: "Vous habitez où?",
    translation: "¿En donde vive?",
    audio: `${assetsPath}audio/Vous habitez où_.m4a`,
  },
  {
    phrase: "Elle fait quoi dans la vie?",
    translation: "¿A qué se dedica ella?",
    audio: `${assetsPath}audio/Elle fait quoi dans la vie_.m4a`,
  },
];

const fillBlankData1 = [
  [
    {
      blank: false,
      original: "Tu aimes la glace (inversion):",
      translation: "Te gusta el helado",
    },
    {
      blank: true,
      original: "Aimes-tu la glace?",
      translation: "",
    },
    {
      blank: false,
      original: ".",
      translation: ".",
    },
  ],
  [
    {
      blank: false,
      original: "Elle attend le bus (est-ce que):",
      translation: "Ella espera el autobús",
    },
    {
      blank: true,
      original: "Est-ce qu'elle attend le bus?",
      translation: "",
    },
    {
      blank: false,
      original: ".",
      translation: ".",
    },
  ],
  [
    {
      blank: false,
      original: "Je sus sympa (n’est-ce pas):",
      translation: "Soy simpático",
    },
    {
      blank: true,
      original: "Je suis sympa, n’est-ce pas?",
      translation: "",
    },
    {
      blank: false,
      original: ".",
      translation: ".",
    },
  ],
];

ReactDOM.render(
  <Translator data={translationData1} />,
  document.querySelector("#translator1")
);

ReactDOM.render(
  <Translator data={translationData2} />,
  document.querySelector("#translator2")
);

ReactDOM.render(
  <Translator data={translationData3} />,
  document.querySelector("#translator3")
);

ReactDOM.render(
  <FillBlank data={fillBlankData1} />,
  document.querySelector("#fillBlank1")
);
