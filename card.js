import React from 'react';
import  classes from './card.css';
 const Card = (props) => {
    return <div className ={`${classes.card} ${props.classNae}`} >{props.children}</div>
 };

 export default Card;