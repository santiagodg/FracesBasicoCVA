import React from "react";
import ReactDOM from "react-dom";

import FillBlank from "../FillBlank";

const fillBlankData = [
  [
    {
      blank: false,
      original: "1)",
    },
    {
      blank: true,
      original: "11:15",
    },
    {
      blank: true,
      original: "onze heures et quart",
    },
  ],
  [
    {
      blank: false,
      original: "2)",
    },
    {
      blank: true,
      original: "10:05",
    },
    {
      blank: true,
      original: "dix heures cinq",
    },
  ],
  [
    {
      blank: false,
      original: "3)",
    },
    {
      blank: true,
      original: "08:45",
    },
    {
      blank: true,
      original: "neuf heures moins le quart",
    },
  ],
  [
    {
      blank: false,
      original: "4)",
    },
    {
      blank: true,
      original: "07:15",
    },
    {
      blank: true,
      original: "sept heures et quart",
    },
  ],
];

ReactDOM.render(
  <FillBlank data={fillBlankData} />,
  document.querySelector("#fillBlank")
);

