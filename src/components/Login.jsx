import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <section className="login">
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;
