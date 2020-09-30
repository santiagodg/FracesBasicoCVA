import React from "react";
import ReactDOM from "react-dom";

import Translator from "../Translator";
import Dialog from "../Dialog";
import Pronunciation from "../Pronunciation";

const assetsPath = "../../assets/";

const pronunciationData = [
  {
    phrase: "S'il vous plaît",
    translation: "Por favor (formal)",
    audio: `${assetsPath}audio/S'il vous plaît.m4a`,
  },
  {
    phrase: "S'il te plaît",
    translation: "Por favor (informal)",
    audio: `${assetsPath}audio/S'il te plaît.m4a`,
  },
  {
    phrase: "Merci",
    translation: "Gracias",
    audio: `${assetsPath}audio/Merci.m4a`,
  },
  {
    phrase: "Merci Beaucoup",
    translation: "Muchas gracias",
    audio: `${assetsPath}audio/Merci Beaucoup.m4a`,
  },
  {
    phrase: "De rien",
    translation: "De nada",
    audio: `${assetsPath}audio/De rien.m4a`,
  },
  {
    phrase: "Excusez-moi",
    translation: "Disculpe",
    audio: `${assetsPath}audio/Excusez-moi.m4a`,
  },
  {
    phrase: "Escuse-moi",
    translation: "Disculpa",
    audio: `${assetsPath}audio/Escuse-moi.m4a`,
  },
  {
    phrase: "Pardon",
    translation: "Perdón",
    audio: `${assetsPath}audio/Pardon.m4a`,
  },
  {
    phrase: "Je sui désolé(e)",
    translation: "Perdóneme",
    audio: `${assetsPath}audio/Je sui désolé(e).m4a`,
  },
  {
    phrase: "Entrez",
    translation: "Entre",
    audio: `${assetsPath}audio/Entrez.m4a`,
  },
  {
    phrase: "Je peux passer?",
    translation: "¿Se puede pasar?",
    audio: `${assetsPath}audio/Je peux passer_.m4a`,
  },
  {
    phrase: "Santé",
    translation: "Salud",
    audio: `${assetsPath}audio/Santé.m4a`,
  },
  {
    phrase: "Oui",
    translation: "Sí",
    audio: `${assetsPath}audio/Oui.m4a`,
  },
  {
    phrase: "Non",
    translation: "No",
    audio: `${assetsPath}audio/Non.m4a`,
  },
  {
    phrase: "Peut-être",
    translation: "Tal vez / Quizás",
    audio: `${assetsPath}audio/Peut-être.m4a`,
  },
];

const translationData = [
  {
    phrase: "Enchanté",
    translation: "Encantado",
    audio: `${assetsPath}audio/Enchanté.m4a`,
  },
  {
    phrase: "Comment vous appelez-vous?",
    translation: "¿Cómo se llama usted?",
    audio: `${assetsPath}audio/Comment vous appelez-vous_.m4a`,
  },
  {
    phrase: "Comment tu t’appelles?",
    translation: "¿Cómo te llamas?",
    audio: `${assetsPath}audio/Comment tu t’appelles_.m4a`,
  },
  {
    phrase: "Quel âge as-tu?",
    translation: "¿Cuántos años tienes?",
    audio: `${assetsPath}audio/Quel âge as-tu_.m4a`,
  },
  {
    phrase: "Quel est ton prénom?",
    translation: "¿Cuál es tu nombre?",
    audio: `${assetsPath}audio/Quel est ton prénom_.m4a`,
  },
  {
    phrase: "Quel est ton nom?",
    translation: "¿Cómo es tu apellido?",
    audio: `${assetsPath}audio/Quel est ton nom_.m4a`,
  },
  {
    phrase: "Qu'est-ce que tu fais dans la vie?",
    translation: "¿A qué te dedicas?",
    audio: `${assetsPath}audio/Qu'est-ce que tu fais dans la vie_.m4a`,
  },
  {
    phrase: "Je travaille en...",
    translation: "Yo trabajo en...",
    audio: `${assetsPath}audio/Je travaille en.m4a`,
  },
  {
    phrase: "Je te presente",
    translation: "Dejame presentarte a...",
    audio: `${assetsPath}audio/Je te presente.m4a`,
  },
  {
    phrase: "Heureux de faire votre connaissance",
    translation: "Un gusto conocerlo",
    audio: `${assetsPath}audio/Heureux de faire votre connaissance.m4a`,
  },
];

const dialogData = {
  title: "Diálogo 2",
  audio: `${assetsPath}audio/Diálogo2.m4a`,
  lines: [
    {
      character: "Pierre",
      text: "Salut! Comment vas-tu?",
    },
    {
      character: "Anne",
      text: "Salut! Je vais bien merci!",
    },
    {
      character: "Pierre",
      text: "Comment t’appelles-tu?",
    },
    {
      character: "Anne",
      text: "Je m’appelle Anne.",
    },
    {
      character: "Pierre",
      text: "Enchanté! Quel âge as-tu?",
    },
    {
      character: "Anne",
      text: "J’ai vingt ans.",
    },
    {
      character: "Pierre",
      text: "D’où viens-tu?",
    },
    {
      character: "Anne",
      text: "Je viens de Bordeaux.",
    },
    {
      character: "Pierre",
      text: "Qu’est-ce que tu fais dans la vie?",
    },
    {
      character: "Anne",
      text: "Je suis étudiante.",
    },
    {
      character: "Pierre",
      text: "J’ai été heureux de faire ta connaissance. À bientôt!",
    },
    {
      character: "Anne",
      text: "Au revoir!",
    },
  ],
};

ReactDOM.render(
  <Translator data={translationData} />,
  document.querySelector("#translator")
);

ReactDOM.render(
  <Pronunciation data={pronunciationData} />,
  document.querySelector("#pronunciation")
);

ReactDOM.render(
  <Dialog data={dialogData} />,
  document.querySelector("#dialog")
);
