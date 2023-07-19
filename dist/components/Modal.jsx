import React from "react"
import "../modal.css"

/**
 * Change the class of the modal if click on the button that you choose to display it
 * @param {*} active, setActive to change the class of the modal
 * @returns the class "active" on the modalWrapper to make it work
 */
export default function Modal({ active, setActive, text }) {
  
  return (
    <div className={active}>
      <p>
        {text}
        <span onClick={() => setActive("")}>X</span>
      </p>
    </div>
  )
}

