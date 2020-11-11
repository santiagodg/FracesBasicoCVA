import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";

import Reading from "./Reading";
import "./ChooseBetween.css";

const ChooseBetweenItem = ({
  textParts,
  options,
  selectedState,
  isCorrectState,
  graded,
}) => {
  const toggleButtons = options.map((item) => {
    return item.map((opt, index) => {
      const classes = {};
      classes.selected = graded
        ? opt.correct
          ? "choose-between-selected-correct"
          : "choose-between-selected-incorrect"
        : undefined;
      classes.root =
        graded && opt.correct ? "choose-between-root-correct" : undefined;
      return (
        <ToggleButton key={opt.answer} value={index} classes={classes}>
          <span>{opt.answer}</span>
        </ToggleButton>
      );
    });
  });

  const toggleButtonChangeHandlers = [];
  for (let i = 0; i < options.length; i++) {
    toggleButtonChangeHandlers.push((_, value) => {
      if (!graded) {
        const [_, setSelected] = selectedState[i];
        setSelected(value);
      }
    });
  }

  const exercise = () => {
    if (textParts.length === 0) {
      const [selected, _] = selectedState[0];
      return (
        <ToggleButtonGroup
          key={0}
          exclusive
          value={selected}
          onChange={toggleButtonChangeHandlers[0]}
          className="px-2"
        >
          {toggleButtons[0]}
        </ToggleButtonGroup>
      );
    }
    let res = [];
    res.push(
      <span key={textParts[0]} className="font-size-18">
        {textParts[0]}
      </span>
    );
    for (let i = 1; i < textParts.length; i++) {
      const [selected, _] = selectedState[i - 1];
      res.push(
        <ToggleButtonGroup
          key={i - 1}
          exclusive
          value={selected}
          onChange={toggleButtonChangeHandlers[i - 1]}
          className="px-2"
        >
          {toggleButtons[i - 1]}
        </ToggleButtonGroup>
      );
      res.push(
        <span key={textParts[i]} className="font-size-18">
          {textParts[i]}
        </span>
      );
    }
    return res;
  };

  return <div className="choose-between-item p-2">{exercise()}</div>;
};

const ChooseBetween = ({ data, selectedStates, isCorrectStates, graded }) => {
  const chooseBetweenItems = data.map((item, index) => (
    <ChooseBetweenItem
      key={index}
      textParts={item.textParts}
      options={item.options}
      selectedState={selectedStates[index]}
      isCorrectState={isCorrectStates[index]}
      graded={graded}
    />
  ));

  return <div className="choose-between px-md-5" style={{color: "black"}}>{chooseBetweenItems}</div>;
};

const ReadingAndChooseBetween = ({ readingData, chooseBetweenData }) => {
  const [graded, setGraded] = React.useState(false);

  const selectedStates = chooseBetweenData.map((item) =>
    item.options.map((_) => React.useState(null))
  );
  const isCorrectStates = chooseBetweenData.map((item) =>
    item.options.map((_) => React.useState(false))
  );

  const handleClickGrade = (event) => {
    for (let i = 0; i < chooseBetweenData.length; ++i) {
      for (let j = 0; j < chooseBetweenData[i].options.length; j++) {
        const [selected, setSelected] = selectedStates[i][j];
        if (selected !== null && chooseBetweenData[i].options[j][selected].correct) {
          const [isCorrect, setIsCorrect] = isCorrectStates[i][j];
          setIsCorrect(true);
        }
      }
    }
    setGraded(true);
  };

  const handleClickClear = () => {
    for (let i = 0; i < chooseBetweenData.length; ++i) {
      for (let j = 0; j < chooseBetweenData[i].options.length; ++j) {
        const [selected, setSelected] = selectedStates[i][j];
        const [isCorrect, setIsCorrect] = isCorrectStates[i][j];
        setSelected(null);
        setIsCorrect(false);
      }
    }
    setGraded(false);
  };

  return (
    <>
      <Reading data={readingData} graded={graded} />
      <ChooseBetween
        data={chooseBetweenData}
        selectedStates={selectedStates}
        isCorrectStates={isCorrectStates}
        graded={graded}
      />
      {!graded ? (
        <button className="btn btn-actual-page" onClick={handleClickGrade}>
          Revisar
        </button>
      ) : (
        <button className="btn btn-actual-page" onClick={handleClickClear}>
          Reintentar
        </button>
      )}
    </>
  );
};

export default ReadingAndChooseBetween;
