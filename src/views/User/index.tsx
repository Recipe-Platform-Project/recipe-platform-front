import React, { ChangeEvent, KeyboardEvent, forwardRef, useEffect, useRef } from "react";
import './style.css';
import { useUserStore } from "stores";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userCommentListMock, userMock, userRecipeListMock, userRecipeReviewListMock, userWriteCommentListMock, userWriteRecipeReviewListMock, userWritingRecipeListMock } from "mocks";
import { usePagination } from "hooks";
import { BoardItem, UserCommentItem, UserRecipeItem, UserRecipeReviewItem, UserWriteCommentItem, UserWriteRecipeReviewItem, UserWritingRecipeItem } from "Types";
import { USER_RECIPE, USER_SEARCH_RECIPE } from "constant";
import UserRecipeList from "components/UserRecipeList";
import Pagination from "components/Pagination";
import UserWritingRecipeList from "components/UserWritingRecipeList";
import UserRecipeReviewList from "components/UserRecipeReviewList";
import UserCommentListItem from "components/UserCommentList";
import userSearchListMock from "mocks/user-search-list-mock";
import userLatelyBoardListMock from "mocks/user-lately-board-list.mock";
import UserWriteRecipeReviewList from "components/UserWriteRecipeReviewList";
import UserWriteCommentListItem from "components/UserWriteCommentList";
import {useCookies} from 'react-cookie'

//          component: 유저 페이지          //
export default function User() {

    //          state: 조회하는 유저 이메일 상태          //
    const { searchEmail } = useParams();
    //          state: 로그인 유저 정보 상태          //
    const { user, setUser } = useUserStore();
    //          state: 본인 여부 상태          //
    const [isMypage, setMypage] = useState<boolean>(true);   
    //          state: 팔로워, 팔로윙, 포스트트 개수 상태          //
    const [count, setCount] = useState<number>(0);
    //          state: TODO 쿠키 상태          //
    //          state: 화면 상태          //
    const [view, setView] = useState<'user-recipe' | 'user-writing-recipe' | 'user-recipe-review' | 'user-recipe-comment' >('user-recipe'); 

    //          function: 네비게이트 함수          //
    const navigator = useNavigate();
    

    //          component: 유저 정보 컴포넌트          //
    const UserInformation = () => {

        //          state: cookie 상태          //
        // const [cookies, setCookie] = useCookies();

        //          state: 프로필 이미지 상태           //
        const [profileImage, setProfileImage] = useState<string | null>('');
        //          state: 이메일 상태           //
        const [email, setEmail] = useState<string>('');
        //          state: 본인 여부 상태          //
        const [isMyPage, setMyPage] = useState<boolean>(false);
        //          state: 닉네임 이미지 상태          //
        const [nickname, setNickname] = useState<string>('아보카도도도');
        //          state: 자기소개 상태          //
        const [introduction, setIntroduction] = useState<string>('');
        //          state: 자기소개 변경 상태          //
        const [changeIntroduction, setChangeIntroduction] = useState<boolean>(true);

        // TODO: 프로필 이미지, 닉네임 정보수정에서 불러오기로 고치기
        //          event handler: 프로필 이미지 변경 이벤트 처리          //
        const onProfileImageChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            if (!event.target.files || !event.target.files.length) return;
            const imageUrl = URL.createObjectURL(event.target.files[0]);
            setProfileImage(imageUrl);
        }; 
        //          event handler: 닉네임 변경 이벤트 처리          //
        const onNicknameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            const nickname = event.target.value;
            setNickname(nickname);
        }

        //          event handler: 자기소개 변경 버튼 클릭 이벤트 처리          //
        const onChangeIntroductionButtonClickHandler = () => {
            if (!isMyPage) return;
            setChangeIntroduction(!changeIntroduction);
        }
        //          event handler: 자기소개 변경 이벤트 처리          //
        const onIntroductionChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
            const introduction = event.target.value;
            setIntroduction(introduction);
        }

        //          effect: 조회하는 유저의 이메일이 변경될 때 마다 실행할 함수          //
        useEffect(() => {
            const { email, nickname, profileImage } = userMock;
            setEmail(email);
            setNickname(nickname);
            setProfileImage(profileImage);
        }, [searchEmail]);

        //          render: 유저 정보 컴포넌트 렌더링          //
        return (
            <div id='user-information'>
                <div className='user-container'>
                    <div className='user-left'>
                        <div className='user-image'>
                            <div className='user-default-profile-image'></div>
                        </div>
                    </div>
                    <div className='user-right'>
                        <div className='user-right-top'>
                            <div className='user-nickname'>{nickname}</div>
                            <div className='user-modifying-information'>
                                <div className='user-modifying-information-button'>{'회원정보 수정'}</div>
                            </div>
                        </div>
                        <div className='user-right-middle'>
                            <li className='user-middle-box'>{'followers '}
                                    <span className='emphasis'>{count}</span>
                            </li>
                            <li className='user-middle-box'>{'following '}
                                    <span className='emphasis'>{count}</span>
                            </li>
                            <li className='user-middle-box'>{'post '}
                                    <span className='emphasis'>{count}</span>
                            </li>
                        </div>
                        <div className='user-right-bottom'>
                            <div className='user-introduction'>
                                {changeIntroduction ? (
                                <textarea className='user-introduction-text-input' placeholder="자기소개를 입력할 수 있습니다." spellCheck="false" value={introduction} onChange={onIntroductionChangeHandler} />
                                ) : (
                                <div className='user-introduction-text'></div>
                                )}
                                {isMypage && (
                                <div onClick={onChangeIntroductionButtonClickHandler}></div>
                                )}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    //          component: 유저 레시피 컴포넌트          //
    const UserRecipe = () => {

        //          state: 페이지 번호 상태          //
        const [page, setPage] = useState<1 | 2>(1);

        //          state: 페이지네이션 관련 상태          //
        const { currentPageNumber, setCurrentPageNumber, currentSectionNumber, setCurrentSectionNumber,
            viewBoardList, viewPageNumberList, totalSection, setBoardList } = usePagination<UserRecipeItem>(16);
        //          state: 게시물 개수 상태          //
        const [count, setCount] = useState<number>();
        //         state: 검색 버튼 상태          //
        const [showInput, setShowInput] = useState<boolean>(false);
        //          state: 검색 값 상태          //
        const [searchValue, setSearchValue] = useState<string>('');

        //          state: 검색어 path variable 상태          //
        const { word } = useParams();

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
        const onSearchEnterkeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key !== 'Enter') return;
            if (!searchValue) return;
            navigator(USER_SEARCH_RECIPE(searchEmail)(searchValue));
        }
        //          event handler: 검색 버튼 클릭 이벤트 처리          //
        const onSearchButtonClickHandler = () => {
            if (!showInput) {
                setShowInput(true);
                return;
            }
            if (!searchValue) {
                setShowInput(false);
                return;
            }
            navigator(USER_SEARCH_RECIPE(searchEmail)(searchValue));
        }
 
        //          function: 네비게이트 함수          //
        const navigator = useNavigate();


        //          event handler: 버튼 클릭 이벤트 처리          //
        const onButtonClickHandler = () => {
            if (!user) {
                alert('로그인이 필요합니다.');
                navigator('/');
                return;
            }

            if (isMypage) navigator('/게시물작성페이지');
            else navigator(USER_RECIPE(user.email));
        }

        //          event handler: 검색버튼 클릭 페이지 전환 이벤트 처리          //
        const onSearchPageButtonClickHandler = () => {
        }

        //          effect: 조회하는 유저의 이메일이 변경될 때 마다 실행할 함수          //
        useEffect(() => {
            setBoardList(userRecipeListMock);
            setCount(userRecipeListMock.length);
        }, [searchEmail]);

        //          effect: word path variable이 변경될 때 마다 검색 결과 불러오기          //
        useEffect(() => {
            if (!word) return;
            const userList = userSearchListMock(word);
            setBoardList(userList);
            setCount(userList.length);
        }, [word])

        //          event handler: 유저 레시피 페이지 전환 이벤트 처리          //
        const onChangeRecipeClickHandler = () => {    
            navigator(USER_RECIPE(':searchEmail'))    
            setView('user-recipe');
        }
        //          event handler: 유저 레시피 페이지 전환 이벤트 처리          //
        const onChangeWritingRecipeClickHandler = () => {        
            setView('user-writing-recipe');
        }
        //          event handler: 유저 레시피 페이지 전환 이벤트 처리          //
        const onChangeRecipeReviewClickHandler = () => {        
            setView('user-recipe-review');
        }
        //          event handler: 유저 레시피 페이지 전환 이벤트 처리          //
        const onChangeRecipeCommentClickHandler = () => {        
            setView('user-recipe-comment');
        }

        //          render: 유저 보드 컴포넌트 렌더링          //
        return (
            <div id='user-board'>
                <div className='user-board-main'>
                    <div className='user-board-main-container'>
                        <div role='user-main-recipe' className='user-main-recipe-box'>
                            <div className="user-recipe-title-bundle">
                                {isMypage ? (
                                <>
                                <a className='user-main-recipe-title' style={{color:'#358B43',  border: '1px solid #358B43', borderBottom: '0'}} onClick={onChangeRecipeClickHandler}>{'레시피'}</a>
                                <a className="user-main-writing-title" style={{color:'#000',  borderBottom: '1px solid #358B43'}} onClick={onChangeWritingRecipeClickHandler}>{'작성중인 레시피'}</a>
                                <a className="user-main-recipe-review-title" style={{color:'#000',  borderBottom: '1px solid #358B43'}} onClick={onChangeRecipeReviewClickHandler}>{'레시피 후기'}</a>
                                <a className="user-main-recipe-comments-title" style={{color:'#000',  borderBottom: '1px solid #358B43'}} onClick={onChangeRecipeCommentClickHandler}>{'댓글'}</a>
                                </>
                                ) : (
                                <>
                                <a className='user-main-recipe-title' style={{color:'#358B43',  border: '1px solid #358B43', borderBottom: '0'}} onClick={onChangeRecipeClickHandler}>{'레시피'}</a>
                                <div className='user-main-recipe-title-nop' style={{borderBottom: '1px solid #358B43'}}></div>
                                {/* <a className="user-main-writing-title" style={{borderBottom: '1px solid #358B43', cursor: "none"}}></a>
                                <a className="user-main-recipe-review-title" style={{borderBottom: '1px solid #358B43'}}></a>
                                <a className="user-main-recipe-comments-title" style={{borderBottom: '1px solid #358B43'}}></a> */}
                                </>
                                )}
                            </div>
                            {page === 1 && (
                                count === 0 ? (
                                <div className='user-recipe-nothing'>
                                    <div className='user-recipe-nothing-icon'>
                                        <div className='user-recipe-nothing-image'></div>
                                    </div>
                                    <div className='user-recipe-nothing-text'>{'레시피를 올려보세요!'}</div>
                                    <div className='user-recipe-registration-button'>
                                        <a href='http://localhost:3000/게시물작성페이지'>{'레시피등록'}</a>
                                    </div>
                                </div>
                                ) : (
                                <div className='user-board-content'>
                                    <ul className='user-board-sub-tep'>
                                        <div className='user-board-surch-box'>
                                            <input className='user-board-surch' type='text' value={searchValue} onChange={onSearchValueChangeHandler} onKeyDown={onSearchEnterkeyDownHandler} />
                                            <div className='surch-image-box' onClick={onSearchButtonClickHandler}> 
                                                <div className='surch-icon'></div>
                                            </div>
                                        </div>
                                    </ul>
                                    <div className='user-board-box'>
                                        {viewBoardList.map((recipeItem => <UserRecipeList userRecipeItem={recipeItem}/>))}
                                    </div>
                                </div>    
                                )
                            )}
                            {page === 2 && (
                                count === 0 ? (
                                <div className='user-recipe-nothing'>
                                    <div className='user-recipe-nothing-icon'>
                                        <div className='user-recipe-nothing-image'></div>
                                    </div>
                                    <div className='user-recipe-nothing-text'>{'레시피를 올려보세요!'}</div>
                                    <div className='user-recipe-registration-button'>
                                        <a href='http://localhost:3000/게시물작성페이지'>{'레시피등록'}</a>
                                    </div>
                                </div>
                                ) : (
                                <div className='user-board-content'>
                                    <ul className='user-board-sub-tep'>
                                        <div className='user-board-surch-box'>
                                            <input type='text' className='user-board-surch'/>
                                            <div className='surch-image-box'>
                                                <div className='surch-icon'></div>
                                            </div>
                                        </div>
                                    </ul>
                                    <div></div>
                                    <div className='user-board-box'>
                                        {viewBoardList.map((recipeItem => <UserRecipeList userRecipeItem={recipeItem}/>))}
                                    </div>
                                </div>    
                                )
                            )}
                        </div>
                        <div className='user-recipe-pagenation'>
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

    )}


    //          component: 유저 작성중인 레시피 컴포넌트          //
    const UserWritingRecipe = () => {

        //          state: 페이지네이션 관련 상태          //
        const { currentPageNumber, setCurrentPageNumber, currentSectionNumber, setCurrentSectionNumber,
            viewBoardList, viewPageNumberList, totalSection, setBoardList } = usePagination<UserWritingRecipeItem>(16);
        //          state: 게시물 개수 상태          //
        const [count, setCount] = useState<number>(16);


        //          function: 네비게이트 함수          //
        const navigator = useNavigate();


        //          event handler: 버튼 클릭 이벤트 처리          //
        const onButtonClickHandler = () => {
            if (!user) {
                alert('로그인이 필요합니다.');
                navigator('/');
                return;
            }

            if (isMypage) navigator('/게시물작성페이지');
            else navigator(USER_RECIPE(user.email));
        }

        //          effect: 조회하는 유저의 이메일이 변경될 때 마다 실행할 함수          //
        useEffect(() => {
            setBoardList(userWritingRecipeListMock);
            setCount(userWritingRecipeListMock.length);
        }, [searchEmail]);

        //          event handler: 유저 레시피 페이지 전환 이벤트 처리          //
        const onChangeRecipeClickHandler = () => {        
            setView('user-recipe');
        }
        //          event handler: 유저 레시피 페이지 전환 이벤트 처리          //
        const onChangeWritingRecipeClickHandler = () => {        
            setView('user-writing-recipe');
        }
        //          event handler: 유저 레시피 페이지 전환 이벤트 처리          //
        const onChangeRecipeReviewClickHandler = () => {        
            setView('user-recipe-review');
        }
        //          event handler: 유저 레시피 페이지 전환 이벤트 처리          //
        const onChangeRecipeCommentClickHandler = () => {        
            setView('user-recipe-comment');
        }


        //          render: 유저 보드 컴포넌트 렌더링          //
        return (
            <div id='user-board'>
                <div className='user-board-main'>
                    <div className='user-board-main-container'>
                        <div role='user-main-recipe' className='user-main-recipe-box'>
                            <div className="user-recipe-title-bundle">
                                <a className='user-main-recipe-title' style={{color:'#000',  borderBottom: '1px solid #358B43'}} onClick={onChangeRecipeClickHandler}>{'레시피'}</a>
                                <a className="user-main-writing-title" style={{color:'#358B43',  border: '1px solid #358B43', borderBottom: '0'}} onClick={onChangeWritingRecipeClickHandler}>{'작성중인 레시피'}</a>
                                <a className="user-main-recipe-review-title" style={{color:'#000',  borderBottom: '1px solid #358B43'}} onClick={onChangeRecipeReviewClickHandler}>{'레시피 후기'}</a>
                                <a className="user-main-recipe-comments-title" style={{color:'#000',  borderBottom: '1px solid #358B43'}} onClick={onChangeRecipeCommentClickHandler}>{'댓글'}</a>
                            </div>
                            {count === 0 ? (
                            <div className='user-recipe-nothing'>
                                <div className='user-recipe-nothing-icon'>
                                    <div className='user-recipe-nothing-image'></div>
                                </div>
                                <div className='user-recipe-nothing-text'>{'작성중인 레시피가 없습니다.\n레시피를 올려보세요!'}</div>
                                <div className='user-recipe-registration-button'>
                                    <a href='http://localhost:3000/게시물작성페이지'>{'레시피등록'}</a>
                                </div>
                            </div>
                            ) : (
                            <div className='user-board-content'>
                                <div className='user-board-box'>
                                    {viewBoardList.map((writingRecipeItem => <UserWritingRecipeList userWritingRecipeItem={writingRecipeItem}/>))}
                                </div>
                            </div>    
                            )}
                        </div>
                        <div className='user-recipe-pagenation'>
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

    )}


    //          component: 레시피 후기 컴포넌트          //
    const UserRecipeReview = () => {

        //          state: 페이지 번호 상태          //
        const [page, setPage] = useState<1 | 2>(1);

        //          state: 페이지네이션 관련 상태          //
        const { currentPageNumber, setCurrentPageNumber, currentSectionNumber, setCurrentSectionNumber,
            viewBoardList, viewPageNumberList, totalSection, setBoardList } = usePagination<UserRecipeReviewItem | UserWriteRecipeReviewItem>(16);
        //          state: 게시물 개수 상태          //
        const [count, setCount] = useState<number>(16);
 
        //          function: 네비게이트 함수          //
        const navigator = useNavigate();


        //          event handler: 버튼 클릭 이벤트 처리          //
        const onButtonClickHandler = () => {
            if (!user) {
                alert('로그인이 필요합니다.');
                navigator('/');
                return;
            }

            if (isMypage) navigator('/게시물수정페이지');
            else navigator(USER_RECIPE(user.email));
        }

        //          event handler: 서브버튼 클릭 이벤트 처리          //
        const onSubTepButtonClickHandler = () => {
            if (page === 1) 
            // usePagination<UserWriteRecipeReviewItem>
            setPage(2);

            if (page === 2) 
        
            // usePagination<UserRecipeReviewItem> 
            setPage(1);
        }

        //          effect: 조회하는 페이지가 변경될 때 마다 실행할 함수          //
        useEffect(() => {
            if (page === 1) { 
                usePagination<UserRecipeReviewItem>
                setBoardList(userRecipeReviewListMock);
                setCount(userRecipeReviewListMock.length);
            } 
            if (page === 2) {
                usePagination<UserWriteRecipeReviewItem>
                setBoardList(userWriteRecipeReviewListMock);
                setCount(userWriteRecipeReviewListMock.length);
            }
        }, [page]);

         

        //          event handler: 유저 레시피 페이지 전환 이벤트 처리          //
        const onChangeRecipeClickHandler = () => {        
            setView('user-recipe');
        }
        //          event handler: 유저 레시피 페이지 전환 이벤트 처리          //
        const onChangeWritingRecipeClickHandler = () => {        
            setView('user-writing-recipe');
        }
        //          event handler: 유저 레시피 페이지 전환 이벤트 처리          //
        const onChangeRecipeReviewClickHandler = () => {        
            setView('user-recipe-review');
        }
        //          event handler: 유저 레시피 페이지 전환 이벤트 처리          //
        const onChangeRecipeCommentClickHandler = () => {        
            setView('user-recipe-comment');
        }


        //          render: 유저 보드 컴포넌트 렌더링          //
        return (
            <div id='user-board'>
                <div className='user-board-main'>
                    <div className='user-board-main-container'>
                        <div role='user-main-recipe' className='user-main-recipe-box'>
                            <div className="user-recipe-title-bundle">
                                <a className='user-main-recipe-title' style={{color:'#000', borderBottom: '1px solid #358B43'}} onClick={onChangeRecipeClickHandler}>{'레시피'}</a>
                                <a className="user-main-writing-title" style={{color:'#000', borderBottom: '1px solid #358B43'}}  onClick={onChangeWritingRecipeClickHandler}>{'작성중인 레시피'}</a>
                                <a className="user-main-recipe-review-title" style={{color:'#358B43', border: '1px solid #358B43', borderBottom: '0'}} onClick={onChangeRecipeReviewClickHandler}>{'레시피 후기'}</a>
                                <a className="user-main-recipe-comments-title" style={{color:'#000', borderBottom: '1px solid #358B43'}} onClick={onChangeRecipeCommentClickHandler}>{'댓글'}</a>
                            </div>
                            {page === 1 && (
                                count === 0 ? (
                                <div className='user-recipe-nothing'>
                                    <div className='user-recipe-nothing-icon'>
                                        <div className='user-recipe-review-nothing-image'></div>
                                    </div>
                                    <div className='user-recipe-nothing-text'>{'받은 레시피 후기가 없습니다.'}</div>
                                </div>
                                ) : (
                                <div className='user-review-board-content'>
                                    <div className='user-review-board-sub-tep'>
                                        <div className='user-review-board-sequence'>
                                            <li role='user-review-board-tep-presentation' className='user-review-sub-tep-title-latest' style={{backgroundColor:'#B2D3B7'}}>{'받은 레시피 후기'}</li>
                                            <li role='user-review-board-tep-presentation' className='user-review-sub-tep-title-like' onClick={onSubTepButtonClickHandler}>{'내가 쓴 레시피 후기'}</li>
                                        </div>
                                    </div>
                                    <div className='user-review-board-box'>
                                        {viewBoardList.map((recipeReviewItem => <UserRecipeReviewList userRecipeReviewItem={recipeReviewItem}/>))}
                                    </div>
                                </div>
                                )
                            )}
                            {page === 2 &&  (
                                count === 0 ? (
                                <div className='user-recipe-nothing'>
                                    <div className='user-recipe-nothing-icon'>
                                        <div className='user-recipe-review-nothing-image'></div>
                                    </div>
                                    <div className='user-recipe-nothing-text'>{'작성한 레시피 후기가 없습니다.\n레시피 후기를 작성해 보세요!'}</div>
                                </div>
                                ) : (
                                <div className='user-review-board-content'>
                                    <div className='user-review-board-sub-tep'>
                                        <div className='user-review-board-sequence'>
                                            <li role='user-review-board-tep-presentation' className='user-review-sub-tep-title-latest' onClick={onSubTepButtonClickHandler}>{'받은 레시피 후기'}</li>
                                            <li role='user-review-board-tep-presentation' className='user-review-sub-tep-title-like' style={{backgroundColor:'#B2D3B7'}}>{'내가 쓴 레시피 후기'}</li>
                                        </div>
                                    </div>
                                    <div className='user-review-board-box'>
                                        {viewBoardList.map((writeRecipeItem => <UserWriteRecipeReviewList userWriteRecipeReviewItem={writeRecipeItem}/>))}
                                    </div>
                                </div>
                            )
                            )}
                            
                        </div>
                        <div className='user-recipe-pagenation'>
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

    )}


    //          component: 레시피 댓글 컴포넌트          //
    const UserRecipeComment = () => {

        //          state: 페이지 번호 상태          //
        const [page, setPage] = useState<1 | 2>(1);

        //          state: 페이지네이션 관련 상태          //
        const { currentPageNumber, setCurrentPageNumber, currentSectionNumber, setCurrentSectionNumber,
            viewBoardList, viewPageNumberList, totalSection, setBoardList } = usePagination<UserCommentItem | UserWriteCommentItem>(8);
        //          state: 게시물 개수 상태          //
        const [count, setCount] = useState<number>();

 
        //          function: 네비게이트 함수          //
        const navigator = useNavigate();


        //          event handler: 버튼 클릭 이벤트 처리          //
        const onButtonClickHandler = () => {
            if (!user) {
                alert('로그인이 필요합니다.');
                navigator('/');
                return;
            }

            if (isMypage) navigator('/게시물수정페이지');
            else navigator(USER_RECIPE(user.email));
        }

        //          event handler: 서브버튼 클릭 이벤트 처리          //
        const onSubTepButtonClickHandler = () => {
            if (page === 1) setPage(2);

            if (page === 2) setPage(1);
        }

        //          effect: 조회하는 페이지가 변경될 때 마다 실행할 함수          //
        useEffect(() => {
            if (page === 1) {
                usePagination<UserCommentItem>
                setBoardList(userCommentListMock);
                setCount(userCommentListMock.length);
            }
            if (page === 2) {
                usePagination<UserWriteCommentItem>
                setBoardList(userWriteCommentListMock);
                setCount(userWriteCommentListMock.length);
            }
        }, [page]);

        //          event handler: 유저 레시피 페이지 전환 이벤트 처리          //
        const onChangeRecipeClickHandler = () => {        
            setView('user-recipe');
        }
        //          event handler: 유저 레시피 페이지 전환 이벤트 처리          //
        const onChangeWritingRecipeClickHandler = () => {        
            setView('user-writing-recipe');
        }
        //          event handler: 유저 레시피 페이지 전환 이벤트 처리          //
        const onChangeRecipeReviewClickHandler = () => {        
            setView('user-recipe-review');
        }
        //          event handler: 유저 레시피 페이지 전환 이벤트 처리          //
        const onChangeRecipeCommentClickHandler = () => {        
            setView('user-recipe-comment');
        }


        //          render: 유저 보드 컴포넌트 렌더링          //
        return (
            <div id='user-board'>
                <div className='user-board-main'>
                    <div className='user-board-main-container'>
                        <div role='user-main-recipe' className='user-main-recipe-box'>
                            <div className="user-recipe-title-bundle">
                                <a className='user-main-recipe-title' style={{color:'#000', borderBottom: '1px solid #358B43'}} onClick={onChangeRecipeClickHandler}>{'레시피'}</a>
                                <a className="user-main-writing-title" style={{color:'#000', borderBottom: '1px solid #358B43'}}  onClick={onChangeWritingRecipeClickHandler}>{'작성중인 레시피'}</a>
                                <a className="user-main-recipe-review-title" style={{color:'#358B43', borderBottom: '1px solid #358B43'}} onClick={onChangeRecipeReviewClickHandler}>{'레시피 후기'}</a>
                                <a className="user-main-recipe-comments-title" style={{color:'#358B43', border: '1px solid #358B43', borderBottom: '0'}} onClick={onChangeRecipeCommentClickHandler}>{'댓글'}</a>
                            </div>
                            {page === 1 && (
                                count === 0 ? (
                                <div className='user-recipe-nothing'>
                                    <div className='user-recipe-nothing-icon'>
                                        <div className='user-recipe-review-nothing-image'></div>
                                    </div>
                                    <div className='user-recipe-nothing-text'>{'받은 댓글이 없습니다.'}</div>
                                </div>
                                ) : (
                                <div className='user-review-board-content'>
                                    <div className='user-review-board-sub-tep'>
                                        <div className='user-review-board-sequence'>
                                            <li role='user-review-board-tep-presentation' className='user-review-sub-tep-title-latest' style={{backgroundColor:'#B2D3B7'}}>
                                                {'받은 댓글'}
                                            </li>
                                            <li role='user-review-board-tep-presentation' className='user-review-sub-tep-title-like' onClick={onSubTepButtonClickHandler}>
                                                {'내가 쓴 댓글'}
                                            </li>
                                        </div>
                                    </div>
                                    <div className='user-comment-board-container'>
                                    {viewBoardList.map((recipeReviewItem => <UserCommentListItem userCommentItem={recipeReviewItem}/>))}
                                    </div>
                                </div>
                                )
                            )}
                            {page === 2 && (
                                count === 0 ? (
                                <div className='user-recipe-nothing'>
                                    <div className='user-recipe-nothing-icon'>
                                        <div className='user-recipe-review-nothing-image'></div>
                                    </div>
                                    <div className='user-recipe-nothing-text'>{'작성한 댓글이 없습니다.'}</div>
                                </div>
                                ) : (
                                <div className='user-review-board-content'>
                                    <div className='user-review-board-sub-tep'>
                                        <div className='user-review-board-sequence'>
                                            <li role='user-review-board-tep-presentation' className='user-review-sub-tep-title-latest' onClick={onSubTepButtonClickHandler}>
                                                {'받은 댓글'}
                                            </li>
                                            <li role='user-review-board-tep-presentation' className='user-review-sub-tep-title-like' style={{backgroundColor:'#B2D3B7'}}>
                                                {'내가 쓴 댓글'}
                                            </li>
                                        </div>
                                    </div>
                                    <div className='user-comment-board-container'>
                                    {viewBoardList.map((recipeReviewItem => <UserWriteCommentListItem userWriteCommentItem={recipeReviewItem}/>))}
                                    </div>
                                </div>
                            )
                            )}
                            
                        </div>
                        <div className='user-recipe-pagenation'>
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

    )}


    //          component: 최근 본 레시피 컴포넌트          //
    const UserSubRecipe = () => {
        //					state: 보드 리스트 상태					//
        const [latelyBoardList, setLatelyBoardList] = useState<BoardItem[]>([]);
        const slideRef = useRef<HTMLDivElement | null>(null);
        const itemRef = useRef<HTMLDivElement | null>(null);
        const [current, setCurrent] = useState<number>(0);
        const [translate, setTranslate] = useState<number>(0);
        //          function: 네비게이트 함수         //
        const navigator = useNavigate();

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
                <div ref={ref} className="user-recent-post-box" onClick={onLatelyRecipeClickHandler}>
                  <div className="user-recent-post-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                  <div className="user-recent-post-title">{title}</div>
                </div>  
              );
            }
          );

        //					effect: 컴포넌트가 마운트 시 보드 리스트 불러오기					//
        useEffect(() => {
            // TODO: API 호출로 변경
            setLatelyBoardList(userLatelyBoardListMock);
        }, []);

        //          event handler: 다음 이미지로 이동하는 함수          //
        const nextSlide = () => {
            if (!slideRef.current) return;
            const lastIndex = latelyBoardList.length - 5;
            const newCurrent = current === lastIndex ? 0 : current + 5;
            setCurrent(newCurrent);
            const newTranslate = -248 * newCurrent;
            slideRef.current.style.transform = `translateY(${newTranslate}px)`;
        };

        //          event handler: 이전 이미지로 이동하는 함수          //
        const prevSlide = () => {
            if (!slideRef.current) return;
            const lastIndex = latelyBoardList.length - 5;
            const newCurrent = current === 0 ? lastIndex : current - 5;
            setCurrent(newCurrent);
            const newTranslate = -248 * newCurrent;
            slideRef.current.style.transform = `translateY(${newTranslate}px)`;
        };

        return (
            <div id='user-board-sub'>
                <div className='user-recent-post-container'>
                    <div className='user-recent-post-main-title'>{'최근 본 게시물'}</div>
                    <div className='user-recent-post-list-button-top'>
                        <div className='circle-top-button-icon' onClick={prevSlide}></div>
                    </div>
                    <div className="user-recent-post-list">
                        <div className="user-recipe-list-container" 
                            ref={slideRef}style={{ transform: `translateY(${translate}px)` }}>
                            {latelyBoardList.map((boardItem) => (
                            <LatelyRecipeListItem ref={itemRef} boardItem={boardItem} />))}
                        </div>
                    </div>
                    <div className='user-recent-post-list-button-bottom'>
                        <div className='circle-bottom-button-icon' onClick={nextSlide}></div>
                    </div>
                </div>
            </div>

        )
    }


    //          effect: 조회하는 유저의 이메일이 변경될 때 마다 실행할 함수          //
    useEffect(() => {
        const isMyPage = searchEmail === user?.email;
        setMypage(isMyPage);
    }, [searchEmail]);

    //          render: 유저 페이지 렌더링          //
    return (
        <>
            <UserInformation />
            { view === 'user-recipe' && <UserRecipe />}
            { view === 'user-writing-recipe' && <UserWritingRecipe />}
            { view === 'user-recipe-review' && <UserRecipeReview />}
            { view === 'user-recipe-comment' && <UserRecipeComment />}
            <UserSubRecipe />
        </>
    )
}
