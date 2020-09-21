import React from "react";
import ReactDOM from "react-dom";

import Translator from "../Translator";
import Dialog from "../Dialog";
import Pronunciation from "../Pronunciation";

const assetsPath = "../../assets/";

const pronunciationData = [
  {
    phrase: "Salut",
    translation: "Hola",
    audio: `${assetsPath}audio/Salut.m4a`,
  },
  {
    phrase: "Au Revoir",
    translation: "Adios",
    audio: `${assetsPath}audio/Au Revoir.m4a`,
  },
  {
    phrase: "A plus tard",
    translation: "Nos vemos / Hasta luego",
    audio: `${assetsPath}audio/A plus tard.m4a`,
  },
  {
    phrase: "A bientôt",
    translation: "Hasta pronto",
    audio: `${assetsPath}audio/A bientôt.m4a`,
  },
  {
    phrase: "A demain",
    translation: "Hasta mañana",
    audio: `${assetsPath}audio/A demain.m4a`,
  },
  {
    phrase: "Bienvenue",
    translation: "Bienvenido",
    audio: `${assetsPath}audio/Bienvenue.m4a`,
  },
  {
    phrase: "Bonjour",
    translation: "Buenos días",
    audio: `${assetsPath}audio/Bonjour.m4a`,
  },
  {
    phrase: "Bon aprés-midi",
    translation: "Buenas tardes",
    audio: `${assetsPath}audio/Bon aprés-midi.m4a`,
  },
  {
    phrase: "Bonsoir",
    translation: "Buenas noches",
    audio: `${assetsPath}audio/Bonsoir.m4a`,
  },
  {
    phrase: "Bonne soirée",
    translation: "Buenas tardes/noches",
    audio: `${assetsPath}audio/Bonne soirée.m4a`,
  },
  {
    phrase: "Bonne nuit",
    translation: "Buenas noches (únicamente cuando ya te vas a dormir)",
    audio: `${assetsPath}audio/Bonne nuit.m4a`,
  },
];

const dialogData = {
  title: "Diálogo 1",
  audio: `${assetsPath}audio/Diálogo1.m4a`,
  lines: [
    {
      character: "Caroline",
      text: "Salut François, ça va?",
    },
    {
      character: "François",
      text: "Oui et toi, tu vais bien Caroline?",
    },
    {
      character: "Caroline",
      text: "Ça va.",
    },
    {
      character: "François",
      text: "Bon, à demain!",
    },
    {
      character: "Caroline",
      text: "Non, demain on est Samedi!",
    },
    {
      character: "François",
      text: "Ah! Oui c’est vrai, alors à Lundi!",
    },
    {
      character: "Caroline",
      text: "Bonne soirée!",
    },
  ],
};

const translationData = [
  {
    phrase: "Comment ça va?",
    translation: "¿Cómo estás?",
    audio: `${assetsPath}audio/Comment ça va_.m4a`,
  },
  {
    phrase: "Comment allez-vous?",
    translation: "¿Cómo está?",
    audio: `${assetsPath}audio/Comment allez-vous_.m4a`,
  },
  {
    phrase: "Qu’est-ce que tu racontes?",
    translation: "¿Qué tal? / ¿Qué onda?",
    audio: `${assetsPath}audio/Qu’est-ce que tu racontes_.m4a`,
  },
  {
    phrase: "Tout va bien?",
    translation: "¿Todo va bien?",
    audio: `${assetsPath}audio/Tout va bien_.m4a`,
  },
  {
    phrase: "Prends soin de toi",
    translation: "Cuidate",
    audio: `${assetsPath}audio/Prends soin de toi.m4a`,
  },
  {
    phrase: "Bonne chance",
    translation: "Buena suerte",
    audio: `${assetsPath}audio/Bonne chance.m4a`,
  },
  {
    phrase: "Je vais bien",
    translation: "Estoy bien",
    audio: `${assetsPath}audio/Je vais bien.m4a`,
  },
  {
    phrase: "Bien",
    translation: "Bien",
    audio: `${assetsPath}audio/Bien.m4a`,
  },
  {
    phrase: "Mal",
    translation: "Mal",
    audio: `${assetsPath}audio/Mal.m4a`,
  },
  {
    phrase: "Très bien",
    translation: "Très bien",
    audio: `${assetsPath}audio/Très bien.m4a`,
  },
  {
    phrase: "Et toi?",
    translation: "¿Y tú?",
    audio: `${assetsPath}audio/Et toi_.m4a`,
  },
  {
    phrase: "Et vous?",
    translation: "¿Y usted?",
    audio: `${assetsPath}audio/Et vous_.m4a`,
  },
];

ReactDOM.render(
  <Translator data={translationData} />,
  document.querySelector("#translator")
);

ReactDOM.render(
  <Dialog data={dialogData} />,
  document.querySelector("#dialog")
);
ReactDOM.render(
  <Pronunciation data={pronunciationData} />,
  document.querySelector("#pronunciation")
);
