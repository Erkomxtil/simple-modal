import React from 'react';
import "./modal.css"

export default function Modal({ active, setActive, text }) {
  return (
    <div className={`modalWrapper ${active ? "active": ""} `}>
      <p>
        {text}
        <span onClick={() => setActive("")}>X</span>
      </p>
    </div>
  );
}
