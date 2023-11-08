import React, { forwardRef, useRef, useState,useEffect } from "react";
import './style.css';
import { RecentlyItme } from 'Types';
import { useRecentlyBoardStore } from 'stores';
import { useNavigate } from 'react-router-dom';

//              component: 최근 본 게시물 리스트 아이템 컴포넌트                //
export default function Recently() {

  //					state: 보드 리스트 상태					//
  const { recentlyList } = useRecentlyBoardStore();
  const slideRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [translate, setTranslate] = useState<number>(0);

  //          function: 네비게이트 함수         //
  const navigator = useNavigate();

  //          interface: board 리스트 아이템 컴포넌트 Props         //
  interface Props {
    boardItem: RecentlyItme;
}

const LatelyRecipeListItem = forwardRef<HTMLDivElement, Props>(
    ({ boardItem }: Props, ref) => {
    //          state: Propertites          //
    const { boardNumber, title, boardTitleImage } = boardItem;
    //          event handler: Card Click 이벤트 처리 함수          //
    // TODO: 클릭시 게시물 이동 만들기
    const onLatelyRecipeClickHandler = () => {
        navigator(`/board/detail/${boardNumber}`);
    };

     //                  render: board 리스트 아이템 컴포넌트 렌더링                 //
     return (
      <div ref={ref} className="lately-recipe-in-center-box" onClick={onLatelyRecipeClickHandler}>
          <div className="lately-recipe-in-center-image" style={{ backgroundImage: `url(${boardTitleImage})` }}></div>
          <div className="lately-recipe-in-title">{title}</div>
      </div>
  );
  }
);

 //					effect: 컴포넌트가 마운트 시 보드 리스트 불러오기					//
 useEffect(() => {
}, []);
  //          event handler: 다음 이미지로 이동하는 함수          //
  const nextSlide = () => {
    if (!slideRef.current) return;
    const hasNext = recentlyList.length - 1 < (current + 3);
    const newCurrent = hasNext ? 0 : current + 3;

    setCurrent(newCurrent);
    const newTranslate = -302 * newCurrent;
    slideRef.current.style.transform = `translateY(${newTranslate}px)`;

  };

  //          event handler: 이전 이미지로 이동하는 함수          //
  const prevSlide = () => {
    if (!slideRef.current) return;
    
    const hasPre = current !== 0;
    let newCurrent = 0;
    if (hasPre) newCurrent = current - 3;
    else {
      if (recentlyList.length === 0) newCurrent = 0
      // else if (recentlyList.length === 10) newCurrent = 9
      else newCurrent = Math.floor((recentlyList.length - 1) / 3) * 3;
    }

    setCurrent(newCurrent);
    const newTranslate = -302 * newCurrent;
    slideRef.current.style.transform = `translateY(${newTranslate}px)`;
  };
  return (
    <div id="chef-lately-recipe-list">
      <div className="chef-lately-recipe-out">
          <div className="chef-lately-recipe-out-title">{"최근 본 게시물"}</div>
      </div>
      <div className="chef-lately-recipe-in">
          <div className="chef-lately-recipe-top" onClick={prevSlide}>
              <div className="chef-top-icon"></div>
          </div>
          <div className="chef-lately-recipe-in-center">
              <div className="chef-lately-recipe-list-container" ref={slideRef}
                  style={{ transform: `translateY(${translate}px)` }}>
                  {recentlyList.map((boardItem) => (
                  <LatelyRecipeListItem ref={itemRef} boardItem={boardItem} />
                  ))}
              </div>
          </div>
          <div className="chef-lately-recipe-bottom">
          <div className="chef-bottom-icon" onClick={nextSlide}></div>
          </div>
      </div>
    </div>
  )
  };
