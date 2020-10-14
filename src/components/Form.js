import React, { useState } from "react";
import styles from './styles.module.css'

const Form = (props) => {
  const { input, setInput } = props;
  const [error, setError] = useState(false);
  const [firstNameValidator , setFirstNameValidator] = useState("");
  const [lastNameValidator , setLastNameValidator] = useState("");
  const [emailValidator , setEmailValidator] =useState("");
  const [passwordValidator , setPasswordValidator] = useState("");
  const [confirmPasswordValidator , setConfirmPasswordValidator] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


  const onChange = (e) => {
  
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    
    if (e.target.name == "firstName" ) {
       if (e.target.value.length < 2){
        setFirstNameValidator("your first Name has to be 2 charatcters or more") 
        setError(true);
      }
       else{ 
         setFirstNameValidator("");
         setError(false);
      }
    }else if (e.target.name == "lastName"){
      if (e.target.value.length < 2) {
      setLastNameValidator("your last Name has to be 2 characters or more")
      setError(true);
      
    }
     else{ 
       setLastNameValidator("");
       setError(false);
      }

    

    

    } else if (e.target.name == "email") {
       if(e.target.value.length < 5) {
        setEmailValidator("Your email has to be 5 charatcters or more");
        setError(true);
       }
       else { 
         setEmailValidator("");
         setError(false);
       }
      
    } else if (e.target.name == "password"  ) {
      if (e.target.value.length < 8){ 
        setPasswordValidator(" your password has to be 8 charchaters or more") ;
        setError(true);
      }
        else {
          setPasswordValidator("");
          setError(false);
        }
      
    } else if (e.target.name == 'confirmPassword'){
     if  (e.target.value.length < 8) {
      setConfirmPasswordValidator(" your password has to be 8 charchaters or more");
      setError(true);
    }
        
      else if (e.target.name == 'confirmPassword' && e.target.value != input.password) {
       setConfirmPasswordValidator(" your password doesn't match your password");
       setError(true);
          }else {
            setConfirmPasswordValidator("");
            setError(false);

          }
      

    }
    }
    
  
  const createUser = (e) => {
    e.preventDefault();
    const newUser = props.input;
    console.log("welcome", newUser);

    setHasBeenSubmitted(true);
  };

  return (
    <form onSubmit={createUser}>
      {hasBeenSubmitted ? (
        <h3>Thanks for submitting the form</h3>
      ) : (
        <h3>Welcome, please submit the form</h3>
      )}
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" onChange={onChange} /><br />
        {firstNameValidator}
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" onChange={onChange} /><br />
        {lastNameValidator}
      </div>
      <div>
        <label>Email:</label>
        <input type="text" name="email" onChange={onChange} /><br />
        {emailValidator}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" onChange={onChange} /><br />
        {passwordValidator}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" onChange={onChange} /><br />
        {confirmPasswordValidator}
      </div>
        {error ? <input type="submit" value="create User"  disabled/>: <input type="submit" value="create User"  />}
      
    </form>
  );
};
export default Form
