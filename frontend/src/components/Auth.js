// frontend/src/components/Auth.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle User Registration
  const handleRegister = async () => {
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('User registered successfully!');
    } catch (error) {
      console.error("Registration Error:", error);
      alert(`Error: ${error.message}`);
    }
  };

  // Handle User Login
  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged in successfully!');
    } catch (error) {
      console.error("Login Error:", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Authentication</h2>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary me-2" onClick={handleLogin}>
        Login
      </button>
      <button className="btn btn-success" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Auth;