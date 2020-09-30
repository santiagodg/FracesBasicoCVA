import React from "react";

const Dialog = (props) => {
  // {
  //   title: "Diálogo 1",
  //   audio: "/audio/Diálogo1.m4a",
  //   lines: [
  //     {
  //       character: "Caroline",
  //       text: "Salut François, ça va?",
  //     },
  //   ],
  // }
  const {title, audio, lines} = props.data;

  const audioObj = new Audio(audio);
  const handlePlayAudio = (event) => {
    event.preventDefault();
    audioObj.play();
  }

  const dialogLines = lines.map((line, index) => (
    <p key={index} className="mrg-btm-10 lh-1">
      <span className="font-weight-bold">{`${line.character}: `}</span>
      {line.text}
    </p>
  ));

  return (
    <div className="margin-20 bg-white padding-20">
      <div className="d-flex">
        <button className="btn btn-actual-page mr-3 px-4" onClick={handlePlayAudio}>
          <i className="fas fa-volume-up" />
        </button>
        <h1 className="mr-auto">{title}</h1>
      </div>
      <hr />
      {dialogLines}
    </div>
  );
};

export default Dialog;
