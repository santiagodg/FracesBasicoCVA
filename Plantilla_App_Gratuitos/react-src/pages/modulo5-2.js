import React from "react";
import ReactDOM from "react-dom";

import FillBlank from "../FillBlank";
import ChooseBetween from "../ChooseBetween";
import ReadingAndChooseBetween from "../ReadingAndChooseBetween";
import ReadingAndMultipleChoiceQuiz from "../ReadingAndMultipleChoiceQuiz";

const fillBlank1Data = [
  [
    {
      blank: false,
      original: "J’etudie",
    },
    {
      blank: true,
      original: "à l'école",
    },
  ],
  [
    {
      blank: false,
      original: "J’achète un gâteau",
    },
    {
      blank: true,
      original: "à la pâtisserie",
    },
  ],
  [
    {
      blank: false,
      original: "J’assiste à un mariage",
    },
    {
      blank: true,
      original: "à l'église",
    },
  ],
  [
    {
      blank: false,
      original: "Je demande de l’argent",
    },
    {
      blank: true,
      original: "à la banque",
    },
  ],
  [
    {
      blank: false,
      original: "Je consulte un médecin",
    },
    {
      blank: true,
      original: "à l'hôpital",
    },
  ],
  [
    {
      blank: false,
      original: "Je regarde des sculptures",
    },
    {
      blank: true,
      original: "au musée",
    },
  ],
  [
    {
      blank: false,
      original: "Je regarde un film",
    },
    {
      blank: true,
      original: "au cinéma",
    },
  ],
  [
    {
      blank: false,
      original: "J’achète des fruits et des légumes",
    },
    {
      blank: true,
      original: "au marché",
    },
  ],
];

const fillBlank2Data = [
  [
    {
      blank: false,
      original: "Il traverse la rivière:",
    },
    {
      blank: true,
      original: "pont",
    },
  ],
  [
    {
      blank: false,
      original: "Grand avenue:",
    },
    {
      blank: true,
      original: "boulevard",
    },
  ],
  [
    {
      blank: false,
      original: "En général, elle est ronde ou carrée:",
    },
    {
      blank: true,
      original: "place",
    },
  ],
  [
    {
      blank: false,
      original: "Petite avenue:",
    },
    {
      blank: true,
      original: "rue",
    },
  ],
  [
    {
      blank: false,
      original: "Grande rue: ",
    },
    {
      blank: true,
      original: "avenue",
    },
  ],
];

const fillBlankDownData = [
  [
    {
      blank: true,
      original: "4",
    },
  ],
];

const fillBlankBridgeData = [
  [
    {
      blank: true,
      original: "5",
    },
  ],
];

const fillBlankUpData = [
  [
    {
      blank: true,
      original: "1",
    },
  ],
];

const fillBlankLeftData = [
  [
    {
      blank: true,
      original: "3",
    },
  ],
];

const fillBlankRightData = [
  [
    {
      blank: true,
      original: "2",
    },
  ],
];

const exercise6 = [
  [
    {
      blank: true,
      original: "2",
    },
    {
      blank: false,
      original: "Du sport (deporte)",
    },
  ],
  [
    {
      blank: true,
      original: "2",
    },
    {
      blank: false,
      original: "Une promenade (un paseo)",
    },
  ],
  [
    {
      blank: true,
      original: "1",
    },
    {
      blank: false,
      original: "Au théâtre (al teatro)",
    },
  ],
  [
    {
      blank: true,
      original: "1",
    },
    {
      blank: false,
      original: "Au cinéma (al cine)",
    },
  ],
  [
    {
      blank: true,
      original: "3",
    },
    {
      blank: false,
      original: "De la musique (música)",
    },
  ],
  [
    {
      blank: true,
      original: "5",
    },
    {
      blank: false,
      original: "La télévision (la tv)",
    },
  ],
  [
    {
      blank: true,
      original: "4",
    },
    {
      blank: false,
      original: "Le journal (el periódico)",
    },
  ],
];

const exercise7 = [
  {
    textParts: [],
    options: [
      [
        {
          answer: "acteur",
          correct: false,
        },
        {
          answer: "chanteur",
          correct: false,
        },
        {
          answer: "pâtissier",
          correct: true,
        },
        {
          answer: "réalisateur",
          correct: false,
        },
      ],
    ],
  },
  {
    textParts: [],
    options: [
      [
        {
          answer: "opticien",
          correct: false,
        },
        {
          answer: "architecte",
          correct: true,
        },
        {
          answer: "pharmacien",
          correct: false,
        },
        {
          answer: "dentiste",
          correct: false,
        },
      ],
    ],
  },
  {
    textParts: [],
    options: [
      [
        {
          answer: "coiffeur",
          correct: true,
        },
        {
          answer: "boulanger",
          correct: false,
        },
        {
          answer: "restaurateur",
          correct: false,
        },
        {
          answer: "pâtissier",
          correct: false,
        },
      ],
    ],
  },
];

const exercise8ReadingData = [
  [
    {
      original: "ALI:",
      translation: "ALI:",
    },
    {
      original: "Je suis super content!",
      translation: "¡Estoy súper feliz!",
    },
    {
      original: "Avec l’école, on part en clase de mer!",
      translation: "¡Con la escuela, vamos al mar!",
    },
  ],
  [
    {
      original: "JULIEN:",
      translation: "JULIEN:",
    },
    {
      original: "C’est genial!",
      translation: "¡Es genial!",
    },
    {
      original: "Vous allez où?",
      translation: "¿A dónde vas?",
    },
  ],
  [
    {
      original: "ALI:",
      translation: "ALI:",
    },
    {
      original: "Nous allons à Pornichet au bord de l’océan Atlantique.",
      translation: "Vamos a Pornichet al borde del Océano Atlántico",
    },
  ],
  [
    {
      original: "JULIEN:",
      translation: "JULIEN:",
    },
    {
      original: "Oh! Là là!",
      translation: "¡Oh!",
    },
    {
      original: "C’est loin!",
      translation: "¡Es un largo camino!",
    },
    {
      original: "Vous partez comment?",
      translation: "¿Cómo te vas?",
    },
  ],
  [
    {
      original: "ALI:",
      translation: "ALI:",
    },
    {
      original: "Nous partons en TGV.",
      translation: "Vamos por TGV (tren).",
    },
    {
      original: "C’est mon premier voyage en train!",
      translation: "¡Este es mi primer viaje en tren!",
    },
  ],
  [
    {
      original: "JULIEN:",
      translation: "JULIEN:",
    },
    {
      original: "Moi, j’adore le train!",
      translation: "¡Me encanta el tren!",
    },
    {
      original:
        "Avec ma famille on part aussi en vacances en train, on va à la montagne.",
      translation:
        "Mi familia y yo también vamos de vacaciones en tren, vamos a las montañas.",
    },
  ],
  [
    {
      original: "CAMILLE:",
      translation: "CAMILLE:",
    },
    {
      original:
        "Moi aussi je vais en vacances à la montagne, mais je pars en avion.",
      translation:
        "Yo también voy de vacaciones a las montañas, pero voy en avión.",
    },
  ],
  [
    {
      original: "JULIEN:",
      translation: "JULIEN:",
    },
    {
      original: "Quoi?",
      translation: "¿Qué?",
    },
    {
      original: "Tu vas à la montagne en avion?",
      translation: "¿Vas volando a las montañas?",
    },
    {
      original: "Tu vas où?",
      translation: "¿A dónde vas?",
    },
  ],
  [
    {
      original: "CAMILLE:",
      translation: "CAMILLE:",
    },
    {
      original: "Je vais chez mes grands-parents; ils habiten au Maroc.",
      translation: "Voy a la casa de mis abuelos; viven en Marruecos.",
    },
  ],
  [
    {
      original: "SONIA:",
      translation: "SONIA:",
    },
    {
      original: "Oh! Tu as de la chance...",
      translation: "¡Oh! Tienes suerte...",
    },
    {
      original:
        "Mes parents et moi, on va toujours en vacances au même camping, et on part en voiture; je déteste la voiture...",
      translation:
        "Mis padres y yo siempre vamos de vacaciones al mismo camping, y nos vamos en coche; odio el coche...",
    },
    {
      original: "Mon rêve, c’est d’aller à l’étranger, à New York, à Tokyo...",
      translation: "Mi sueño es ir al extranjero, a Nueva York, a Tokio...",
    },
  ],
  [
    {
      original: "CAMILLE:",
      translation: "CAMILLE:",
    },
    {
      original:
        "Moi, je déteste l’avion et je rêve de faire du camping à la campagne!",
      translation: "¡Odio volar y sueño con acampar en el campo!",
    },
    {
      original: "On échange?",
      translation: "¿Deberíamos intercambiar?",
    },
  ],
];

const exercise8ChooseBetweenData = [
  {
    textParts: ["Julien va à la montagne en train.", ""],
    options: [
      [
        {
          answer: "vrai",
          correct: true,
        },
        {
          answer: "faux",
          correct: false,
        },
      ],
    ],
  },
  {
    textParts: ["Sonia va au camping en voiture.", ""],
    options: [
      [
        {
          answer: "vrai",
          correct: true,
        },
        {
          answer: "faux",
          correct: false,
        },
      ],
    ],
  },
  {
    textParts: ["Julien va chez ses grands-parents en voiture.", ""],
    options: [
      [
        {
          answer: "vrai",
          correct: false,
        },
        {
          answer: "faux",
          correct: true,
        },
      ],
    ],
  },
  {
    textParts: ["Ali va au camping en train.", ""],
    options: [
      [
        {
          answer: "vrai",
          correct: false,
        },
        {
          answer: "faux",
          correct: true,
        },
      ],
    ],
  },
  {
    textParts: ["Camille va chez ses grads-parents en avion.", ""],
    options: [
      [
        {
          answer: "vrai",
          correct: true,
        },
        {
          answer: "faux",
          correct: false,
        },
      ],
    ],
  },
  {
    textParts: ["Ali va à la mer en train.", ""],
    options: [
      [
        {
          answer: "vrai",
          correct: true,
        },
        {
          answer: "faux",
          correct: false,
        },
      ],
    ],
  },
  {
    textParts: ["Camille va a la montagne en avion.", ""],
    options: [
      [
        {
          answer: "vrai",
          correct: true,
        },
        {
          answer: "faux",
          correct: false,
        },
      ],
    ],
  },
  {
    textParts: ["Sonia va à la mer en avion.", ""],
    options: [
      [
        {
          answer: "vrai",
          correct: false,
        },
        {
          answer: "faux",
          correct: true,
        },
      ],
    ],
  },
  {
    textParts: ["Ali va à la mer en train.", ""],
    options: [
      [
        {
          answer: "vrai",
          correct: true,
        },
        {
          answer: "faux",
          correct: false,
        },
      ],
    ],
  },
];

const exercise9ReadingData = [
  [
    {
      original: "Camille:",
      translation: "",
    },
    {
      original: "Bonjour, Madame, Je m'appelle Camille Hernandez.",
      translation: "",
    },
    {
      original: "Puis-je parler au chef du personnel?",
      translation: "",
    },
    {
      original: "Je téléphone pour l'annonce concernant le poste de réceptionniste parue dans le Nice-Matin d'aujourd'hui.",
      translation: "",
    },
  ],
  [
    {
      original: "La dame:",
      translation: "",
    },
    {
      original: "À votre accent, je devine que vous n'êtes pas française!",
      translation: "",
    },
  ],
  [
    {
      original: "Camille:",
      translation: "",
    },
    {
      original: "Non, je suis mexicaine, je suis dans le programme Erasmus depuis deux mois à la Faculté des Lettres.",
      translation: "",
    },
  ],
  [
    {
      original: "La dame:",
      translation: "",
    },
    {
      original: "Avez-vous travaillé avant?",
      translation: "",
    },
  ],
  [
    {
      original: "Camille:",
      translation: "",
    },
    {
      original: "Oui, j'ai travaillé six mois au Mexique comme standardiste-réceptionniste dans une auberge de jeunesse.",
      translation: "",
    },
  ],
  [
    {
      original: "La dame:",
      translation: "",
    },
    {
      original: "Dans une auberge de jeunesse!",
      translation: "",
    },
    {
      original: "Mais nous cherchons un réceptionniste pour un hôtel quatre étoiles.",
      translation: "",
    },
  ],
  [
    {
      original: "Camille:",
      translation: "",
    },
    {
      original: "Je m’adapte facilement, j’aime les choses nouvelles!",
      translation: "",
    },
    {
      original: "Je parle plusieurs langues et je sais utiliser un ordinateur.",
      translation: "",
    },
  ],
  [
    {
      original: "La dame:",
      translation: "",
    },
    {
      original: "Quelles langues parlez-vous?",
      translation: "",
    },
  ],
  [
    {
      original: "Judith:",
      translation: "",
    },
    {
      original: "Je parle espagnol bien sûr, allemand, anglais, français et un tout petit peu italien.",
      translation: "",
    },
  ],
  [
    {
      original: "La dame:",
      translation: "",
    },
    {
      original: "En effet, vous êtes polyglotte!",
      translation: "",
    },
    {
      original: "Acceptez-vous des horaires flexibles et de travailler le week-end?",
      translation: "",
    },
  ],
  [
    {
      original: "Camille:",
      translation: "",
    },
    {
      original: "Sans problème, je suis libre.",
      translation: "",
    },
  ],
  [
    {
      original: "La dame:",
      translation: "",
    },
    {
      original: "Bien, cela semble intéressant.",
      translation: "",
    },
    {
      original: "Vous pouvez venir cet après-midi à 14h30 avec votre C.V. pour un entretien d’embauche.",
      translation: "",
    },
    {
      original: "Je vais examiner plus sérieusement votre candidature.",
      translation: "",
    },
  ],
  [
    {
      original: "Camille:",
      translation: "",
    },
    {
      original: "Avec plaisir.",
      translation: "",
    },
    {
      original: "Où est-ce que je dois me présenter?",
      translation: "",
    },
  ],
  [
    {
      original: "La dame:",
      translation: "",
    },
    {
      original: "Venez au n° 131, rue de la République.",
      translation: "",
    },
    {
      original: "Demandez Mme Martineau à l'accueil.",
      translation: "",
    },
  ],
  [
    {
      original: "Camille:",
      translation: "",
    },
    {
      original: "Très bien, c’est noté.",
      translation: "",
    },
    {
      original: "Merci pour votre confiance, à tout à l'heure et bonne journée.",
      translation: "",
    },
  ],
];

const exercise9MultipleChoiceData = [
  {
    question: {
      original: "La encargada del personal se ocupa de:",
      translation: "",
    },
    options: [
      {
        original: "Decir ordenes a los empleados de la empresa",
        translation: "",
      },
      {
        original: "Registrar los contactos de nuevos clientes",
        translation: "",
      },
      {
        original: "Contratar nuevas personas",
        translation: "",
      },
    ],
    correct: "Contratar nuevas personas",
  },
  {
    question: {
      original: "En el texto, para buscar trabajo Camille:",
      translation: "",
    },
    options: [
      {
        original: "Visita los hoteles",
        translation: "",
      },
      {
        original: "Lee los anuncios en el periódico",
        translation: "",
      },
      {
        original: "Envia solicitudes de trabajo",
        translation: "",
      },
    ],
    correct: "Lee los anuncios en el periódico",
  },
  {
    question: {
      original: "Para trabajar como recepcionista de un hotel, debes:",
      translation: "",
    },
    options: [
      {
        original: "Haber trabajado antes en un albergue de niños",
        translation: "",
      },
      {
        original: "Hablar distintas lenguas",
        translation: "",
      },
      {
        original: "Ser frances(a).",
        translation: "",
      },
    ],
    correct: "Hablar distintas lenguas",
  },
];

ReactDOM.render(
  <FillBlank data={fillBlank1Data} />,
  document.querySelector("#fillBlank1")
);

ReactDOM.render(
  <FillBlank data={fillBlank2Data} />,
  document.querySelector("#fillBlank2")
);

ReactDOM.render(
  <FillBlank data={fillBlankDownData} />,
  document.querySelector("#fillBlankDown")
);

ReactDOM.render(
  <FillBlank data={fillBlankBridgeData} />,
  document.querySelector("#fillBlankBridge")
);

ReactDOM.render(
  <FillBlank data={fillBlankUpData} />,
  document.querySelector("#fillBlankUp")
);

ReactDOM.render(
  <FillBlank data={fillBlankLeftData} />,
  document.querySelector("#fillBlankLeft")
);

ReactDOM.render(
  <FillBlank data={fillBlankRightData} />,
  document.querySelector("#fillBlankRight")
);

ReactDOM.render(
  <FillBlank data={exercise6} />,
  document.querySelector("#exercise-6")
);

ReactDOM.render(
  <ChooseBetween data={exercise7} />,
  document.querySelector("#exercise-7")
);

ReactDOM.render(
  <ReadingAndChooseBetween
    readingData={exercise8ReadingData}
    chooseBetweenData={exercise8ChooseBetweenData}
  />,
  document.querySelector("#exercise-8")
);

ReactDOM.render(
  <ReadingAndMultipleChoiceQuiz
    readingData={exercise9ReadingData}
    multipleChoiceData={exercise9MultipleChoiceData}
  />,
  document.querySelector("#exercise-9")
);
