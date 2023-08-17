import React from "react"


const Modal = ({show , onClose}) => {
   if(!show){
      return null;
   }
   console.log(show)
   return(
    <div className="model-overlay">
       <button className="model-close" onClick={onClose}>Close</button>
       <p className="model-p">This is the content of the modal</p>
    </div>
   )
}

export default Modal