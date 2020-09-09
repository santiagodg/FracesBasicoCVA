import React from "react";
import ReactDOM from "react-dom";

import Translator from "../Translator";
import Dialog from "../Dialog";
import Pronunciation from "../Pronunciation";

const translationData = [
  {
    phrase: "Salut",
    translation: "Hola",
    audio: "/assets/audio/Salut.m4a",
  },
  {
    phrase: "Au Revoir",
    translation: "Adios",
    audio: "/assets/audio/Au Revoir.m4a",
  },
  {
    phrase: "A plus tard",
    translation: "Nos vemos / Hasta luego",
    audio: "/assets/audio/A plus tard.m4a",
  },
  {
    phrase: "A bientôt",
    translation: "Hasta pronto",
    audio: "/assets/audio/A bientôt.m4a",
  },
  {
    phrase: "A demain",
    translation: "Hasta mañana",
    audio: "/assets/audio/A demain.m4a",
  },
  {
    phrase: "Bienvenue",
    translation: "Bienvenido",
    audio: "/assets/audio/Bienvenue.m4a",
  },
  {
    phrase: "Bonjour",
    translation: "Buenos días",
    audio: "/assets/audio/Bonjour.m4a",
  },
  {
    phrase: "Bon aprés-midi",
    translation: "Buenas tardes",
    audio: "/assets/audio/Bon aprés-midi.m4a",
  },
  {
    phrase: "Bonsoir",
    translation: "Buenas noches",
    audio: "/assets/audio/Bonsoir.m4a",
  },
  {
    phrase: "Bonne soirée",
    translation: "Buenas tardes/noches",
    audio: "/assets/audio/Bonne soirée.m4a",
  },
  {
    phrase: "Bonne nuit",
    translation: "Buenas noches (únicamente cuando ya te vas a dormir)",
    audio: "/assets/audio/Bonne nuit.m4a",
  },
];

const dialogData = {
  title: "Diálogo 1",
  audio: "/assets/audio/Diálogo1.m4a",
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

const pronunciationData = [
  {
    phrase: "Salut",
    translation: "Hola",
    audio: "/assets/audio/Salut.m4a",
  },
  {
    phrase: "Au Revoir",
    translation: "Adios",
    audio: "/assets/audio/Au Revoir.m4a",
  },
  {
    phrase: "A plus tard",
    translation: "Nos vemos / Hasta luego",
    audio: "/assets/audio/A plus tard.m4a",
  },
  {
    phrase: "A bientôt",
    translation: "Hasta pronto",
    audio: "/assets/audio/A bientôt.m4a",
  },
  {
    phrase: "A demain",
    translation: "Hasta mañana",
    audio: "/assets/audio/A demain.m4a",
  },
  {
    phrase: "Bienvenue",
    translation: "Bienvenido",
    audio: "/assets/audio/Bienvenue.m4a",
  },
  {
    phrase: "Bonjour",
    translation: "Buenos días",
    audio: "/assets/audio/Bonjour.m4a",
  },
  {
    phrase: "Bon aprés-midi",
    translation: "Buenas tardes",
    audio: "/assets/audio/Bon aprés-midi.m4a",
  },
  {
    phrase: "Bonsoir",
    translation: "Buenas noches",
    audio: "/assets/audio/Bonsoir.m4a",
  },
  {
    phrase: "Bonne soirée",
    translation: "Buenas tardes/noches",
    audio: "/assets/audio/Bonne soirée.m4a",
  },
  {
    phrase: "Bonne nuit",
    translation: "Buenas noches (únicamente cuando ya te vas a dormir)",
    audio: "/assets/audio/Bonne nuit.m4a",
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
