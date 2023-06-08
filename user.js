import React, {useState}from 'react';
import Card from '../UI/card';
import Button from '../UI/Button.css';
import ErrorModal from '../UI/ErrorModal';
import classes from './user.css';
const AddUser = props => {
    const[enteredUsername,setEnteredUsername] = useState('');
    const[enteredAge,setEnteredAge] = useState('');
    const [error,setError]=useState();
    const AddUserHandler =(event) => {
        event.preventDefault();
        if(enteredUsername.trim().length ===0 || enteredAge.trim().length ===0) {
            setError({
                title:'invalid input',
                message : 'please enter a valid name and age(non-empty values).'
            });
          
        return;
        }
        if(+enteredAge < 1) {
            setError({
                title: 'invalid age',
                message:'please enter a valid age (>0).'

            });
           

            return;
        }
       props.onAddUser(enteredUsername,enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };
    
    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message}/>}
        <Card className={classes.input}>
          <form onSubmit={AddUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
            <Button type="submit">Add User</Button>
           </form>
        </Card>
        </div>
        
    );
};

export default AddUser;