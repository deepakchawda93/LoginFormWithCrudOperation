import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import loginImg from "../../image/login.svg";
import { Route, Routes } from "react-router-dom";
import {  toast } from 'react-toastify';

import { Firebase } from "../Firebase";
import "../pages/login.css";
import RegistrationForm from "./RegistrationForm";

const Login = () => {
  let navigate = useNavigate();
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };

  const [login, setLogin] = useState({
    email: "",
    password: "",
    conformpassword: "",
  });
  const handleChangeLogin = (e) => {
    const { name, value } = e.target;

    setLogin({ ...login, [name]: value });
  };
  const submitLoign = (event) => {


    
    const json = JSON.stringify(login);
    localStorage.setItem("data", json);
    

  };
  return (
    <>
      <div id="loginForm" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center">
          <div className="card shadow" style={{ maxWidth: "800px" }}>
            <div className="row g-0">
              <div className="col-md-4 order-md-1 d-flex align-items-center">
                <img
                  src={loginImg}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8 order-md-0">
                <div className="card-body">
                  <h5 className="card-title text-center">LOGIN FORM</h5>
                  <form
                    className="row g-3"
                    onSubmit={(event) => {
                      submitLoign(event);
                    }}
                  >
                    <div className="col-md-12 ">
                      <label
                        htmlFor="validationDefault01"
                        className="form-label"
                      >
                        Email id
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="validationDefault01"
                        placeholder="Email"
                        onChange={handleChangeLogin}
                        name="email"
                        value={login.email}
                        onBlur={handleFocus}
                        focused={focused.toString()}
                        required
                      />
                      <span>it should be valid email address</span>
                    </div>
                    <div className="col-md-12 ">
                      <label
                        htmlFor="validationDefault02"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault02"
                        placeholder="*********"
                        onChange={handleChangeLogin}
                        value={login.password}
                        name="password"
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                        onBlur={handleFocus}
                        focused={focused.toString()}
                        required
                      />
                      <span>
                        Minimum eight characters, at least one uppercase letter,
                        one lowercase letter, one number and one special
                        character:
                      </span>
                    </div>
                    <div className="col-md-12 ">
                      <label
                        htmlFor="validationDefault02"
                        className="form-label"
                      >
                        Conform Password
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault02"
                        placeholder="Conform password"
                        onChange={handleChangeLogin}
                        value={login.conformpassword}
                        name="conformpassword"
                        pattern={login.password}
                        onBlur={handleFocus}
                        focused={focused.toString()}
                        required
                      />
                      <span>password does not match</span>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-outline-success" >
                          LogIn
                        </button>

                        {/* <button className="btn btn-primary p-2" type="button">
                      <i className="fab fa-facebook"></i> Login with Facebook
                      </button> */}
                      <p className=" text-center p-0 m-0"> OR</p>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            Firebase();
                          }}
                          type="button"
                        >
                          <i className="fab fa-google-plus-g p-2"></i> Login
                          with Google+
                        </button>
                        <NavLink to="/Registration">sign up and Registration</NavLink>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
            <Route path="/Registration" element={<RegistrationForm />} />
      </Routes>
    </>
  );
};

export default Login;
