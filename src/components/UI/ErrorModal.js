import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModal.module.css';

const ErrorModal=probs=>{


return ( 
    <div>
<div className={classes.backdrop} onClick={probs.onConfirm} />
<Card className={classes.modal}>
<header className={classes.header}>
<h2>{probs.title}</h2>

</header>
  <div className={classes.content}>
      <p>{probs.message}</p>
  </div>
 <footer className={classes.actions}>
     <Button  onClick={probs.onConfirm}>Okay</Button>
 </footer>  

</Card>
</div>
)
}
export default ErrorModal;