import React from "react";
import ReactDOM from "react-dom";

import Pronunciation from "../Pronunciation";
import FillBlank from "../FillBlank";

const assetsPath = "../../assets/";

const pronunciationData = [
  {
    phrase: "Quand?",
    translation: "¿Cuándo?",
    audio: `${assetsPath}audio/Quand_.m4a`,
  },
  {
    phrase: "Où?",
    translation: "¿Dónde?",
    audio: `${assetsPath}audio/Où_.m4a`,
  },
  {
    phrase: "Comment?",
    translation: "¿Cómo?",
    audio: `${assetsPath}audio/Comment_.m4a`,
  },
  {
    phrase: "Pourquoi?",
    translation: "¿Por qué?",
    audio: `${assetsPath}audio/Pourquoi_.m4a`,
  },
  {
    phrase: "Combien?",
    translation: "¿Cuánto/Cuántos?",
    audio: `${assetsPath}audio/Combien_.m4a`,
  },
];

const fillBlankData = [
  [
    {
      blank: false,
      original: "Tu t’appelles",
      translation: "¿Cómo te llamas?",
    },
    {
      blank: true,
      original: "comment",
      translation: "",
    },
    {
      blank: false,
      original: "?",
      translation: "?",
    },
    {
      blank: false,
      original: "- Daniela Capitaine.",
      translation: "- Daniela Capitaine.",
    },
  ],
  [
    {
      blank: true,
      original: "Qui",
      translation: "",
    },
    {
      blank: false,
      original: "est la jeune femme au fond de la chambre?",
      translation: "¿Quién es la mujer joven al fondo de la habitación?",
    },
    {
      blank: false,
      original: "- C'est la fille de Julien.",
      translation: "-	Es la hija de Julien.",
    },
  ],
  [
    {
      blank: true,
      original: "Où",
      translation: "",
    },
    {
      blank: false,
      original: "est la sale du sport?",
      translation: "¿Donde está el gimnasio?",
    },
    {
      blank: false,
      original: "- Dans l’autre bâtiment.",
      translation: "-	En el otro edificio.",
    },
  ],
  [
    {
      blank: true,
      original: "Quand",
      translation: "",
    },
    {
      blank: false,
      original: "est-ce que tu faites du sport?",
      translation: "¿Cuándo haces deporte?",
    },
    {
      blank: false,
      original: "- Mercredi matin.",
      translation: "-	Miércoles en la mañana.",
    },
  ],
  [
    {
      blank: true,
      original: "Pourquoi",
      translation: "",
    },
    {
      blank: false,
      original: "êtes-vous ennueyeuse?",
      translation: "¿Por qué estas aburrida?",
    },
    {
      blank: false,
      original: "-	Parce qu'il n'y a rien a la tele.",
      translation: "-	Porque no hay nada en la tele.",
    },
  ],
  [
    {
      blank: true,
      original: "Que",
      translation: "",
    },
    {
      blank: false,
      original: "faites-tu cette après-midi?",
      translation: "¿Que haces esta tarde?",
    },
    {
      blank: false,
      original: "- Je vais faire mes devoirs.",
      translation: "-	Voy a hacer mis deberes.",
    },
  ],
  [
    {
      blank: true,
      original: "Combien",
      translation: "",
    },
    {
      blank: false,
      original: "de sœurs a-t-il?",
      translation: "¿Cuántas hermanas tiene él?",
    },
    {
      blank: false,
      original: "- Il a trois sœurs.",
      translation: "-	El tiene tres hermanas.",
    },
  ],
  [
    {
      blank: true,
      original: "Où est-ce que",
      translation: "",
    },
    {
      blank: false,
      original: "tu habites?",
      translation: "¿En donde vives?",
    },
    {
      blank: false,
      original: "- À Montpellier.",
      translation: "-	En Montpellier.",
    },
  ],
];

ReactDOM.render(
  <Pronunciation data={pronunciationData} />,
  document.querySelector("#pronunciation")
);

ReactDOM.render(
  <FillBlank data={fillBlankData} />,
  document.querySelector("#fillBlank")
);
