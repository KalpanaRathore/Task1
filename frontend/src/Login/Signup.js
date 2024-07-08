import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import GoogleButton from 'react-google-button'
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import auth from "../firebase.init";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, 
        user, 
        loading, 
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);


    if(user || googleUser){
      navigate('/content')
      console.log(user)
      console.log(googleUser)
    }
    if(error){
      console.log(error.message)
    }
    if(loading){
      console.log('loading...')
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(email, password);
    const user = {
      username: username,
      name: name,
      email: email,
    }
    axios.post('http://localhost:5000/register', user)
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  }

  return (
    <div className="login-container">
      <div className="form-container">
      <div  className="form-box">
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            className="display-name"
            placeholder="@username"
            onChange={(e) => setUsername(e.target.value)}
          />
           <input
            type="text"
            className="display-name"
            placeholder="Enter full name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
           <input
            type="password"
            className="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="btn-login">
            <button type="submit" className="btn">
              SignUp
            </button>
          </div>
        </form>
        <hr/>
        <div className="google-button">
          <GoogleButton
          className='g-btn'
          type='light'
          onClick={handleGoogleSignIn}
          />
        </div>
        </div>
        <div>
          Already have an account?
          <Link
          to= '/login'
          style={{
            textDecoration: 'none',
            color: 'skyblue',
            fontWeight: '600',
            marginLeft: '5px',
            cursor: 'pointer',
          }}
          >Login</Link>
          </div>
        </div>
      </div>
    
  )
}

export default Signup