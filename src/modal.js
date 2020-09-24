import React from 'react'

const ModalComponent = (props) => {
  const {isVisible, onClose } = props

  return (
    <div className={`modal${isVisible ? ' is-active is-clipped' : ''}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="flexContainer">
          <p>Please enable push notifications</p>
          <button onClick={onClose} className="permission">Allow</button>
        </div>
      </div>
      <button onClick={onClose} className="modal-close is-large" aria-label="close"></button>
    </div>
  )
}

export default ModalComponent
