import React from "react";
import ReactDOM from "react-dom";

import FillBlank from "../FillBlank";

const fillBlankData = [
  [
    {
      blank: false,
      original: "Mon fils a une sœur.",
      translation: "Mi hijo tiene una hermana.",
    },
    {
      blank: false,
      original: "Elle est aussi ma",
      translation: "Ella es también mi",
    },
    {
      blank: true,
      original: "fille",
      translation: "hija",
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
      original: "La mère de mon père s'appelle Sarah.",
      translation: "La madre de mi padre se llama Sarah.",
    },
    {
      blank: false,
      original: "C’est ma",
      translation: "Es mi",
    },
    {
      blank: true,
      original: "grand-mère",
      translation: "abuela",
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
      original: "Ma tante a une fille.",
      translation: "Mi tía tiene una hija.",
    },
    {
      blank: false,
      original: "C’est ma",
      translation: "Es mi",
    },
    {
      blank: true,
      original: "cousine",
      translation: "prima",
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
      original: "Le père de ma mère s’appelle Julien.",
      translation: "El padre de mi madre se llama Julien.",
    },
    {
      blank: false,
      original: "C'est mon",
      translation: "Es mi",
    },
    {
      blank: true,
      original: "grand-père",
      translation: "abuelo",
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
      original: "Mon père a un fils.",
      translation: "Mi padre tiene un hijo.",
    },
    {
      blank: false,
      original: "C'est mon",
      translation: "Es mi",
    },
    {
      blank: true,
      original: "frère",
      translation: "hermano",
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
      original: "Lola a les mêmes parents que moi qui suis sa",
      translation: "Lola tiene los mismos padres que yo que soy su",
    },
    {
      blank: true,
      original: "soeur",
      translation: "hermana",
    },
    {
      blank: false,
      original: ".",
      translation: ".",
    },
  ],
];

ReactDOM.render(
  <FillBlank data={fillBlankData} />,
  document.querySelector("#fillBlank")
);
