import React from 'react';

import Button from './Button';
import classes from './ErrorModal.css';
 const ErrorModal = props => {
    return(
        <div>

       <div className={classes.backdrop} onclick={props.on.confirm}></div>
       <card className={classes.modal}>
      <header className={classes.header}>
         <h2>{props.title}</h2>
       </header>
       <div className={classes.content}>
        <p>{props.message}</p>
       </div>
       <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
       </footer>
    </card>
    </div>
    );
 };
 export default ErrorModal;