import React, { useState } from 'react'
import "./style.css"
import { url } from 'inspector';


//          component: 게시물 상세보기 페이지 조리순서         //
export default function Steps() {

    //          state: text, 이미지 보기 상태          //
    const [page, setPage] = useState<1 | 2>(1);


    //          event handler: text와 이미지 같이 보기 버튼 클릭 이벤트 처리 함수          //
    const onImageViewButtonClickHandler = () => {
        setPage(1)
    }
    //          event handler: text만 보기 버튼 클릭 이벤트 처리 함수          //
    const onTextViewButtonClickHandler = () => {
        setPage(2);
    }

    //          render: 게시물 상세보기 페이지 조리순서 렌더링          //
    const CookingSteps = () => {
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
                    {page === 1 && (<>
                        <div className='sequence-number'>{'1'}</div>
                        <div className='sequence-content-text'>{'미안하다 이거 보여주려고 어그로끌었다.. 나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다.. 그찐따같던 나루토가 맞나? 진짜 나루토는 전설이다..진짜옛날에 맨날나루토봘는데 왕같은존재인 호카게 되서 세계최강 전설적인 영웅이된나루토보면 진짜내가다 감격스럽고'}</div>
                        <div className='sequence-image'></div>
                    </>)}
                </div>
                <div className='steps-sequence-text-view-box'>
                    {page === 2 && (
                        <>
                        <div className='sequence-number'>{'1'}</div>
                        <div className='sequence-text-view-content-text'>{'미안하다 이거 보여주려고 어그로끌었다.. 나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다.. 그찐따같던 나루토가 맞나? 진짜 나루토는 전설이다..진짜옛날에 맨날나루토봘는데 왕같은존재인 호카게 되서 세계최강 전설적인 영웅이된나루토보면 진짜내가다 감격스럽고'}</div>
                        </>
                    )}
                </div>
                <div className='steps-tip-box'>
                    <div className='steps-tip-image'></div>
                    <div className='steps-tip-comment'>{'나루토 노래부터 명장면까지 가슴울리는장면들이 뇌리에 스치면서 가슴이 웅장해진다.. '}</div>
                </div>
            </div>
        );
    };

  return (
    <>
    <CookingSteps/>
    </>
  );
};
