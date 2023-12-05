import Pagination from 'components/Pagination';
import { usePagination } from 'hooks';
import React, { ChangeEvent, useRef, useState } from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom';
import Modals from 'components/Modals';
// import dayjs from 'dayjs';
import CookingReviewCommentsListItem from 'Types/cooking-review-comments-list.interface';
import { SIGN_IN_PATH } from 'constant';

//          interface: 게시물 상세보기 요리 후기 댓글 리스트 아이템 컴포넌트 Props          //
interface Props {

    boardNumber : string | undefined;

}

//          component: 게시물 상세보기 요리 후기 댓글 컴포넌트          //
export default function CookingReviewComments({boardNumber}: Props) {

    //          state: 리뷰 상태           //
    const [ reviews, setReviews ] = useState<number>(0);

    //          state: 별점 상태           //
    const [selectStarView, setSelectStarView] = useState<boolean>(false);
    const [selectScore, setSelectScore] = useState<number>(5);
    //          state: 답글 등록 버튼 상태           //
    const [replycommentButton, setReplyCommentButton] = useState<boolean>(false);
    //          state: 요리후기 리스트 페이지네이션 상태          //
    const {currentPageNumber, setCurrentPageNumber, currentSectionNumber, 
        setCurrentSectionNumber, viewPageNumberList, totalSection} 
        = usePagination<string>(3);
    //          state: 요리후기 답글 보기 상태          //
    const [replyCommentsOpen, setReplyCommentsOpen] = useState<boolean>(false);

    //          state: modal 상태          //
    const [modal , setModal] = useState<boolean>(false);
    //          state: modal image 상태          //
    const [modalImage , setModalImage] = useState<string>('');

    //          function: 네비게이트 함수          //
    const navigator = useNavigate();

    // //          function: 작성일 경과시간 함수          //
    // const getElapsedTime = () => {
    //     const now = dayjs().add(9, 'hour');
    //     const writeTime = dayjs();

    //     const gap = now.diff(writeTime, 's');
    //     if (gap < 60) return `${gap}초 전`;
    //     if (gap < 3600) return `${Math.floor(gap/60)}분 전`;
    //     if (gap < 86400) return `${Math.floor(gap/3600)}시간 전`;
    //     return `${Math.floor(gap/86400)}일 전`;
    // };
    // //          function: 작성일 포멧 변경 함수          //
    // const getWriteDatetimeFormat = (writeDatetime: string | undefined) => {
    //     if (!writeDatetime) return '';
    //     const date = dayjs(writeDatetime);
    //     return date.format('YYYY. MM. DD HH:mm:ss');
    //   };
        
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

    //          component: 사진 추가 컴포넌트          //
    const AddPhotos = () => {
        //                  state: 요리후기 사진 상태                 //
        const [addPhotos, setAddPhotos] = useState<string>("");
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
                    onChange={onAddPhotosFileUpdateChangeHabdler}
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

    //          component: 답글 컴포넌트          //
        const Reply = () => {

            //          state: 답글 후기 수정 텍스트 영역 ref 상태          //
            const replyCommentUpdateTextAreaRef = useRef<HTMLTextAreaElement | null>(null);
            //          state: 답글 수정 입력 상태          //
            const [replyCommentUpdateInput, setReplyCommentUpdateInput] = useState<string>('');
            //          state: 답글 수정 버튼 상태          //
            const [replyCommentUpdate, setReplyCommentUpdate] = useState<boolean>(false);

            //           event handler: 요리후기 답글 수정 버튼 클릭 이벤트 처리          //
            const onCookingReviewReplyCommentChangeButtonClickHandler = () => {
                setReplyCommentUpdate(!replyCommentUpdate);
            }
            //           event handler: 요리후기 답글 입력 버튼 클릭 이벤트 처리          //
            const onCookingReviewReplyCommentClickButtonClickHandler = () => {
                setReplyCommentUpdate(false);
            }
            //           event handler: 요리후기 답글 내용 변경 이벤트 처리          //
            const onReplyCommentChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
                const replyCommentUpdateInput = event.target.value;
                setReplyCommentUpdateInput(replyCommentUpdateInput);
                if (!replyCommentUpdateTextAreaRef.current) return;
                replyCommentUpdateTextAreaRef.current.style.height = 'height: 90px';
            }
        //          render: 게시물 상세보기 페이지 요리후기 답글 렌더링          //
            return(
                <div className='board-writer-container'>
                    <div className='board-writer-box'>
                        <div className='board-writer-profile-image' onClick={onUserMyPageButtonClickHandler} ></div>
                        <div className='board-writer'>
                            <div className='board-writer-nickname-and-datetime-container'>
                                <div className='board-writer-nickname-and-datetime-box'>
                                    <div className='board-writer-nickname' onClick={onUserMyPageButtonClickHandler} >{'닉네임닉네임닉네임'}</div>
                                    <div className='board-writer-datetime'>{"getElapsedTime()"}</div>
                                </div>
                                <div className='reply-comment-edit-box'>
                                    <div className='reply-update-comment-text-button' onClick={onCookingReviewReplyCommentChangeButtonClickHandler}>{'수정'}</div>
                                    <div className='reply-comment-divider'>{'\|'}</div>
                                    <div className='reply-delete-comment-text-button'>{'삭제'}</div>
                                </div>
                            </div>
                            <div className='reply-comment-box'>
                                {replyCommentUpdate ? (
                                <div className='reply-comment-input-box'>
                                <div className='reply-comment-input-container'>
                                    <textarea ref={replyCommentUpdateTextAreaRef} form='reply-textarea' placeholder='답글을 작성해주세요.' maxLength={300} spellCheck={false} value={replyCommentUpdateInput} onChange={onReplyCommentChangeHandler} /></div>
                                    <div className='reply-comment-button' onClick={onCookingReviewReplyCommentClickButtonClickHandler}><button>{'등록'}</button></div>
                                </div>
                                ) : (
                                    <div className='reply-comment'>{'그리고인터닛에 쳐봣는디 이거 ㄹㅇㄹㅇ 진짜팩트냐?? 저적이 보루토에 나오는 신급괴물임?ㅡ 나루토사스케 합체한거봐라 진짜 ㅆㅂ 이거보고 개충격먹어가지고 와 소리 저절로 나오더라 ;; 진짜 저건 개오지는데.. 저게 ㄹㅇ이면 진짜 꼭봐야돼 진짜 세계도 파괴시키는거아니야 .. 와 진짜 나루토사스케가 저렇게 되다니 진짜 눈물나려고했다.. 버루토그라서 계속보는중인데 저거 ㄹㅇ이냐..? 하.. ㅆㅂ 사스케 보고싶다..  진짜언제 이렇게 신급 최강들이 되었을까 옛날생각나고 나 중딩때생각나고 뭔가 슬프기도하고 좋기도하고 감격도하고 여러가지감정이 복잡하네.. 아무튼 나루토는 진짜 애니중최거명작임...'}</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            );
        };


//          component: 요리 후기 컴포넌트          //
const CookingReviews = () => {        

    //          state: 리뷰작성자 후기 수정 텍스트 영역 ref 상태          //
    const reviewUpdateTextAreaRef = useRef<HTMLTextAreaElement | null>(null);
    //          state: 후기 텍스트 영역 ref 상태          //
    const commentsTextAreaRef = useRef<HTMLTextAreaElement | null>(null);
    //          state: 댓글 상태          //
    const [comment, setComment] = useState<string>('');
    //          state: 댓글 수정 입력 상태          //
    const [reviewUpdate, setReviewUpdate] = useState<string>('');
    //          state: 댓글 수정 상태          //
    const [reviewCommentsUpdate, setReviewCommentsUpdate] = useState<boolean>(false);

    let image = 'https://recipe1.ezmember.co.kr/cache/recipe/2019/01/01/e27d9f69e78aeeb9d703ec365d86cd871.jpg'

    //          event handler: 이미지 모달 버튼 클릭 이벤트 처리 함수          //
    const onPhotoClickHandler = (image: string) => {
        setModalImage(image);
        setModal(true);
    }

    //           event handler: 요리후기 댓글 수정 버튼 이벤트 처리          //
    const onCookingReviewCommentChangeButtonClickHandler = () => {
        setReviewCommentsUpdate(!reviewCommentsUpdate);
    }
    //           event handler: 요리후기 댓글 수정 입력 이벤트 처리          //
    const onUpdateComment = () => {
        setReviewCommentsUpdate(false);
    }

    //           event handler: 요리후기 댓글 내용 변경 이벤트 처리          //
    const onCommentChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const comment = event.target.value;
        setComment(comment);
        if (!commentsTextAreaRef.current) return;
        commentsTextAreaRef.current.style.height = 'height: 90px';
    }
    //           event handler: 요리후기 작성 유저 확인 이벤트 처리          //
    const onSaveButtonClickHandler = () => {
        // TODO: API 쿠키 연결띠
        if (window.confirm("로그인을 하신 후 이용해 주시기 바랍니다.")) {
          navigator(SIGN_IN_PATH)
        }
    }
    //           event handler: 요리후기 수정 댓글 내용 변경 이벤트 처리          //
    const onReviewUpdateChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const reviewUpdate = event.target.value;
        setReviewUpdate(reviewUpdate);
        if (!reviewUpdateTextAreaRef.current) return;
        reviewUpdateTextAreaRef.current.style.height = 'height: 90px';
    }

    //          render: 요리후기 렌더링          //
    return (
        <div id='cooking-review-wrapper'>
            <div className='cooking-review-container'>
                <div className='cooking-review-title-box'>
                    <div className='cooking-review-title'>{'요리 후기'}</div>
                </div>
                {reviews === 0 ? (
                    <div className='no-cooking-review-state-box'>
                        <div className='no-registered-text'>{'등록된 요리 후기가 없습니다.'}</div>
                    </div>
                ) : (
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
                                <div className='cooking-review-host-reviewer-write-datetime'>{"getElapsedTime()"}</div>
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
                            {reviewCommentsUpdate ? (
                                <>
                                <div className='box'>
                                    <AddPhotos />
                                </div>
                                <div className='review-comment-input-box'>
                                    <textarea ref={reviewUpdateTextAreaRef} className='update-review-comments-text-button-textarea' placeholder='수정할 내용을 작성해 주세요.' spellCheck={false} value={reviewUpdate} onChange={onReviewUpdateChangeHandler} />
                                    <div className='review-comment-input-button-box' onClick={onUpdateComment}><button>수정 완료</button></div>
                                </div>
                                </>
                            ) : (
                                <>
                                <div className='reviewer-write-comment'>{'미안하다 이거 보여주려고 어그로끌었다.. 나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다.. 그찐따같던 나루토가 맞나? 진짜 나루토는 전설이다..진짜옛날에 맨날나루토봘는데 왕같은존재인 호카게 되서 세계최강 전설적인 영웅이된나루토보면 진짜내가다 감격스럽고 나루토 노래부터 명장면까지 가슴울리는장면들이 뇌리에 스치면서 가슴이 웅장해진다.. 그리고 극장판 에 카카시앞에 운석날라오는 거대한 걸 사스케가 갑자기 순식간에 나타나서 부숴버리곤 개간지나게 나루토가 없다면 마을을 지킬 자는 나밖에 없다 라며 바람처럼 사라진장면은 진'}</div>
                                <div className='reviewer-write-photo' style={{ backgroundImage: `url(${image})` }} onClick={() => onPhotoClickHandler(image)}></div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                )}
                {replyCommentsOpen ? <Reply /> : <></>}
                </div>
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
                        <textarea ref={commentsTextAreaRef} value={comment} placeholder='후기를 작성해주세요.' spellCheck='false' onChange={onCommentChangeHandler} onClick={onSaveButtonClickHandler} />
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
        <div></div>
        {modal && <Modals image={modalImage} setModal={setModal} />}
        </>
    );
};
