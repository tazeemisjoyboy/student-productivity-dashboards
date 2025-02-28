// frontend/src/pages/LoginPage.js
import React from 'react';
import Auth from '../components/Auth';

const LoginPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Welcome to Student Productivity Dashboard</h1>
      <Auth />
    </div>
  );
};

export default LoginPage;