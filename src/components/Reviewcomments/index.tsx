import Pagination from 'components/Pagination';
import { usePagination } from 'hooks';
import React, { ChangeEvent, useRef, useState } from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom';

//          component: 게시물 상세보기 요리 후기 댓글 컴포넌트          //
export default function CookingReviewComments() {

    //          state: 댓글 textarea 참조 상태          //
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    //          state: 별점 상태           //
    const [selectStarView, setSelectStarView] = useState<boolean>(false);
    const [selectScore, setSelectScore] = useState<number>(5);
    //          state: 댓글 상태          //
    const [comment, setComment] = useState<string>('');
    //          state: 답글 등록 버튼 상태           //
    const [replycommentButton, setReplyCommentButton] = useState<boolean>(false);
    //          state: 요리후기 리스트 페이지네이션 상태          //
    const {currentPageNumber, setCurrentPageNumber, currentSectionNumber, 
        setCurrentSectionNumber, viewPageNumberList, totalSection} 
        = usePagination<string>(3);
    //          state: 요리후기 답글 보기 상태          //
    const [replyCommentsOpen, setReplyCommentsOpen] = useState<boolean>(false);

    //          function: 네비게이트 함수          //
    const navigator = useNavigate();
        
    //           event handler: user 마이페이지 페이지 이동 버튼 클릭 이벤트 처리          //
    const onUserMyPageButtonClickHandler = () => {
        navigator('/user/')
    }

    //           event handler: 별점 보기 버튼 클릭 이벤트 처리          //
    const onSelectStarButtonClickHandler = () => {
        setSelectStarView(!selectStarView);
    }

    //           event handler: 별점 선택 클릭 이벤트 처리          //
    const onScoreClickHandler = (score: number) => {
        setSelectScore(score);
        setSelectStarView(false);
    }

    //           event handler: 답글 보기 버튼 클릭 이벤트 처리          //
    const onReplyeCommnetsOpenButtonClickHandler = () => {
        setReplyCommentsOpen(!replyCommentsOpen);
    }

    //           event handler: 요리후기 댓글 작성 버튼 클릭 이벤트 처리          //
    const onCookingReviewCommentButtonClickHandler = () => {
        // TODO: API랑 연결 //
    }
    //           event handler: 요리후기 댓글 수정 이벤트 처리          //
    const onCookingReviewCommentChangeButtonClickHandler = () => {
        // TODO: API랑 연결 //
    }

    //          component: 별점 컴포넌트          //
    const StarComponent = ({ score }: { score: number}) => {
        

        if (score === 1)
        return (
        <>
            <div className='cooking-review-host-reviewer-star'></div>
            <div className='cooking-review-host-reviewer-basics-star'></div>
            <div className='cooking-review-host-reviewer-basics-star'></div>
            <div className='cooking-review-host-reviewer-basics-star'></div>
            <div className='cooking-review-host-reviewer-basics-star'></div>
        </>)
        if (score === 2)
        return (
        <>
            <div className='cooking-review-host-reviewer-star'></div>
            <div className='cooking-review-host-reviewer-star'></div>
            <div className='cooking-review-host-reviewer-basics-star'></div>
            <div className='cooking-review-host-reviewer-basics-star'></div>
            <div className='cooking-review-host-reviewer-basics-star'></div>
        </>)
        if (score === 3)
        return (
        <>
            <div className='cooking-review-host-reviewer-star'></div>
            <div className='cooking-review-host-reviewer-star'></div>
            <div className='cooking-review-host-reviewer-star'></div>
            <div className='cooking-review-host-reviewer-basics-star'></div>
            <div className='cooking-review-host-reviewer-basics-star'></div>
        </>)
        if (score === 4)
        return (
        <>
            <div className='cooking-review-host-reviewer-star'></div>
            <div className='cooking-review-host-reviewer-star'></div>
            <div className='cooking-review-host-reviewer-star'></div>
            <div className='cooking-review-host-reviewer-star'></div>
            <div className='cooking-review-host-reviewer-basics-star'></div>
        </>
        )
        return (
        <>
            <div className='cooking-review-host-reviewer-star'></div>
            <div className='cooking-review-host-reviewer-star'></div>
            <div className='cooking-review-host-reviewer-star'></div>
            <div className='cooking-review-host-reviewer-star'></div>
            <div className='cooking-review-host-reviewer-star'></div>
        </>)
    }


    const CookingReviews = () => {

        const AddPhotos = () => {
            //                  state: 요리후기 사진 상태                 //
            const [addPhotos, setAddPhotos] = useState<string | null>("");
            //                  state: 요리후기 사진 input ref 상태                 //
            const addPhotosFileInputRef = useRef<HTMLInputElement | null>(null);
            //          event handler: 요리후기 사진 업데이트 클릭 이벤트 처리          //
            const onAddPhotosFileUpdateClickHabdler = () => {
                if (!addPhotosFileInputRef.current) return;
                addPhotosFileInputRef.current.click();
            };
            //          event handler: 요리후기 사진 업데이트 변경 이벤트 처리          //
            const onAddPhotosFileUpdateChangeHabdler = (
                    event: ChangeEvent<HTMLInputElement>
                ) => {
                    if (!event.target.files || !event.target.files.length) return;
                    const imageUrl = URL.createObjectURL(event.target.files[0]);
                    setAddPhotos(imageUrl);
            };
            return (
                <div onClick={onAddPhotosFileUpdateClickHabdler}>
                    <input 
                        ref={addPhotosFileInputRef}
                        type='file'
                        accept='image/*'
                        style={{display: "none" }}
                        onChange={onAddPhotosFileUpdateChangeHabdler
                        }
                     />
                     {addPhotos === "" ? (
                        <div className='add-photo-box' >
                            <div className='add-photo'>+</div>
                        </div>
                     ) : (
                        <div className='in-add-image-box' style={{backgroundImage: `url(${addPhotos})`}}>
                            <div className='in-add-image'></div>
                        </div>
                     )}
                </div>
            );
            };

//          render: 게시물 상세보기 페이지 요리후기 댓글 렌더링          //
            const Reply = () => {
                return(
                    <div className='board-writer-container'>
                        <div className='board-writer-box'>
                            <div className='board-writer-profile-image' onClick={onUserMyPageButtonClickHandler} ></div>
                            <div className='board-writer'>
                                <div className='board-writer-nickname-and-datetime-container'>
                                    <div className='board-writer-nickname-and-datetime-box'>
                                        <div className='board-writer-nickname' onClick={onUserMyPageButtonClickHandler} >{'닉네임닉네임닉네임'}</div>
                                        <div className='board-writer-datetime'>{'2023-10-31 11:13'}</div>
                                    </div>
                                    <div className='reply-comment-edit-box'>
                                        <div className='reply-update-comment-text-button'>{'수정'}</div>
                                        <div className='reply-comment-divider'>{'\|'}</div>
                                        <div className='reply-delete-comment-text-button'>{'삭제'}</div>
                                    </div>
                                </div>
                                <div className='reply-comment-box'>
                                    <div className='reply-comment'>{'그리고인터닛에 쳐봣는디 이거 ㄹㅇㄹㅇ 진짜팩트냐?? 저적이 보루토에 나오는 신급괴물임?ㅡ 나루토사스케 합체한거봐라 진짜 ㅆㅂ 이거보고 개충격먹어가지고 와 소리 저절로 나오더라 ;; 진짜 저건 개오지는데.. 저게 ㄹㅇ이면 진짜 꼭봐야돼 진짜 세계도 파괴시키는거아니야 .. 와 진짜 나루토사스케가 저렇게 되다니 진짜 눈물나려고했다.. 버루토그라서 계속보는중인데 저거 ㄹㅇ이냐..? 하.. ㅆㅂ 사스케 보고싶다..  진짜언제 이렇게 신급 최강들이 되었을까 옛날생각나고 나 중딩때생각나고 뭔가 슬프기도하고 좋기도하고 감격도하고 여러가지감정이 복잡하네.. 아무튼 나루토는 진짜 애니중최거명작임...'}</div>
                                </div>
                            </div>
                        </div>
                        <div className='reply-comment-input-box'>
                            <div className='reply-comment-input-container'>
                                <textarea form='reply-textarea' placeholder='답글을 작성해주세요.' maxLength={300}/></div>
                                <div className='reply-comment-button'><button>{'등록'}</button></div>
                        </div>
                    </div>
                );
            };
                
//          render: 요리후기 렌더링          //
    return (
        <div id='cooking-review-wrapper'>
            <div className='cooking-review-container'>
                <div className='cooking-review-title-box'>
                    <div className='cooking-review-title'>{'요리 후기'}</div>
                </div>
                <div className='cooking-review-host-container'>
                    <div className='cooking-review-host-profile-box'>
                        <div className='reviewer-profile-image' onClick={onUserMyPageButtonClickHandler} ></div>
                        <div className='comment-more-button-box'>
                            <div className='comment-text' onClick={onReplyeCommnetsOpenButtonClickHandler}>{'답글'}
                                <div className='comments-count'>{'0'}</div>
                            </div>                
                        </div>
                    </div>
                    <div className='cooking-reviewer-write-info-container'>
                        <div className='cooking-reviewer-write-info-box'>
                            <div className='cooking-review-host-nickname-and-datetime-box'>
                                <div className='cooking-review-host-reviewer-nickname' onClick={onUserMyPageButtonClickHandler} >{'닉네임'}</div>
                                <div className='cooking-review-host-reviewer-write-datetime'>{'0000-00-00 00:00:00'}</div>
                            </div>
                            <div className='cooking-review-host-reviewer-stars-image-box'>
                                <div className='cooking-review-host-reviewer-star'></div>
                                <div className='cooking-review-host-reviewer-star'></div>
                                <div className='cooking-review-host-reviewer-star'></div>
                                <div className='cooking-review-host-reviewer-star'></div>
                                <div className='cooking-review-host-reviewer-star'></div>
                            </div>
                            <div className='comment-edit-box'>
                                <div className='update-comment-text-button' onClick={onCookingReviewCommentChangeButtonClickHandler}>{'수정'}</div>
                                <div className='comment-divider'>{'\|'}</div>
                                <div className='delete-comment-text-button'>{'삭제'}</div>
                            </div>
                        </div>
                        <div className='write-comment-container'>
                            <div className='reviewer-write-comment'>{'미안하다 이거 보여주려고 어그로끌었다.. 나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다.. 그찐따같던 나루토가 맞나? 진짜 나루토는 전설이다..진짜옛날에 맨날나루토봘는데 왕같은존재인 호카게 되서 세계최강 전설적인 영웅이된나루토보면 진짜내가다 감격스럽고 나루토 노래부터 명장면까지 가슴울리는장면들이 뇌리에 스치면서 가슴이 웅장해진다.. 그리고 극장판 에 카카시앞에 운석날라오는 거대한 걸 사스케가 갑자기 순식간에 나타나서 부숴버리곤 개간지나게 나루토가 없다면 마을을 지킬 자는 나밖에 없다 라며 바람처럼 사라진장면은 진'}</div>
                            <div className='reviewer-write-photo'></div>
                        </div>
                        </div>
                    </div>
                {replyCommentsOpen ? <Reply /> : <></>}
                </div>
            <div > </div>
            <div className='review-comment-input-container'>
                <div className='review-comment-input-box'>
                    <div className='review-star-selection-box'>
                        <div className='selected-star-container'>
                            <div className='selected-star-box'>
                                <StarComponent score={selectScore} />
                            </div>
                            <div className='select-star-button' onClick={onSelectStarButtonClickHandler}></div>
                        </div>
                        {selectStarView && (
                            <div className='select-star-container'>
                            <div className='select-star-box' onClick={() => onScoreClickHandler(5)}>
                                <StarComponent score={5} />
                            </div>
                            <div className='select-star-box' onClick={() => onScoreClickHandler(4)}>
                                <StarComponent score={4} />
                            </div>
                            <div className='select-star-box' onClick={() => onScoreClickHandler(3)}>
                                <StarComponent score={3} />
                            </div>
                            <div className='select-star-box' onClick={() => onScoreClickHandler(2)}>
                                <StarComponent score={2} />
                            </div>
                            <div className='select-star-box' onClick={() => onScoreClickHandler(1)}>
                                <StarComponent score={1} />
                            </div>
                        </div>
                        )}
                        <AddPhotos />
                    </div>
                    <div className='review-comment-input-box'>
                        <textarea ref={textareaRef} value={comment} form='comment-textarea' placeholder='후기를 작성해주세요.' spellCheck='false' />
                    </div>
                    <div className='review-comment-input-button-box' onClick={onCookingReviewCommentButtonClickHandler}><button>{'등록'}</button></div>
                </div>
            </div>
            <div className='cooking-review-comment-pagination-container'>
                <div className='cooking-review-comment-pagination'>
                    <Pagination 
                    currentPageNumber={currentPageNumber}
                    currentSectionNumber={currentSectionNumber}
                    setCurrentPageNumber={setCurrentPageNumber}
                    setCurrentSectionNumber={setCurrentSectionNumber}
                    totalSection={totalSection}
                    viewPageNumberList={viewPageNumberList}/>
                </div>
            </div>
        </div>
    );
};

    return (
        <>
        <CookingReviews />
        </>
    );
};
