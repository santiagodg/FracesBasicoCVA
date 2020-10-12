import React from "react";
import ReactDOM from "react-dom";

import MultipleChoice from "../MultipleChoice";

const multipleChoiceData = [
  {
    question: {
      original: "1. Martine mange chaque matin <strong>trois</strong> croissants.",
      translation: "1. Martine come cada mañana <strong>3 croissants</strong>.",
    },
    options: [
      {
        original: "Où Martine mange chaque matin trois croissants?",
        translation: "¿Donde come Martine cada mañana tres croissants?",
      },
      {
        original: "Quand Martine mange-t-elle trois croissants?",
        translation: "¿Cuando come martine 3 croissants?",
      },
      {
        original: "Combien de croissants Martine mange-t-elle chaque matin?",
        translation: "¿Cuántos croissants come Martine cada mañana?",
      },
    ],
    correct: "Combien de croissants Martine mange-t-elle chaque matin?",
  },
  {
    question: {
      original: "2. Je viendrai <strong>dans cinq heures</strong>.",
      translation: "2. Vendré <strong>dentro de 5 horas</strong>.",
    },
    options: [
      {
        original: "Quelle heure est-il?",
        translation: "¿Que hora es?",
      },
      {
        original: "Dans combien de temps viendras-tu?",
        translation: "¿Dentro de cuánto tiempo vienes?",
      },
      {
        original: "Combien de temps viendras-tu?",
        translation: "¿Cuánto tiempo vienes?",
      },
    ],
    correct: "Dans combien de temps viendras-tu?",
  },
  {
    question: {
      original: "3. Ce robe coûte <strong>45 EUR</strong>.",
      translation: "3. Ese vestido cuesta <strong>45 EUR</strong>.",
    },
    options: [
      {
        original: "Combien coûte ce robe?",
        translation: "¿Cuánto cuesta ese vestido?",
      },
      {
        original: "Quoi coûte ce robe?",
        translation: "¿Qué cuesta ese vestido?",
      },
      {
        original: "Lequel coûte 45 EUR.",
        translation: "¿Aquél cuesta 45 EUR.",
      },
    ],
    correct: "Combien coûte ce robe?",
  },
  {
    question: {
      original: "4. Je vais à la gare <strong>à vélo</strong>.",
      translation: "4. Voy a la estación de tren <strong>en bicicleta</strong>.",
    },
    options: [
      {
        original: "Où vas-tu?",
        translation: "¿A donde vas?",
      },
      {
        original: "Qui va à la gare?",
        translation: "¿Quién va a la estación de tren?",
      },
      {
        original: "Comment vas-tu à la gare?",
        translation: "¿Cómo vas a la estación de tren?",
      },
    ],
    correct: "Comment vas-tu à la gare?",
  },
  {
    question: {
      original: "5. <strong>Jules</strong> ne mange jamais du poison.",
      translation: "5. <strong>Jules</strong> nunca come pescado.",
    },
    options: [
      {
        original: "Pourquoi ne mage-t-il jamais du poison?",
        translation: "¿Por qué nunca come pescado él?",
      },
      {
        original: "Laquelle ne mange jamais du poison?",
        translation: "¿El cual nunca come pescado?",
      },
      {
        original: "Qui ne mange jamais du poison?",
        translation: "¿Quién no come nunca pescado?",
      },
    ],
    correct: "Qui ne mange jamais du poison?",
  },
  {
    question: {
      original: "6. Anne ira dîner <strong>après-demain</strong> chez Christian.",
      translation: "6. Anne irá a cenar <strong>pasado mañana</strong> a casa de Christian.",
    },
    options: [
      {
        original: "Quand Anne ira-t-elle dîner chez Christian?",
        translation: "¿Cuándo irá Anne a cenar a casa de Christian?",
      },
      {
        original: "Qui ira dîner chez Christian?",
        translation: "¿Quién irá a cenar a casa de Christian?",
      },
      {
        original: "Dans combien de temps Anne ira dîner chez Christian?",
        translation: "¿Dentro de cuánto tiempo Anne ira a cenar a casa de Christian?",
      },
    ],
    correct: "Quand Anne ira-t-elle dîner chez Christian?",
  },
  {
    question: {
      original: "7. Daniela fait des études <strong>d'informatique</strong>.",
      translation: "7. Daniela estudia <strong>Informática</strong>.",
    },
    options: [
      {
        original: "Quelles études fait Daniela?",
        translation: "¿Qué estudia Daniela?",
      },
      {
        original: "Quoi fait Daniela?",
        translation: "¿Qué hace Daniela?",
      },
      {
        original: "Qui fait des études?",
        translation: "¿Quién estudia?",
      },
    ],
    correct: "Quelles études fait Daniela?",
  },
];

ReactDOM.render(
  <MultipleChoice data={multipleChoiceData} />,
  document.querySelector("#multipleChoice")
);
