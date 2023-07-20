import React from 'react';
import "./modal.css"

const Modal = ({ active, setActive, text }) {
  return (
    <div className={`modalWrapper ${active ? "active": ""} `}>
      <p>
        {text}
        <span onClick={() => setActive("")}>X</span>
      </p>
    </div>
  );
}
export default Modal