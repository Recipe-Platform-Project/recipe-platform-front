import { ChangeEvent, KeyboardEvent, useState, useEffect } from 'react';
import "./style.css"
import { useNavigate } from 'react-router-dom';

//          component: 헤더 컴포넌트          //
export default function Header() {
  
  //          function: 네비게이트 함수          //
  const navigator = useNavigate();

  //          event handler: 메인 로고 버튼 클릭 이벤트 처리         //
  const onMainLogoClickHandler = () => {
    navigator("/")
    }

  //          event handler: 검색 버튼 클릭 이벤트 처리         //
  const onSearchButtonClickHandler = () => {
    navigator("/search")
    }

  //          event handler: 검색 인풋 Enter key down 이벤트 처리          //
  const onSearchEnterKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    // if (!searchValue) return;
    navigator("/search");
  }
  
  //          component: 로그인 상태에 따라 로그인 혹은 마이페이지 버튼 컴포넌트          //
  const LoginMyPageButton = () => {


    //          event handler: 로그인 버튼 클릭 이벤트 처리         //
    const onSignInButtonClickHandler = () => {
      navigator("/sign-in");
    }
    //          event handler: 회원가입 버튼 클릭 이벤트 처리         //
    const onSignUpButtonClickHandler = () => {
      navigator("/sign-up");
    }

    //          event handler: 마이페이지 버튼 클릭 이벤트 처리         //
    const onMyPageButtonClickHandler = () => {
      navigator("/user");
    }
    //          event handler: 로그아웃 버튼 클릭 이벤트 처리         //
    const onLogoutButtonClickHandler = () => {
      navigator("/");
    }

    return(
      <>
        <div className="header-top-right-sign-in">{'로그인'}</div>
        <div className="header-top-right-divider">{'|'}</div>
        <div className="header-top-right-sign-up">{'회원가입'}</div>
      </>
    )
  }

  //          event handler: 레시피 등록 버튼 클릭 이벤트 처리         //
  const onUploadButtonClickHandler = () => {
    navigator("/board/write")
    }



  return (
    <div id='header'>
      <div className="header-top">
        <div className="header-top-box">
          <div className="header-top-left-box">
            <div className="header-logo-box" onClick={onMainLogoClickHandler}>
              <div className="header-logo"></div>
            </div>
          </div>
          <div className="header-top-center-box">
            <div className="header-top-center-search">
              <input className="header-top-center-search-bar" type='text' spellCheck="false" onKeyDown={onSearchEnterKeyDownHandler}/>
              <div className="icon-button" onClick={onSearchButtonClickHandler}>
                <div className="search-icon"></div>
              </div>
            </div>
          </div>
          <div className="header-top-right-box">
            <LoginMyPageButton />
            <div className="header-top-right-upload-button-box">
              <div className="header-top-right-upload-button" onClick={onUploadButtonClickHandler}>{'레시피 등록'}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="header-bottom">
        <div className="header-navi-bar">
          <div className="navi-menu">{'메인'}
          </div>
          <div className="navi-menu">{'분류'}
          </div>
          <div className="navi-menu">{'랭킹'}
          </div>
          <div className="navi-menu">{'쉐프'}
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  )
}
