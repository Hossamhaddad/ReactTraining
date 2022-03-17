import React from "react";
import classes from './Button.module.css';
const Button=probs=>{
return(

    <button 
    className={classes.button} 
    type={probs.type || 'button'} 
    onClick={probs.onClick}
    >{probs.children}</button>
)
}
export default Button;