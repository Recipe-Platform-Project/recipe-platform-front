import React, { useState } from 'react'
import "./style.css"
import { Navigate, useNavigate } from 'react-router-dom'

export default function Membership() {

    //                 component: 보여주는 페이지 지정                  //
    const [view, setView] = useState<'MembershipWithdrawal' | 'UserFound'>('UserFound');
    
    //          function: navigate          //
    const navigate = useNavigate();

    const MembershipWithdrawal = () => {
//          render: 회원탈퇴 랜더                 //

        return(
            <div id='withdrawal-page-wrapper'>
                <div className='withdrawal-page-header'>
                    <div className='withdrawal-page-logo-box'>
                        <div className='withdrawal-page-logo'></div>
                    </div>
                </div>
                <div className='withdrawal-page-title-box'>
                    <div className='withdrawal-page-title'>{"회원탈퇴"}</div>
                </div>
                <div className='withdrawal-page-container'>
                    <div className='withdrawal-page-box'>
                        <div className='withdrawal-page-text-1'>{"회원탈퇴를 신청하기 전에 안내 사항을 꼭 확인해주세요"}</div>
                        <div className='withdrawal-page-text-2'>{"사용하고 계신 아이디("}
                        <span className='green-text-email'>이메일 대입</span>
                        {")는 탈퇴 할 경우 복구가 불가능합니다."}</div>
                        <div className='withdrawal-page-text-tip'>{"회원정보는 모두 삭제되며, 삭제된 데이터는 복구되지 않으니 신중하게 선택하시기 바랍니다."}
                        <br />
                        {"삭제되는 내용을 확인하시고 필요한 데이터는 미리 백업해주세요"}</div>
                        <div className='withdrawal-page-text-3'>{"가입 정보를 변경하고 싶으시다면 "}
                        <span className='green-text'>{"회원정보수정"}</span>
                        {" 에서 변경할 수 있습니다."}</div>
                        <div className='withdrawal-page-text-4'>{"게시물은 탈퇴 후 삭제되지 않습니다."}</div>
                        <div className='withdrawal-page-text-tip'>{"작성하신 게시물 및 댓글은 탈퇴 시 자동으로 삭제되지 않고 그대로 남아있습니다."}
                        <br />
                        {"삭제를 원하시는 게시글이 있다면 반드시 탈퇴전 비공개 처리를 하거나 삭제하시기 바랍니다."}</div>
                        <div className='withdrawal-page-text-5'>{"안내사항을 모두 확인하셨다면 아래 " }
                        <span className='green-text'>{"버튼"}</span>
                        {"을 눌러주세요."}</div>
                    </div>
                    <div className='withdrawal-button-line'></div>
                    <div className='withdrawal-page-button-box'>
                        <div className='withdrawal-page-button'>{"회원탈퇴"}</div>
                    </div>
                </div>
            </div>            
        )
    }

    const UserFound = () =>{

        
        //              component: ID Found component            //
        const [idFoundButton, setIdFoundButton] = useState(true);

        //              component: PW Found component            //
        const [pwFoundButton, setPwFoundButton] = useState(false);


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
        const onSingInLinkClickHandler = () => {
            navigate("/SignIn");
        }



        
        return(
            <div id='userfound-page-wrapper'>
                <div className='userfound-page-header'>
                    <div className='userfound-page-logo-box'>
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
                            <input type="text" className='email-box' placeholder='이메일'/>
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
    <div>
    { view === 'MembershipWithdrawal' && <Membership /> }
    { view === 'UserFound' && <UserFound /> }
    </div>
  )

}