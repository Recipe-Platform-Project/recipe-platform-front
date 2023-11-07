import React, { Dispatch, SetStateAction, useState, useEffect } from 'react'
import "./style.css";
import Pagination from 'components/Pagination';
import usePagination from 'hooks/pagination.hook';
import { BestBoardItem } from 'Types';
import RankingListItem from 'components/RankingBoardListItem';
import RankingItem from 'Types/ranking-board-list-item.interface';
import { rankingBoardListMock } from 'mocks';


export default function Ranking() {


  const {currentPageNumber, setCurrentPageNumber, currentSectionNumber,setCurrentSectionNumber, viewPageNumberList, totalSection, setBoardList, viewBoardList} = usePagination<RankingItem>(16);

  const [rankingType, setRankingType] = useState<string>('best순');
  const [rankingTime, setRankingTime] = useState<string>('일간');

  const onRankingTypeClickHandler = (selectRankingType: string) =>{
    if(rankingType === selectRankingType) setRankingType('');
    else setRankingType(selectRankingType);
  }

  const onRankingTimeClickHandler = (selectRankingTime: string) =>{
    if(rankingTime === selectRankingTime) setRankingTime('');
    else setRankingTime(selectRankingTime);
  }

  useEffect(() => {
    setBoardList(rankingBoardListMock);
  }, []);

  return (
    <div id='ranking-wrapper'>
        <div className='ranking-main-box'>
          <div className='ranking-main-type-box'>
            <div className={rankingType === 'best순' ? 'ranking-type-view-box-selected' : 'ranking-type-best-box'} onClick={() => onRankingTypeClickHandler('best순')}>
              <div className='ranking-type-best-title'>{'best순'}</div>
            </div>
            <div className={rankingType === '좋아요순' ? 'ranking-type-view-box-selected' : 'ranking-type-favorite-box'} onClick={() => onRankingTypeClickHandler('좋아요순')}>
              <div className='ranking-type-favorite-title'>{'좋아요순'}</div>
            </div>
            <div className={rankingType === '조회순' ? 'ranking-type-view-box-selected' : 'ranking-type-view-box'} onClick={() => onRankingTypeClickHandler('조회순')}>
              <div className='ranking-type-view-title'>{'조회순'}</div>
            </div>
            <div className='ranking-time-type-box'>
              <div className={rankingTime === '일간' ? 'ranking-time-title-view-box-selected' : 'ranking-time-day-box'} onClick={() => onRankingTimeClickHandler('일간')}>
                <div className='ranking-time-day-title'>{'일간'}</div>
              </div>
              <div className={rankingTime === '주간' ? 'ranking-time-title-view-box-selected' : 'ranking-time-weekend-box'} onClick={() => onRankingTimeClickHandler('주간')}>
                <div className='ranking-time-weekend-title'>{'주간'}</div>
              </div>
              <div className={rankingTime === '월간' ? 'ranking-time-title-view-box-selected' : 'ranking-time-month-box'} onClick={() => onRankingTimeClickHandler('월간')}>
                <div className='ranking-time-month-title'>{'월간'}</div>
              </div>
            </div>
          </div>
        <div className='ranking-board-list-item-line-box'>
          {viewBoardList.map(item => <RankingListItem item={item} />)}
        </div>
          <div className='ranking-pagination-box'>
            <Pagination
            currentPageNumber={currentPageNumber}
            currentSectionNumber={currentSectionNumber}
            setCurrentPageNumber={setCurrentPageNumber}
            setCurrentSectionNumber={setCurrentSectionNumber}
            viewPageNumberList={viewPageNumberList}
            totalSection={totalSection}
            />
          </div>
        </div>
    </div>
  )
}
