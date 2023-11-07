import React from 'react'
import './style.css';
import { RankingItem } from 'Types';
import { useNavigate } from 'react-router-dom';
import { RECIPE_DETAIL_PATH } from 'constant';

interface Props {
    item: RankingItem;
}

export default function RankingListItem({ item }: Props) {

const { boardNumber, boardTitleImage, title, writeNickname, favoriteCount, starRating } = item;

//              function: 네이비게이트 함수         //
const navigator = useNavigate();

//           event handler:  ranking card Click 이벤트 처리 함수         // 
const onRankingCardClickHandler = () => {
    navigator(RECIPE_DETAIL_PATH(boardNumber));
}
//          component: 랭킹 리스트 아이템 컴포넌트          //
  return (
        <div className='ranking-board-list-item-main-box'>
            <div className='ranking-board-list-item-image-box'>
                <div className='ranking-board-list-item-image' style={{backgroundImage: `url(${boardTitleImage})`}} onClick={onRankingCardClickHandler}>
                    <div className='ranking-board-list-item-number-box'>
                        <div className='ranking-board-list-item-number'>{`${1}`}</div>
                    </div>
                </div>
            </div>
            <div className='ranking-board-list-item-best-user-box'>
                <div className='ranking-board-list-item-best-user-title'>{`${title}`}</div>
                <div className='ranking-board-list-item-best-user-nickname'>{`${writeNickname}`}</div>
                <div className='ranking-board-list-item-best-user-star-favorite-box'>
                    <div className='ranking-board-list-item-best-user-star-box'>
                        <div className='ranking-board-list-item-best-user-star-image'></div>
                        <div className='ranking-board-list-item-best-user-star-image'></div>
                        <div className='ranking-board-list-item-best-user-star-image'></div>
                        <div className='ranking-board-list-item-best-user-star-image'></div>
                        <div className='ranking-board-list-item-best-user-star-image'></div>
                        <div className='ranking-board-list-item-best-user-star-count'>{`(${starRating})`}</div>
                    </div>
                    <div className='ranking-board-list-item-best-user-favorite-box'>
                        <div className='ranking-board-list-item-best-user-favorite-image'></div>
                        <div className='ranking-board-list-item-best-user-favorite-count'>{`${favoriteCount}`}</div>
                    </div>
                </div>
            </div>
        </div>
  )
}
