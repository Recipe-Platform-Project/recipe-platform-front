import React, { KeyboardEvent, useRef, useState } from 'react'
import "./style.css"
import { useCookies } from 'react-cookie';
import InputBox from 'components/InputBox'
import useUserStore from 'stores/user.store';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
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
        const onLogoClickHandler = () => {
            navigate("/");
        }
        

        //              event handler: Login Button Click Event                //
        const onFoundUserClickHandler = () => {
            navigate("/UserFound");
        }
        
        //              event handler: SignUp Button Click Event                //
        const onSignUpClickHandler = () => {
            navigate('/SignUp');
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
                            <div className='authentication-logo-box' onClick={onLogoClickHandler}>
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
  return (
    <SignIn/>
  )
}
