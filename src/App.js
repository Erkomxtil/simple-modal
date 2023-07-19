import React, { useState } from 'react';
import Modal from './Modal';
import "./modal.css"

function App(props) {
  const [active, setActive] = useState("")
  return (
    <div>
    <button onClick={() => setActive("active")}>click</button>
    <Modal active={active} setActive={setActive} text="test de la modal"/>
      
    </div>
  );
}

export default App;