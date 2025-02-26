import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.leftContainer}>
        <h1>
          Welcome back to <br /> Pretty Login
        </h1>
        <p>Its great to have you back!</p>
        <div className={styles.form}>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.btns}>
            <button className={styles.loginBtn} onClick={handleLogin}>
              Login
            </button>
            <button className={styles.registerBtn} onClick={handleLogin}>
              Create Account
            </button>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img
          src="https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?cs=srgb&dl=pexels-jplenio-1423600.jpg&fm=jpg"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Login;
