import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import './ListenPhrase.css';
import "./custom-tooltip.css";

const ListenItem = ({ sentences, audio, listNumber }) => {
  const phrases = sentences.map((item) => (
    <>
      <Tooltip title={item.translation} placement="top" classes={{ tooltip: "custom-tooltip" }}>
        <span className="underline-on-hover">{item.original}</span>
      </Tooltip>
      &nbsp;
    </>
  ));

  return (
    <div className="d-flex align-items-stretch my-2">
      <div>
        <button className="p-2 btn btn-secondary m-0" style={{width: "50px", height: "50px"}}>
          <i className="fas fa-volume-up" />
        </button>
      </div>
      <div className="p-2 pl-3 flex-grow-1">
        <p>
          {listNumber}.&nbsp;{phrases}
        </p>
      </div>
    </div>
  );
};

const ListenPhrase = ({ data }) => {
  const listenItems = data.map((item, index) => (
    <ListenItem
      key={item.audio}
      listNumber={index + 1}
      sentences={item.sentences}
      audio={item.audio}
    />
  ));

  return <div className="listen-phrase">{listenItems}</div>;
};

export default ListenPhrase;
