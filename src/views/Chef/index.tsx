import React, { ChangeEvent, KeyboardEvent, forwardRef, useEffect, useRef, useState } from "react";
import "./style.css";
import { CHEF_PATH, CHEF_SEARCH_PATH, SEARCH_PATH } from "constant";
import { useNavigate, useParams } from "react-router-dom";
import { usePagination } from "hooks";
import { BoardItem, ChefItem } from "Types";
import { chefListMock, chefSearchListMock, latelyBoardListMock, popularWordListMock } from "mocks";
import ChefListItem from "components/ChepList";
import Pagination from "components/Pagination";
import { GetPopulerListResponseDto } from "apis/dto/response/search";
import ResponseDto from "apis/dto/response";

//          component: 쉐프 페이지          //
export default function Chef() {

    //          state: 조회하는 유저 이메일 path variable 상태          //
    const { searchEmail } = useParams();
    //          state: 화면 상태          //
    const [view, setView] = useState<'chef-ranking-page' | 'chef-search-page'>('chef-ranking-page');

    //          state: 인기 검색어 path variable 상태          //

    //          function: 네비게이트 함수          //
    const navigator = useNavigate();

    //          component: 쉐프 랭킹 페이지 컴포넌트          //
    const ChefRankingPage = () => {

        //         state: 페이지네이션 관련 상태          //
        const { currentPageNumber, setCurrentPageNumber, currentSectionNumber, setCurrentSectionNumber,
        viewBoardList, viewPageNumberList, totalSection, setBoardList } = usePagination<ChefItem>(10);
        //          state: 게시물 개수 상태          //
        const [count, setCount] = useState<number>(0);

        //          state: 화면 상태          //
        const [page, setPage] = useState<1 | 2>(1);
        //          state: 검색어 path variable 상태          //
        const { word } = useParams();

        //          state: 검색 버튼 상태          //
        const [showInput, setSowInput] = useState<boolean>(false);
        //          state: 검색 값 상태          //
        const [searchValue, setSearchValue] = useState<string>('');

        // 상태를 만들고 엔터 또는 버튼을 클릭했을 때 실행되는 함수 
        //          state: 검색단어? 상태           //
        const [value, setValue] = useState<boolean>(false);

        

        //          event handler: 서브버튼 클릭 이벤트 처리          //
        const onSubTepButtonClickHandler = () => {
            if (page === 1) setPage(2);

            if (page === 2) setPage(1);
        }

        //          event handler: 검색 값 변경 이벤트 처리          //
        const onSearchValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            const searchValue = event.target.value;
            setSearchValue(searchValue);
        }

        //          event handler: 검색 인풋 Enter key down 이벤트 처리          //
        const onSearchEnterKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key !== 'Enter') return;
            if (!searchValue) return;
            setView('chef-search-page')
            navigator(CHEF_SEARCH_PATH(searchValue))
        }
        //          event handler: 검색 버튼 클릭 이벤트 처리          //
        const onSearchButtonClickHandler = () => {
            if (!showInput) {
                setSowInput(true);
                return;
            }
            if (!searchValue) {
                setSowInput(false);
                return;
            }
            
            setView('chef-search-page')
            navigator(CHEF_SEARCH_PATH(searchValue));
        }
        //          effect: 조회하는 유저의 이메일이 변경될 때 마다 실행할 함수          //
        useEffect(() => {
            setBoardList(chefListMock);
            setCount(chefListMock.length);
        },[searchEmail]);

        //          effect: word path variable이 변경될 때 마다 검색 결과 불러오기          //
        useEffect(() => {
            if (!word) return;
            const chefList = chefSearchListMock(word);
            setBoardList(chefList);
            setCount(chefList.length);
            
            setView("chef-search-page")
        }, [word])

        //          event handler: 쉐프 랭킹 페이지 전환 이벤트 처리          //
        const onChangeChefRankingClickHandler = () => {
            setView('chef-ranking-page')
        }
        //          event handler: 쉐프 검색 페이지 전환 이벤트 처리          //
        const onChangeChefSearchClickHandler = () => {
            setView('chef-search-page')
        }

        return (
            <div id='chef-wrapper'>
                <div className='chef-top'>
                    <div className='chef-ranking-box'>
                        <div className='chef-ranking' style={({color:'#358B43', border: '1px solid #AEAEAE', borderBottom: '0'})} onClick={onChangeChefRankingClickHandler}>{'구독 순위'}</div>
                        <div className='chef-search-list'style={({color:'#000', border: '1px solid #AEAEAE', borderBottom: '0', borderLeft:'0'})} onClick={onChangeChefSearchClickHandler}>{'쉐프'}</div>
                        <div className='chef-top-search-box'>
                            <div className='chef-search-input-box'>
                                <input className='chef-search-input' type='text' value={searchValue} placeholder="쉐프 닉네임을 입력해 주세요." spellCheck="false" onChange={onSearchValueChangeHandler} onKeyDown={onSearchEnterKeyDownHandler} />
                                <div className='seach-icon' onClick={onSearchButtonClickHandler}>
                                    <div className='seach-icon-image'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='chef-bottom'>
                        {page === 1 && (<>
                        <div className='chef-title-box'>
                            <div className='chef-title'>{'일간 기준 구독 많은 순위'}</div>
                            <div className='chef-title-button'>
                                <div className='chef-oneDay' style={{backgroundColor:'#B2D3B7'}}>{'일간'}</div>
                                <div className='chef-accumulate' style={{color:'#AEAEAE'}} onClick={onSubTepButtonClickHandler}>{'누적'}</div>
                            </div>
                        </div>
                        <div className='chef-ranking-list'>
                            {viewBoardList.map((chefItem => <ChefListItem chefItem={chefItem}/>))}
                        </div>
                        </>)}
                        {page === 2 && (<>
                        <div className='chef-title-box'>
                            <div className='chef-title'>{'누적 기준 구독 많은 순위'}</div>
                            <div className='chef-title-button'>
                                <div className='chef-oneDay' style={{color:'#AEAEAE'}} onClick={onSubTepButtonClickHandler}>{'일간'}</div>
                                <div className='chef-accumulate' style={{backgroundColor:'#B2D3B7'}}>{'누적'}</div>
                            </div>
                        </div>
                        <div className='chef-ranking-list'>
                            {viewBoardList.map((chefItem => <ChefListItem chefItem={chefItem}/>))}
                        </div>
                        </>)}
                        <div className='chef-pagination-box'>
                            {count !== 0 && (
                                <Pagination
                                currentPageNumber={currentPageNumber}
                                currentSectionNumber={currentSectionNumber}
                                setCurrentPageNumber={setCurrentPageNumber}
                                setCurrentSectionNumber={setCurrentSectionNumber}
                                viewPageNumberList={viewPageNumberList}
                                totalSection={totalSection}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

    //          component: 쉐프 서치 페이지 컴포넌트          //
    const ChefSearchPage = () => {
        
        //         state: 페이지네이션 관련 상태          //
        const { currentPageNumber, setCurrentPageNumber, currentSectionNumber, setCurrentSectionNumber,
        viewBoardList, viewPageNumberList, totalSection, setBoardList } = usePagination<ChefItem>(10);
        //          state: 게시물 개수 상태          //
        const [count, setCount] = useState<number>(0);

        //          state: 검색어 path variable 상태          //
        const { word } = useParams();

        //          state: 검색 버튼 상태          //
        const [showInput, setSowInput] = useState<boolean>(false);
        //          state: 검색 값 상태          //
        const [searchValue, setSearchValue] = useState<string>('');

        //          event handler: 검색 값 변경 이벤트 처리          //
        const onSearchValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            const searchValue = event.target.value;
            setSearchValue(searchValue);
        }

        //          event handler: 검색 인풋 Enter key down 이벤트 처리          //
        const onSearchEnterKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key !== 'Enter') return;
            if (!searchValue) return;
            navigator(CHEF_SEARCH_PATH(searchValue))
        }
        //          event handler: 검색 버튼 클릭 이벤트 처리          //
        const onSearchButtonClickHandler = () => {
            if (!showInput) {
                setSowInput(true);
                return;
            }
            if (!searchValue) {
                setSowInput(false);
                return;
            }
            navigator(CHEF_SEARCH_PATH(searchValue));
        }

        useEffect(() => {
            if (searchValue && showInput) return setView('chef-search-page')
        })

        //          effect: 조회하는 유저의 이메일이 변경될 때 마다 실행할 함수          //
        useEffect(() => {
            setBoardList(chefListMock);
            setCount(chefListMock.length);
        },[searchEmail]);

        //          effect: word path variable이 변경될 때 마다 검색 결과 불러오기          //
        useEffect(() => {
            if (!word) return;
            const chefList = chefSearchListMock(word);
            setBoardList(chefList);
            setCount(chefList.length)
        }, [word])

        //          event handler: 쉐프 랭킹 페이지 전환 이벤트 처리          //
        const onChangeChefRankingClickHandler = () => {
            setView('chef-ranking-page')
            navigator(CHEF_PATH)
        }
        //          event handler: 쉐프 검색 페이지 전환 이벤트 처리          //
        const onChangeChefSearchClickHandler = () => {
            setView('chef-search-page')
        }

        return (
            <div id='chef-wrapper'>
                <div className='chef-top'>
                    <div className='chef-ranking-box'>
                        <div className='chef-ranking' style={({color:'#000', border: '1px solid #AEAEAE', borderBottom: '0'})} onClick={onChangeChefRankingClickHandler}>{'구독 순위'}</div>
                        <div className='chef-search-list' style={({color:'#358B43', border: '1px solid #AEAEAE', borderBottom: '0', borderLeft:'0'})} onClick={onChangeChefSearchClickHandler}>{'쉐프'}</div>
                        <div className='chef-top-search-box'>
                            <div className='chef-search-input-box'>
                                <input className='chef-search-input' type='text' value={searchValue} placeholder="쉐프 닉네임을 입력해 주세요." spellCheck="false" onChange={onSearchValueChangeHandler} onKeyDown={onSearchEnterKeyDownHandler} />
                                <div className='seach-icon' onClick={onSearchButtonClickHandler}>
                                    <div className='seach-icon-image'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='chef-bottom'>
                        {count === 0 ? (
                        <div className='chef-not-search'>
                            <div className='chef-not-search-text'>{'존재하지 않는 쉐프입니다.'}</div>
                        </div>
                        ) : (
                        <div className='chef-ranking-list'>
                            {viewBoardList.map((chefItem => <ChefListItem chefItem={chefItem}/>))}
                        </div>
                        )}
                        
                        <div className='chef-pagination-box'>
                            {count !== 0 && (
                                <Pagination
                                currentPageNumber={currentPageNumber}
                                currentSectionNumber={currentSectionNumber}
                                setCurrentPageNumber={setCurrentPageNumber}
                                setCurrentSectionNumber={setCurrentSectionNumber}
                                viewPageNumberList={viewPageNumberList}
                                totalSection={totalSection}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    //          component: 쉐프 페이지 서프 컴포넌트          //
    const ChefSub = () => {

        //					state: 보드 리스트 상태					//
        const [latelyBoardList, setLatelyBoardList] = useState<BoardItem[]>([]);
        const slideRef = useRef<HTMLDivElement | null>(null);
        const itemRef = useRef<HTMLDivElement | null>(null);
        const [current, setCurrent] = useState<number>(0);
        const [translate, setTranslate] = useState<number>(0);

        //          state: 인기 검색어 리스트 상태          //
        const [popularWordList, setPopularWordList] = useState<string[]>([]);

        //          function: 네비게이트 함수         //
        const navigator = useNavigate();

        //          function: get popular list response 처리 함수          //
        const getPopularListResponse = (responseBody: GetPopulerListResponseDto | ResponseDto) =>{
            const{code}= responseBody;
            if(code === 'DBE') alert ('데이터베이스 오류입니다')
            if(code !== 'SU') return;
        
            const{ popularWordList } = responseBody as GetPopulerListResponseDto;
            setPopularWordList(popularWordList);
        }

        //              event handler: 인기 검색어 뱃지 클릭 이벤트 처리         //
        const onPopulerWordBadgeClickHandler = (word: string) => {
            navigator(SEARCH_PATH(word));
        }

        useEffect(() => {
            setPopularWordList(popularWordListMock);
        }, []);

        //          interface: board 리스트 아이템 컴포넌트 Props         //
        interface Props {
            boardItem: BoardItem;
        }

        const LatelyRecipeListItem = forwardRef<HTMLDivElement, Props>(
            ({ boardItem }: Props, ref) => {
            //          state: Propertites          //
            const { noticeNumber, title, imageUrl } = boardItem;
            //          event handler: Card Click 이벤트 처리 함수          //
            // TODO: 클릭시 게시물 이동 만들기
            const onLatelyRecipeClickHandler = () => {
                navigator(`/board/detail/${noticeNumber}`);
            };

            //                  render: board 리스트 아이템 컴포넌트 렌더링                 //
            return (
                <div ref={ref} className="lately-recipe-in-center-box" onClick={onLatelyRecipeClickHandler}>
                    <div className="lately-recipe-in-center-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                    <div className="lately-recipe-in-title">{title}</div>
                </div>
            );
            }
        );

        //					effect: 컴포넌트가 마운트 시 보드 리스트 불러오기					//
        useEffect(() => {
            // TODO: API 호출로 변경
            setLatelyBoardList(latelyBoardListMock);
        }, []);
        //          event handler: 다음 이미지로 이동하는 함수          //
        const nextSlide = () => {
            if (!slideRef.current) return;
            const lastIndex = latelyBoardList.length - 3;
            const newCurrent = current === lastIndex ? 0 : current + 3;
            setCurrent(newCurrent);
            const newTranslate = -302 * newCurrent;
            slideRef.current.style.transform = `translateY(${newTranslate}px)`;
        };

        //          event handler: 이전 이미지로 이동하는 함수          //
        const prevSlide = () => {
            if (!slideRef.current) return;
            const lastIndex = latelyBoardList.length - 3;
            const newCurrent = current === 0 ? lastIndex : current - 3;
            setCurrent(newCurrent);
            const newTranslate = -302 * newCurrent;
            slideRef.current.style.transform = `translateY(${newTranslate}px)`;
        };


        return (
            <div className='chef-sub-container'>
                <div className='chef-sub-top'>
                    <div className='chef-popular-search'>
                        <div className='search-bottom-populer-word-card'>
                            <div className='search-bottom-popular-card-box'>
                                <div className='search-bottom-popular-card-title'>{'인기 검색어'}</div>
                                <div className='search-bottom-popular-card-contents'>
                                {popularWordList.map(word => <div className='word-badge' onClick={() => onPopulerWordBadgeClickHandler(word)}>{word}</div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="chef-lately-recipe-list">
                    <div className="chef-lately-recipe-out">
                        <div className="chef-lately-recipe-out-title">{"최근 본 게시물"}</div>
                    </div>
                    <div className="chef-lately-recipe-in">
                        <div className="chef-lately-recipe-top" onClick={prevSlide}>
                            <div className="chef-top-icon"></div>
                        </div>
                        <div className="chef-lately-recipe-in-center">
                            <div className="chef-lately-recipe-list-container" ref={slideRef}
                                style={{ transform: `translateY(${translate}px)` }}>
                                {latelyBoardList.map((boardItem) => (
                                <LatelyRecipeListItem ref={itemRef} boardItem={boardItem} />
                                ))}
                            </div>
                        </div>
                        <div className="chef-lately-recipe-bottom">
                        <div className="chef-bottom-icon" onClick={nextSlide}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (

        <div id="chef-page">
            { view === 'chef-ranking-page' && <ChefRankingPage/>}
            { view === 'chef-search-page' && <ChefSearchPage/>}
            <ChefSub />
        </div>
    )
}