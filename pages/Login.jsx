import React, { useEffect, useState } from "react";
import logo from "../src/assets/img/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [err, setError] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/career");
    }
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out",
    });
  }, []);

  const login = () => {
    //login method
    axios
      .post("http://localhost:3000/admin/login", { username, password })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/career");
          console.log(res.data);
          localStorage.setItem("token", res?.data?.token);
        }
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <a href="index.php" className="">
            <img src={logo} width="125px" height="70px" alt="" />
          </a>
          <nav id="navbar" className="navbar">
            <ul></ul>
          </nav>
        </div>
      </header>
      <main id="main" className="p-5" data-aos="fade-up">
        <div className="login-wrap">
          <div className="login-html">
            <input id="tab-1" type="radio" name="tab" className="sign-in" />
            <label htmlFor="tab-1" className="tab">
              Sign In
            </label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab">
              Sign Up
            </label>
            <div className="login-form">
              <div className="sign-in-htm">
                <form action="" method="post" id="login">
                  <div className="group">
                    <label htmlFor="username" className="label">
                      Username
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(event) => {
                        event.preventDefault();
                        setUsername(event.target.value);
                      }}
                      id="username"
                      className="form-control input"
                      placeholder="User Name"
                      required={true}
                      name="username"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="password" className="label">
                      Password
                    </label>
                    <input
                      value={password}
                      onChange={(event) => {
                        event.preventDefault();
                        setPassword(event.target.value);
                      }}
                      type="password"
                      className="form-control input"
                      id="password"
                      placeholder="Password"
                      name="password"
                      data-type="password"
                      required={true}
                    />
                  </div>
                  <div className="group">
                    <input
                      type="checkbox"
                      id="check"
                      className="check"
                      name="remember"
                    />
                    <label htmlFor="check">
                      <span className="icon"></span> Keep me Signed in
                    </label>
                  </div>
                  {err && (
                    <p
                      style={{
                        padding: "5px",
                        borderRadius: "8px",
                        backgroundColor: "white",
                        textAlign: "center",
                      }}
                    >
                      {"email or password is invalid!"}
                    </p>
                  )}
                  <div className="group">
                    <button
                      name="login"
                      onClick={(event) => {
                        event.preventDefault();
                        login();
                      }}
                      className="btn btn-primary btn-block button"
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="hr"></div>
                  <div className="foot-lnk">
                    <a href="">Forgot Password?</a>
                  </div>
                </form>
              </div>
              <div className="sign-up-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    Username
                  </label>
                  <input
                    id="user"
                    value={username}
                    onChange={(event) => {
                      event.preventDefault();
                      setUsername(event.target.value);
                    }}
                    type="text"
                    className="input"
                  />
                </div>
                <div className="group">
                  <label htmlFor="signuppass" className="label">
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(event) => {
                      event.preventDefault();
                      setPassword(event.target.value);
                    }}
                    id="signuppass"
                    type="password"
                    className="input"
                    data-type="password"
                  />
                </div>
                <div className="group">
                  <label htmlFor="repeatpass" className="label">
                    Repeat Password
                  </label>
                  <input
                    id="repeatpass"
                    value={repeatPassword}
                    onChange={(event) => {
                      event.preventDefault();
                      setRepeatPassword(event.target.value);
                    }}
                    type="password"
                    className="input"
                    data-type="password"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="label">
                    Email Address
                  </label>
                  <input
                    id="email"
                    value={email}
                    onChange={(event) => {
                      event.preventDefault();
                      setEmail(event.target.value);
                    }}
                    type="text"
                    className="input"
                  />
                </div>
                <div className="group">
                  <button
                    className="button"
                    value="Sign Up"
                    onClick={(event) => {
                      event.preventDefault();
                    }}
                  >
                    Sign Up
                  </button>
                </div>
                <div className="hr"></div>
                <div className="foot-lnk">
                  <label htmlFor="tab-1">Already a Member?</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
