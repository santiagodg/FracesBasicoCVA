import React from "react";
import ReactDOM from "react-dom";

import ListenPhrase from "../ListenPhrase";

const assetsPath = "../../assets/";

const listenPhraseData = [
  {
    sentences: [
      {
        original: "Elle est grande, elle a les yeux bleus et les cheveux blonds.",
        translation: "Ella es alta, ella tiene los ojos azules y el pelo rubio.",
      },
    ],
    audio: `${assetsPath}audio/filename.ext`,
  },
  {
    sentences: [
      {
        original: "Je ne suis pas très grande et je suis mince.",
        translation: "Yo no soy tan alta y soy delgada.",
      },
      {
        original: "J'ai les cheveux longs, blonds et ondulés et j’ai les yeux marron.",
        translation: "Tengo el pelo largo, rubio y ondulado, y tengo los ojos cafés.",
      },
    ],
    audio: `${assetsPath}audio/filename.ext`,
  },
  {
    sentences: [
      {
        original: "Elle est très généreuse de caractère et très simple, elle n’est pas dans la démonstration et elle aime faire plaisir.",
        translation: "Ella es muy generosa de carácter muy simple, no le interesa presumir y le gusta caer bien.",
      },
      {
        original: "Elle adore ses amis.",
        translation: "Adora a sus amigos.",
      },
    ],
    audio: `${assetsPath}audio/filename.ext`,
  },
];

ReactDOM.render(
  <ListenPhrase data={listenPhraseData} />,
  document.querySelector("#listenPhrase")
);
