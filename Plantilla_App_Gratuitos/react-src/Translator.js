import React from "react";

const TranslatorRow = ({
  phrase,
  translation,
  audio,
  handleTranslate,
  isTranslated,
}) => {
  // {
  //   phrase: "Salut",
  //   translation: "Hola",
  //   audio: "/audio/Salut.m4a",
  //   handleTranslate: (phrase) => { ... },
  //   isTranslated: true,
  // }
  const handleSwitchTranslation = (event) => {
    event.preventDefault();
    handleTranslate(phrase);
  };

  const audioObj = new Audio(audio);
  const handlePlayAudio = (event) => {
    event.preventDefault();
    audioObj.play();
    handleTranslate(phrase);
  };

  return (
    <>
      <hr className="m-0" style={{borderTopWidth: "2px", borderTopColor: ""}} />
      <div className="row no-gutters my-1">
        <div className="col-md-6 no-pdd">
          <div className="row">
            <div className="col-auto">
              <button
                className="btn btn-secondary my-auto"
                onClick={handlePlayAudio}
              >
                <i className="fas fa-volume-up" />
              </button>
            </div>
            <div className="col mx-auto my-auto text-center" style={{maxWidth: "100%", width: "auto"}}>
              <span className="font-size-16">{phrase}</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 no-pdd">
          <div className="row">
            {isTranslated ? (
              <>
                <div className="col mx-auto my-auto text-center" style={{maxWidth: "100%", width: "auto"}}>
                  <span className="font-size-16">{translation}</span>
                </div>
                <div className="col-auto ml-auto">
                  <button
                    className="btn btn-secondary mb-0"
                    onClick={handleSwitchTranslation}
                  >
                    <i className="fas fa-eye-slash" />
                  </button>
                </div>
              </>
            ) : (
              <div className="col-auto mx-auto">
                <button
                  className="btn btn-secondary mb-0"
                  onClick={handleSwitchTranslation}
                >
                  <i className="fas fa-eye" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const Translator = ({ data }) => {
  // const data = [
  //   {
  //     phrase: "Salut",
  //     translation: "Hola",
  //     audio: "/audio/Salut.m4a",
  //   },
  // ];

  const [isTranslated, setIsTranslated] = React.useState(
    Array.apply(null, Array(data.length)).map(() => false)
  );

  const onClickHideAllTranslations = () => {
    setIsTranslated(Array.apply(null, Array(data.length)).map(() => false));
  };

  const onClickShowAllTranslations = () => {
    setIsTranslated(Array.apply(null, Array(data.length)).map(() => true));
  };

  const onClickTranslate = (phrase) => {
    let index = 0;
    for (const translation of data) {
      if (translation.phrase == phrase) {
        let copy = isTranslated.slice();
        copy[index] = !copy[index];
        setIsTranslated(copy);
      }
      index++;
    }
  };

  const translationRows = data.map((trans, index) => (
    <TranslatorRow
      key={trans.phrase}
      phrase={trans.phrase}
      translation={trans.translation}
      audio={trans.audio}
      handleTranslate={onClickTranslate}
      isTranslated={isTranslated[index]}
    />
  ));

  return (
    <div style={{ color: "#000" }}>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-actual-page mrg-horizon-10"
          onClick={onClickShowAllTranslations}
        >
          Mostrar
        </button>
        <button
          className="btn btn-actual-page mrg-horizon-10"
          onClick={onClickHideAllTranslations}
        >
          Esconder
        </button>
      </div>
      {translationRows}
      <hr className="m-0" style={{borderTopWidth: "2px", borderTopColor: ""}} />
    </div>
  );
};

export default Translator;
