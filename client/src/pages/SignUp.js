import React, { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import "./SignUp.css"

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
  const [memberType, setMemberType] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLogin] = useState(
    JSON.parse(localStorage.getItem('is-login')) || false
  );
  const {authenticate} = useContext(AccountContext);

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
          axios.post('/users/add', {
            firstName: firstName,
            lastName: lastName,
            _id: username,
            password: password,
            memberType: memberType
          });
          window.preventDefault();
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
          <div className="signup-form-parent">
          <div className="signup-form-container">
            <div className="signup-header-container">
              <p className="signup-header">Join our community!</p>
            </div>

            <form className='login__form' onSubmit={onSubmitSignUp}>
              <div className="signup-field">
                  <p className="signup-label">FIRST NAME</p>
                  <input type="text" placeholder="First Name" className='login__input' value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
              </div>
              <div className="signup-field">
              <p className="signup-label">LAST NAME</p>
                  <input type="text" placeholder="Last Name" className='login__input' value={lastName} onChange={(event) => setLastName(event.target.value)} required />
              </div>
              <div className="signup-field">
              <p className="signup-label">USERNAME</p>
              <input type="text" placeholder="User Name" className='login__input' value={usernameSignUp} onChange={(event) => setUserNameSignUp(event.target.value)} required />
              </div>
              <div className="signup-field">
              <p className="signup-label">PASSWORD</p>
                  <input type="password" className='login__input' placeholder='Password' value={passwordSignUp} onChange={(event) => setPasswordSignUp(event.target.value)} required />
              </div>
              <div className="signup-field">
              <p className="signup-label">MEMBER TYPE</p>
                  <input type="membertype" className='login__input' placeholder='Member Type' value={memberType} onChange={(event) => setMemberType(event.target.value)} required />
              </div>
              <div className="signup-footer">
                <button className='signup-submit' type='submit'>Sign Up</button>
                <div className='to-login' >Already have an account? <div className="signin-btn" onClick={() => {setloginForm(false)}}>Sign in</div></div>
              </div>
              </form>
            </div>
            <div className="signup-img">
            <img src="https://www.brainline.org/sites/default/files/styles/teaser_square/public/basic/youarenotalone.jpg?itok=szqaCno_" alt="signup-img"/>
          </div>
        </div>
        : 

        <div className="signup-form-parent">
          <div className="signup-form-container">
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