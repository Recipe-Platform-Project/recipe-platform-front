import { UserWriteCommentItem } from 'Types';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { RECIPE_DETAIL_PATH } from 'constant';

//          interface: 댓글 게시물 리스트 아이템 컴포넌트 Props          //
interface Props {
    userWriteCommentItem: UserWriteCommentItem;
}

//          component: 댓글 게시물 리스트 아이템 컴포넌트          //
export default function UserWriteCommentListItem({userWriteCommentItem}: Props) {

    //          state: Properties          //
    const {boardNumber, title, nickname, boardMainImage, commentNumber, contents, writeDatetime} = userWriteCommentItem;

    //          function: 네비게이트 함수          //
    const navigator = useNavigate();

    //          event handler: Recipe Click 이벤트 처리 함수          //
    const onRecipeClickHandler = () => {
        navigator(RECIPE_DETAIL_PATH(boardNumber));
    }

    //          render: 댓글 게시물 리스트 아이템 컴포넌트 렌더링          //
    return (
        <div className='user-comment-box' onClick={onRecipeClickHandler}>
            <div className='user-comment-image'>
                <div className='user-comment-image-url' style={{ backgroundImage: `url(${boardMainImage})`}}></div>
            </div>
            <div className='user-comment-recipe-container'>
                <div className='user-comment-title'>{title}</div>
                <div className='user-comment-write-nickname'>{'by.' + nickname}</div>
            </div>
            <div className='user-comment-container'>
                <div className='user-comment-nickname'>{nickname}</div>
                <div className='user-comment-contents'>{contents}</div>
                <div className='user-comment-datetime'>{writeDatetime}</div>
            </div>
        </div>
    )
}

