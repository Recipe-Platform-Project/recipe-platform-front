import React from 'react';
import './style.css';
import { UserWriteRecipeReviewItem } from "Types";
import { RECIPE_DETAIL_PATH } from "constant";
import { useNavigate } from "react-router-dom";

//          interface: 레시피 후기 리스트 아이템 컴포넌트 Props          //
interface Props {
    userWriteRecipeReviewItem: UserWriteRecipeReviewItem;
}

//          component: 작성한 레시피 후기 리스트 아이템 컴포넌트          //
export default function UserWriteRecipeReviewList({ userWriteRecipeReviewItem }: Props) {

    //          state: Properties          //
    const { boardNumber, title, recipeImage, contents } = userWriteRecipeReviewItem

    //          function: 네비게이트 함수           //
    const navigator = useNavigate();

    //          event handler: Writing Recipe Click 이벤트 처리 함수          //
    const onWriteRecipeReviewClickHandler = () => {
        navigator(RECIPE_DETAIL_PATH(boardNumber));
    }

    //          render: 레시피 후기 리스트 아이템 컴포넌트 렌더링          //
    return (
        <div className='user-writing-recipe-review-whites' onClick={onWriteRecipeReviewClickHandler}>
            <div className='user-writing-recipe-review-recipe'>
                <div className='user-writing-recipe-review-image'>
                    <div className='user-writing-recipe-review-image-url' style={{backgroundImage: `url(${recipeImage})`}}></div>
                </div>
                <div className='user-writing-recipe-review-recipe-box'>
                    <div className='user-writing-recipe-review-title'>{title}</div>
                    <div className="user-writing-recipe-review-horoscope-box">
                        <div className="user-writing-recipe-review-horoscope-icon">
                            <div className="user-recipe-review-horoscope-image"></div>
                        </div>
                        <div className="user-writing-recipe-review-horoscope-icon">
                            <div className="user-recipe-review-horoscope-image"></div>
                        </div>
                        <div className="user-writing-recipe-review-horoscope-icon">
                            <div className="user-writing-recipe-review-horoscope-image"></div>
                        </div>
                        <div className="user-writing-recipe-review-horoscope-icon">
                            <div className="user-writing-recipe-review-horoscope-image"></div>
                        </div>
                        <div className="user-writing-recipe-review-horoscope-icon">
                            <div className="user-writing-recipe-review-horoscope-image"></div>
                        </div>
                    </div>
                    <div className='user-writing-recipe-review-contents'>{contents}</div>
                    <div className="user-writing-review-button-box">
                        <div className="user-writing-review-button-delete">{'삭제하기'}</div>
                        <div className="user-writing-review-button-modify">{'수정하기'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}