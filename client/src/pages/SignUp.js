import React, { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'


// Account Info
// import {CognitoUserAttribute} from 'amazon-cognito-identity-js';
import { AccountContext } from '../context/Account';
import UserPool from '../context/UserPool';

// Components
import SpinnerLoader from "../components/SpinnerLoader";

const SignUp = () => {
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
      // AWS Cognito create account for user
      UserPool.signUp(usernameSignUp, passwordSignUp, [], null, (err, data) => {
          if (err) {
            console.error(err);
            setIsLoading(false);
            alert(err);
          }
          setIsLoading(false);
          setloginForm(false);
          console.log(data);
      });
      // Send user info: usernameSignUp, passwordSignUp, firstName, lastName to DB
      // axios.post
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
          <div className="signup-form-parent">
          <div className="signup-form-container">
            <div className="signup-header-container">
              <p className="signup-header">Sign up here!</p>
            </div>

            <form className='login__form' onSubmit={onSubmitSignUp}>
              <div className="signup-field">
                  <label className="signup-label">First Name</label>
                  <input type="text" placeholder="First Name" className='login__input' value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
              </div>
              <div className="signup-field">
              <label className="signup-label">Last Name</label>
                  <input type="text" placeholder="Last Name" className='login__input' value={lastName} onChange={(event) => setLastName(event.target.value)} required />
              </div>
              <div className="signup-field">
              <label className="signup-label">Username</label>
              <input type="text" placeholder="User Name" className='login__input' value={usernameSignUp} onChange={(event) => setUserNameSignUp(event.target.value)} required />
              </div>
              <div className="signup-field">
              <label className="signup-label">Password</label>
                  <input type="password" className='login__input' placeholder='Password' value={passwordSignUp} onChange={(event) => setPasswordSignUp(event.target.value)} required />
              </div>
              <div className="signup-footer">
                <button className='btn login__btn' type='submit'>Sign Up</button>
              </div>
              </form>
            <button onClick={() => {
              setloginForm(false)
              
            }} className='plain__btn' >Already have an account? Log In</button>
            </div>
            <div className="signup-img">
            <img src="https://www.brainline.org/sites/default/files/styles/teaser_square/public/basic/youarenotalone.jpg?itok=szqaCno_" alt="signup-img"/>
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

export default SignUp
