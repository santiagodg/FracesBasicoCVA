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
  const { title, audio, lines } = props.data;
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef(null);

  // let audioObj = new Audio(audio);
  const handlePlayAudio = (event) => {
    audioRef.current.play().then(() => {
      setIsPlaying(true);
    });
  };

  const handlePauseAudio = (event) => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleEndedAudio = (event) => {
    setIsPlaying(false);
  }

  const dialogLines = lines.map((line, index) => (
    <p key={index} className="mrg-btm-10 lh-1">
      <span className="font-weight-bold">{`${line.character}: `}</span>
      {line.text}
    </p>
  ));

  const playPauseButton = isPlaying ? (
    <button
      className="btn btn-actual-page mr-3 px-4"
      onClick={handlePauseAudio}
    >
      <i className="fas fa-pause" />
    </button>
  ) : (
    <button className="btn btn-actual-page mr-3 px-4" onClick={handlePlayAudio}>
      <i className="fas fa-volume-up" />
    </button>
  );

  return (
    <div className="bg-white">
      <div className="d-flex">
        {playPauseButton}
        <audio ref={audioRef} src={audio} onEnded={handleEndedAudio} />
        <h1 className="mr-auto">{title}</h1>
      </div>
      <hr />
      {dialogLines}
    </div>
  );
};

export default Dialog;
