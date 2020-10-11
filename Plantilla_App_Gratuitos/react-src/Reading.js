import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import "./custom-tooltip.css";

const Reading = ({ data, graded }) => {
  return (
    <div className="reading px-5">
      {data.map((paragraph, i) => {
        return (
          <p key={i}>
            {paragraph.map((sentence, j) => {
              if (!graded) {
                return (
                  <span>
                    <span key={j} className="font-italic">{sentence.original}</span>
                    &nbsp;
                  </span>
                );
              } else {
                return (
                  <span>
                    <Tooltip
                      key={j}
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
