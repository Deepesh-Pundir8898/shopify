import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const userDetails = JSON.parse(localStorage.getItem(username));
    if (userDetails.email === email && userDetails.password === password) {
      localStorage.setItem("currentUser", username);
      navigate("/home");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleSignUp = () => {
    if (username && password && email) {
      const userDetails = { username, password, email };
      localStorage.setItem(username, JSON.stringify(userDetails));
      alert("Signup successful! Please login.");
      setIsSignUp(false);
    } else {
      alert("Required fields are missing");
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
          {isSignUp && (
            <div className={styles.inputContainer}>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          )}

          <div className={styles.inputContainer}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.btns}>
            <button
              className={styles.loginBtn}
              onClick={isSignUp ? handleSignUp : handleLogin}
            >
              {isSignUp ? "Sign Up" : "Login"}
            </button>
            <button
              className={styles.registerBtn}
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Back to Login" : "Create Account"}
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
