import React from 'react'
import './style.css';
import { SearchItem } from 'types';

interface Props{
  onClick: (item: SearchItem) => void;
  item: SearchItem;
}

export default function BoardItem({item, onClick}: Props) {

const {boardNumber, title, boardTitleImage, favoriteCount, viewCount, starRating, writeNickname,  writeProfileImage} = item;

const onClickHandler = () => {
  onClick(item);
}

  //          component:  search 리스트 아이템 컴포넌트          //
    return (
        <div className='search-list-item1' onClick={onClickHandler}>
          <div className='search-list-item-image-box1'>
            <div className='search-list-item-image1' style={{backgroundImage: `url(${boardTitleImage})`}}></div>
          </div>
          <div className='search-list-itme-sub-box1'>
            <div className='search-list-item-title-box1'>
              <div className='search-list-item-title1'>{`${title}`}</div>
            </div>
            <div className='search-list-item-middle-box1'>
              <div className='search-list-item-user1'>
                <div className='search-list-itme-userimage1' style = {{backgroundImage: `url(${writeProfileImage})`}}></div>
                <div className='search-list-itme-nickname1'>{`${writeNickname}`}</div>
              </div>
              <div className='search-list-item-view-favorit-count-box1'>
                <div className='search-list-item-view-count-box1'>
                  <div className='search-list-item-view-count-text1'>{'조회순'}{`${viewCount}`}</div>
                </div>
                <div className='search-list-item-favorit-box1'>
                  <div className='search-list-item-favorit-image1'></div>
                  <div className='search-list-item-favorit-count1'>{`${favoriteCount}`}</div> 
                </div>
              </div>
            </div>
            <div className='search-list-itme-star-rating-box1'>
              <div className='search-list-item-star-rating-image'></div>
              <div className='search-list-item-star-rating-image'></div>
              <div className='search-list-item-star-rating-image'></div>
              <div className='search-list-item-star-rating-image'></div>
              <div className='search-list-item-star-rating-image'></div>
              <div className='search-list-item-star-rating-count-text1'>{`${starRating}`}</div>
            </div>
          </div>
        </div>
    )
  }
