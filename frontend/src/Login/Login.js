import React, { useState } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import GoogleButton from 'react-google-button'
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, 
    user, 
    loading, 
    error,
  ] = useSignInWithEmailAndPassword(auth);


  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

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
    signInWithEmailAndPassword(email, password);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  }

  return (
    <>
    <div className="login-container">
      <div className="form-container">
      <div className="form-box">
        <form onSubmit={handleSubmit}>
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
              Log In
            </button>
          </div>
        </form>
        <hr/>
        <div className="google-button">
          <GoogleButton
          className="g-btn"
          type='light'
          onClick={handleGoogleSignIn}
          />
        </div>
        </div>
        <div>
          Don't have account?
          <Link
          to= "/signup"
          style={{
            textDecoration: 'none',
            color: 'skyblue',
            fontWeight: '600',
            marginLeft: '5px',
            cursor: 'pointer',
          }}
          >Sign up</Link>
          </div>
      </div>
    </div>
    </>
  );
};

export default Login;
