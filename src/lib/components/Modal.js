import React from "react"
import "./modal.css"

/**
 *
 * @param {string} active this is the class of the container for the modal
 * @param {string} setActive this will set the class of the div to show or hide the modal. To show the modal set "active" and to hide it set ""
 * @param {string} text it allows you to put the text that you want in the modal
 * @returns {jsx} the modal
 */
const Modal = ({ active, setActive, text }) => {
  return (
    <div className={`modalWrapper ${active ? "active" : ""} `}>
      <p>
        {text}
        <span onClick={() => setActive("")}>X</span>
      </p>
    </div>
  )
}
export default Modal
