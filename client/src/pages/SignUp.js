import React from 'react';
import './SignUp.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit() {
    // store user in database
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  render() {
    return (
      <div className="signup-form-parent">
        <div className="signup-form-container">
          <div className="signup-header-container">
            <p className="signup-header">Sign up here!</p>
          </div>
          <form onSubmit={() => this.handleSubmit()}>
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
            <button type="submit" className="signup-submit">Submit</button>
          </form>
        </div>
        <div className="signup-img">
          <img src="https://img1.wsimg.com/isteam/ip/12c66d24-d4cb-4b8…t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1023,cg:true" alt="signup-img"/>
        </div>
      </div>
    )
  }
}

export default SignupForm;