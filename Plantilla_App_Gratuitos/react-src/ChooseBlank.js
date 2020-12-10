import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import "./ChooseBlank.css";

const ChooseBlankItem = ({
  firstPart,
  secondPart,
  options,
  translation,
  selectedState,
  isCorrectState,
  graded,
}) => {
  const [selected, setIsSelected] = selectedState;
  const [isCorrect, setIsCorrect] = isCorrectState;

  const handleChange = (event, value) => {
    if (!graded) {
      setIsSelected(value);
    }
  };

  // const gradeIndicator = graded ? (
  //   isCorrect ? (
  //     <span style={{ color: "#59cc33", fontSize: "30px" }}>
  //       <i className="fas fa-check"></i>&nbsp;
  //     </span>
  //   ) : (
  //     <span style={{ color: "red", fontSize: "30px" }}>
  //       <i className="fas fa-times"></i>&nbsp;
  //     </span>
  //   )
  // ) : null;

  const toggleButtons = options.map((opt, index) => {
    const classes = {};
    classes.selected = graded
      ? opt.correct
        ? "choose-blank-selected-correct"
        : "choose-blank-selected-incorrect"
      : undefined;
    classes.root =
      graded && opt.correct ? "choose-blank-root-correct" : undefined;
    return (
      <ToggleButton key={opt.answer} value={index} classes={classes}>
        <span>{opt.answer}</span>
      </ToggleButton>
    );
  });

  return (
    <div className="my-1">
      <div className="row">
        <div className="col align-self-center">
          
            <p className="mb-0 font-size-16">
              {/* {gradeIndicator} */}
              <span>{firstPart}</span>
              <span>
                &nbsp;
                <u>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </u>
                &nbsp;
              </span>
              <span>{secondPart}</span>
            </p>
          
        </div>
        <div className="col-auto align-self-end align-self-center">
          <ToggleButtonGroup
            exclusive
            value={selected}
            onChange={handleChange}
            className="pl-2"
          >
            {toggleButtons}
          </ToggleButtonGroup>
        </div>
      </div>
      {graded && (
        <div>
          <p>
            <i>{translation}</i>
          </p>
        </div>
      )}
      <hr className="my-1" />
    </div>
  );
};

// [
//   {
//     firstPart: "Elle téléphone à",
//     secondPart: "amis.",
//     options: [
//       {
//         answer: "leur",
//         correct: false,
//       },
//       {
//         answer: "mon",
//         correct: false,
//       },
//       {
//         answer: "ses",
//         correct: true,
//       },
//     ],
//     translation: "Ella llama a sus amigos.",
//   },
// ]
const ChooseBlank = ({ data }) => {
  const selectedStates = data.map(() => React.useState(null));
  const isCorrectStates = data.map(() => React.useState(false));
  const [graded, setGraded] = React.useState(false);

  const handleClickGrade = (event) => {
    for (let i = 0; i < data.length; ++i) {
      const [selected, setSelected] = selectedStates[i];
      if (selected !== null && data[i].options[selected].correct) {
        const [isCorrect, setIsCorrect] = isCorrectStates[i];
        setIsCorrect(true);
      }
    }
    setGraded(true);
  };

  const handleClickClear = () => {
    for (let i = 0; i < data.length; ++i) {
      const [selected, setSelected] = selectedStates[i];
      const [isCorrect, setIsCorrect] = isCorrectStates[i];
      setSelected(null);
      setIsCorrect(false);
    }
    setGraded(false);
  };

  const chooseBlankItems = data.map((item, index) => (
    <ChooseBlankItem
      key={item.translation}
      firstPart={item.firstPart}
      secondPart={item.secondPart}
      options={item.options}
      translation={item.translation}
      selectedState={selectedStates[index]}
      isCorrectState={isCorrectStates[index]}
      graded={graded}
    />
  ));

  return (
    <div className="choose-blank">
      {chooseBlankItems}
      {!graded ? (
        <button className="btn btn-actual-page" onClick={handleClickGrade}>
          Revisar
        </button>
      ) : (
        <button className="btn btn-actual-page" onClick={handleClickClear}>
          Reintentar
        </button>
      )}
    </div>
  );
};

export default ChooseBlank;
