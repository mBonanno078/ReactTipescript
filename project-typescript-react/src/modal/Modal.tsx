import { type } from "@testing-library/user-event/dist/type";
import React from "react";

type State = {
    isOpen: boolean
    closeModal : () => void
}

const Modal = ( isOpen: State, closeModal: State ) => {
    return(
       <div className={`modal ${isOpen.isOpen ? 'show' : ''}`}>
        <div className="content-title-modal">
            <h3 className="title">
                Sono la modal aperta
            </h3>
        </div>
        <button 
            className="btn" 
            onClick={ isOpen.closeModal }
        >
            Close
        </button>
       </div>
    );
}

export default Modal;