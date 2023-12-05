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
import { useRecentlyBoardStore, useSearchBoardListStore } from 'stores';
import { getRecipeListRequest } from 'apis/dto';
import { GetRecipeListResponseDto } from 'apis/dto/response/board';
import ResponseDto from 'apis/dto/response';

const typeList: string[] = ['국/탕', '찌개', '디저트', '면', '한식', '퓨전', '양식', '김치/젖갈/장류', '안주', '기타'];
const wayList: string[] = ['볶음', '끓이기', '부침', '조림', '무침', '비빔', '찜', '절임', '튀김', '삶기', '굽기', '데치기','기타']
const materialList: string[] = ['소고기', '돼지고기', '닭고기', '육류', '해물류', '채소류', '달걀/유제품', '가공식품류', '곡물류', '기타']

export default function Search() {

  //          state: 검색어 path variable          //
  const { word } = useParams();
  
  const {currentPageNumber, setCurrentPageNumber, currentSectionNumber,setCurrentSectionNumber, viewPageNumberList, totalSection, setBoardList, viewBoardList} = usePagination<SearchItem>(12);
  // const [recentlyList, setRecentlyList] = useState<RecentlyItme[]>([]);
  
  const { recentlyList, setRecentlyList } = useRecentlyBoardStore(); 
  const { searchBoardList, setSearchBoardList } = useSearchBoardListStore();

  const[type, setType] = useState<string>('전체');
  const[way, setWay] = useState<string>('전체');
  const[material, setMaterial] = useState<string>('전체');
  const[count, setCount] = useState<number>(0);

  const[section, setSection] = useState<'최신순' | '좋아요순' | '조회순' | ''>('');

  const onSectionClickHandler = (selectSection: '최신순' | '좋아요순' | '조회순' | '') => {
    if(section === selectSection) setSection('');
    else setSection(selectSection);

    const newSearchBoardList = searchBoardList.map(item => item);
    let newBoardList: SearchItem[] = [];
    if (selectSection === '최신순') newBoardList = newSearchBoardList.sort((a, b) => new Date(b.writeDatetime).getTime() - new Date(a.writeDatetime).getTime());
    if (selectSection === '좋아요순') newBoardList = newSearchBoardList.sort((a, b) => b.favoriteCount - a.favoriteCount);
    if (selectSection === '조회순') newBoardList = newSearchBoardList.sort((a, b) => b.viewCount - a.viewCount);
    if (selectSection === '') newBoardList = newSearchBoardList;
    setBoardList(newBoardList);
  }

  const onTypeClickHandler = (selectType: string) => {
    if (type === selectType) setType('전체');
    else setType(selectType);
  }

  const onWayClickHandler = (selectWay: string) => {
      if (way === selectWay) setWay('전체');
      else setWay(selectWay);
  }

  const onMaterialClickHandler = (selectMaterial: string) =>{
      if(material === selectMaterial) setMaterial('전체');
      else setMaterial(selectMaterial);
  }

  const onSearchClick = () => {
      // api 요청 처리 작업에서 setSearchBoardList 사용
  }

  const onBoardItemClickHandler = (item: SearchItem) => {
    const newRecentlyList = recentlyList.map(item => item);
    newRecentlyList.push(item);
    setRecentlyList(newRecentlyList);
  }

  const getRecipeListResponse = (response: GetRecipeListResponseDto | ResponseDto) => {
    const { code } = response;
    if (code !== 'SU') return;
    const { searchList } = response as GetRecipeListResponseDto;
    setBoardList(searchList);
    setSearchBoardList(searchList);
    setCount(searchList.length);
  }

  useEffect(() => {
    const searchWord = word ? word : '';
    getRecipeListRequest(searchWord, type, way, material).then(getRecipeListResponse);
  }, [word]);
  
  useEffect(() => {
    setBoardList(searchBoardList);
  }, [searchBoardList]);

  return (
    <div id='search-wrapper'>
      <div id='search-catagory-conainer'>
        <div className='search-catagory-first-big-box'>
            <div className='search-catagory-main-box'>
                <div className='search-tag-type-button'>{'종류별'}</div>
                <div className='search-tag-type-button'>{'방법별'}</div>
                <div className='search-tag-type-button'>{'재료별'}</div>
            </div>
            <div className='search-catagory-sub-box'>
                <div className='search-catagory-sub-big-box'>
                    {typeList.map(item => <div className={type === item ? 'search-tag-type-button-active' : 'search-tag-detail-button'} onClick={() => onTypeClickHandler(item)}>{item}</div>)}
                </div>
                <div className='search-catagory-sub-big-box'>
                    {wayList.map(item => <div className={way === item ?'search-tag-type-button-active' : 'search-tag-detail-button'} onClick={() => onWayClickHandler(item)}>{item}</div>)}
                </div>
                <div className='search-catagory-sub-big-box'>
                    {materialList.map(item => <div className={material === item ? 'search-tag-type-button-active' : 'search-tag-detail-button'} onClick={() => onMaterialClickHandler(item)}>{item}</div>)}
                </div>
            </div>
            <div className='catagory-search-box'>
                <div className='catagory-search-box-title'>{'검색'}</div>
            </div>
        </div>
      </div>
      <div className='search-middle'>
        <div>
          <div id='search-board-top-box'>
            <div className='search-board-top-title'>{`총 ${count}개의 레시피가 있습니다` }</div>
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
