import React, { Dispatch, SetStateAction, useState, useEffect } from 'react'
import "./style.css";
import Pagination from 'components/Pagination';
import usePagination from 'hooks/pagination.hook';
import { BestBoardItem } from 'Types';
import RankingListItem from 'components/RankingBoardListItem';
import RankingItem from 'Types/ranking-board-list-item.interface';
import { rankingBoardListMock } from 'mocks';
import { getRankingListRequest } from 'apis/dto';
import ResponseDto from 'apis/dto/response';
import { GetRankingBoardListResponseDto } from 'apis/dto/response/board';


export default function Ranking() {


  const {currentPageNumber, setCurrentPageNumber, currentSectionNumber,setCurrentSectionNumber, viewPageNumberList, totalSection, setBoardList, viewBoardList} = usePagination<RankingItem>(16);

  const [rankingType, setRankingType] = useState<string>('best');
  const [rankingTime, setRankingTime] = useState<string>('days');

  const onRankingTypeClickHandler = (selectRankingType: string) =>{
    if(rankingType === selectRankingType) setRankingType('');
    else setRankingType(selectRankingType);
  }

  const onRankingTimeClickHandler = (selectRankingTime: string) =>{
    if(rankingTime === selectRankingTime) setRankingTime('');
    else setRankingTime(selectRankingTime);
  }

  const getRankingListResponse = (response: GetRankingBoardListResponseDto | ResponseDto) => {
    const { code } = response;
    if (code !== 'SU') return;
    const { rankingList } = response as GetRankingBoardListResponseDto;
    setBoardList(rankingList);
  }

  useEffect(() => {
    getRankingListRequest(rankingType, rankingTime).then(getRankingListResponse);
  }, [rankingType, rankingTime]);

  return (
    <div id='ranking-wrapper'>
        <div className='ranking-main-box'>
          <div className='ranking-main-type-box'>
            <div className={rankingType === 'best' ? 'ranking-type-view-box-selected' : 'ranking-type-best-box'} onClick={() => onRankingTypeClickHandler('best')}>
              <div className='ranking-type-best-title'>{'best순'}</div>
            </div>
            <div className={rankingType === 'favorite' ? 'ranking-type-view-box-selected' : 'ranking-type-favorite-box'} onClick={() => onRankingTypeClickHandler('favorite')}>
              <div className='ranking-type-favorite-title'>{'좋아요순'}</div>
            </div>
            <div className={rankingType === 'view' ? 'ranking-type-view-box-selected' : 'ranking-type-view-box'} onClick={() => onRankingTypeClickHandler('view')}>
              <div className='ranking-type-view-title'>{'조회순'}</div>
            </div>
            <div className='ranking-time-type-box'>
              <div className={rankingTime === 'days' ? 'ranking-time-title-view-box-selected' : 'ranking-time-day-box'} onClick={() => onRankingTimeClickHandler('days')}>
                <div className='ranking-time-day-title'>{'일간'}</div>
              </div>
              <div className={rankingTime === 'weekly' ? 'ranking-time-title-view-box-selected' : 'ranking-time-weekend-box'} onClick={() => onRankingTimeClickHandler('weekly')}>
                <div className='ranking-time-weekend-title'>{'주간'}</div>
              </div>
              <div className={rankingTime === 'monthly' ? 'ranking-time-title-view-box-selected' : 'ranking-time-month-box'} onClick={() => onRankingTimeClickHandler('monthly')}>
                <div className='ranking-time-month-title'>{'월간'}</div>
              </div>
            </div>
          </div>
        <div className='ranking-board-list-item-line-box'>
          {viewBoardList.map((item, index) => <RankingListItem ranking={index + 1} item={item} />)}
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
