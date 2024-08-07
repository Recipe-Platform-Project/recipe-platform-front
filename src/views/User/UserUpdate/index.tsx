import React, { useState } from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom';

export default function UserUpdate() {
    //                 component: 보여주는 페이지 지정                  //
    const [view, setView] = useState<'UserInfo' | 'PasswordChangePage'>('UserInfo');
    
    //          function: navigate          //
    const navigate = useNavigate();

    //                      event handler: move main page                       //
    const onLogoButtonClickHandler = () => {
        navigate("/");
    }

    const UserInfo = () => {

        //                 component: 사용자 정보수정 컴포넌트                     //

        //                 event handler: move Password Chnage Page                     //
        const onPasswordChangeButtonClickHandler = () => {
            setView('PasswordChangePage');
        }

        //                 event handler: move Withdrawal page              //
        const onWithdrawalButtonClickHandler = () => {
            navigate("/withdrawal");
        }
        

        //                  render: 사용자 정보 컴포넌트 랜더링                    //
        return(

            <div id='user-update-wrapper'>
                <div className='user-update-header'>
                    <div className='user-update-logo-box' onClick={onLogoButtonClickHandler}>
                        <div className='user-update-logo'></div>
                    </div>
                </div>
                <div className='user-update-title-box'>
                    <div className='user-update-title'>{"회원정보 수정"}</div>
                </div>
                <div className='user-profile-title-container'>
                    <div className='user-profile-box'>
                        <div className='update-profile-title'>{"내프로필"}</div>
                    </div>
                </div>
                <div className='update-profile-image-container'>
                    <div className='update-tip-container'>
                        <ul className='update-tip-box'>
                            <li className='update-tip'>{"프로필 사진을 수정할 수 있습니다"}</li>
                        </ul>
                    </div>
                    <div className='profile-update-container'>
                        <div className='profile-update-text'>{"프로필 사진 변경"}</div>
                        <div className='profile-line'></div>
                        <div className='user-profile-container'>
                            <div className='user-info-profile-icon-box'>
                                <div className='image-box-white-icon'></div>
                            </div>
                            <div className='profile-button-container'>
                                <div className='profile-button-box'>
                                    <div className='icon-button-update'>{"사진변경"}</div>
                                    <div className='icon-button-delete'>{"사진삭제"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='update-nickname-password-container'>
                        <div className='update-nickname-password-title-box'>
                            <div className='update-nickname-password-title'>{"닉네임 / 비밀번호 변경"}</div>
                        </div>
                        <div className='nickname-update-container'>
                            <div className='update-tip-container'>
                                <ul className='update-tip-box'>
                                    <li className='update-tip'>{"닉네임과 비밀번호를 변경할 수 있습니다."}</li>
                                </ul>
                            </div>
                            <div className='nickname-password-update-container'>
                                <div className='nickname-update-text'>{"닉네임 변경"}</div>
                                <div className='nickname-line'></div>
                                <div className='nickname-input-box'>
                                    <div className='nickname-input-container'>
                                        <div className='nickname-input-border'>
                                            <input type="text" className='nickname-input'/>
                                        </div>
                                        <div className='nickname-button-container'>
                                            <div className='nickname-button-box'>
                                                <div className='nickname-button-update'>{"수정"}</div>
                                            </div>
                                        </div>
                                    </div>    
                                </div>    
                            </div>
                            <div className='password-change-line'></div>
                            <div className='password-update-container'>
                                <div className='password-change-text-box'>
                                    <div className='password-change-text'>{"비밀번호 변경"}</div>
                                </div>
                                <div className='password-line'></div>
                                <div className='password-change-button-container'>
                                    <div className='password-change-button-box'onClick={onPasswordChangeButtonClickHandler}>
                                        <div className='password-change-button'>{"수정"}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='withdrawal-container'>
                        <div className='withdrawal-title-box'>
                            <div className='withdrawal-title'>{"회원탈퇴"}</div>
                        </div>
                        <div className='withdrawal-update-container'>
                            <div className='update-tip-container'>
                                <ul className='update-tip-box'>
                                    <li className='update-tip'>{"회원탈퇴 페이지로 이동합니다."}</li>
                                </ul>
                            </div>
                            <div className='password-update-container'>
                                <div className='withdrawal-text-box'>
                                    <div className='withdrawal-text'>{"회원탈퇴"}</div>
                                </div>
                                <div className='withdrawal-line'></div>
                                <div className='withdrawal-button-container'>
                                    <div className='withdrawal-button-box'onClick={onWithdrawalButtonClickHandler}>
                                        <div className='withdrawal-button'>{"수정"}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
  return (
    <UserUpdate />
  )
}
