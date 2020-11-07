import React from "react";
import ReactDOM from "react-dom";

import FillBlank from "../FillBlank";

const fillBlank1Data = [
  [
    {
      blank: true,
      original: "1",
    },
    {
      blank: false,
      original: "Janvier",
      translation: "Enero",
    },
  ],
  [
    {
      blank: true,
      original: "8",
    },
    {
      blank: false,
      original: "Août",
      translation: "Agosto",
    },
  ],
  [
    {
      blank: true,
      original: "5",
    },
    {
      blank: false,
      original: "Mai",
      translation: "Mayo",
    },
  ],
  [
    {
      blank: true,
      original: "11",
    },
    {
      blank: false,
      original: "Novembre",
      translation: "Noviembre",
    },
  ],
  [
    {
      blank: true,
      original: "7",
    },
    {
      blank: false,
      original: "Juillet",
      translation: "Julio",
    },
  ],
  [
    {
      blank: true,
      original: "12",
    },
    {
      blank: false,
      original: "Décembre",
      translation: "Diciembre",
    },
  ],
  [
    {
      blank: true,
      original: "3",
    },
    {
      blank: false,
      original: "Mars",
      translation: "Marzo",
    },
  ],
  [
    {
      blank: true,
      original: "9",
    },
    {
      blank: false,
      original: "Septembre",
      translation: "Septiembre",
    },
  ],
  [
    {
      blank: true,
      original: "2",
    },
    {
      blank: false,
      original: "Février",
      translation: "Febrero",
    },
  ],
  [
    {
      blank: true,
      original: "10",
    },
    {
      blank: false,
      original: "Octobre",
      translation: "Octubre",
    },
  ],
  [
    {
      blank: true,
      original: "4",
    },
    {
      blank: false,
      original: "Avril",
      translation: "Abril",
    },
  ],
  [
    {
      blank: true,
      original: "6",
    },
    {
      blank: false,
      original: "Juin",
      translation: "Junio",
    },
  ],
];

const fillBlank2Data = [
  [
    {
      blank: false,
      original: "C’est le deuxième jour de la semaine:",
      translation: "Es el segundo día de la semana:",
    },
    {
      blank: true,
      original: "Mardi",
    },
  ],
  [
    {
      blank: false,
      original: "La saison où on attend le Père Noël:",
      translation: "La temporada que esperamos Santa Claus:",
    },
    {
      blank: true,
      original: "Hiver",
    },
  ],
  [
    {
      blank: false,
      original: "C’est la saison où les arbres fleurissent:",
      translation: "Esta es la temporada en que florecen los árboles:",
    },
    {
      blank: true,
      original: "Printemps",
    },
  ],
  [
    {
      blank: false,
      original: "Le mois qui vient avant Novembre:",
      translation: "El mes anterior a noviembre:",
    },
    {
      blank: true,
      original: "Octobre",
    },
  ],
  [
    {
      blank: false,
      original: "C’est le troisième jour de la semaine:",
      translation: "Es el tercer día de la semana:",
    },
    {
      blank: true,
      original: "Mercredi",
    },
  ],
  [
    {
      blank: false,
      original: "Tout le monde se répose ce jour-là:",
      translation: "Todos descansan en este día:",
    },
    {
      blank: true,
      original: "Dimanche",
    },
  ],
  [
    {
      blank: false,
      original: "C’est la saison où les feuilles des arbres tombent:",
      translation: "Esta es la temporada cuando caen las hojas de los árboles:",
    },
    {
      blank: true,
      original: "Automne",
    },
  ],
];

ReactDOM.render(
  <FillBlank data={fillBlank1Data} />,
  document.querySelector("#fillBlank1")
);

ReactDOM.render(
  <FillBlank data={fillBlank2Data} />,
  document.querySelector("#fillBlank2")
);
