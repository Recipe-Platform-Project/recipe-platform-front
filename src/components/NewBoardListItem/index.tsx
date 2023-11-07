import React, { forwardRef, useEffect, useRef, useState } from "react";
import "./style.css";
import { BoardItem } from "Types";
import { useNavigate } from "react-router-dom";
import { boardListMock } from "mocks";
import { RECIPE_LIST_PATH } from "constant";

//          component: board 리스트 아이템 컴포넌트          //
export default function NewBoardList() {
  //					state: 보드 리스트 상태					//
  const [newBoardList, setNewBoardList] = useState<BoardItem[]>([]);
  const slideRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [translate, setTranslate] = useState<number>(0);
  //          interface: board 리스트 아이템 컴포넌트 Props         //
  interface Props {
    boardItem: BoardItem;
  }
  //          function: 네비게이트 함수         //
  const navigator = useNavigate();
  //          component: best board 리스트 아이템 컴포넌트          //
  const NewBoardListItem = forwardRef<HTMLDivElement, Props>(
    ({ boardItem }: Props, ref) => {
      //          state: Propertites          //
      const { noticeNumber, title, imageUrl } = boardItem;

      //          event handler: board Click 이벤트 처리 함수          //
      const onBoardClickHandler = () => {
        navigator(`/board/detail/${noticeNumber}`);
      };
      //                  render: board 리스트 아이템 컴포넌트 렌더링                 //
      return (
        <div ref={ref} className="recipe-box" onClick={onBoardClickHandler}>
          <div
            className="recipe-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
          <div className="recipe-title">{title}</div>
        </div>
      );
    }
  );

  //					effect: 컴포넌트가 마운트 시 보드 리스트 불러오기					//
  useEffect(() => {
    // TODO: API 호출로 변경
    setNewBoardList(boardListMock);
  }, []);
  //          event handler: 다음 이미지로 이동하는 함수          //
  const nextSlide = () => {
    if (!slideRef.current) return;
    const lastIndex = newBoardList.length - 4;
    const newCurrent = current === lastIndex ? 0 : current + 4;
    setCurrent(newCurrent);
    const newTranslate = -322 * newCurrent;
    slideRef.current.style.transform = `translateX(${newTranslate}px)`;
  };

  //          event handler: 이전 이미지로 이동하는 함수          //
  const prevSlide = () => {
    if (!slideRef.current) return;
    const lastIndex = newBoardList.length - 4;
    const newCurrent = current === 0 ? lastIndex : current - 4;
    setCurrent(newCurrent);
    const newTranslate = -322 * newCurrent;
    slideRef.current.style.transform = `translateX(${newTranslate}px)`;
  };

  //          event handler: 보드 리스트 더보기 Click 이벤트 처리 함수          //
  const onChefMoreButtonClickHandler = () => {
    navigator(RECIPE_LIST_PATH(""));
  };

  //          render: 최신 게시물 컴포넌트 렌더링         //
  return (
    <div id="new-recipe-list-wrapper">
      <div className="list-left">
        <div className="list-bottom-left-icon" onClick={prevSlide}></div>
      </div>
      <div className="new-recipe-list-center">
        <div className="new-recipe-list-center-top">
          <div className="new-recipe-list-center-top-title">
            {"최신 레시피"}
          </div>
          <div
            className="new-recipe-list-center-top-more-button"
            onClick={onChefMoreButtonClickHandler}
          >
            {"더보기"}
          </div>
        </div>
        <div className="new-recipe-list-center-bottom">
          <div
            className="new-recipe-list-container"
            ref={slideRef}
            style={{ transform: `translateX(${translate}px)` }}
          >
            {newBoardList.map((boardItem) => (
              <NewBoardListItem ref={itemRef} boardItem={boardItem} />
            ))}
          </div>
        </div>
      </div>
      <div className="list-right">
        <div className="list-bottom-right-icon" onClick={nextSlide}></div>
      </div>
    </div>
  );
}
