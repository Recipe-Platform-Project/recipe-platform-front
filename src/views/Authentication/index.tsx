import React, { useState } from 'react'
import "./style.css"
import InputBox from 'components/InputBox'


export default function index() {

    const SignIn = () => {

        //          render: 로그인 화면 랜더                 //
        
                return(
                    <div className='sign-in-wrapper'>
                        <div className='authentication-header'>
                            <div className='authentication-logo-box'>
                                <div className='authentication-logo'></div>
                            </div>
                        </div>
                        <div className='sign-in-title-box'>
                            <div className='sign-in-title'>{"로그인"}</div>
                        </div>
                        <div className='sign-in-container'>
                            <div className='sign-in-place-container'>
                                <div className='sign-in-place'>
                                    <InputBox type="text" placeholder='이메일' label={''} error={false} value={''} setValue={function (value: React.SetStateAction<string>): void {
                                        throw new Error('Function not implemented.')
                                    } }/>
                                    <InputBox type="text" placeholder='비밀번호' label={''} error={false} value={''} setValue={function (value: React.SetStateAction<string>): void {
                                        throw new Error('Function not implemented.')
                                    } }/>
                                </div>
                            <div className='input-button'>{"로그인"}</div>
                        </div>
                        </div>
                        <div className='find-button-container'>
                            <div className='find-button'>{"이메일 / 비밀번호 찾기"}</div>
                            <div className='find-button'>{"회원가입"}</div>
                        </div>
                    </div>            
                )
        
            }


    const SignUp = () => {

        //         component: AllCheckbox 컴포넌트             //
        const [isAllCheck, setAllCheck] = useState<boolean>(false);

        //         component: SelectCheckbox 컴포넌트             //
        const [isCollectCheck, setCollectCheck] = useState<boolean>(false);

        //         component: ProcessingCheckbox 컴포넌트             //
        const [isProcessingCheck, setProcessingCheck] = useState<boolean>(false);

        //         component: ProcessingCheckbox 컴포넌트             //
        const [isEssentialCheck, setEssentialCheck] = useState<boolean>(false);

        //         event handler: 전체 체크박스 버튼 핸들러              //
        const onAllCheckBoxButtonClickHandler = () => {
            setAllCheck(!isAllCheck);
            setEssentialCheck(!isEssentialCheck);
            setCollectCheck(!isCollectCheck);
            setProcessingCheck(!isProcessingCheck);
          }

        //         event handler: 이용약관 필수 체크박스 버튼 핸들러              //
        const onEssentialCheckBoxButtonClickHandler = () => {
            setEssentialCheck(!isEssentialCheck);
          }
        
        //         event handler: 개인정보 수집 선택 체크박스 버튼 핸들러              //
        const onCollectCheckBoxButtonClickHandler = () => {
            setCollectCheck(!isCollectCheck);
          }

        //         event handler: 개인정보 처리 선택 체크박스 버튼 핸들러              //
        const onProcessingCheckBoxButtonClickHandler = () => {
            setProcessingCheck(!isProcessingCheck);
          }

        //         render: 회원가입 화면 랜더               //

        return(
            <div id='sign-up-wrapper'>
                <div className='authentication-header'>
                    <div className='authentication-logo-box'>
                        <div className='authentication-logo'></div>
                    </div>
                </div>
                <div className='sign-up-title-box'>
                    <div className='sign-up-title'>{"회원가입"}</div>
                </div>
                <div className='sign-up-container'>
                    <div className='sign-up-box'>
                        <InputBox type="text" placeholder='이메일을 입력해 주세요' label={''} error={false} value={''} setValue={function (value: React.SetStateAction<string>): void {
                        throw new Error('Function not implemented.')}}/>
                        <InputBox type="text" placeholder='닉네임을 입력해 주세요' label={''} error={false} value={''} setValue={function (value: React.SetStateAction<string>): void {
                        throw new Error('Function not implemented.')}}/>
                        <InputBox type="text" placeholder='비밀번호를 입력해 주세요' label={''} error={false} value={''} setValue={function (value: React.SetStateAction<string>): void {
                        throw new Error('Function not implemented.')}}/>
                        <div className='password-tip'>{"*영문/숫자/특수문자 중 2개 이상 조합하세요(8-20자)"}</div>
                        <InputBox type="text" placeholder='비밀번호 확인' label={''} error={false} value={''} setValue={function (value: React.SetStateAction<string>): void {
                        throw new Error('Function not implemented.')}}/>
                        <div className='password-tip'>{"확인을 위해 새 비밀번호를 다시 입력해 주세요."}</div>
                        <InputBox type="text" placeholder='이름을 입력하세요' label={''} error={false} value={''} setValue={function (value: React.SetStateAction<string>): void {
                        throw new Error('Function not implemented.')}}/>
                        <InputBox type="text" placeholder='전화번호를 입력하세요.' label={''} error={false} value={''} setValue={function (value: React.SetStateAction<string>): void {
                        throw new Error('Function not implemented.')}}/>
                    </div>
                    <div className='check-container'>
                        <div className='agreed-container'>
                            <div className='check-button' onClick={onAllCheckBoxButtonClickHandler}>
                                {isAllCheck ? (<div className='checked'></div>) : (<div className='uncheck'></div>)}
                            </div>
                            <div className='agreed-text-container'>
                                <div className='agreed-check'>{"전체동의"}</div>
                                <div className='agreed-text'>{"이용약관 및 개인정보 수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다."}</div>
                            </div>
                        </div>
                        <div className='agreed-container'>
                            <div className='check-button' onClick={onEssentialCheckBoxButtonClickHandler}>
                                {isEssentialCheck ? (<div className='checked'></div>) : (<div className='uncheck'></div>)}
                            </div>
                            <div className='agreed-text-container'>
                                <div className='agreed-check'>{"이용약관 동의(필수)"}</div>
                            </div>
                        </div>
                            <div className='agreed-container'>
                                <div className='check-button' onClick={onCollectCheckBoxButtonClickHandler}>
                                    {isCollectCheck ? (<div className='checked'></div>) : (<div className='uncheck'></div>)}
                                </div>
                                <div className='agreed-text-container'>
                                    <div className='agreed-check'>{"개인정보 수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다."}</div>
                                </div>
                                    <div className='detail-check'>
                                        <div className='agreed-check'>{"버튼"}</div>
                                    </div>
                            </div>
                            <div className='agreed-container'>
                                <div className='check-button' onClick={onProcessingCheckBoxButtonClickHandler}>
                                    {isProcessingCheck ? (<div className='checked'></div>) : (<div className='uncheck'></div>)}
                                </div>
                                <div className='agreed-text-container'>
                                    <div className='agreed-check'>{"개인정보 처리를 위한 동의(선택)"}</div>
                                </div>
                                <div className='detail-check'>
                                    <div className='agreed-check'>{"버튼"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sign-up-button-box'>
                        <div className='sign-up-button'>{"가입하기"}</div>
                    </div>
                </div>
        )
    }


  return (
    <>
    {/* <SignIn /> */}
    <SignUp/>
    </>
  )
}
