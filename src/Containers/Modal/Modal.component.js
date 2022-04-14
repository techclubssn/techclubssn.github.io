import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.styles.css'
import ModalOverlay from './ModalOverlay.component';

const Backdrop = ({onClose}) => {
    return (
        <div className='backdrop' onClick={onClose} ></div>
    )
}


const Modal = ({onClose}) => {
    return (
        <div>
            {ReactDOM.createPortal(<Backdrop onClose={onClose} />, document.getElementById('backdrop-root') ) }
            {ReactDOM.createPortal(<ModalOverlay onClose={onClose}/>, document.getElementById('overlay-root') ) }
        </div>
    )
}
export default Modal;