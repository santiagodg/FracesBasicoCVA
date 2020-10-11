import React from "react";
import ReactDOM from "react-dom";

import ReadingAndMultipleChoiceQuiz from "../ReadingAndMultipleChoiceQuiz";

const readingData = [
  [
    {
      original: "Je m'appelle Daniela.",
      translation: "Me llamo Daniela.",
    },
    {
      original: "Ma famille se compose de quatre personnes.",
      translation: "Mi familia esta compuesta por cuatro personas.",
    },
    {
      original: "Mon père, ma mère, mon frère et moi.",
      translation: "Mi padre, mi madre, mi hermano y yo.",
    },
    {
      original: "Nous avons également des animaux: trois chiens.",
      translation: "De igual manera tenemos animales: tres perros.",
    },
    {
      original: "Nous vivons dans une jolie maison avec un grand jardin et une piscine.",
      translation: "Vivimos en una casa bonita con un jardín grande y una alberca.",
    },
    {
      original: "Notre quartier est calme et paisable.",
      translation: "Nuestra colonia es tranquila y pacífica.",
    },
    {
      original: "Je suis étudiante en design et je m'occupe de la maison quand me parents sont pas là.",
      translation: "Yo soy estudiante en diseño y me hago cargo de la casa cuando mis padres no están.",
    },
    {
      original: "Le dimanche, nous aimons nous promener en famille dans la plage proche de notre maison et faire des jeux.",
      translation: "Los domingos, nos gusta pasearnos en familia por la playa cerca de nuestra casa y hacer juegos.",
    },
    {
      original: "Nous mangeons dans le jardín quand il fait beau ou dans la maison quand il pleut.",
      translation: "Comemos en el jardín cuando hace buen día o en la casa cuando llueve.",
    },
  ],
  [
    {
      original: "Mes parents aiment passer du temps avec nous lors de vacances.",
      translation: "A mis padres les gusta pasar tiempo con nosotros durante las vacaciones.",
    },
    {
      original: "Mon frère habite également dans la même maison que nous.",
      translation: "Mi hermano vive igualmente en la misma casa que nosotros.",
    },
    {
      original: "Il a trois enfants, deux garçons et un fille.",
      translation: "Tiene tres hijos, dos niños y una niña.",
    },
    {
      original: "Ils aiment venir passer le week-end à la plage.",
      translation: "Les encanta venir a pasar el fin de semana a la playa.",
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
      original: "Combien Daniela a-t-elle des chiens?",
      translation: "¿Cuantos perros tiene Daniela?",
    },
    options: [
      {
        original: "3",
        translation: "3",
      },
      {
        original: "1",
        translation: "1",
      },
      {
        original: "5",
        translation: "5",
      },
      {
        original: "2",
        translation: "2",
      },
    ],
    correct: "3",
  },
  {
    question: {
      original: "Quelle est la profession de Daniela?",
      translation: "¿Cuál es la profesión de Daniela?",
    },
    options: [
      {
        original: "Étudiante en Design",
        translation: "Estudiante en Diseño",
      },
      {
        original: "Journaliste",
        translation: "Periodista",
      },
      {
        original: "Professeur",
        translation: "Maestra",
      },
      {
        original: "Étudiante d'informatique",
        translation: "Estudiante de Informática",
      },
    ],
    correct: "Étudiante en Design",
  },
  {
    question: {
      original: "Où vit la famille?",
      translation: "¿En donde vive la familia?",
    },
    options: [
      {
        original: "Dans une maison",
        translation: "En una casa",
      },
      {
        original: "Dans un hôtel",
        translation: "En un hotel",
      },
      {
        original: "Dans un studio",
        translation: "En un estudio",
      },
      {
        original: "Dans un appartement",
        translation: "En un apartamento",
      },
    ],
    correct: "Dans une maison",
  },
  {
    question: {
      original: "Qu'est-ce que la famille aime faire le week-end?",
      translation: "¿Que le gusta hacer a la familia los fines de semana?",
    },
    options: [
      {
        original: "Se promener sur la plage",
        translation: "Ir a pasear por la playa",
      },
      {
        original: "Voyager",
        translation: "Viajar",
      },
      {
        original: "Regarder la television",
        translation: "Ver la television",
      },
      {
        original: "Aller au cinema",
        translation: "Ir al cine",
      },
    ],
    correct: "Se promener sur la plage",
  },
];

ReactDOM.render(
  <ReadingAndMultipleChoiceQuiz readingData={readingData} multipleChoiceData={multipleChoiceData} />,
  document.querySelector("#ejercicio")
);
