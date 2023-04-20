import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { useGlobalContext } from './Context'
const Modal = () => {
    const {ismodelopen,Modelclose} = useGlobalContext()
  return (
    <div className={`${ismodelopen ?'show-modal modal-overlay':'modal-overlay'}`}>
        <div className='modal-container'>
            <h3>modal content</h3>
            <button className='close-modal-btn' onClick={Modelclose}>
                <FaTimes/>
            </button>
        </div>
    </div>
  )
}

export default Modal