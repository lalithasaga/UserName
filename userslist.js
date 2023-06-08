import React from 'react';
import classes from './userList.css';

const userList =props => {
    return (
        <ul className={classes.users}> 
             {props.users.map((user => 
                <li key={user.id}>
                  {user.name} ({user.age} years old)
                </li>
                ))}
            </ul>
    );
};

export default userList;