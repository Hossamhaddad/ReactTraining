import React from "react";
import classes from './Card.module.css';

const Card=probs=>{
return <div className={`${classes.card} ${probs.className}`}>{probs.children}</div>

}
export default Card;