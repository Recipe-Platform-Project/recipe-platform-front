import React, { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

export default function SearchBottomTop() {
  
  const[section, setSection] = useState<'최신순' | '좋아요순' | '조회순' | ''>('');

  const onSectionClickHandler = (selectSection: '최신순' | '좋아요순' | '조회순' | '') => {
    if(section === selectSection) setSection('');
    else setSection(selectSection);
  }

    return(
        <div id='search-board-top-box'>
          <div className='search-board-top-title'>{'총 N개의 레시피가 있습니다' }</div>
          <div className='search-board-top-type-box'>
            <div className={section === '최신순' ? 'search-board-top-type-latest-box-selected' : 'search-board-top-type-latest-box'}>
              <div className='search-board-top-type-latest-title' onClick={() => onSectionClickHandler('최신순')}>{'최신순'}</div>
            </div>
            <div className={section === '좋아요순' ? 'search-board-top-type-favorite-box-selected' : 'search-board-top-type-favorite-box'}>
              <div className='search-board-top-type-favorite-title' onClick={() => onSectionClickHandler('좋아요순')}>{'좋아요순'}</div>
            </div>
            <div className={section === '조회순' ? 'search-board-top-type-view-box-selected' : 'search-board-top-type-view-box'}>
              <div className='search-board-top-type-view-title' onClick={() => onSectionClickHandler('조회순')}>{'조회순'}</div>
            </div>
          </div>
        </div>
    )
  }
 