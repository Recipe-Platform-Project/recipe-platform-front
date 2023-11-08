import React, { useRef, useState } from 'react'
import "./style.css"
import CookingReviewComments from 'components/Reviewcomments';
import Comments from 'components/Comments';
import { useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player';
import Steps from 'components/Steps';
import Modals from 'components/Modals';





//          component: 게시물 상세보기 페이지          //
export default function RecipeDetail() {
    
    //          state: 로그인 유저 상태          //
    
    //          state: cookie 상태          //

    //          state: 구독 상태          //
    const [subscription, setSubscription] = useState<boolean>(false);
    
    //          function: 네비게이트 함수          //
    const navigator = useNavigate();

    //          event handler: 구독 버튼 클릭 이벤트 처리 함수          //
    const onSubscriptionClickHandler = () => {
        setSubscription(!subscription);
    };
    
    //           event handler: user 마이페이지 페이지 이동 버튼 클릭 이벤트 처리          //
    const onUserMyPageButtonClickHandler = () => {
        navigator('/user/')
    }
    
//          render: 게시물 상세보기 페이지 상단 렌더링          //
const RecipeInfo = () => {
    return (
    <div id='recipe-detail-wrapper'>
        <div className='recipe-detail-box'>
            <div className='recipe-detail-food-image'>
                <div className='recipe-detail-write-info-box'>
                    <div className='recipe-detail-writer-profile-image' onClick={onUserMyPageButtonClickHandler}></div>
                    <div className='nickname-follow-box'>
                        <div className='recipe-detail-writer-nickname' onClick={onUserMyPageButtonClickHandler} >{'닉네임'}</div>
                        <div onClick={onSubscriptionClickHandler}>
                        {subscription ? (
                        <div className="chef-list-center-bottom-subscription-on">
                            {"구독중"}
                        </div>
                        ) : (
                        <div className="chef-list-center-bottom-subscription">
                            {"구독하기"}
                        </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='recipe-detail-title-box'>
                <div className='recipe-detail-title'>{'오늘 점심은 미역국으로 정했지만 사실 비빔밥이지'}</div>
                <div className='recipe-detail-introduction-cooking'>{'진짜 저건 개오지는데.. 저게 ㄹㅇ이면 진짜 꼭봐야돼 진짜 세계도 파괴시키는거아니야 .. 와 진짜 나루토사스케가 저렇게 되다니 진짜 눈물나려고했다.. 버루토그라서 계속보는중인데 저거 ㄹㅇ이냐..? 하.. ㅆㅂ 사스케 보고싶다..  진짜언제 이렇게 신급 최강들이 되었을까 옛날생각나고 나 중딩때생각나고 뭔가 슬프기도하고 좋기도하고 감격도하고 여러가지감정이 복잡하네.. 아무튼 나루토는 진짜 애니중최거명작임.'}</div>
            </div>
                <div className='cooking-info-container'>
                    <div className='servings-image-box'>
                        <div className='servings-image'></div>
                        <div className='servings-text'>{'1인분'}</div>
                    </div>
                <div className='cooking-time-box'>
                    <div className='cooking-time-image'></div>
                    <div className='cooking-time-text'>{'10분'}</div>
                </div> 
                <div className='cooking-level-box'>
                    <div className='cooking-level-image'></div>
                    <div className='cooking-level-text'>{'아무나'}</div>
                </div>
            </div>
        </div>
    </div>
    );
};

//          render: 게시물 상세보기 페이지 재료 렌더링          //
const Ingredients = () => {
    return (
        <div id='ingredients-wrapper'>
            <div className='ingredients-box'>
                <div className='ingredients-title'>{'재료'}
                    <div className='ingredients-sub-title'>{'Ingredients'}</div>
                </div>
                <div className='ingredients-cooking-container'>
                    <div className='ingredients-cooking-box'>
                        <div className='ingredients-cooking-name'>{'라면'}</div>
                        <div className='ingredients-cooking-number'>{'1개'}</div>
                    </div>
                    <div className='ingredients-cooking-box'>
                        <div className='ingredients-cooking-name'>{'라면'}</div>
                        <div className='ingredients-cooking-number'>{'1개'}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

//          render: 게시물 상세보기 페이지 동영상 렌더링          //
const Video = () => {
    return (
        <div id='video-wrapper'>
            <div className='video-box'>
                <div className='video-title'>{'동영상'}
                    <div className='video-sub-title'>{'video'}</div>
                </div>
                <div className='video-thumbnail-container'>
                    <div className='video-thumbnail'>
                        <ReactPlayer url={'https://www.youtube.com/watch?v=2sUjx8PE_vg'}
                        width={'750px'} height={'400px'}
                        controls={true}
                        />  
                    </div>
                </div>
            </div>
        </div>
    );
};

//          render: 게시물 상세보기 페이지 조리순서 렌더링          //
// const Steps = () => {
//     return (
//         <div id='steps-wrapper'>
//             <div className='steps-box'>
//                 <div className='steps-title-box'>
//                     <div className='steps-title'>{'조리순서'}
//                         <div className='steps-sub-title'>{'Steps'}</div>
//                     </div>
//                 </div>
//                 <div className='view-image-box'>
//                     <div className='view-image-small'></div>
//                     <div className='view-text-image'></div>
//                 </div>
//             </div>
//             <div className='steps-sequence-box'>
//                 <div className='sequence-number'>{'1'}</div>
//                 <div className='sequence-content'>{'미안하다 이거 보여주려고 어그로끌었다.. 나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다.. 그찐따같던 나루토가 맞나? 진짜 나루토는 전설이다..진짜옛날에 맨날나루토봘는데 왕같은존재인 호카게 되서 세계최강 전설적인 영웅이된나루토보면 진짜내가다 감격스럽고'}</div>
//                 <div className='sequence-image'></div>
//             </div>
//             <div className='steps-tip-box'>
//                 <div className='steps-tip-image'></div>
//                 <div className='steps-tip-comment'>{'나루토 노래부터 명장면까지 가슴울리는장면들이 뇌리에 스치면서 가슴이 웅장해진다.. '}</div>
//             </div>
//         </div>
//     );
// };

//          render: 게시물 상세보기 페이지 레시피작성자 렌더링          //
const RecipeWriter = () => {
    return (
        <div id='reciper-writer-wrapper'>
            <div className='reciper-writer-box'>
                <div className='reciper-writer-title-box'>
                    <div className='reciper-writer-title'>{'레시피 작성자'}
                        <div className='reciper-writer-sub-title'>{'About the writer'}</div>
                    </div>
                </div>
            </div>
                <div className='reciper-writer-profile-container'>
                    <div className='reciper-writer-profile-image' onClick={onUserMyPageButtonClickHandler} ></div>
                    <div className='reciper-writer-profile-box'>
                        <div className='recipe-writer-profile-view'>
                            <div className='reciper-writer-profile-nickname' onClick={onUserMyPageButtonClickHandler} >{'닉네임닉네임닉네임닉네임'}</div>
                            <div onClick={onSubscriptionClickHandler}>
                            {subscription ? (
                            <div className="chef-list-center-bottom-subscription-on">
                                {"구독중"}
                            </div>
                            ) : (
                            <div className="chef-list-center-bottom-subscription">
                                {"구독하기"}
                            </div>
                            )}
                            </div>
                        </div>
                            <div className='reciper-writer-profile-content'>{'그리고 극장판 에 카카시앞에 운석날라오는 거대한 걸 사스케가 갑자기 순식간에 나타나서 부숴버리곤 개간지나게 나루토가 없다면 마을을 지킬 자는 나밖에 없다 라며 바람처럼 사라진장면은 진짜 나루토처음부터 본사람이면 안울수가없더라 진짜 너무 감격스럽고 보루토를 최근에 알았는데 미안하다.. '}</div>
                    </div>
                </div>
        </div>
    );
};

//          render: 게시물 상세보기 페이지 요리완성 사진 렌더링          //
const PhotoReview = () => {
    return (
        <div id='photo-review-wrapper'>
            <div className='photo-review-title-box'>
                <div className='photo-review-title'>{'요리 완성 사진'}
                    <div className='photo-review-sub-title'>{'Finished Cooking Photo'}</div>
                </div>
            </div>
            <div className='photo-review-container'>
                <div className='photo-review-box'>
                    <div className='revie-photo'></div>
                    <div className='revie-photo'></div>
                    <div className='revie-photo'></div>
                    <div className='revie-photo'></div>
                    <div className='revie-photo'></div>
                </div>
            </div>
        </div>
    );
};


//          component: 게시물 상세보기 페이지 최근본 게시물 컴포넌트          //

//                  render: 메인 페이지 렌더링                  //
  return (
    <>
    <RecipeInfo />
    <div ></div>
    <Ingredients />
    <div></div>
    <Video />
    <div></div>
    <Steps />
    <div></div>
    <PhotoReview /> 
    <div></div>
    <Modals/>
    <div></div>
    <RecipeWriter /> 
    <div></div>
    <CookingReviewComments />
    <div></div>
    <Comments />
    <div></div>
    </>
  );
};