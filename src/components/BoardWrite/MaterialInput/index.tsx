import React, { useState } from "react";
import "./style.css";

//  component //
export default function MaterialInput() {
  //  component //
  const MaterialSub = () => {
    //  event handler //
    const onDeleteButtonClickHandler = () => {};
    // render //
    return (
      <div className="material-sub-box">
        <div className="drag-drop-icon"></div>
        <input className="material-input1" type="text" />
        <input className="material-input1" type="text" />
        <div className="close-icon"></div>
      </div>
    );
  };

  // render //
  return (
    <div className="material-main">
      <div className="material-main-box">
        <div className="drag-drop-icon"></div>
        <input className="material-input" type="text" />
        <div className="close-icon"></div>
      </div>
      <MaterialSub />
      <div className="material-add-button-box" onClick={() => {}}>
        <div className="material-add-button"></div>
        <div className="material-add-text">{"추가"}</div>
      </div>
    </div>
  );
}
