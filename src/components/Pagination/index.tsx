import React, { Dispatch, SetStateAction } from "react";
import './style.css';

interface Props {
    currentPageNumber: number;
    currentSectionNumber: number;
    setCurrentPageNumber: Dispatch<SetStateAction<number>>;
    setCurrentSectionNumber: Dispatch<SetStateAction<number>>;

    viewPageNumberList: number[];
    totalSection: number;
}

//          component: 페이지네이션 컴포넌트          //
export default function Pagination(props: Props) {
    //          state: Properties          //
    const { currentPageNumber, currentSectionNumber, setCurrentPageNumber, setCurrentSectionNumber } = props;
    const { viewPageNumberList, totalSection } = props;

    //          event handler: 페이지 번호 클릭 이벤트 처리          //
    const onPageNumberClickHandler = (pageNumber: number) => {
        setCurrentPageNumber(pageNumber);
        window.scrollTo(0,0);
        
    }
    //          event handler: 다음 버튼 클릭 이벤트 처리          //
    const onNextButtonClickHandler = () => {
        if (currentSectionNumber === totalSection) {
            alert('마지막 섹션입니다.');
            return;
        }
        setCurrentPageNumber(currentSectionNumber * 5 + 1);
        setCurrentSectionNumber(currentSectionNumber + 1);
    }
    //          event handler: 이전 버튼 클릭 이벤트 처리          //
    const onPreviousButtonClickHandler = () => {
        if (currentSectionNumber === 1) {
            alert('첫번째 섹션입니다.')
            return;
        }
        setCurrentPageNumber((currentSectionNumber - 1)* 5);
        setCurrentSectionNumber(currentSectionNumber - 1);
    }

    //          render: 페이지네이션 컴포넌트 렌더링          //
    return (
        <div id='pagination-container'>
            <div className='pagination-left-box' onClick={onPreviousButtonClickHandler}>
                <div className='pagination-left-icon'>
                    <div className='pagination-left-image'></div>
                </div>
            </div>
            <div className='pagination-divider'></div>
            <div className='pagination-text-box'>
                { viewPageNumberList.map(pageNumber => pageNumber === currentPageNumber ? <div className='pagination-active-text'>{pageNumber}</div> : <div className='pagination-text' onClick={() => onPageNumberClickHandler(pageNumber)}>{pageNumber}</div>)}
            </div>
            <div className='pagination-divider'></div>
            <div className='pagination-change-box' onClick={onNextButtonClickHandler}>
                <div className='pagination-right-icon'>
                    <div className='pagination-right-image'></div>
                </div>
            </div>
        </div>
    )
}