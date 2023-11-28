import React, { SetStateAction, Dispatch, useState } from 'react'
import "./style.css"
import { url } from 'inspector';
import {  } from 'redux';

interface Props {
    image: string | null;
    setModal: Dispatch<SetStateAction<boolean>>;
}

//          component: modal 페이지          //
export default function Modals({ image, setModal }: Props) {

    //          event handler: modal close 버튼 클릭 이벤트 처리 함수          //
    const onCloseClickHandler = () => {
        setModal(false);
    }

//          render: modal 상단 렌더링          //
    
return (
    <div className="modal">
        <div className="modal-overlay" onClick={onCloseClickHandler}></div>
        <div className="modal-content" style={{backgroundImage: `url(${image})`}} onClick={onCloseClickHandler}>
        </div>
    </div>
    )

}
