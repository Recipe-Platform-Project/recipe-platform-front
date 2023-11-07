import React from "react";
import './style.css';
import { UserRecipeReviewItem} from "Types";
import { useNavigate } from "react-router-dom";
import { RECIPE_DETAIL_PATH } from "constant";

//          interface: 레시피 후기 리스트 아이템 컴포넌트 Props          //
interface Props {
    userRecipeReviewItem: UserRecipeReviewItem;
}

//          component: 레시피 후기 리스트 아이템 컴포넌트          //
export default function UserRecipeReviewList({ userRecipeReviewItem }: Props) {

    //          state: Properties          //
    const { boardNumber, title, contents, recipeImage, } = userRecipeReviewItem

    //          function: 네비게이트 함수           //
    const navigator = useNavigate();

    //          event handler: Writing Recipe Click 이벤트 처리 함수          //
    const onRecipeReviewClickHandler = () => {
        navigator(RECIPE_DETAIL_PATH(boardNumber));
    }

    //          render: 레시피 후기 리스트 아이템 컴포넌트 렌더링          //
    return (
        <div className='user-recipe-review-whites' onClick={onRecipeReviewClickHandler}>
            <div className='user-recipe-review-recipe'>
                <div className='user-recipe-review-image'>
                    <div className='recipe-recipe-review-image-url' style={{backgroundImage: `url(${recipeImage})`}}></div>
                </div>
                <div className='user-recipe-review-recipe-box'>
                    <div className='user-recipe-review-title'>{title}</div>
                    <div className="user-recipe-review-horoscope-box">
                        <div className="user-recipe-review-horoscope-icon">
                            <div className="user-recipe-review-horoscope-image"></div>
                        </div>
                        <div className="user-recipe-review-horoscope-icon">
                            <div className="user-recipe-review-horoscope-image"></div>
                        </div>
                        <div className="user-recipe-review-horoscope-icon">
                            <div className="user-recipe-review-horoscope-image"></div>
                        </div>
                        <div className="user-recipe-review-horoscope-icon">
                            <div className="user-recipe-review-horoscope-image"></div>
                        </div>
                        <div className="user-recipe-review-horoscope-icon">
                            <div className="user-recipe-review-horoscope-image"></div>
                        </div>
                    </div>
                    <div className='user-recipe-review-contents'>{contents}</div>
                </div>
            </div>
        </div>
    )
}

