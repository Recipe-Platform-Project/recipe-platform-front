import { ChefItem } from 'Types';
import './style.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { USER_RECIPE } from 'constant';

 
interface Props { 
    chefItem: ChefItem;
}

//          component: 쉐프 리스트 아이템 컴포넌트          //
export default function ChefListItem({ chefItem }: Props) {

    //          state: Properties          //
    const { chefNickname, chefProfileImage, subscriptionNumber, BulletinNumber ,likeNumber, inquiryNumber } = chefItem;
    
    //          function: 랭킹 숫자 함수..라는데..          //
    // const arr = new Array(1).fill(0).map((_,i) => i);

    //          state: 숫자 상태          //
    const [count, setCount] = useState('1');
    //          state: text          //
    const [text, setText] = useState("");
    
    const [email] = useState();

    //         function: 네비게이트 함수           //
    const navigator = useNavigate;

    const onChefPageButtonClickHandler = () => {
<<<<<<< HEAD
        // navigator(USER_PATH(email));
=======
>>>>>>> 7ec6a2dc948913bde2bd06f407cb1993cc27ab12
    }

    // useEffect (() => {
    //     if (count === ) {
    //         setCount(count+1);
    //     }
    // });

    //          render: 쉐프 리스트 아이템 컴포넌트 렌더링          //
    return(
        <div className='chef-list'>
            <div className='chef-ranking-number'>{count}</div>
            <div className='chef-profile'>
                <div className='chef-profile-image'>{chefProfileImage}</div>
            </div>
            <div className='chef-info-container'>
                <div className='chef-info-nickname'>{chefNickname}</div>
                <div className='chef-info-box'>
                    <div className='chef-info-Number-box'>
                        <div className='chef-info-image'>
                            <div className='chef-info-subscriptionNumber-icon'></div>
                        </div>
                        <div className='chef-info-subscriptionNumber'>{subscriptionNumber}</div>
                    </div>
                    <div className='chef-info-Number-box'>
                        <div className='chef-info-image'>
                            <div className='chef-info-BulletinNumber-icon'></div>
                        </div>
                        <div className='chef-info-BulletinNumber'>{BulletinNumber}</div>
                    </div>
                    <div className='chef-info-Number-box'>
                        <div className='chef-info-image'>
                            <div className='chef-info-likeNumber-icon'></div>
                        </div>
                        <div className='chef-info-likeNumber'>{likeNumber}</div>
                    </div>
                    <div className='chef-info-Number-box'>
                        <div className='chef-info-image'>
                            <div className='chef-info-inquiryNumber-icon'></div>
                        </div>
                        <div className='chef-info-inquiryNumber'>{inquiryNumber}</div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}