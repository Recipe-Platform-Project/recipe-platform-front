import { ChefItem } from 'Types';
import './style.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
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
    //          state: 유저 상태          //
    const [user, setUser] = useState<boolean>(false);
    //          state: text          //
    const [text, setText] = useState("");
    //          state: 조회하는 유저 이메일 상태          //
    const { searchEmail } = useParams();

    //         function: 네비게이트 함수           //
    const navigator = useNavigate();

    const onChefPageButtonClickHandler = () => {
        // if(!user) return;
        navigator(USER_RECIPE(searchEmail));
    }

    //          render: 쉐프 리스트 아이템 컴포넌트 렌더링          //
    return(
        <div className='chef-list'>
            <div className='chef-ranking-number'>{count}</div>
            <div className='chef-profile'>
                <div className='chef-profile-image' onClick={onChefPageButtonClickHandler}>{chefProfileImage}</div>
            </div>
            <div className='chef-info-container'>
                <div className='chef-info-nickname' onClick={onChefPageButtonClickHandler}>{chefNickname}</div>
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