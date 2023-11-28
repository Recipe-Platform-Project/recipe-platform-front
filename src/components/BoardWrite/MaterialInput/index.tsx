import React, { ReactElement, useState, useEffect } from "react";
import "./style.css";

//          component: 메인 재료창 컴포넌트         //
export default function MaterialInput() {
  //          state: 서브 재료창 상태         //
  const [listItems, setListItems] = useState<number[]>([0, 1, 2]);

  //          event handler: 추가 버튼 클릭 이벤트 핸들러         //
  const addListItem = () => {
    if (listItems.length < 15) {
      setListItems([...listItems, listItems.length]);
    }
  };

  //          event handler: 삭제 버튼 클릭 이벤트 핸들러         //
  const handleSubCloseIconClick = (index: number) => {
    if (listItems.length > 1) {
      const updatedListItems = [...listItems];
      updatedListItems.splice(index, 1);
      setListItems(updatedListItems);
    }
  };



  //          render: 메인 재료창 컴포넌트 렌더링         //
  return (
    <div className="material-main">
      {listItems.map((item, index) => (
        <ul key={item} className="do-not">
          <li>
            <div className="material-sub-box">
              <input
                className="material-input1"
                type="text"
                placeholder={`예) 재료`}
              />
              <input
                className="material-input1"
                type="text"
                placeholder={`예) 용량`}
              />
              <div className="sub-close-icon" onClick={() => handleSubCloseIconClick(index)}></div>
            </div>
          </li>
        </ul>
      ))}
      <div className="material-add-button-box" onClick={addListItem}>
        <div className="material-add-button"></div>
        <div className="material-add-text">{"추가"}</div>
      </div>
    </div>
  );
}