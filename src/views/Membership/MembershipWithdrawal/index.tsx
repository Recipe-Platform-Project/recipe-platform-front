import React, { useState } from 'react'
import "./style.css"
import { Navigate, useNavigate } from 'react-router-dom'

export default function MembershipWithdrawal() {
    
    //          function: navigate          //
    const navigate = useNavigate();

    //              event handler: Login Button Click Event                //
    const onLogoClickHandler = () => {
        navigate("/");
    }

    const MembershipWithdrawalPage = () => {
//          render: 회원탈퇴 랜더                 //

        return(
            <div id='withdrawal-page-wrapper'>
                <div className='withdrawal-page-header'>
                    <div className='withdrawal-page-logo-box' onClick={onLogoClickHandler}>
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
  return (
    <MembershipWithdrawal/>
  )
}
