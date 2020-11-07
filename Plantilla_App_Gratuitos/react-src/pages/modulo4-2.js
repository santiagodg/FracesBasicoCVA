import React from "react";
import ReactDOM from "react-dom";

import ReadingAndMultipleChoiceQuiz from "../ReadingAndMultipleChoiceQuiz";

const readingData = [
  [
    {
      original: "Le lundi, Daniela reste toute la journée à l’université.",
      translation: "El lunes, Daniela se queda en la universidad todo el día.",
    },
    {
      original: "Souvent, le soir, elle pratique une activité: du ballet.",
      translation: "A menudo, por la noche, practica una actividad: ballet.",
    },
    {
      original: "Le mardi ressemble au lundi sauf qu’il n’y a pas d’activité après l’université, Daniela rentre chez elle pour faire ses devoirs et se reposer.",
      translation: "El martes es como el lunes, excepto que no hay actividad después de la universidad, Daniela llega a casa para hacer su tarea y descansar.",
    },
    {
      original: "Il y a des régions en France où les étudiants ne vont pas à l’université le mercredi.",
      translation: "Hay áreas en Francia donde los estudiantes no van a la universidad los miércoles.",
    },
    {
      original: "Daniela, elle, va à l’université le mercredi matin.",
      translation: "Daniela va a la universidad el miércoles por la mañana.",
    },
    {
      original: "Le mercredi après-midi, elle se détend et va jouer au tennis dans son club.",
      translation: "El miércoles por la tarde, se relaja y va a jugar tenis en su club.",
    },
    {
      original: "Le jeudi est comme le mardi, on ne fait qu’aller à l’université.",
      translation: "El jueves es como el martes, solo vamos a la universidad.",
    },
  ],
  [
    {
      original: "Le vendredi, la classe dure toute la journée mais elle est souvent plus courte pour laisser les élèves en week-end plus tôt.",
      translation: "El viernes, la clase dura todo el día, pero a menudo es más corta para dejar a los estudiantes los fines de semana más temprano.",
    },
    {
      original: "La journée est longue pour Daniela qui attend le samedi toute la semaine.",
      translation: "El día es largo para Daniela, que espera el sábado toda la semana.",
    },
  ],
  [
    {
      original: "Le samedi, elle sort avec ses amies pour faire la fête.",
      translation: "Los sábados, ella sale con sus amigos a la fiesta.",
    },
    {
      original: "Le dimanche, elle se repose et en profite pour faire ses devoirs pour la semaine.",
      translation: "Los domingos, ella descansa y aprovecha la oportunidad para hacer su tarea durante la semana.",
    },
    {
      original: "C’est déjà le lundi, et toute la semaine recommence.",
      translation: "Ya es lunes, y toda la semana comienza de nuevo.",
    },
  ],
  [
    {
      original: "S'il te plaît répondre les questions de compréhension:",
      translation: "Por favor responde las preguntas de comprensión:",
    },
  ],
];

const multipleChoiceData = [
  {
    question: {
      original: "Quelle activité Daniela practique-t-elle le mercredi après-midi?",
      translation: "¿Qué actividad realiza Daniela los miércoles por la tarde?",
    },
    options: [
      {
        original: "Le tennis",
        translation: "Tenis",
      },
      {
        original: "Le piano",
        translation: "El piano",
      },
      {
        original: "Le football",
        translation: "Fútbol",
      },
      {
        original: "Le violon",
        translation: "El violín",
      },
    ],
    correct: "Le tennis",
  },
  {
    question: {
      original: "Quel est le bon ordre pour les jours de la semaine?",
      translation: "¿Cuál es el orden correcto para los días de la semana?",
    },
    options: [
      {
        original: "Lundi, mercredi, dimanche, jeudi, samedi, mardi, vendredi",
        translation: "Lunes, miércoles, domingo, jueves, sábado, martes, viernes",
      },
      {
        original: "Lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche",
        translation: "Lunes, martes, miércoles, jueves, viernes, sábado, domingo",
      },
      {
        original: "Dimanche, lundi, jeudi, vendredi, samedi, mardi, mercredi",
        translation: "Domingo, lunes, jueves, viernes, sábado, martes, miércoles",
      },
      {
        original: "Mercredi, jeudi, dimanche, samedi, vendredi, lundi, mardi",
        translation: "Miércoles, jueves, domingo, sábado, viernes, lunes, martes",
      },
    ],
    correct: "Lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche",
  },
  {
    question: {
      original: "Quels sont les deux jours de week-end?",
      translation: "¿Cuáles son los dos días de fin de semana?",
    },
    options: [
      {
        original: "Mercredi et Jeudi",
        translation: "miércoles y jueves",
      },
      {
        original: "Lundi et Mardi",
        translation: "lunes y martes",
      },
      {
        original: "Samedi et Dimanche",
        translation: "sábado y domingo",
      },
      {
        original: "Vendredi et Samedi",
        translation: "viernes y sábado",
      },
    ],
    correct: "Samedi et Dimanche",
  },
  {
    question: {
      original: "Quels sont les deux jours qui ressemblent le plus pour Daniela?",
      translation: "¿Cuáles son los dos días que son más similares para Daniela?",
    },
    options: [
      {
        original: "Le vendredi et le dimanche",
        translation: "viernes y domingo",
      },
      {
        original: "Le samedi et le dimanche",
        translation: "sábado y domingo",
      },
      {
        original: "Le mercredi et le lundi",
        translation: "miércoles y lunes",
      },
      {
        original: "Le mardi et le jeudi",
        translation: "martes y jueves",
      },
    ],
    correct: "Le mardi et le jeudi",
  },
  {
    question: {
      original: "Quel jour Daniela passe-t-elle moins de temps à l’université?",
      translation: "¿Qué día pasa Daniela menos tiempo en la universidad?",
    },
    options: [
      {
        original: "Le mardi",
        translation: "martes",
      },
      {
        original: "Le mercredi",
        translation: "miércoles",
      },
      {
        original: "Le lundi",
        translation: "lunes",
      },
      {
        original: "Le vendredi",
        translation: "viernes",
      },
    ],
    correct: "Le mercredi",
  },
];

ReactDOM.render(
  <ReadingAndMultipleChoiceQuiz readingData={readingData} multipleChoiceData={multipleChoiceData} />,
  document.querySelector("#ejercicio")
);
