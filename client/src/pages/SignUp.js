import React, { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'


// Account Info
import {CognitoUserAttribute} from 'amazon-cognito-identity-js';
import { AccountContext } from '../context/Account';
import UserPool from '../context/UserPool';

// Components
import SpinnerLoader from "../components/SpinnerLoader";

const SignUp = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [zipCode, setZipCode] = useState("");
  // const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  

  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLogin] = useState(
    JSON.parse(localStorage.getItem('is-login')) || false
  );
  // const {authenticate} = useContext(AccountContext);

  /* Control login or signup form to show */
  const [loginForm, setloginForm] = useState(true);

      if (loggedIn) {
      return <Navigate to="/home" replace />;
    } 

  const onSubmitSignUp = (event) => {
      console.log("test login")
      setIsLoading(true);

      event.preventDefault();
      UserPool.signUp(username, passwordSignUp, [], null, (err, data) => {
          if (err) {
            console.error(err);
            setIsLoading(false);
            alert(err);
          }
          setIsLoading(false);
          setloginForm(true);
          console.log(data);
      });
  };
  
  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const inputObject = Object.fromEntries(formData);

    console.log(inputObject);
  };

    // var roleAttribute = new CognitoUserAttribute(
    //   {
    //     Name: 'name',
    //     Value: firstName.trim(),
    //   },
    //   // {
    //   //   Name: 'family name',
    //   //   Value: lastName.trim(),
    //   // },
    //   // {
    //   //   Name: 'phone number',
    //   //   Value: phone.trim(),
    //   // },
    //   // {
    //   //   Name: 'zoneinfo',
    //   //   Value: zipCode.trim(),
    //   // }
    // );

  return (
      <div className='login-page'>
          {isLoading ? <SpinnerLoader /> : null}
        
          {loginForm ? 
          <div className='login'>
            <div className='login__container'>
              <form className='login__form' onSubmit={onSubmit}>
                <h1>Login</h1>
                <div>
                  <input name="userNameLoginIn" placeholder="userNameLoginIn" />
                </div>
                <div>
                  <input name="password" placeholder="password" />
                </div>
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        : 
          <div className='login'>
            <div className='login__container'>

              <form className='login__form' onSubmit={onSubmitSignUp}>
                <h1>Create Account</h1>
                <div>
                  <input name="first_name" placeholder="first_name" />
                </div>
                <div>
                  <input name="last_name" placeholder="last_name" />
                </div>
                <div>
                  <input name="userNameSingUp" placeholder="userNameSingUp" />
                </div>
              </form>
              <button onClick={() => setloginForm(true)} className='plain__btn' >Already have an account? Log In</button>
            </div>
          </div>
        }
    </div>
  )
}

export default SignUp