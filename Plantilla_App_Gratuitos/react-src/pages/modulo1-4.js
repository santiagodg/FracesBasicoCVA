import React from "react";
import ReactDOM from "react-dom";

import Translator from "../Translator";

const assetsPath = "../../assets/";

const translationData = [
  {
    phrase: "Tu vas toujours à la fac en tram.",
    translation: "Siempre vas a la uni en tranvía.",
    audio: `${assetsPath}audio/Tu vas toujours à la fac en tram.m4a`,
  },
  {
    phrase: "Arrête de faire tout ce bruit.",
    translation: "¡Deja de hacer tanto ruido!",
    audio: `${assetsPath}audio/Arrête de faire tout ce bruit.m4a`,
  },
  {
    phrase: "Il aime faire la cuisine.",
    translation: "Le gusta cocinar.",
    audio: `${assetsPath}audio/Il aime faire la cuisine.m4a`,
  },
  {
    phrase: "Je veux juste avoir une conversation mature.",
    translation: "Sólo quiero mantener una conversación madura.",
    audio: `${assetsPath}audio/Je veux juste avoir une conversation mature.m4a`,
  },
];

ReactDOM.render(
  <Translator data={translationData} />,
  document.querySelector("#translator")
);
