import React, { useRef, useState, useEffect } from 'react'
import "./style.css"
import CookingReviewComments from 'components/Reviewcomments';
import Comments from 'components/Comments';
import { useNavigate, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Steps from 'components/Steps';
import Modals from 'components/Modals';
import LatelyRecipe from 'components/LatelyListItem';
import { boardDetailItemMock, materialItemMock } from 'mocks';



//          component: 게시물 상세보기 페이지          //
export default function BoardDetail() {

    //          state: 게시물 번호 path variable 상태          //
    const { boardNumber } = useParams();
    //          state: 로그인 유저 상태          //
    
    //          state: cookie 상태          //

    //          state: 구독 상태          //
    const [subscription, setSubscription] = useState<boolean>(false);
    //          state: 좋아요 상태          //
    const [favorite, setFavorite] = useState<boolean>(false);

    //          state: modal 상태          //
    const [modal , setModal] = useState<boolean>(false);
    //          state: modal image 상태          //
    const [modalImage , setModalImage] = useState<string>('');
    
    //          function: 네비게이트 함수          //
    const navigator = useNavigate();

    //          event handler: 구독 버튼 클릭 이벤트 처리 함수          //
    const onSubscriptionClickHandler = () => {
        setSubscription(!subscription);
    };

    //          event handler: 좋아요 버튼 클릭 이벤트 처리 함수          //
    const onFavoriteButtonHandler = () => {
        setFavorite(!favorite);
    };
    
    //           event handler: user 마이페이지 페이지 이동 버튼 클릭 이벤트 처리          //
    const onUserMyPageButtonClickHandler = () => {
        // navigator(USER_RECIPE(email));
    }
    
//          render: 게시물 상세보기 페이지 상단 렌더링          //
const RecipeInfo = () => {
    return (
    <div id='recipe-detail-wrapper'>
        <div className='recipe-detail-box'>
            <div className='recipe-detail-food-image' style={{ backgroundImage: `url(${boardDetailItemMock.boardMainImage})` }}>
                <div className='view-counte-box'>
                    <div className='view-counte-container'>
                    <div className='view-counte-icon'></div>
                    <div className='view-counte-number'>{`${boardDetailItemMock.viewCount}`}</div>
                    </div>
                </div>
                <div className='recipe-detail-write-info-box'>
                    <div className='recipe-detail-writer-profile-image' style={{ backgroundImage:`url(${boardDetailItemMock.writerProfileImage})` }} onClick={onUserMyPageButtonClickHandler} ></div>
                    <div className='nickname-follow-box'>
                        <div className='recipe-detail-writer-nickname' onClick={onUserMyPageButtonClickHandler} >{boardDetailItemMock.writerNickname}</div>
                        <div onClick={onSubscriptionClickHandler}>
                        {subscription ? (
                        <div className="chef-list-center-bottom-subscription-on">
                            {`구독중`}
                        </div>
                        ) : (
                        <div className="chef-list-center-bottom-subscription">
                            {`구독하기`}
                        </div>
                        )}
                        </div>
                        <div onClick={onFavoriteButtonHandler}>
                            {favorite ? (
                                <div className='favorite-button-on'></div>
                            ) : (
                                <div className='favorite-button-off'></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='recipe-detail-title-box'>
                <div className='recipe-detail-title'>{`${boardDetailItemMock.title}`}</div>
                <div className='recipe-detail-introduction-cooking'>{`${boardDetailItemMock.introduce}`}</div>
            </div>
                <div className='cooking-info-container'>
                    <div className='servings-image-box'>
                        <div className='servings-image'></div>
                        <div className='servings-text'>{`${boardDetailItemMock.peopleCount}`}</div>
                    </div>
                <div className='cooking-time-box'>
                    <div className='cooking-time-image'></div>
                    <div className='cooking-time-text'>{`${boardDetailItemMock.requiredTime}`}</div>
                </div> 
                <div className='cooking-level-box'>
                    <div className='cooking-level-image'></div>
                    <div className='cooking-level-text'>{`${boardDetailItemMock.difficulty}`}</div>
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
                <div className='material-container'>
                    <div className='ingredients-cooking-container'>
                        <div className='ingredients-cooking-title-material-box'>
                            <div className='ingredients-cooking-title-material'>{`[${materialItemMock.materialCategory}]`}</div>
                        </div>
                        <div className='ingredients-cooking-box'>
                            <div className='ingredients-cooking-name'>{`${materialItemMock.materials}`}</div>
                            <div className='ingredients-cooking-number'>{`${materialItemMock.measurement}`}</div>
                        </div>
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
                        <ReactPlayer url={`${boardDetailItemMock.videoLink}`}
                        width={'750px'} height={'400px'}
                        controls={true}
                        />  
                    </div>
                </div>
            </div>
        </div>
    );
};

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
                    <div className='reciper-writer-profile-image' style={{ backgroundImage:`url(${boardDetailItemMock.writerProfileImage})` }} onClick={onUserMyPageButtonClickHandler} ></div>
                    <div className='reciper-writer-profile-box'>
                        <div className='recipe-writer-profile-view'>
                            <div className='reciper-writer-profile-nickname' onClick={onUserMyPageButtonClickHandler} >{`${boardDetailItemMock.writerNickname}`}</div>
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

    let image = 'https://blog.kakaocdn.net/dn/kJ7EZ/btrCdIcjWcp/2bqeLRfoKbFfbm7nPGt0hk/img.jpg';

    //          event handler: 이미지 모달 버튼 클릭 이벤트 처리 함수          //
    const onPhotoClickHandler = (image: string) => {
        setModalImage(image);
        setModal(true);
    }

    return (
        <div id='photo-review-wrapper'>
            <div className='photo-review-title-box'>
                <div className='photo-review-title'>{'요리 완성 사진'}
                    <div className='photo-review-sub-title'>{'Finished Cooking Photo'}</div>
                </div>
            </div>
            <div className='photo-review-container'>
                <div className='photo-review-box'>
                    <div className='review-photo' style={{ backgroundImage: `url(${image})` }} onClick={() => onPhotoClickHandler(image)}></div>
                    <div className='review-photo' style={{ backgroundImage: `url(${image})` }} onClick={() => onPhotoClickHandler(image)}></div>
                    <div className='review-photo' style={{ backgroundImage: `url(${image})` }} onClick={() => onPhotoClickHandler(image)}></div>
                    <div className='review-photo' style={{ backgroundImage: `url(${image})` }} onClick={() => onPhotoClickHandler(image)}></div>
                    <div className='review-photo' style={{ backgroundImage: `url(${image})` }} onClick={() => onPhotoClickHandler(image)}></div>
                </div>
            </div>
        </div>
    );
};

useEffect((
    // setBoard();
) => {}, [boardNumber]);

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
    {modal && <Modals image={modalImage} setModal={setModal} />}
    <div></div>
    <RecipeWriter /> 
    <div></div>
    <CookingReviewComments boardNumber={boardNumber} />
    <div></div>
    <Comments />
    <div></div>
    <LatelyRecipe />
    </>
  );
};