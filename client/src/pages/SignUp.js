import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './SignUp.css';
import { db } from '../firebase-config'
import {collection, getDocs} from 'firebase/firestore'

export default function SignupForm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(users);
      setUsers(data.docs.map((doc) => ({...doc.data(), username: doc.username})))
      getUsers();
    }; 
  }, []);

    return (
      <div className="signup-form-parent">
        <div className="signup-form-container">
          <div className="signup-header-container">
            <p className="signup-header">Sign up here!</p>
          </div>
          <form>
            <div className="signup-field">
              <label className="signup-label">First Name</label>
              <input onChange={this.update('firstName')}/>
            </div>
            <div className="signup-field">
              <label className="signup-label">Last Name</label>
              <input onChange={this.update('lastName')}/>
            </div>
            <div className="signup-field">
              <label className="signup-label">Username</label>
              <input onChange={this.update('lastName')}/>
            </div>
            <div className="signup-field">
              <label className="signup-label">Password</label>
              <input onChange={this.update('lastName')}/>
            </div>
            <div className="signup-footer">
              <button type="submit" className="signup-submit">Submit</button>
              <div className="to-login">Already have an account? <Link to="/signin" className="sign-in-btn">Sign in</Link></div>
            </div>
          </form>
        </div>
        <div className="signup-img">
          <img src="https://www.brainline.org/sites/default/files/styles/teaser_square/public/basic/youarenotalone.jpg?itok=szqaCno_" alt="signup-img"/>
        </div>
        <div>
          {users.map((user) => {
            <div>
              <h1>Name: {user.username}</h1>
            </div>
          })}
        </div>
      </div>
    )
  }

