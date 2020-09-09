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
  };

  return (
    <>
      <hr className="m-0" />
      <div className="row no-gutters my-2">
        <div className="col p-2">
          <div className="d-flex">
            <button
              className="mr-auto btn btn-secondary"
              onClick={handlePlayAudio}
            >
              <i className="fas fa-volume-up" />
            </button>
            <p className="mr-auto my-auto">{phrase}</p>
          </div>
        </div>
        <div className="col p-2">
          <div className="d-flex">
            {isTranslated ? (
              <>
                <p className="ml-auto my-auto">{translation}</p>
                <button
                  className="ml-auto btn btn-secondary"
                  onClick={handleSwitchTranslation}
                >
                  <i className="fas fa-eye-slash" />
                </button>
              </>
            ) : (
              <button
                className="mx-auto btn btn-secondary"
                onClick={handleSwitchTranslation}
              >
                <i className="fas fa-eye" />
              </button>
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
    Array.apply(null, Array(data.length)).map(() => true)
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
    <div className="translator m-5 card p-3 shadow">
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-primary m-2"
          onClick={onClickShowAllTranslations}
        >
          Mostrar
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={onClickHideAllTranslations}
        >
          Esconder
        </button>
      </div>
      {translationRows}
    </div>
  );
};

export default Translator;
