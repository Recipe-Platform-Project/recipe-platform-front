import React, { useState } from 'react'
import "./style.css"

export default function Modals() {

    const [modal , setModal] = useState<boolean>(false);

    const onModalClick = () => {
        setModal(!modal);
    }

    const Modal = () => {
        return (
        <div className="modal">
            <div className="modal-overlay"></div>
            <div className="modal-content">
                <button onClick={onModalClick}>❌</button>
            </div>
        </div>
        )
    }

  return (
    <>
    <div className='open-modal'>
        <button onClick={onModalClick}>Open Modal</button>
    </div>
    {modal && <Modal />}
    </>
  )
}
