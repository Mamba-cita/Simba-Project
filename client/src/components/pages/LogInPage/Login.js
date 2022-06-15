import React from "react";
import { useRef, useEffect, useState} from "react";

import "./login.css";

const Login = () => {
  
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user, password);
    setUser("");
    setPassword("");
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in</h1>
          <br />
          <p>
            <a href="/">Go to home page</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errMsg" : "hide"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <h1>Log In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="user">User Name</label>
            <input
              type="text"
              required
              id="user"
              ref={userRef}
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign In</button>
          </form>
          <p>
            Not Yet Registered? <br />
            <span>
              <a href="/register">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
