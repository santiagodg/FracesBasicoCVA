import React from "react";
import ReactDOM from "react-dom";

import ReadingAndChooseBetween from "../ReadingAndChooseBetween";

const exercise1ReadingData = [
  [
    {
      original: "Employé: Bonjour, qu’est-ce qu’il vous faudra?",
      translation: "",
    },
  ],
  [
    {
      original: "Client: Je vais prendre des tomates.",
      translation: "",
    },
  ],
  [
    {
      original:
        "Employé: Alors, des tomates, regardez comme elles sont belles! Je vous en mets combien?",
      translation: "",
    },
  ],
  [
    {
      original: "Client: Il m’en faut un kilo.",
      translation: "",
    },
  ],
  [
    {
      original: "Employé: Alors, un kilo de tomates... Un kilo cent... ça ira?",
      translation: "",
    },
  ],
  [
    {
      original: "Client: Oui.",
      translation: "",
    },
  ],
  [
    {
      original: "Employé: Et avec ceci?",
      translation: "",
    },
  ],
  [
    {
      original: "Client: Je voudrais une belle laitue.",
      translation: "",
    },
  ],
  [
    {
      original: "Employé: Une belle laitue!",
      translation: "",
    },
  ],
  [
    {
      original: "Client: Ils sont à combien vos oignons?",
      translation: "",
    },
  ],
  [
    {
      original: "Employé: Un euro le kilo!",
      translation: "",
    },
  ],
  [
    {
      original: "Client: Ils sont pas chers.",
      translation: "",
    },
  ],
  [
    {
      original: "Employé: Oui, et ils sont bons!",
      translation: "",
    },
  ],
  [
    {
      original: "Client: Alors mettez-m’en un kilo. Ce sera tout.",
      translation: "",
    },
  ],
  [
    {
      original:
        "Employé: Alors, une laitue, un kilo d’oignons, un kilo de tomates, Ça nous fera... allez! Trois euros! Tenez.",
      translation: "",
    },
  ],
  [
    {
      original:
        "Client: Merci, bonne journée. Allez! On y va dans l’oignon, on y va!",
      translation: "",
    },
  ],
  [
    {
      original: "",
      translation: "",
    },
  ],
  [
    {
      original:
        "Instrucciones: Contesta verdadero o falso de acuerdo con tu comprensión en la lectura.",
      translation: "",
    },
  ],
];

const exercise1ChooseBetweenData = [
  {
    textParts: ["Le client a besoin d’un kilo de tomates:", ""],
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
    textParts: ["Le client voudrait un kilo d’oignons:", ""],
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
    textParts: ["La laitue coûte deux euros:", ""],
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
    textParts: ["Le client achète une laitue:", ""],
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

const exercise2ReadingData = [
  [
    {
      original: "Employé: Monsieur bonjour.",
      translation: "",
    },
  ],
  [
    {
      original:
        "Client: Bonjour, je voudrais trois croissants au beurre, un pain aux raisins et un pain au chocolat, s’il vous plaît.",
      translation: "",
    },
  ],
  [
    {
      original: "Employé: Oui, ça sera tout?",
      translation: "",
    },
  ],
  [
    {
      original: "Client: Qu’est-ce que vous avez comme tartes?",
      translation: "",
    },
  ],
  [
    {
      original:
        "Employé: J’ai des tartes aux pommes ou des tartes aux fraises.",
      translation: "",
    },
  ],
  [
    {
      original: "Client: Je vais prendre une tarte aux fraises.",
      translation: "",
    },
  ],
  [
    {
      original: "Employé: Oui c’est pour combien de personnes?",
      translation: "",
    },
  ],
  [
    {
      original: "Client: Pour six personnes.",
      translation: "",
    },
  ],
  [
    {
      original: "Employé: Voilà monsieur. 25 euros cinquante.",
      translation: "",
    },
  ],
  [
    {
      original: "Client: Voilà.",
      translation: "",
    },
  ],
  [
    {
      original: "Employé: Merci monsieur, au revoir.",
      translation: "",
    },
  ],
  [
    {
      original: "Client: Merci, bonne journée.",
      translation: "",
    },
  ],
  [
    {
      original: "",
      translation: "",
    },
  ],
  [
    {
      original:
        "Instrucciones: Contesta verdadero o falso de acuerdo con tu comprensión en la lectura.",
      translation: "",
    },
  ],
];

const exercise2ChooseBetweenData = [
  {
    textParts: ["Le client ne prend pas de croissant:", ""],
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
    textParts: ["Le client ne prend pas de croissant:", ""],
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
    textParts: ["Le client prend une tarte pour cinq personnes:", ""],
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
    textParts: ["Le client achète un pain aux raisins:", ""],
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

ReactDOM.render(
  <ReadingAndChooseBetween
    readingData={exercise1ReadingData}
    chooseBetweenData={exercise1ChooseBetweenData}
  />,
  document.querySelector("#exercise-1")
);

ReactDOM.render(
  <ReadingAndChooseBetween
    readingData={exercise2ReadingData}
    chooseBetweenData={exercise2ChooseBetweenData}
  />,
  document.querySelector("#exercise-2")
);
