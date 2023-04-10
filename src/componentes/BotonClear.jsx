import React from "react";
import "../estilo/BotonClear.css";

const BotonClear = (props) =>(
  <div 
  className="botonclear" 
  onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonClear;