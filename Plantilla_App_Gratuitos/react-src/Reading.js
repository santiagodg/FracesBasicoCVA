import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import "./custom-tooltip.css";

// const data = [
//   [
//     {
//       original: "Je m'appelle Daniela.",
//       translation: "Me llamo Daniela.",
//     },
//   ],
// ];

const Reading = ({ data, graded }) => {
  return (
    <div className="reading">
      {data.map((paragraph, i) => {
        return (
          <p key={i}>
            {paragraph.map((sentence, j) => {
              if (!graded) {
                return (
                  <span key={j}>
                    <span className="font-italic">{sentence.original}</span>
                    &nbsp;
                  </span>
                );
              } else {
                return (
                  <span key={j}>
                    <Tooltip
                      title={sentence.translation}
                      placement="top"
                      classes={{ tooltip: "custom-tooltip" }}
                    >
                      <span className="font-italic underline-on-hover">
                        {sentence.original}
                      </span>
                    </Tooltip>
                    &nbsp;
                  </span>
                );
              }
            })}
          </p>
        );
      })}
    </div>
  );
};

export default Reading;
