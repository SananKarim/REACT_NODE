import React, { useState } from "react";
import { handleRegisteredUser } from "../../fetcher/register/index";
import "./style.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationId, setRegistrationId] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setUsernameError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handleRegisteredbutton = async () => {
    try {
      const userData = {
        username: username,
        password: password,
        email: email,
      };

      const response = await handleRegisteredUser(userData);
      console.log(response.success);
      if (response.success) {
        setRegistrationSuccess(true);
        setRegistrationId(response.id);
      }

      console.log(response, "this is it");
    } catch (error) {
      console.log(error.error, "this is component");
      if (error.error) {
        error.error.forEach((errorMsg) => {
          if (errorMsg === '"username" is not allowed to be empty') {
            setUsernameError("Username is required");
          }
          if (errorMsg === '"email" is not allowed to be empty') {
            setEmailError("Email is required");
          }
          if (errorMsg === '"password" is not allowed to be empty') {
            setPasswordError("Password is required");
          }
          if (errorMsg === '"email" must be a valid email') {
            setEmailError("Enter a valid Email");
          }
          if (
            errorMsg === '"password" length must be at least 4 characters long'
          ) {
            setPasswordError("Password must be at least 4 characters long");
          }
          if (errorMsg === "User already exists.") {
            setPasswordError("user already exists");
          }
        });
      }
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {registrationSuccess ? (
        <div className="success-message">
          <p>Registration Successful!</p>
          <p>Your Registration ID: {registrationId}</p>
        </div>
      ) : (
        <form>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
            <p className="error-message">{usernameError}</p>
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
            <p className="error-message">{emailError}</p>
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <p className="error-message">{passwordError}</p>
          </label>
          <br />

          <button type="button" onClick={handleRegisteredbutton}>
            Register
          </button>
        </form>
      )}
    </div>
  );
};

export default Register;
