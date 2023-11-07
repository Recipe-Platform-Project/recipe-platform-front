import React from "react";
import "./style.css";

export default function MaterialInput() {
  const MaterialSub = () => {
    return (
      <div className="material-sub-box">
        <div className="drag-drop-icon"></div>
        <input className="material-input1" type="text" />
        <input className="material-input1" type="text" />
        <div className="close-icon"></div>
      </div>
    );
  };
  return (
    <div className="material-main">
      <div className="material-main-box">
        <div className="drag-drop-icon"></div>
        <input className="material-input" type="text" />
        <div className="close-icon"></div>
      </div>
      <MaterialSub />
      <MaterialSub />
      <MaterialSub />
      <div className="material-add-button-box">
        <div className="material-add-button"></div>
        <div className="material-add-text">{'추가'}</div>
      </div>
    </div>
    
  );
}
