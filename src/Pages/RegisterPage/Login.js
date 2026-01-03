import React, { useState } from 'react';
import validation from './Validation'; // default export from validation.js
import { useNavigate, Link } from 'react-router-dom';
import "../RegisterPage/RegisterPage.css"; // use existing CSS

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validation(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Login successful", data);
      navigate("/home"); // navigate on success
    }
  };

  return (
    <div className="container">
      <div className="container-form">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>

          <div className="inputBox">
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          {errors.email && <span className="error">{errors.email}</span>}

          <div className="inputBox">
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          {errors.password && <span className="error">{errors.password}</span>}

          <div className='divBtn'>
            <button className='loginBtn'>LOGIN</button>
          </div>

          <div className='dont'>
            <p>Don't have an account? <Link to="/signup"><span>Sign Up</span></Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
