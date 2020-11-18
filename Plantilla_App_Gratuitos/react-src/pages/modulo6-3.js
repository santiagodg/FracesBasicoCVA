import React from "react";
import ReactDOM from "react-dom";

import ReadingAndFillBlank from "../ReadingAndFillBlank";

const exercise3ReadingData = [
  [
    {
      original: "Serveur :	Bonjour. Une table pour deux personnes?",
      translation: "Servidor: Buenos días. ¿Una mesa para dos?",
    },
  ],
  [
    {
      original: "Client 1 :	Oui, nous sommes deux. Vous avez un espace non-fumeur?",
      translation: "Cliente 1: Sí, somos dos. ¿Tiene una zona para no fumadores?",
    },
  ],
  [
    {
      original: "Serveur :	Bien sûr. Vous préférez cette table, ou celle-ci, près de la fenêtre?",
      translation: "Servidor: Claro. ¿Prefieres esta mesa, o ésta, junto a la ventana?",
    },
  ],
  [
    {
      original: "Client 1 :	Plutôt celle-ci.",
      translation: "Cliente 1: Más bien esta.",
    },
  ],
  [
    {
      original: "Serveur :	Très bien. Installez-vous. Voici le menu.",
      translation: "Servidor: Muy bien. Siéntense. Aquí está el menú.",
    },
  ],
  [
    {
      original: "Serveur :	Vous avez choisi? Désirez-vous prendre un apéritif?",
      translation: "Servidor: ¿Ha elegido? ¿Quieres un aperitivo?",
    },
  ],
  [
    {
      original: "Client 1 :	Oui, on voudrait 2 kirs s'il vous plaît.",
      translation: "Cliente 1: Sí, nos gustaría 2 kirs por favor.",
    },
  ],
  [
    {
      original: "Serveur :	Et comme entrée?",
      translation: "Servidor: ¿Y como entrada?",
    },
  ],
  [
    {
      original: "Client 1 :	Je prendrai une terrine campagnarde.",
      translation: "Cliente 1: Tendré una terrina campestre.",
    },
  ],
  [
    {
      original: "Client 2 :	Pour moi, une salade de chèvre chaud.",
      translation: "Cliente 2: Para mí, una ensalada de cabra caliente.",
    },
  ],
  [
    {
      original: "Serveur :	Très bien. Et en plat principal ",
      translation: "Servidor: Muy bien. ¿Y como plato principal?",
    },
  ],
  [
    {
      original: "Client 1 :	Pour moi, un steak-frites, s'il vous plaît.",
      translation: "Cliente 1: Para mí, un bistec y patatas fritas, por favor.",
    },
  ],
  [
    {
      original: "Serveur :	Quelle cuisson pour la viande?",
      translation: "Servidor: ¿Cómo término para la carne?",
    },
  ],
  [
    {
      original: "Client 1 :	Bien cuite.",
      translation: "Cliente 1: Bien cocinado.",
    },
  ],
  [
    {
      original: "Client 2 :	Moi, je voudrais un pavé de saumon avec des légumes.",
      translation: "Cliente 2: Me gustaría un salmón con verduras.",
    },
  ],
  [
    {
      original: "Serveur :	Voulez-vous un peu de vin pour accompagner le repas?",
      translation: "Camarero: ¿Quieres un poco de vino para acompañar la comida?",
    },
  ],
  [
    {
      original: "Client 1 :	Bonne idée. Qu'est-ce que vous nous conseillez?",
      translation: "Cliente 1: Buena idea. ¿Qué recomienda?",
    },
  ],
  [
    {
      original: "Serveur :	Je vous conseille un vin blanc: un Sauvignon par exemple.",
      translation: "Servidor: Recomiendo un vino blanco: un Sauvignon por ejemplo.",
    },
  ],
  [
    {
      original: "Client 1 :	D'accord, alors je vais prendre une demi-bouteille de Sauvignon.",
      translation: "Cliente 1: Bien, vuelvo con media botella de Sauvignon.",
    },
  ],
  [
    {
      original: "Client 2 :	Et une bouteille d'eau minérale s'il vous plaît.",
      translation: "Cliente 2: Y una botella de agua mineral, por favor.",
    },
  ],
  [
    {
      original: "Serveur :	Avez-vous choisi votre dessert?",
      translation: "Servidor: ¿Has elegido tu postre?",
    },
  ],
  [
    {
      original: "Client 1 :	Oui, je vais prendre une salade de fruits.",
      translation: "Cliente 1: Sí, tomaré una ensalada de frutas.",
    },
  ],
  [
    {
      original: "Client 2 :	Et moi, une tartelette au citron, s'il vous plaît.",
      translation: "Cliente 2: Y yo una tarta de limón, por favor.",
    },
  ],
  [
    {
      original: "Serveur :	Merci, c'est noté!",
      translation: "Servidor: ¡Gracias, ya lo anoté!",
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
      original: "Instrucciones: Contesta las siguientes preguntas de acuerdo con tu comprensión en la lectura.",
      translation: "",
    },
  ],
];

const exercise3FillBlankData = [
  [
    {
      blank: false,
      original: "Qu’est-ce que les clients ont choisi en apéritif?",
      translation: "¿Qué eligieron los huéspedes como aperitivo?",
    },
    {
      blank: true,
      original: "Ils ont choisi deux kirs.",
      translation: "Eligieron dos kirs.",
    },
    {
      blank: false,
      original: "",
      translation: "",
    },
  ],
  [
    {
      blank: false,
      original: "Qu’est-ce que le client 1 a choisi en entréé?",
      translation: "¿Qué eligió el Cliente 1 de entrada?",
    },
    {
      blank: true,
      original: "Il a choisi une terrine campagnarde.",
      translation: "Eligió una terrina campestre.",
    },
    {
      blank: false,
      original: "",
      translation: "",
    },
  ],
  [
    {
      blank: false,
      original: "Qu’est-ce que le client 1 a choisi en plat principal?",
      translation: "¿Qué eligió el Cliente 1 como plato principal?",
    },
    {
      blank: true,
      original: "Il a choisi un steak-frites.",
      translation: "Eligió un filete y patatas fritas.",
    },
    {
      blank: false,
      original: "",
      translation: "",
    },
  ],
  [
    {
      blank: false,
      original: "Qu’est-ce que le client 1 a choisi en dessert?",
      translation: "¿Qué eligió el Cliente 1 para el postre?",
    },
    {
      blank: true,
      original: "Il a choisi une salade de fruits.",
      translation: "Eligió un filete y patatas fritas.",
    },
    {
      blank: false,
      original: "",
      translation: "",
    },
  ],
  [
    {
      blank: false,
      original: "Qu’est-ce que le client 2 a choisi en entrée?",
      translation: "¿Qué eligió el Cliente 2 como entrada?",
    },
    {
      blank: true,
      original: "Il a choisi une salade de chèvre chaud.",
      translation: "Eligió una ensalada de cabra caliente.",
    },
    {
      blank: false,
      original: "",
      translation: "",
    },
  ],
  [
    {
      blank: false,
      original: "Qu’est-ce que le client 2 a choisi en plat principal?",
      translation: "¿Qué eligió el Cliente 2 como plato principal?",
    },
    {
      blank: true,
      original: "Il a choisi un pavé de saumon avec des légumes.",
      translation: "Eligió un salmón con verduras.",
    },
    {
      blank: false,
      original: "",
      translation: "",
    },
  ],
  [
    {
      blank: false,
      original: "Qu’est-ce que le client 2 a chosi en dessert?",
      translation: "¿Qué eligió el cliente 2 para el postre?",
    },
    {
      blank: true,
      original: "Il a choisi une tartelette au citron.",
      translation: "Eligió una tarta de limón.",
    },
    {
      blank: false,
      original: "",
      translation: "",
    },
  ],
  [
    {
      blank: false,
      original: "Quelles boissons est-ce qu’ils ont choisies?",
      translation: "¿Qué bebidas eligieron?",
    },
    {
      blank: true,
      original: "Ils ont choisi une demi-bouteille de Sauvignon et un bouteille d'eau minérale. ",
      translation: "Eligieron media botella de Sauvignon y una botella de agua mineral.",
    },
    {
      blank: false,
      original: "",
      translation: "",
    },
  ],
];

ReactDOM.render(
  <ReadingAndFillBlank
    readingData={exercise3ReadingData}
    fillBlankData={exercise3FillBlankData}
  />,
  document.querySelector("#exercise-3")
);
