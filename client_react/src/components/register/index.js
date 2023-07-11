import React, { useState } from "react";
import { handleRegisteredUser } from "../../fetcher/register/index";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRegisteredbutton = async () => {

    try {
      const userData = {
        username: username,
        password: password,
        email: email
      };
  
      const response = await handleRegisteredUser(userData);
      
      console.log("Registration successful", response);
    } catch (error) {
      console.log("Registration failed", error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />

        <button type="button" onClick={handleRegisteredbutton}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
