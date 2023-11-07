import React, { useState, forwardRef, useRef, useEffect } from "react";
import "./style.css";
import { BestBoardItem } from "Types";
import { useNavigate } from "react-router-dom";
import { bestBoardListMock } from "mocks";
import { cutString } from "utils";

//          component: board 리스트 아이템 컴포넌트          //
export default function BestBoardList() {
  //          interface: board 리스트 아이템 컴포넌트 Props         //
  interface Props {
    bestBoardItem: BestBoardItem;
  }
  //          function: 네비게이트 함수         //
  const navigator = useNavigate();
  //					state: 보드 리스트 상태					//
  const [bestBoardList, setBestBoardList] = useState<BestBoardItem[]>([]);
  const slideRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [translate, setTranslate] = useState<number>(0);

  //          component: best board 리스트 아이템 컴포넌트          //
  const BestBoardItem = forwardRef<HTMLDivElement, Props>(
    ({ bestBoardItem }: Props, ref) => {
      //          state: Propertites          //
      const { noticeNumber, title, imageUrl, writerNickname, content, writerProfileImage, viewCount, commentCount, favoriteCount, tags } = bestBoardItem;

      //          event handler: board Click 이벤트 처리 함수          //
      const onBoardClickHandler = () => {
        navigator(`/board/detail/${noticeNumber}`);
      };

      //                  render: board 리스트 아이템 컴포넌트 렌더링                 //
      return (
        <div
          ref={ref}
          className="main-best-image-box"
          onClick={onBoardClickHandler}
        >
          <div className="main-best-image-box-left">
            <div
              className="main-best-left-image"
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className="main-best-left-image-count-box">
              <div className="main-best-left-image-count">
                {current + 1 + "/" + bestBoardList.length}
              </div>
            </div>
          </div>
          <div className="main-best-image-box-right">
            <div className="main-best-info-box">
              <div className="main-best-title">{cutString(title,10)}</div>
              <div className="main-best-content">{cutString(content, 55)}</div>
              <div className="main-best-counts">
                <div className="main-best-view-count">{`조회수 ${viewCount}`}</div>
                <div className="main-best-comment-count">{`댓글 ${commentCount}`}</div>
                <div className="main-best-favorite-count-box">
                  <div className="main-best-favorite-count-icon"></div>
                  <div className="main-best-favorite-count">{favoriteCount}</div>
                </div>
              </div>
            </div>
            <div className="main-best-write-user-box">
              <div className="main-best-write-user-profile-image" style={{backgroundImage: `url(${writerProfileImage})`}}></div>
              <div className="main-best-write-user-nickname">
                {writerNickname}
              </div>
            </div>
            <div className="main-best-tags">{cutString(tags, 15)}</div>
          </div>
        </div>
      );
    }
  );
  //					effect: 컴포넌트가 마운트 시 보드 리스트 불러오기					//
  useEffect(() => {
    // TODO: API 호출로 변경
    setBestBoardList(bestBoardListMock);
  }, []);
  //          event handler: 다음 이미지로 이동하는 함수          //
  const nextSlide = () => {
    if (!slideRef.current) return;
    const lastIndex = bestBoardList.length - 1;
    const newCurrent = current === lastIndex ? 0 : current + 1;
    setCurrent(newCurrent);
    const newTranslate = -1370 * newCurrent;
    slideRef.current.style.transform = `translateX(${newTranslate}px)`;
  };

  //          event handler: 이전 이미지로 이동하는 함수          //
  const prevSlide = () => {
    if (!slideRef.current) return;
    const lastIndex = bestBoardList.length - 1;
    const newCurrent = current === 0 ? lastIndex : current - 1;
    setCurrent(newCurrent);
    const newTranslate = -1370 * newCurrent;
    slideRef.current.style.transform = `translateX(${newTranslate}px)`;
  };
  //          render: 메인 best 게시물 컴포넌트 렌더링          //
  return (
    <div id="main-best-wrapper">
      <div className="main-best-box">
        <div className="main-best-top">
          <div className="main-best-title">{"BEST 레시피"}</div>
        </div>
        <div className="main-best-bottom">
          <div className="main-best-left-icon" onClick={prevSlide}></div>
          <div className="main-best-image" >
            <div className="main-best-image-container" ref={slideRef} style={{ transform: `translateX(${translate}px)` }}>
              {bestBoardList.map((bestBoardItem) => (
                <BestBoardItem ref={itemRef} bestBoardItem={bestBoardItem} />
              ))}
            </div>
          </div>
          <div className="main-best-right-icon" onClick={nextSlide}></div>
        </div>
      </div>
    </div>
  );
}
