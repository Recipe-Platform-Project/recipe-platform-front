import React, { KeyboardEvent, useRef, useState } from 'react'
import "./style.css"
import { useCookies } from 'react-cookie';
import InputBox from 'components/InputBox'
import useUserStore from 'stores/user.store';
import { useNavigate } from 'react-router-dom';


export default function Authentication() {

    //          state: 로그인 유저 전역 상태          //
    const { user, setUser } = useUserStore();
    //          state: 쿠키 상태          //
    const [cookies, setCookie] = useCookies();
    //          state: 화면 상태          //
    const [view, setView] = useState<'SignIn' | 'SignUp'>('SignIn');

    //          state: 비밀번호 상태            //
    const passwordRef = useRef<HTMLInputElement | null>(null);

    //              function: navigate                  //
    const navigate = useNavigate();

    //              component: 로그인 컴포넌트              //
    const SignIn = () => {
    
        //          state: 비밀번호 입력 요소 참조 상태          //
        const passwordRef = useRef<HTMLInputElement | null>(null);

        //          state: 입력한 이메일 상태          //
        const [email, setEmail] = useState<string>('');
        //          state: 입력한 비밀번호 상태          //
        const [password, setPassword] = useState<string>('');
        //          state: 비밀번호 인풋 타입 상태          //
        const [passwordType, setPasswordType] = useState<'text' | 'password'>('password');
        //          state: 비밀번호 인풋 버튼 아이콘 상태          //
        const [passwordIcon, setPasswordIcon] = useState<'eye-off-icon' | 'eye-on-icon'>('eye-off-icon');
        //          state: 로그인 에러 상태          //
        const [error, setError] = useState<boolean>(false);
        

        //              event handler: Login Button Click Event                //
        const onFoundUserClickHandler = () => {
            navigate("/UserFound");
        }
        
        //              event handler: SignUp Button Click Event                //
        const onSignUpClickHandler = () => {
            setView('SignUp');
        }
        //              event handler: SignIn Press Enter Key               //
        const onEmailKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key !== 'Enter') return;
            if (!passwordRef.current) return;
            passwordRef.current.focus();
          }

        //          event handler: 비밀번호 인풋 key down 이벤트 처리          //
        const onPasswordKeyDownHanlder = (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key !== 'Enter') return;
            onSignInButtonClickHandler();
        }

        //          event handler: SignIn Button Click Event            //
        const onSignInButtonClickHandler = () => {
            navigate('/');
        }

        // //          event handler: 로그인 버튼 클릭 이벤트 처리          //
        // const onSignInButtonClickHandler = () => {
        //     const requestBody: SignInRequestDto = {email, password};
        //     signInRequest(requestBody).then(signInResponse);
        // }
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
                                    <InputBox label='' type='text' placeholder='이메일 주소를 입력해주세요.' error={error} value={email} setValue={setEmail} onKeyDown={onEmailKeyDownHandler} />
                                    <InputBox ref={passwordRef} label='' type={passwordType} placeholder='비밀번호를 입력해주세요.' error={error} value={password} setValue={setPassword} onKeyDown={onPasswordKeyDownHanlder} />
                                </div>
                            <div className='input-button-box' onClick={onSignInButtonClickHandler}>
                                <div className='input-button'>{"로그인"}</div>
                            </div>
                        </div>
                        </div>
                        <div className='find-button-container'>
                            <div className='user-find-button' onClick={onFoundUserClickHandler}>{"이메일 / 비밀번호 찾기"}</div>
                            <div className='user-sign-up-button' onClick={onSignUpClickHandler}> {"회원가입"}</div>
                        </div>
                    </div>            
                )
        
            }

//                 component: 회원가입 컴포넌트                     //
    const SignUp = () => {
        //          state: 입력한 이메일 상태          //
    const [email, setEmail] = useState<string>('');
        //          state: 입력한 비밀번호 상태          //
        const [password, setPassword] = useState<string>('');
        //          state: 비밀번호 인풋 타입 상태          //
        const [passwordType, setPasswordType] = useState<'text' | 'password'>('password');
        //          state: 로그인 에러 상태          //
        const [error, setError] = useState<boolean>(false);

        //         state: AllCheckbox 상태             //
        const [isAllCheck, setAllCheck] = useState<boolean>(false);

        //         state: SelectCheckbox 상태             //
        const [isCollectCheck, setCollectCheck] = useState<boolean>(false);

        //         state: ProcessingCheckbox 상태             //
        const [isProcessingCheck, setProcessingCheck] = useState<boolean>(false);

        //         state: ProcessingCheckbox 상태             //
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
        
        //         event handler: 회원가입 버튼 클릭 이벤트                 //
        const onSignInClickHandler = () => {
            setView('SignIn');
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
                        <InputBox label='' type='text' placeholder='이메일 주소를 입력해주세요.' error={error} value={email} setValue={setEmail} />
                        <InputBox type="text" placeholder='닉네임을 입력해 주세요' label={''} error={false} value={''} setValue={function (value: React.SetStateAction<string>): void {
                        throw new Error('Function not implemented.')}}/>
                        <InputBox ref={passwordRef} label='' type={passwordType} placeholder='비밀번호를 입력해주세요.' error={error} value={password} setValue={setPassword} />
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
                            </div>
                            <div className='agreed-container'>
                                <div className='check-button' onClick={onProcessingCheckBoxButtonClickHandler}>
                                    {isProcessingCheck ? (<div className='checked'></div>) : (<div className='uncheck'></div>)}
                                </div>
                                <div className='agreed-text-container'>
                                    <div className='agreed-check'>{"개인정보 처리를 위한 동의(선택)"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='user-generate-box' onClick={onSignInClickHandler}>
                        <div className='user-generate-button'>{"가입하기"}</div>
                    </div>
                </div>
        )
    }


  return (
    <div>
    { view === 'SignIn' && <SignIn /> }
    { view === 'SignUp' && <SignUp /> }
    </div>
  )
}
