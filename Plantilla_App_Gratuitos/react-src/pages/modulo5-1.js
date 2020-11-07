import React from "react";
import ReactDOM from "react-dom";

import FillBlank from "../FillBlank";

const fillBlankData = [
  [
    {
      blank: false,
      original: "Il travaille dans un jardin, il est",
      translation: "Él trabaja en un jardín, él es",
    },
    {
      blank: true,
      original: "jardinier",
      translation: "jardinero",
    },
  ],
  [
    {
      blank: false,
      original: "Il éteint le feu, il est",
      translation: "Extingue el fuego, es",
    },
    {
      blank: true,
      original: "pompier",
      translation: "bombero",
    },
  ],
  [
    {
      blank: false,
      original: "Il construit des maisons, il est",
      translation: "Él construye casas, él es",
    },
    {
      blank: true,
      original: "architecte",
      translation: "arquitecto",
    },
  ],
  [
    {
      blank: false,
      original: "Elle soigne les dents, elle est",
      translation: "Ella cuida los dientes, ella es",
    },
    {
      blank: true,
      original: "dentiste",
      translation: "dentista",
    },
  ],
  [
    {
      blank: false,
      original: "Elle peint des tableaux, elle est",
      translation: "Ella pinta cuadros, ella es",
    },
    {
      blank: true,
      original: "peintre",
      translation: "pintora",
    },
  ],
  [
    {
      blank: false,
      original: "Elle enseigne, elle a des élèves, elle est",
      translation: "Ella enseña, tiene estudiantes, ella es",
    },
    {
      blank: true,
      original: "professeur",
      translation: "profesora",
    },
  ],
  [
    {
      blank: false,
      original: "Elle vend des médicaments, elle est",
      translation: "Ella vende drogas, ella es",
    },
    {
      blank: true,
      original: "pharmacien",
      translation: "farmacéutica",
    },
  ],
  [
    {
      blank: false,
      original: "Elle joue dans des films, elle est",
      translation: "Ella juega en películas, ella es",
    },
    {
      blank: true,
      original: "actrice",
      translation: "actriz",
    },
  ],
];

ReactDOM.render(
  <FillBlank data={fillBlankData} />,
  document.querySelector("#fillBlank")
);
