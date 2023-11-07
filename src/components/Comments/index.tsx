import React, { useState } from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom';


//          component: 댓글           //
export default function Comments() {

//          state: 댓글 보기 상태          //
const [commentsListOpen, setCommentsListOpen] = useState<boolean>(false);
//          state: 댓글 수정 상태          //
const [commentUpdate, setCommentUpdate] = useState<boolean>(false);

//          function: 네비게이트 함수          //
const navigator = useNavigate();
    
//           event handler: user 마이페이지 페이지 이동 버튼 클릭 이벤트 처리          //
const onUserMyPageButtonClickHandler = () => {
    navigator('/user/')
}

//           event handler: 댓글 보기 버튼 클릭 이벤트 처리          //
const onCommentsButtonOpenClickHandler = () => {
  setCommentsListOpen(!commentsListOpen);
}
//           event handler: 댓글 수정 버튼 클릭 이벤트 처리          //
const onCommentUpdateButtonClickHandler = () => {
  setCommentUpdate(!commentUpdate);
}

//          render: 게시물 상세보기 페이지 대댓글 렌더링          //
  const CommentsReply = () => {
    return(
        <div className='comments-reply-container'>
            <div className='comments-reply-box'>
              <div className='comments-reply-writer-profile-image-box'>
                <div className='comments-reply-writer-profile-image' onClick={onUserMyPageButtonClickHandler}></div>
              </div>
                <div className='comments-reply-writer'>
                    <div className='comments-reply-writer-nickname-and-datetime-container'>
                        <div className='comments-reply-writer-nickname-and-datetime-box'>
                            <div className='comments-reply-writer-nickname' onClick={onUserMyPageButtonClickHandler} >{'닉네임닉네임닉네임'}</div>
                            <div className='comments-reply-writer-datetime'>{'2023-10-31 11:13'}</div>
                        </div>
                        <div className='comments-reply-comment-edit-box'>
                            <div className='comments-reply-update-comment-text-button' onClick={onCommentUpdateButtonClickHandler}>{'수정'}</div>
                            <div className='comments-reply-comment-divider'>{'\|'}</div>
                            <div className='comments-reply-delete-comment-text-button'>{'삭제'}</div>
                        </div>
                    </div>
                    <div className='comments-reply-comment-box'>
                        <div className='comments-reply-comment'>{'그리고인터닛에 쳐봣는디 이거 ㄹㅇㄹㅇ 진짜팩트냐?? 저적이 보루토에 나오는 신급괴물임?ㅡ 나루토사스케 합체한거봐라 진짜 ㅆㅂ 이거보고 개충격먹어가지고 와 소리 저절로 나오더라 ;; 진짜 저건 개오지는데.. 저게 ㄹㅇ이면 진짜 꼭봐야돼 진짜 세계도 파괴시키는거아니야 .. 와 진짜 나루토사스케가 저렇게 되다니 진짜 눈물나려고했다.. 버루토그라서 계속보는중인데 저거 ㄹㅇ이냐..? 하.. ㅆㅂ 사스케 보고싶다..  진짜언제 이렇게 신급 최강들이 되었을까 옛날생각나고 나 중딩때생각나고 뭔가 슬프기도하고 좋기도하고 감격도하고 여러가지감정이 복잡하네.. 아무튼 나루토는 진짜 애니중최거명작임...'}</div>
                    </div>
                </div>
            </div>
            <div className='comments-reply-comment-input-box'>
                <div className='comments-reply-comment-input-container'>
                    <textarea form='comments-reply-textarea' placeholder='답글을 작성해주세요.'maxLength={300} /></div>
                <div className='comments-reply-comment-button'><button>{'등록'}</button></div>
            </div>
        </div>
    );
};

//          render: 게시물 상세보기 페이지 댓글 렌더링          //
  const WriteComments = () => {
    return (
      <div id='comments-wrapper'>
        <div className='comments-container'>
          <div className='comments-box'>
            <div className='comments-title-box'>
              <div className='comments-title'>{'댓글'}</div>
            </div>
        </div>
        <div className='comments-host-container'>
        <div className='comments-host-profile-box'>
            <div className='comments-writer-profile-image' onClick={onUserMyPageButtonClickHandler} ></div>
            <div className='comments-more-button-box'>
                <div className='comments-text' onClick={onCommentsButtonOpenClickHandler}>{'댓글'}
                    <div className='comments-counts'>{'0'}</div>
                </div>                
            </div>
        </div>
          <div className='comments-writer-info-container'>
              <div className='comments-writer-info-box'>
                  <div className='comments-writer-host-nickname-and-datetime-box'>
                      <div className='comments-writer-host-reviewer-nickname' onClick={onUserMyPageButtonClickHandler} >{'닉네임'}</div>
                      <div className='comments-writer-host-reviewer-write-datetime'>{'0000-00-00 00:00:00'}</div>
                  </div>
                  <div className='comments-edit-box'>
                      <div className='update-comments-text-button' onClick={onCommentUpdateButtonClickHandler}>{'수정'}</div>
                      <div className='comment-divider'>{'\|'}</div>
                      <div className='delete-comments-text-button'>{'삭제'}</div>
                  </div>
              </div>
              <div className='write-comments-container'>
                  <div className='comments-writer-comment'>{'미안하다 이거 보여주려고 어그로끌었다.. 나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다.. 그찐따같던 나루토가 맞나? 진짜 나루토는 전설이다..진짜옛날에 맨날나루토봘는데 왕같은존재인 호카게 되서 세계최강 전설적인 영웅이된나루토보면 진짜내가다 감격스럽고 나루토 노래부터 명장면까지 가슴울리는장면들이 뇌리에 스치면서 가슴이 웅장해진다.. 그리고 극장판 에 카카시앞에 운석날라오는 거대한 걸 사스케가 갑자기 순식간에 나타나서 부숴버리곤 개간지나게 나루토가 없다면 마을을 지킬 자는 나밖에 없다 라며 바람처럼 사라진장면은 진'}</div>
              </div>
            </div>
          </div>
          {commentsListOpen ? <CommentsReply/> : <></>}
        </div>
        <div className='comments-reply-comment-input-box'>
                <div className='comments-reply-comment-input-container'>
                    <textarea form='comments-reply-textarea' placeholder='답글을 작성해주세요.'maxLength={300} /></div>
                <div className='comments-reply-comment-button'><button>{'등록'}</button></div>
            </div>
      </div>
    );
  };


  return (
    <>
    <WriteComments />
    </>
  );
};
