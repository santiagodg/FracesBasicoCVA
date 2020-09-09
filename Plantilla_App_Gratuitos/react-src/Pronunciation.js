import React from "react";
import "./Pronunciation.css";

const PronunciationUnit = ({ phrase, translation, audio }) => {
  // {
  //   phrase: "Salut",
  //   translation: "Hola",
  //   audio: "/audio/Salut.m4a",
  // }

  const audioObj = new Audio(audio);
  const handlePlayAudio = (event) => {
    event.preventDefault();
    audioObj.play();
  }

  return (
    <div className="col-4">
      <div className="card bg-light p-3 m-3 text-center pronunciation-unit" onClick={handlePlayAudio}>
        <div>
          <i className="fas fa-volume-up display-4 text-body" />
        </div>
        <div className="h1">{phrase}</div>
        <div>{translation}</div>
      </div>
    </div>
  );
};

const Pronunciation = ({ data }) => {
  // [
  //   {
  //     phrase: "Salut",
  //     translation: "Hola",
  //     audio: "/audio/Salut.m4a",
  //   },
  // ]

  const pronUnits = data.map((unit) => (
    <PronunciationUnit
      key={unit.phrase}
      phrase={unit.phrase}
      translation={unit.translation}
      audio={unit.audio}
    />
  ));

  return (
    <div className="card m-5 p-3 bg-white shadow">
      <div className="row no-gutters">
        {pronUnits}
      </div>
    </div>
  );
};

export default Pronunciation;
