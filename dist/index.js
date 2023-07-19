import React from 'react';

function Modal({ active, setActive, text }) {
  return (
    <div className={active}>
      <p>
        {text}
        <span onClick={() => setActive("")}>X</span>
      </p>
    </div>
  );
}

export default Modal;