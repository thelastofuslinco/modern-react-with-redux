import { createPortal } from 'react-dom'
import React, { useEffect } from 'react'
import Panel from '../Panel'
import { GoX } from 'react-icons/go'

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    return () => document.body.classList.remove('overflow-hidden')
  }, [])

  return createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-40 cursor-pointer"
      ></div>
      <Panel className="fixed inset-40">
        <div className="flex justify-end">
          <GoX
            onClick={onClose}
            className="text-gray-500 text-3xl cursor-pointer hover:shadow-md hover:text-black rounded-full"
          />
        </div>
        {children}
      </Panel>
    </div>,
    document.querySelector('.modal-container')
  )
}

export default Modal
