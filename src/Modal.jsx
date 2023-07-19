import React from "react"
import closeBtn from "./assets/close.png"
import "./modal.css"

/**
 * Change the class of the modal if click on the button that you choose to display it
 * @param {*} active, setActive to change the class of the modal
 * @returns the class "active" on the modalWrapper to make it work
 */
function Modal({ active, setActive, text }) {
  return (
    <div className={`${active} modalWrapper`}>
      <p>
        {text}
        <img src={closeBtn} alt="Close button" onClick={() => setActive("")} />
      </p>
    </div>
  )
}

export default Modal