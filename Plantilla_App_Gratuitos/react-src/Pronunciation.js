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
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 px-sm-2 py-2">
      <div className="border rounded bg-light padding-20 h-100 text-center pronunciation-unit" onClick={handlePlayAudio}>
        <div>
          <i className="fas fa-volume-up display-4 text-body" />
        </div>
        <div className="h3">{phrase}</div>
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
    <div className="bg-white">
      <div className="row no-gutters justify-content-center">
        {pronUnits}
      </div>
    </div>
  );
};

export default Pronunciation;
