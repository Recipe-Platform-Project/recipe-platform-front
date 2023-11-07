import { POPULER_WORD } from 'constant';
import { popularWordListMock } from 'mocks';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './style.css';

export default function PopularBox() {
     //          state: 검색어 path variable          //
  const { word } = useParams();

  //          state: 인기 검색어 리스트 상태          //
  const [popularWordList, setPopularWordList] = useState<string[]>([]);
  //          function: 네비게이트 함수          //
  const navigater = useNavigate();

//              event handler: 인기 검색어 뱃지 클릭 이벤트 처리         //
const onPopulerWordBadgeClickHandler = (word: string) => {
  navigater(POPULER_WORD(word));
}

  useEffect(() => {
    setPopularWordList(popularWordListMock);
  }, []);

  return (
    <div className='search-bottom-populer-word-box'>
        <div className='search-bottom-populer-word-card'>
            <div className='search-bottom-popular-card-box'>
                <div className='search-bottom-popular-card-title'>{'인기 검색어'}</div>
                <div className='search-bottom-popular-card-contents'>
                  {popularWordList.map(word => <div className='word-badge' onClick={() => onPopulerWordBadgeClickHandler(word)}>{word}</div>)}
                </div>
            </div>
        </div>
    </div>
  )
}
