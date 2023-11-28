import React from "react";
import './style.css';
import { UserWritingRecipeItem } from "Types";
import { useNavigate } from "react-router-dom";
import { RECIPE_DETAIL_PATH } from "constant";

//          interface: 작성중인 레시피 리스트 아이템 컴포넌트 Props          //
interface Props {
    userWritingRecipeItem: UserWritingRecipeItem;
}

//          component: 작성중인 레시피 리스트 아이템 컴포넌트          //
export default function UserWritingRecipeList({ userWritingRecipeItem }: Props) {

    //          state: Properties          //
    const { boardNumber, title, writingContents, recipeImage } = userWritingRecipeItem

    //          function: 네비게이트 함수           //
    const navigator = useNavigate();

    //          event handler: Writing Recipe Click 이벤트 처리 함수          //
    const onWritingRecipeClickHandler = () => {
        navigator(RECIPE_DETAIL_PATH(boardNumber));
    }

    //          render: 게시물 리스트 아이템 컴포넌트 렌더링          //
    return (
        <div className='user-writing-board-whites' onClick={onWritingRecipeClickHandler}>
            <div className='user-writing-board-whiting-recipe'>
                <div className='user-writing-board-recipe-image'>
                    <div className='recipe-writing-image-url' style={{backgroundImage: `url(${recipeImage})`}}></div>
                </div>
                <div className='user-writing-board-recipe-box'>
                    <div className='user-writing-board-title'>{title}</div>
                    <div className='user-writing-board-contents'>{writingContents}</div>
                </div>
            </div>
        </div>
    )
}