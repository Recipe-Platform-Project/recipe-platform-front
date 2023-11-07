import React, { useState } from 'react'
import "./style.css"
import { Navigate, useNavigate } from 'react-router-dom'


export default function UserFound() {
    const UserFound = () =>{

        
        //              component: ID Found component            //
        const [idFoundButton, setIdFoundButton] = useState(true);

        //              component: PW Found component            //
        const [pwFoundButton, setPwFoundButton] = useState(false);
        
        //          function: navigate          //
        const navigate = useNavigate();
        
        //              event handler: Login Button Click Event                //
        const onLogoClickHandler = () => {
        navigate("/");
        }

        //              event handler: Found ID Button Click Event          //
        const foundIdButtonClickHandler = () => {
            setIdFoundButton(false);
            setPwFoundButton(true);
            
        }

        //              event handler: Found PW Button Click Event           //
        const foundPwButtonClickHandler =() => {
            setIdFoundButton(true);
            setPwFoundButton(false);
        }
        

        //              event handler: Login Button Click Event                //
        const onSignInLinkClickHandler = () => {
            navigate("/SignIn");
        }


        
        return(
            <div id='userfound-page-wrapper'>
                <div className='userfound-page-header'>
                    <div className='userfound-page-logo-box' onClick={onLogoClickHandler}>
                        <div className='userfound-page-logo'></div>
                    </div>
                </div>
                <div className='userfound-page-title-box'>
                    <div className='userfound-page-title'>{"계정 정보 찾기"}</div>
                </div>
                <div className='userfound-container'>
                    <div className='userfound-title-box'>
                        <div className='userfound-id' onClick={foundIdButtonClickHandler}>{"아이디 찾기"}</div>
                        <div className='userfound-line'></div>
                        <div className='userfound-pw' onClick={foundPwButtonClickHandler}>{"비밀번호 찾기"}</div>
                    </div>
                    <div className='userfound-email-found-detail-container'style={{display: pwFoundButton ? "flex" : "none"}}>
                        <div className='userfound-detail-box'>
                            <input type="text" className='name-box' placeholder='이름'/>
                            <input type="text" className='email-box' placeholder='전화번호'/>
                            <div className='userfound-tip'>{"가입한 이메일을 정확히 입력하세요."}</div>
                        </div>
                        <div className='userfound-button-box'>
                            <div className='userfound-button'>{"아이디 찾기"}</div>
                        </div>
                    </div>
                    {/* <div className='userfound-email-result-detail-container'>
                        <div className='userfound-email-success-box'>
                            <div className='userfound-email-success-message'><span className='green-text-name'>{"이름 "}</span>{" 회원님의 아이디 입니다."}</div>
                            <div className='userfound-email'>{"개인 계정 : "}<span className='green-text-email'>{"이메일 대입"}</span></div>
                            <div className='userfound-login-button-box'>
                                <div className='userfound-login-button'>{"로그인"}</div>
                            </div>
                        </div>
                    </div> */}
                    <div className='userfound-password-found-detail-container' style={{display: idFoundButton ? "flex" : "none"}}>
                        <div className='userfound-password-detail-box'>
                            <input type="text" className='name-box' placeholder='이름'/>
                            <input type="text" className='email-box' placeholder='이메일' />
                            <div className='userfound-tip'>{"가입한 이메일을 정확히 입력하세요."}</div>
                        </div>
                        <div className='userfound-password-button-box'>
                            <div className='userfound-password-button'>{"비밀번호 찾기"}</div>
                        </div>
                    </div>
                    {/* <div className='userfound-password-result-detail-container'>
                        <div className='userfound-password-success-box'>
                            <div className='userfound-password-success-message'><span className='green-text-name'>{"이름 "}</span>{" 회원님의 이메일로 임시 비밀번호가 발송되었습니다."}</div>
                            <div className='userfound-login-button-box'>
                                <div className='userfound-login-button'>{"로그인"}</div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
  return (
    <UserFound/>
  )
}
