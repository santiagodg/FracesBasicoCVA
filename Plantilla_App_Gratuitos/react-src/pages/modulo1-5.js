import React from "react";
import ReactDOM from "react-dom";

import Pronunciation from "../Pronunciation";
import Translator from "../Translator";

const assetsPath = "../../assets/";

const pronunciationData1 = [
  {
    phrase: "L'",
    translation: "El (antes de vocal)",
    audio: `${assetsPath}audio/L'.m4a`,
  },
  {
    phrase: "Le/La",
    translation: "El/La",
    audio: `${assetsPath}audio/Le_La.m4a`,
  },
  {
    phrase: "Les",
    translation: "Los / Las",
    audio: `${assetsPath}audio/Les.m4a`,
  },
];

const pronunciationData2 = [
  {
    phrase: "Un",
    translation: "un (masculino)",
    audio: `${assetsPath}audio/Un.m4a`,
  },
  {
    phrase: "Une",
    translation: "una (femenino)",
    audio: `${assetsPath}audio/Une.m4a`,
  },
  {
    phrase: "Des",
    translation: "unos, unas (de+les)",
    audio: `${assetsPath}audio/Des.m4a`,
  },
  {
    phrase: "Du",
    translation: "“algo de” (masculino)",
    audio: `${assetsPath}audio/Du.m4a`,
  },
  {
    phrase: "De la",
    translation: "“algo de” (femenino)",
    audio: `${assetsPath}audio/De la.m4a`,
  },
];

const translationData1 = [
  {
    phrase: "Le garçon joue",
    translation: "El chico juega",
    audio: `${assetsPath}audio/Le garçon joue.m4a`,
  },
  {
    phrase: "L'homme marche",
    translation: "El hombre camina",
    audio: `${assetsPath}audio/L'homme marche.m4a`,
  },
  {
    phrase: "La femme danse",
    translation: "La mujer baila",
    audio: `${assetsPath}audio/La femme danse.m4a`,
  },
  {
    phrase: "Les hommes chantent",
    translation: "Los hombres cantan",
    audio: `${assetsPath}audio/Les hommes chantent.m4a`,
  },
  {
    phrase: "Les femmes lisent",
    translation: "Las mujeres leen",
    audio: `${assetsPath}audio/Les femmes lisent.m4a`,
  },
];

const translationData2 = [
  {
    phrase: "Léna est une copine de Maxime.",
    translation: "Léna es una amiga de Maxime.",
    audio: `${assetsPath}audio/Léna est une copine de Maxime.m4a`,
  },
  {
    phrase: "J'achète un stylo.",
    translation: "Yo compré una pluma.",
    audio: `${assetsPath}audio/J'achète un stylo.m4a`,
  },
  {
    phrase: "Il s'occupe des enfants.",
    translation: "El se ocupa de los niños.",
    audio: `${assetsPath}audio/Il s'occupe des enfants.m4a`,
  },
  {
    phrase: "La lectura du journal du dimanche.",
    translation: "La lectura del periódico del domingo.",
    audio: `${assetsPath}audio/La lectura du journal du dimanche.m4a`,
  },
  {
    phrase: "Je parle de la France.",
    translation: "Yo hablo de Francia.",
    audio: `${assetsPath}audio/Je parle de la France.m4a`,
  },
];

ReactDOM.render(
  <Pronunciation data={pronunciationData1} />,
  document.querySelector("#pronunciation1")
);

ReactDOM.render(
  <Pronunciation data={pronunciationData2} />,
  document.querySelector("#pronunciation2")
);

ReactDOM.render(
  <Translator data={translationData1} />,
  document.querySelector("#translator1")
);

ReactDOM.render(
  <Translator data={translationData2} />,
  document.querySelector("#translator2")
);
