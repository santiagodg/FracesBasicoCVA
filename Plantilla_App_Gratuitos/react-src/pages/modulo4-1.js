import React from "react";
import ReactDOM from "react-dom";

import FillBlank from "../FillBlank";

const fillBlank1Data = [
  [
    {
      blank: false,
      original: "Six",
    },
    {
      blank: true,
      original: "6",
    },
  ],
  [
    {
      blank: false,
      original: "Douze",
    },
    {
      blank: true,
      original: "12",
    },
  ],
  [
    {
      blank: false,
      original: "Vingt-huit",
    },
    {
      blank: true,
      original: "28",
    },
  ],
  [
    {
      blank: false,
      original: "Trente neuf",
    },
    {
      blank: true,
      original: "39",
    },
  ],
  [
    {
      blank: false,
      original: "Quarante-cinq",
    },
    {
      blank: true,
      original: "45",
    },
  ],
  [
    {
      blank: false,
      original: "Cinquante et un",
    },
    {
      blank: true,
      original: "51",
    },
  ],
  [
    {
      blank: false,
      original: "Soixante-trois",
    },
    {
      blank: true,
      original: "63",
    },
  ],
  [
    {
      blank: false,
      original: "Soixante-dix-sept",
    },
    {
      blank: true,
      original: "77",
    },
  ],
  [
    {
      blank: false,
      original: "Quatre-ving-deux",
    },
    {
      blank: true,
      original: "82",
    },
  ],
  [
    {
      blank: false,
      original: "Quatre-vingt-quinze",
    },
    {
      blank: true,
      original: "95",
    },
  ],
];

const fillBlank2Data = [
  [
    {
      blank: false,
      original: "4",
    },
    {
      blank: true,
      original: "quatre",
    },
  ],
  [
    {
      blank: false,
      original: "12",
    },
    {
      blank: true,
      original: "douze",
    },
  ],
  [
    {
      blank: false,
      original: "18",
    },
    {
      blank: true,
      original: "dix-huit",
    },
  ],
  [
    {
      blank: false,
      original: "35",
    },
    {
      blank: true,
      original: "trente-cinq",
    },
  ],
  [
    {
      blank: false,
      original: "46",
    },
    {
      blank: true,
      original: "quarante-six",
    },
  ],
  [
    {
      blank: false,
      original: "57",
    },
    {
      blank: true,
      original: "cinquante-sept",
    },
  ],
  [
    {
      blank: false,
      original: "66",
    },
    {
      blank: true,
      original: "soixante-six",
    },
  ],
  [
    {
      blank: false,
      original: "79",
    },
    {
      blank: true,
      original: "soixante-dix-neuf",
    },
  ],
  [
    {
      blank: false,
      original: "81",
    },
    {
      blank: true,
      original: "quatre-vingt-et-un",
    },
  ],
  [
    {
      blank: false,
      original: "94",
    },
    {
      blank: true,
      original: "quatre-vignt-quatorze",
    },
  ],
];

ReactDOM.render(
  <FillBlank data={fillBlank1Data} />,
  document.querySelector("#fillBlank1")
);

ReactDOM.render(
  <FillBlank data={fillBlank2Data} />,
  document.querySelector("#fillBlank2")
);
