import React, { useEffect, useState } from 'react'
import "./style.css"
import Modals from 'components/Modals';
import { boardDetailItemMock, cookingStepsMock } from 'mocks';
import { CookingSteps } from 'Types';


//          component: 게시물 상세보기 페이지 조리순서         //
export default function Steps() {

    //          state: text, 이미지 보기 상태          //
    const [page, setPage] = useState<1 | 2>(1);

    //          state: modal 상태          //
    const [modal , setModal] = useState<boolean>(false);
    //          state: modal image 상태          //
    const [modalImage , setModalImage] = useState<string | null>('');

    const [cookingSteps, setCookingSteps] = useState<CookingSteps[]>([]);


    //          render: 게시물 상세보기 페이지 조리순서 렌더링          //
    const CookingStepsBox = () => {

        //          event handler: text와 이미지 같이 보기 버튼 클릭 이벤트 처리 함수          //
        const onImageViewButtonClickHandler = () => {
            setPage(1)
        }
        //          event handler: text만 보기 버튼 클릭 이벤트 처리 함수          //
        const onTextViewButtonClickHandler = () => {
            setPage(2);
        }

    let image = 'https://mblogthumb-phinf.pstatic.net/MjAyMDEwMTZfMTk1/MDAxNjAyODQxOTgzMjUw.m635StuUC8n1VutCCPVitsnphwnrmNE9hvDowCppWwgg.5M6NDKAm3vgXW33iNzxDmUvlf6NQJSiFfdPFsNNWCtkg.JPEG.dnks0206/%EC%A3%BC%EB%A7%90%EC%A0%90%EC%8B%AC__2.jpg?type=w800';


    //          event handler: 이미지 모달 버튼 클릭 이벤트 처리 함수          //
    const onPhotoClickHandler = (image: string | null) => {
        if(image === null) return;
        setModalImage(image);
        setModal(true);
    }

        return (
            <div id='steps-wrapper'>
                <div className='steps-box'>
                    <div className='steps-title-box'>
                        <div className='steps-title'>{'조리순서'}
                            <div className='steps-sub-title'>{'Steps'}</div>
                        </div>
                    </div>
                    <div className='view-image-box'>
                        <div className='view-image' onClick={onImageViewButtonClickHandler}  ></div>
                        <div className='view-text-image'onClick={onTextViewButtonClickHandler} ></div>
                    </div>
                </div>
                <div className='steps-sequence-image-view-box'>
                    {page === 1 && 
                    cookingSteps.map(item => 
                    <>
                        <div className='steps-sequence-image-view'>
                            <div className='sequence-number'>{item.sequenceNumber}</div>
                            <div className='sequence-content-text'>{item.boardContentText}</div>
                            <div className='sequence-image' style={{ backgroundImage: `url(${item.boardContentImage})` }} onClick={() => onPhotoClickHandler(item.boardContentImage)}></div>
                        </div>
                    </>)
                    }
                </div>
                <div className='steps-sequence-text-view-box'>
                    {page === 2 && 
                    cookingSteps.map(item => 
                        <div>
                            <div className='steps-sequence-text-view'>
                                <div className='sequence-number'>{item.sequenceNumber}</div>
                                <div className='sequence-text-view-content-text'>{item.boardContentText}</div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='steps-tip-box'>
                    <div className='steps-tip-image'></div>
                    <div className='steps-tip-comment'>{`${boardDetailItemMock.cookingTip}`}</div>
                </div>
            </div>
        );
    };


    useEffect(() => {
        setCookingSteps(cookingStepsMock);
    }, []);

  return (
    <>
    <CookingStepsBox/>
    <div>
    {modal && <Modals image={modalImage} setModal={setModal} />}
    </div>
    </>
  );
};
