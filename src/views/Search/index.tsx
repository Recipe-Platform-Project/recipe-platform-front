import React, { useState, useEffect } from 'react'
import Catagory from './Catagory'
import BoardViewItem from './BoardItem';
import SearchBottomTop from './SearchBottomTop'
import './style.css';
import { useNavigate, useParams } from 'react-router-dom'
import { popularWordListMock, searchBoardListMock } from 'mocks';
import Recently from './Recently';
import PopularBox from './PopularBox';
import usePagination from 'hooks/pagination.hook';
import { BoardItem, RecentlyItme, SearchItem } from 'Types';
import Pagination from 'components/Pagination';
import { useRecentlyBoardStore } from 'stores';



export default function Search() {

  //          state: 검색어 path variable          //
  const { word } = useParams();
  
  const {currentPageNumber, setCurrentPageNumber, currentSectionNumber,setCurrentSectionNumber, viewPageNumberList, totalSection, setBoardList, viewBoardList} = usePagination<SearchItem>(12);
  // const [recentlyList, setRecentlyList] = useState<RecentlyItme[]>([]);
  
  const { recentlyList, setRecentlyList } = useRecentlyBoardStore(); 

  const onBoardItemClickHandler = (item: SearchItem) => {
    const newRecentlyList = recentlyList.map(item => item);
    newRecentlyList.push(item);
    setRecentlyList(newRecentlyList);
  }

  useEffect(() => {
    setBoardList(searchBoardListMock);
  }, []);

  return (
    <div id='search-wrapper'>
      <Catagory/>
      <div className='search-middle'>
        <div>
          <SearchBottomTop />
          <div id='search-list-item-line-box'>
            {viewBoardList.map(item => <BoardViewItem item={item} onClick={onBoardItemClickHandler} />)}
          </div>
        </div>
        <div>
          <PopularBox />
          {recentlyList.length !== 0 &&<Recently />}
        </div>
      </div>
      <Pagination 
      currentPageNumber={currentPageNumber}
      currentSectionNumber={currentSectionNumber}
      setCurrentPageNumber={setCurrentPageNumber}
      setCurrentSectionNumber={setCurrentSectionNumber}
      viewPageNumberList={viewPageNumberList}
      totalSection={totalSection}
      />
    </div>
  )
}
