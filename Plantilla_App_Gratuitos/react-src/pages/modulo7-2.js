import React from "react";
import ReactDOM from "react-dom";

import ReadingAndFillBlank from "../ReadingAndFillBlank";
import FillBlank from "../FillBlank";

const exercise1ReadingData = [
  [
    {
      original: "Client: Bonjour, monsieur.",
      translation: "Cliente: Buenos días, señor.",
    },
  ],
  [
    {
      original: "Employé: Bonjour, monsieur, vous désirez?",
      translation: "Empleado: Buenos días, señor, ¿le gustaría?",
    },
  ],
  [
    {
      original:
        "Client: J’ai mal à l’estomac depuis ce matin. Est-ce que vous auriez quelque chose pour calmer les maux d’estomac?",
      translation:
        "Cliente: Me duele el estómago desde esta mañana. ¿Tienes algo para calmar los dolores de estómago?",
    },
  ],
  [
    {
      original:
        "Employé: Oui, j’ai ça. C’est très efficace. Vous en prenez un après les repas.",
      translation:
        "Empleado: Sí, lo tengo. Es muy efectivo. Tome uno después de las comidas.",
    },
  ],
  [
    {
      original: "Client: Très bien.",
      translation: "Cliente: Muy bien.",
    },
  ],
  [
    {
      original: "Employé: 15 euros monsieur.",
      translation: "Empleado: 15 euros señor.",
    },
  ],
  [
    {
      original: "Client: Voilà, monsieur.",
      translation: "Cliente: Aquí tiene, señor.",
    },
  ],
  [
    {
      original: "Employé: Merci monsieur. Au revoir.",
      translation: "Empleado: Gracias señor. Adiós.",
    },
  ],
  [
    {
      original: "Client: Au revoir, bonne journée.",
      translation: "Cliente: Adiós, buen día.",
    },
  ],
];

const exercise1FillBlankData = [
  [
    {
      blank: false,
      original: "1.	Que se passe-t-il?",
      translation: "¿Qué pasa?",
    },
    {
      blank: true,
      original: "Le client a mal à l'estomac.",
      translation: "El cliente tiene dolor de estómago.",
    },
  ],
  [
    {
      blank: false,
      original: "2.	Depuis quand l’homme a-t-il mal?",
      translation: "¿Desde cuándo el hombre tiene dolor?",
    },
    {
      blank: true,
      original: "Il a mal depuis ce matin.",
      translation: "Ha estado sufriendo desde esta mañana.",
    },
  ],
  [
    {
      blank: false,
      original: "3.	Quand doit-il prendre le médicament?",
      translation: "¿Cuándo debe tomar el medicamento?",
    },
    {
      blank: true,
      original: "Il doit le prendre après le repas.",
      translation: "Tiene que tomarlo después de la comida.",
    },
  ],
  [
    {
      blank: false,
      original: "4.	Combien coûte le médicament?",
      translation: "¿Cuánto cuesta el medicamento?",
    },
    {
      blank: true,
      original: "Le médicament coûte 15 euros.",
      translation: "El medicamento cuesta 15 euros.",
    },
  ],
];

const exercise2FillBlankData = [
  [
    {
      blank: false,
      original: "1. Docteur, je ne",
      translation: "1. Doctor, no",
    },
    {
      blank: true,
      original: "me sens",
      translation: "me siento",
    },
    {
      blank: false,
      original: "pas bien : j'ai",
      translation: "bien: tengo",
    },
    {
      blank: true,
      original: "mal",
      translation: "dolor",
    },
    {
      blank: false,
      original: "au ventre, j'envie de",
      translation: "de estómago, quiero",
    },
    {
      blank: true,
      original: "vomir",
      translation: "vomitar",
    },
    {
      blank: false,
      original: "après les repas.",
      translation: "después de las comidas.",
    },
    {
      blank: false,
      original: "J'ai aussi des",
      translation: "También tengo",
    },
    {
      blank: true,
      original: "maux",
      translation: "dolores",
    },
    {
      blank: false,
      original: "de tête et je crois que j'ai un peu de",
      translation: "de cabeza y creo que tengo un poco de",
    },
    {
      blank: true,
      original: "fièvre",
      translation: "fiebre",
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
      original: "2. Allongez-vous, je vais vous",
      translation: "2. Acuéstate, te",
    },
    {
      blank: true,
      original: "ausculter",
      translation: "examinaré",
    },
    {
      blank: false,
      original: ".",
      translation: ".",
    },
    {
      blank: false,
      original: "Où",
      translation: "¿Dónde",
    },
    {
      blank: true,
      original: "souffrez-vous",
      translation: "estás sufriendo",
    },
    {
      blank: false,
      original: ", ici ? là ?",
      translation: "aquí? ¿allí?",
    },
  ],
  [
    {
      blank: false,
      original: "3. Oui, j’ai mal là.",
      translation: "3. Sí, estoy sufriendo allí.",
    },
  ],
  [
    {
      blank: false,
      original: "4. Bien, je vais vous donner un",
      translation: "4. Bueno, te daré un",
    },
    {
      blank: true,
      original: "traitement",
      translation: "tratamiento",
    },
    {
      blank: false,
      original: ".",
      translation: ".",
    },
    {
      blank: false,
      original: "Mais il faut aller faire des",
      translation: "Pero tenemos que ir a hacer un",
    },
    {
      blank: true,
      original: "analyses",
      translation: "análisis",
    },
    {
      blank: false,
      original: "de sang.",
      translation: "de sangre.",
    },
    {
      blank: false,
      original: "Vous aillez prendre ce",
      translation: "Vas a tomar este",
    },
    {
      blank: true,
      original: "médicament",
      translation: "medicamento",
    },
    {
      blank: false,
      original:
        "trois fois par jour pendant trois jours et après, revenez me voir avec le résultat des analyses.",
      translation:
        "tres veces al día durante tres días y luego vuelves a mí con los resultados de las pruebas.",
    },
  ],
];

const exercise3FillBlankData = [
  [
    {
      blank: true,
      original: "7",
      translation: "7",
    },
    {
      blank: false,
      original: "Plier",
      translation: "Doblar",
    },
  ],
  [
    {
      blank: true,
      original: "9",
      translation: "9",
    },
    {
      blank: false,
      original: "Remonter",
      translation: "Subir",
    },
  ],
  [
    {
      blank: true,
      original: "10",
      translation: "10",
    },
    {
      blank: false,
      original: "S'arrêter",
      translation: "Detenerse",
    },
  ],
  [
    {
      blank: true,
      original: "11",
      translation: "11",
    },
    {
      blank: false,
      original: "Écarter",
      translation: "Alejarse",
    },
  ],
  [
    {
      blank: true,
      original: "2",
      translation: "2",
    },
    {
      blank: false,
      original: "Grossir",
      translation: "Engordar",
    },
  ],
  [
    {
      blank: true,
      original: "3",
      translation: "3",
    },
    {
      blank: false,
      original: "Assis",
      translation: "Sentarse",
    },
  ],
  [
    {
      blank: true,
      original: "8",
      translation: "8",
    },
    {
      blank: false,
      original: "Se lever",
      translation: "Levantarse",
    },
  ],
  [
    {
      blank: true,
      original: "5",
      translation: "5",
    },
    {
      blank: false,
      original: "Baisser",
      translation: "Bajar",
    },
  ],
  [
    {
      blank: true,
      original: "1",
      translation: "1",
    },
    {
      blank: false,
      original: "Se relever",
      translation: "Pararse",
    },
  ],
  [
    {
      blank: true,
      original: "4",
      translation: "4",
    },
    {
      blank: false,
      original: "Raide",
      translation: "Rígido",
    },
  ],
  [
    {
      blank: true,
      original: "6",
      translation: "6",
    },
    {
      blank: false,
      original: "Debout",
      translation: "Final",
    },
  ],
];

const exercise4FillBlankData = [
  [
    {
      blank: false,
      original: "1:",
      translation: "1:",
    },
    {
      blank: true,
      original: "Cheveaux",
      translation: "",
    },
  ],
  [
    {
      blank: false,
      original: "2:",
      translation: "2:",
    },
    {
      blank: true,
      original: "Nez",
      translation: "",
    },
  ],
  [
    {
      blank: false,
      original: "3:",
      translation: "3:",
    },
    {
      blank: true,
      original: "Yeux",
      translation: "",
    },
  ],
  [
    {
      blank: false,
      original: "4:",
      translation: "4:",
    },
    {
      blank: true,
      original: "Joue",
      translation: "",
    },
  ],
  [
    {
      blank: false,
      original: "5:",
      translation: "5:",
    },
    {
      blank: true,
      original: "Oreille",
      translation: "",
    },
  ],
  [
    {
      blank: false,
      original: "6:",
      translation: "6:",
    },
    {
      blank: true,
      original: "Bouche",
      translation: "",
    },
  ],
];

ReactDOM.render(
  <ReadingAndFillBlank
    readingData={exercise1ReadingData}
    fillBlankData={exercise1FillBlankData}
  />,
  document.querySelector("#exercise-1")
);

ReactDOM.render(
  <FillBlank data={exercise2FillBlankData} />,
  document.querySelector("#exercise-2")
);

ReactDOM.render(
  <FillBlank data={exercise3FillBlankData} />,
  document.querySelector("#exercise-3")
);

ReactDOM.render(
  <FillBlank data={exercise4FillBlankData} />,
  document.querySelector("#exercise-4")
);
