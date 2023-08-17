import React from "react"


const Modal = ({show , onClose}) => {
   if(!show){
      return null;
   }
   console.log(show)
   return(
    <div className="model-overlay">
       <div className="model-close" onClick={onClose}>Close</div>
       <p className="model p">This is the content of the modal</p>
    </div>
   )
}

export default Modal