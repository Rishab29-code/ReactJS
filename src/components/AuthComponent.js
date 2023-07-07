import React, { useState } from 'react';
import { auth } from '../firebase';
import {useNavigate} from "react-router-dom"

const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [msg,setMsg]=useState('Login or Sign up');

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed up:', user);
        setEmail("");
        setPassword("");
        setError('');
        setMsg('Signup successfull')
      })
      .catch((error) => {
        setError(error.message);
        console.error('Sign-up error:', error);
      });
  };

  const handleSignIn = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        navigate("/counter")
        console.log('User signed in:', user);
      })
      .catch((error) => {
        setError(error.message);
        console.error('Sign-in error:', error);
      });
  };

 

  return (
    <div>
        <h3>{msg}</h3>
      <h2>Authentication</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      
      <button onClick={handleSignUp}>Sign Up</button>
      
      <button onClick={handleSignIn}>Sign In</button>
      
      {error && <p>{error}</p>}
    </div>
  );
};

export default AuthComponent;
