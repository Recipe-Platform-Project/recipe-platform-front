import React from "react";
import './style.css';
import { UserRecipeItem } from "Types";
import { useNavigate } from "react-router-dom";
import { RECIPE_DETAIL_PATH, RECIPE_UPDATE_PATH } from "constant";

//          interface: 게시물 리스트 아이템 컴포넌트 Props          //
interface Props {
    userRecipeItem: UserRecipeItem;
}

//          component: 게시물 리스트 아이템 컴포넌트          //
export default function UserRecipeList({ userRecipeItem }: Props) {

    //          state: Properties          //
    const { boardNumber, title, nickname, boardMainImage, writeDatetime } = userRecipeItem;

    //          function: 네비게이트 함수          //
    const navigator = useNavigate();

    //          event handler: Recipe Click 이벤트 처리 함수          //
    const onRecipeClickHandler = () => {
        navigator(RECIPE_DETAIL_PATH(boardNumber));
    }

    //          event handler: 수정버튼클릭 이벤트 처리          //
    const onModifyButtonClickHandler = () => {
        navigator(RECIPE_UPDATE_PATH(boardNumber));
    }

    //          render: 게시물 리스트 아이템 컴포넌트 렌더링          //
    return (
        <div className="user-board-container">
            <div className='user-board-whites' onClick={onRecipeClickHandler}>
                <div className='user-board-white-recipe'>
                    <div className='user-board-recipe-image'>
                        <div className='recipe-image-url' style={{backgroundImage: `url(${boardMainImage})`}}></div>
                    </div>
                    <div className='user-board-recipe-box'>
                        <div className='user-board-title'>{title}</div>
                        <div className='user-board-nickname'>{'by.' + nickname}</div>
                    </div>
                    <div className='user-board-modify-button'>
                        <div className='user-board-modify-button-click' onClick={onModifyButtonClickHandler}>
                            <div className='user-board-modify-button-text'>{'수정하기'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}