import React from 'react'
import "./style.css"


//          component: 푸터 컴포넌트         //
export default function Footer() {

    //          event handler: 유튜브 아이콘 버튼 클릭 이벤트 처리         //
    const onYoutubeIconClickHandler = () => {
    window.open('https://www.youtube.com');
    }

    //          event handler: 인스타 아이콘 버튼 클릭 이벤트 처리         //
    const onInstaIconClickHandler = () => {
    window.open('https://www.instagram.com');
    }



    //          event handler: 네이버 블로그 아이콘 버튼 클릭 이벤트 처리         //
    const onNaverBlogIconClickHandler = () => {
    window.open('https://blog.naver.com');
    }




  //          render: 푸터 컴포넌트 렌더링         //
  return (
    <div id='footer'>
        <div className="footer-box">
            <div className='footer-left-box'>
                <div className="footer-logo-box">
                    <div className="footer-logo"></div>
                </div>
                <div className="footer-copyright">{'Copyright @ 2023 oneulmwomeogji. All Rights Reserved'}</div>
            </div>
            <div className='footer-center-box'>
                <div className="campus-name-box">
                    <div className="campus-name">{'강남캠퍼스 : 서울특별시 강남구 테헤란로 146 현익빌딩 3층, 4층 (신한은행건물)'}</div>
                    <div className="campus-name">{'신촌/홍대 캠퍼스 : 서울특별시 마포구 서강로 136 아이비타워 2층,3층(노고산동)'}</div>
                    <div className="campus-name">{'대구캠퍼스 : 대구 중구 중앙대로 366 반월센트럴타워 9층,10층(입학상담)'}</div>
                    <div className="campus-name">{'부산캠퍼스 : 부산광역시 부산진구 중앙대로 668 A1(에이원)프라자 4층'}</div>
                    <div className="campus-name">{'인천캠퍼스 : 인천광역시 부평구 시장로 7 M.H빌딩 5층'}</div>
                    <div className="campus-name">{'대전캠퍼스 : 대전광역시 서구 둔산로 52 미라클빌딩 3층'}</div>
                    <div className="campus-name">{'노원캠퍼스 : 서울특별시 노원구 상계로1길 34 5,6층'}</div>
                </div>
                <div className="campus-tel-number-box">
                    <div className="campus-tel-number">{'TEL : 02-538-0021'}</div>
                    <div className="campus-tel-number">{'TEL : 02-313-7300'}</div>
                    <div className="campus-tel-number">{'TEL : 053-710-5890'}</div>
                    <div className="campus-tel-number">{'TEL : 051-914-5890'}</div>
                    <div className="campus-tel-number">{'TEL : 032-262-5890'}</div>
                    <div className="campus-tel-number">{'TEL : 042-369-5890'}</div>
                    <div className="campus-tel-number">{'TEL : 02-933-5890'}</div>
                </div>
            </div>
            <div className="footer-right-box">
                <div className="icon-box" onClick={onYoutubeIconClickHandler}>
                    <div className="youtube-icon"></div>
                </div>
                <div className="icon-box" onClick={onInstaIconClickHandler}>
                    <div className="insta-icon"></div>
                </div>
                <div className="icon-box" onClick={onNaverBlogIconClickHandler}>
                    <div className="blog-icon"></div>
                </div>
            </div>
        </div>
    </div>
  )
}
