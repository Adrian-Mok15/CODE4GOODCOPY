<<<<<<< HEAD
import { Link } from 'react-router-dom';
import React from 'react';
import './SignUp.css';
import { useState, useEffect } from 'react';
import {db} from './firebase-config.js'
import {collection, getDocs} from 'firebase/firestore'
=======
import React, { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'
>>>>>>> michelle


<<<<<<< HEAD
  
  handleSubmit() {
    logCities()
  }
=======
// Account Info
// import {CognitoUserAttribute} from 'amazon-cognito-identity-js';
import { AccountContext } from '../context/Account';
import UserPool from '../context/UserPool';
>>>>>>> michelle

// Components
import SpinnerLoader from "../components/SpinnerLoader";

const SignUp = () => {
  // const [email, setEmail] = useState("");
  // const [zipCode, setZipCode] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [usernameSignUp, setUserNameSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLogin] = useState(
    JSON.parse(localStorage.getItem('is-login')) || false
  );
  const {authenticate} = useContext(AccountContext);

  /* Control login or signup form to show */
  const [loginForm, setloginForm] = useState(true);

    if (loggedIn) {
      return <Navigate to="/profile" replace />;
    } 

    const onSubmitSignUp = (event) => {
      setIsLoading(true);

      event.preventDefault();
      UserPool.signUp(usernameSignUp, passwordSignUp, [], null, (err, data) => {
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
  
  const onSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();
    authenticate(username, password)
      .then(data => {
        console.log("Logged in!", data);
        localStorage.setItem('is-login', JSON.stringify(true));
        setIsLoading(false);
        setLogin(true);
      })
      .catch(err => {
        console.error("Failed to login", err);
        alert(err);
        setIsLoading(false);
      })
    };


  return (
      <div className='login-page'>
          {isLoading ? <SpinnerLoader /> : null}
        
      {loginForm ? 
          <div className='login'>
            <div className='login__container'>

              <form className='login__form' onSubmit={onSubmitSignUp}>
                  <h1>Create Account</h1>
                  <input type="text" placeholder="First Name" className='login__input' value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
                  <br />
                  <input type="text" placeholder="Last Name" className='login__input' value={lastName} onChange={(event) => setLastName(event.target.value)} required />
                  <br />
                  <input type="text" placeholder="User Name" className='login__input' value={usernameSignUp} onChange={(event) => setUserNameSignUp(event.target.value)} required />
                  <br />
                  <input type="password" className='login__input' placeholder='Password' value={passwordSignUp} onChange={(event) => setPasswordSignUp(event.target.value)} required />
                  <br />
                  
                  <button className='btn login__btn' type='submit'>Sign Up</button>
              </form>
            <button onClick={() => {
              setloginForm(false)
              console.log(loginForm)
            }} className='plain__btn' >Already have an account? Log In</button>
            </div>
        </div>
        : 
        <div className='login'>
            <div className='login__container'>
            <form className='login__form' onSubmit={onSubmit}>
              <h1>Login</h1>
              <input type="text" className='login__input' value={username} placeholder='User Name' onChange={(event) => setUserName(event.target.value)} required />
              <br />
              <input type="password" className='login__input' value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)} required />
              <br />
              <button className='btn login__btn' type='submit'>Login</button>
              <button className='plain__btn' onClick={() => setloginForm(true)}>Need an account? Sign up</button>
            </form>
          </div>
          </div>
        }
    </div>
  )
}

<<<<<<< HEAD

const logCities = async () => {
  let citiesRef = db.collection('users');
  let allCities = await citiesRef.get();
  for(const doc of allCities.docs){
    console.log(doc.id, '=>', doc.data());
  }
}

function Test() {
  console.log('made it')
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users")
}

export default SignupForm;
=======
export default SignUp
>>>>>>> michelle
