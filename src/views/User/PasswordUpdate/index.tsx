import React, { useState } from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom';

export default function PasswordUpdate() {
    const PasswordChangePage = () => {

        //                 component: 보여주는 페이지 지정                  //
    const [view, setView] = useState<'UserInfo' | 'PasswordChangePage'>('UserInfo');
    
    //          function: navigate          //
    const navigate = useNavigate();

    //                      event handler: move main page                       //
    const onLogoButtonClickHandler = () => {
        navigate("/");
    }
        //                  render: User Password Change Page render                     //
    
        return(
            <div id='password-change-page-wrapper'>
                <div className='password-change-header'>
                    <div className='password-change-logo-box'onClick={onLogoButtonClickHandler}>
                        <div className='password-change-logo'></div>
                    </div>
                </div>
                <div className='password-change-title-box'>
                    <div className='password-change-title'>{"비밀번호 변경"}</div>
                </div>
                <div className='password-change-container'>
                    <div className='change-password-box'>
                        <input type="text" className='change-password' placeholder='현재 비밀번호'/>
                    </div>
                    <div className='new-password-box'>
                        <input type="text" className='new-password' placeholder='새 비밀번호'/>
                        <div className='new-password-line'></div>
                        <input type="text" className='new-password-check' placeholder='새 비밀번호 확인'/>
                    </div>
                    <ul className='password-change-tip-box'>
                        <li className='password-change-tip'>{"비밀번호 안정성(글자 수, 숫자랑 알파벳이랑 섞어쓰기 등)"}</li>
                    </ul>
                    <div className='change-password-input-button-container'>
                        <div className='change-password-input-button'>{"비밀번호 변경하기"}</div>
                    </div>
                </div>
            </div>
        );
        }
  return (
    <PasswordUpdate />
  )
}
