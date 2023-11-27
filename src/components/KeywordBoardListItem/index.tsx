import React, { forwardRef, useEffect, useRef, useState } from "react";
import "./style.css";
import { BoardItem } from "Types";
import { useNavigate } from "react-router-dom";
import { boardListMock } from "mocks";
import { RECIPE_LIST_PATH } from "constant";
import { GetCategoryCommendBoardListResponseDto } from "apis/dto/response/board";
import ResponseDto from "apis/dto/response";
import { getCategoryCommendBoardListRequest } from "apis/dto";

//          component: board 리스트 아이템 컴포넌트          //
export default function KeywordBoardList() {

  //					state: 보드 리스트 상태					//
  const [keywordBoardList, setKeywordBoardList] = useState<BoardItem[]>([]);
  const slideRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [translate, setTranslate] = useState<number>(0);
  const [keyword, setKeyword] = useState<string>('');
  //          interface: board 리스트 아이템 컴포넌트 Props         //
  interface Props {
    boardItem: BoardItem;
  }
  //          function: 네비게이트 함수         //
  const navigator = useNavigate();
  //          component: best board 리스트 아이템 컴포넌트          //
  const KeywordBoardItem = forwardRef<HTMLDivElement, Props>(
    ({ boardItem }: Props, ref) => {
      //          state: Propertites          //
      const { boardNumber, title, boardMainImage } = boardItem;

      //          event handler: board Click 이벤트 처리 함수          //
      const onBoardClickHandler = () => {
        navigator(`/board/detail/${boardNumber}`);
      };
      //                  render: board 리스트 아이템 컴포넌트 렌더링                 //
      return (
        <div ref={ref} className="recipe-box" onClick={onBoardClickHandler}>
          <div
            className="recipe-image"
            style={{ backgroundImage: `url(${boardMainImage})` }}
          ></div>
          <div className="recipe-title">{title}</div>
        </div>
      );
    }
  );
  //          function: get category commend board list response 처리 함수          //
  const getCategoryCommendBoardListResponse = (responseBody: GetCategoryCommendBoardListResponseDto | ResponseDto) => {
    const { code } = responseBody;
    if (code === 'DBE') alert('데이터베이스 오류입니다.');
    if (code !== 'SU') return;

    const { categoryCommendList } = responseBody as GetCategoryCommendBoardListResponseDto;
    setKeywordBoardList(categoryCommendList);
  }
  //					effect: 컴포넌트가 마운트 시 보드 리스트 불러오기					//
  useEffect(() => {
    const KEYWORDS = ['면', '한식', '양식', '디저트', '안주'];
    const min = 0;
    const max = 4;
    const random = Math.floor(Math.random() * (max - min)) + min;
    const keyword = KEYWORDS[random];
    setKeyword(keyword);

    getCategoryCommendBoardListRequest(keyword).then(getCategoryCommendBoardListResponse)
  }, []);
  //          event handler: 다음 이미지로 이동하는 함수          //
  const nextSlide = () => {
    if (!slideRef.current) return;
    const lastIndex = keywordBoardList.length - 4;
    const newCurrent = current === lastIndex ? 0 : current + 4;
    setCurrent(newCurrent);
    const newTranslate = -322 * newCurrent;
    slideRef.current.style.transform = `translateX(${newTranslate}px)`;
  };

  //          event handler: 이전 이미지로 이동하는 함수          //
  const prevSlide = () => {
    if (!slideRef.current) return;
    const lastIndex = keywordBoardList.length - 4;
    const newCurrent = current === 0 ? lastIndex : current - 4;
    setCurrent(newCurrent);
    const newTranslate = -322 * newCurrent;
    slideRef.current.style.transform = `translateX(${newTranslate}px)`;
  };

  //          event handler: 보드 리스트 더보기 Click 이벤트 처리 함수          //
  const onChefMoreButtonClickHandler = () => {
    navigator(RECIPE_LIST_PATH(keyword));
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
            {"오늘의 추천 "}
            <span className="new-recipe-list-center-top-title-keyword">{`${keyword} `}</span>
            {"레시피"}
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
            {keywordBoardList.map((boardItem) => (
              <KeywordBoardItem ref={itemRef} boardItem={boardItem} />
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
