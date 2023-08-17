
import React, { useState } from "react";
import Modal from "./Modal";
import './../styles/App.css';

const App = () => {
  const [showModal , setShowModal] = useState(false)

  function handleCloseModal(){
    setShowModal(false)
  }
  return (
    <div>
        {/* Do not remove the main div */}
       <div className="model">
          <button onClick={()=>setShowModal(true)}>Show Modal</button> 
            <Modal show = {showModal} onClose = {handleCloseModal}  />
       </div>
    </div>
  )
}

export default App
