import React from "react";
import "./style.css";

//					component: 메인 페이지 					//
export default function Main() {
  //					component: 메인 best 게시물 컴포넌트 					//
  const MainBest = () => {
    return (
      <div id="main-best-wrapper">
        <div className="main-best-box">
          <div className="main-best-title">{"BEST 레시피"}</div>
          <div className="main-best-image">
            <div className="main-best-left-image-box">
              <div className="main-best-left-image"></div>
              <div className="main-best-left-icon"></div>
            </div>
            <div className="main-best-center-image"></div>
            <div className="main-best-right-image-box">
              <div className="main-best-right-image"></div>
              <div className="main-best-right-icon"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  //					component: 쉐프 리스트 컴포넌트 					//
  const ChefList = () => {
    return (
      <div id="chef-list-wrapper">
        <div className="chef-list-left">
          <div className="chef-list-bottom-left-icon"></div>
        </div>
        <div className="chef-list-center">
          <div className="chef-list-center-top">
            <div className="chef-list-center-top-title">{"쉐프"}</div>
            <div className="chef-list-center-top-more-button">{"더보기"}</div>
          </div>
          <div className="chef-list-center-bottom">
            <div className="chef-list-center-bottom-info-box">
              <div className="chef-list-center-bottom-profile-image"></div>
              <div className="chef-list-center-bottom-nickname">{"아보카도도도도"}</div>
              <div className="chef-list-center-bottom-subscription">{"구독하기"}</div>
            </div>
            <div className="chef-list-center-bottom-info-box">
              <div className="chef-list-center-bottom-profile-image"></div>
              <div className="chef-list-center-bottom-nickname">{"아보카도도도도"}</div>
              <div className="chef-list-center-bottom-subscription">{"구독하기"}</div>
            </div>
            <div className="chef-list-center-bottom-info-box">
              <div className="chef-list-center-bottom-profile-image"></div>
              <div className="chef-list-center-bottom-nickname">{"아보카도도도도"}</div>
              <div className="chef-list-center-bottom-subscription">{"구독하기"}</div>
            </div>
            <div className="chef-list-center-bottom-info-box">
              <div className="chef-list-center-bottom-profile-image"></div>
              <div className="chef-list-center-bottom-nickname">{"아보카도도도도"}</div>
              <div className="chef-list-center-bottom-subscription">{"구독하기"}</div>
            </div>
            <div className="chef-list-center-bottom-info-box">
              <div className="chef-list-center-bottom-profile-image"></div>
              <div className="chef-list-center-bottom-nickname">{"아보카도도도도"}</div>
              <div className="chef-list-center-bottom-subscription">{"구독하기"}</div>
            </div>
            <div className="chef-list-center-bottom-info-box">
              <div className="chef-list-center-bottom-profile-image"></div>
              <div className="chef-list-center-bottom-nickname">{"아보카도도도도"}</div>
              <div className="chef-list-center-bottom-subscription">{"구독하기"}</div>
            </div>
            <div className="chef-list-center-bottom-info-box">
              <div className="chef-list-center-bottom-profile-image"></div>
              <div className="chef-list-center-bottom-nickname">{"아보카도도도도"}</div>
              <div className="chef-list-center-bottom-subscription">{"구독하기"}</div>
            </div>
            <div className="chef-list-center-bottom-info-box">
              <div className="chef-list-center-bottom-profile-image"></div>
              <div className="chef-list-center-bottom-nickname">{"아보카도도도도"}</div>
              <div className="chef-list-center-bottom-subscription">{"구독하기"}</div>
            </div>
            <div className="chef-list-center-bottom-info-box">
              <div className="chef-list-center-bottom-profile-image"></div>
              <div className="chef-list-center-bottom-nickname">{"아보카도도도도"}</div>
              <div className="chef-list-center-bottom-subscription">{"구독하기"}</div>
            </div>
            <div className="chef-list-center-bottom-info-box">
              <div className="chef-list-center-bottom-profile-image"></div>
              <div className="chef-list-center-bottom-nickname">{"아보카도도도도"}</div>
              <div className="chef-list-center-bottom-subscription">{"구독하기"}</div>
            </div>
          </div>
        </div>
        <div className="chef-list-right">
          <div className="chef-list-bottom-right-icon"></div>
        </div>
      </div>
    );
  };

  //					component: 최신 게시물 컴포넌트 					//
  const NewRecipe = () => {
    return(
      <div className="">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    )
  }


  //					render: 메인 페이지 렌더링					//
  return (
    <>
      <MainBest />
      <div className="main-divider"></div>
      <ChefList />
      <div className="main-divider"></div>
      <NewRecipe />
      <div className="main-divider"></div>
    </>
  );
}
