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
    const { nickname, profileImageUrl, followCount, boardNumber, favoriteCount, viewCount } = chefItem;

    const [chefRankingList, setChefRankingList] = useState<ChefItem[]>([]);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setChefRankingList((prevItems) =>
    //         chefItem.map((item) => ({ ...item, count: item.count + item.id }))
    //       );
    //     }, 1000);
    
    //     return () => clearInterval(intervalId);
        
    // });

    //          state: 조회하는 유저 이메일 상태          //
    const { searchEmail } = useParams();

    //         function: 네비게이트 함수           //
    const navigator = useNavigate();


    const onChefPageButtonClickHandler = () => {
        navigator(USER_RECIPE(searchEmail));
    }

    //          render: 쉐프 리스트 아이템 컴포넌트 렌더링          //
    return(
        <div className='chef-list'>
            <div className='chef-ranking-number'>
            {/* {count} */}
            </div>
            <div className='chef-profile'>
                <div className='chef-profile-image' onClick={onChefPageButtonClickHandler} style={{ backgroundImage: `url(${profileImageUrl})` }}></div>
                
            </div>
            <div className='chef-info-container'>
                <div className='chef-info-nickname' onClick={onChefPageButtonClickHandler}>{`${nickname}`}</div>
                <div className='chef-info-box'>
                    <div className='chef-info-Number-box'>
                        <div className='chef-info-image'>
                            <div className='chef-info-subscriptionNumber-icon'></div>
                        </div>
                        <div className='chef-info-subscriptionNumber'>{`${followCount}`}</div>
                    </div>
                    <div className='chef-info-Number-box'>
                        <div className='chef-info-image'>
                            <div className='chef-info-BulletinNumber-icon'></div>
                        </div>
                        <div className='chef-info-BulletinNumber'>{`${boardNumber}`}</div>
                    </div>
                    <div className='chef-info-Number-box'>
                        <div className='chef-info-image'>
                            <div className='chef-info-likeNumber-icon'></div>
                        </div>
                        <div className='chef-info-likeNumber'>{`${favoriteCount}`}</div>
                    </div>
                    <div className='chef-info-Number-box'>
                        <div className='chef-info-image'>
                            <div className='chef-info-inquiryNumber-icon'></div>
                        </div>
                        <div className='chef-info-inquiryNumber'>{`${viewCount}`}</div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}