import React, { useEffect, useState } from 'react';
import "../RegisterPage/RegisterPage.css";
import { AiOutlineUser } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import validation from './Validation'; // ✅ single validation file

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);

  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSignUp = (e) => {
    e.preventDefault();
    const errors = validation(data, "signup"); // ✅ pass "signup" type
    setError(errors);
    setSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && submit) {
      navigate("/home");
    }
  }, [error, submit, navigate]);

  return (
    <div className="container">
      <div className="container-form">
        <form onSubmit={handleSignUp}>
          <h1>Create Account</h1>
          <p>Please fill the input below here.</p>

          <div className="inputBox">
            <AiOutlineUser className='fullName' />
            <input
              type="text"
              name="fullname"
              value={data.fullname}
              onChange={handleChange}
              placeholder="Full Name"
            />
          </div>
          {error.fullname && <span className="error">{error.fullname}</span>}

          <div className="inputBox">
            <FiMail className='mail' />
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          {error.email && <span className="error">{error.email}</span>}

          <div className="inputBox">
            <RiLockPasswordLine className='password' />
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          {error.password && <span className="error">{error.password}</span>}

          <div className="inputBox">
            <RiLockPasswordLine className='password' />
            <input
              type="password"
              name="confirmpassword"
              value={data.confirmpassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
          </div>
          {error.confirmpassword && <span className="error">{error.confirmpassword}</span>}

          <div className='divBtn'>
            <button className='loginBtn'>SIGN UP</button>
          </div>
        </form>

        <div className='dont'>
          <p>Already have an account? <Link to="/"><span>Sign in</span></Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
