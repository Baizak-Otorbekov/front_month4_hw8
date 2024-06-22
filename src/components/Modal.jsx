import React from 'react'

const Modal = ({ open, setOpen, children }) => {
    const closeModal = () => {
        setOpen(false); 
    };
    return (
        <div style={!open ? { display: 'none' } : {}} onClick={() => setOpen(false)} className='modal-mask'>
            <div className='modal' onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal