import React from "react";
import "./style.css";

export default function SequenceBox() {

  return (
    <div className="cooking-sequence-box">
      <div className="sequence-close-icon"></div>
      <div className="cooking-sequence-box-container">
        <div className="cooking-sequence-number-box">
          <div className="drag-drop-icon"></div>
          <div className="cooking-sequence-number">STEP 1</div>
        </div>
        <div className="cooking-sequence-image-box">
          <div className="cooking-sequence-image-icon"></div>
        </div>
        <textarea spellCheck="false" />
      </div>
    </div>
  );
}
