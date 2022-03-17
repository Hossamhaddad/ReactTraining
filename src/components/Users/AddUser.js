import react ,{useState}from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css';


const AddUser=(probs)=>{
const [enteredUserName,setUserName]=useState('');
const [enteredUserAge,setUserAge]=useState('');
const [error,setError]=useState();

const addUserHandler=(event)=>{
event.preventDefault();
if(enteredUserName.trim().length===0||enteredUserAge.trim().length===0){
    setError({
        title:'Invalid input',
        message:'Please enter a valid name and age '
    })
    return;
}
if(+enteredUserAge<1){
    setError({
        title:'Invalid input',
        message:'Please enter a valid age  (>0) '
    })
    return;
}
probs.onAddUser(enteredUserName,enteredUserAge);

};

const userNameHandler=(event)=>{    
setUserName(event.target.value);

}

const userAgeHandler=(event)=>{
setUserAge(event.target.value);

}
const errorHandler=()=>{
setError(null);
}

    return(
        <div>
      { error && <ErrorModal title={error.title}  message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
  <form onSubmit={addUserHandler}>
  <label htmlFor="username">User Name</label>
  <input id="username" type="text" onChange={userNameHandler}/> 
  <label htmlFor="age">Age (Years)</label>
  <input type="number" id="age"  onChange={userAgeHandler}/>
  <Button type='submit' onConfirm={errorHandler}>Add User</Button>
  </form>   
  </Card>       
  </div>
    )
};

export default AddUser;