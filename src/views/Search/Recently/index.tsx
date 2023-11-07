import React, { forwardRef, useRef, useState,useEffect } from "react";
import './style.css';
import { RecentlyItme } from 'Types';
import { useRecentlyBoardStore } from 'stores';
import { useNavigate } from "react-router-dom";

//              component: 최근 본 게시물 리스트 아이템 컴포넌트                //
export default function Recently() {

  const { recentlyList } = useRecentlyBoardStore();

  return (
    <div className='recently-board-item-list-main-box'>
      <div className='recently-board-item-list-box-title'>{'최근 본 게시물'}</div>
      <div className='up-button'></div>
      <div className='recently-board-item-list-sub-box'>
        { recentlyList.map(item => (
        <>
        <div className='user-recently-board' style={{backgroundImage: `url(${item.boardTitleImage})`}}></div>
        <div className='user-recently-board-title'>{`${item.title}`}</div>
        </>
        )) }
        
      </div>
      <div className='down-button'></div>
    </div>
    );
  };
