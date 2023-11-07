import React, { forwardRef, useRef, useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { BoardItem } from "Types";
import { boardListMock, latelyBoardListMock } from "mocks";

//          component: 최근 본 레시피 컴포넌트          //
export default function LatelyRecipe() {
  //					state: 보드 리스트 상태					//
  const [latelyBoardList, setLatelyBoardList] = useState<BoardItem[]>([]);
  const slideRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [translate, setTranslate] = useState<number>(0);
  //          function: 네비게이트 함수         //
  const navigator = useNavigate();

  //          interface: board 리스트 아이템 컴포넌트 Props         //
  interface Props {
    boardItem: BoardItem;
  }

  const LatelyRecipeListItem = forwardRef<HTMLDivElement, Props>(
    ({ boardItem }: Props, ref) => {
      //          state: Propertites          //
      const { noticeNumber, title, imageUrl } = boardItem;
      //          event handler: Card Click 이벤트 처리 함수          //
      // TODO: 클릭시 게시물 이동 만들기
      const onLatelyRecipeClickHandler = () => {
        navigator(`/board/detail/${noticeNumber}`);
      };
      //                  render: board 리스트 아이템 컴포넌트 렌더링                 //
      return (
        <div
          ref={ref}
          className="lately-recipe-bottom-center-box"
          onClick={onLatelyRecipeClickHandler}
        >
          <div
            className="lately-recipe-bottom-center-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
          <div className="lately-recipe-bottom-center-title">{title}</div>
        </div>
      );
    }
  );
  //					effect: 컴포넌트가 마운트 시 보드 리스트 불러오기					//
  useEffect(() => {
    // TODO: API 호출로 변경
    setLatelyBoardList(latelyBoardListMock);
  }, []);
  //          event handler: 다음 이미지로 이동하는 함수          //
  const nextSlide = () => {
    if (!slideRef.current) return;
    const lastIndex = latelyBoardList.length - 5;
    const newCurrent = current === lastIndex ? 0 : current + 5;
    setCurrent(newCurrent);
    const newTranslate = -237 * newCurrent;
    slideRef.current.style.transform = `translateX(${newTranslate}px)`;
  };

  //          event handler: 이전 이미지로 이동하는 함수          //
  const prevSlide = () => {
    if (!slideRef.current) return;
    const lastIndex = latelyBoardList.length - 5;
    const newCurrent = current === 0 ? lastIndex : current - 5;
    setCurrent(newCurrent);
    const newTranslate = -237 * newCurrent;
    slideRef.current.style.transform = `translateX(${newTranslate}px)`;
  };
  //          render: 최근 본 게시물 컴포넌트 렌더링          //
  return (
    <div id="lately-recipe-list">
      <div className="lately-recipe-top">
        <div className="lately-recipe-top-title">{"최근 본 게시물"}</div>
      </div>
      <div className="lately-recipe-bottom">
        <div className="lately-recipe-bottom-left" onClick={prevSlide}>
          <div className="left-icon"></div>
        </div>
        <div className="lately-recipe-bottom-center">
          <div
            className="lately-recipe-list-container"
            ref={slideRef}
            style={{ transform: `translateX(${translate}px)` }}
          >
            {latelyBoardList.map((boardItem) => (
              <LatelyRecipeListItem ref={itemRef} boardItem={boardItem} />
            ))}
          </div>
        </div>
        <div className="lately-recipe-bottom-right">
          <div className="right-icon" onClick={nextSlide}></div>
        </div>
      </div>
    </div>
  );
}
