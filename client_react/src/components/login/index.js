import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // const handleLogin = async () => {
  //   try {
  //     const response = await fetch('your-api-endpoint/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ username, password })
  //     });

  //     if (response.ok) {
  //       // Successful login
  //       const data = await response.json();
  //       // Store the authentication token or perform any other actions
  //     } else {
  //       // Failed login
  //       const errorData = await response.json();
  //       console.log(errorData.message); // Display the error message
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  return (
    <div>
      <h2>Login</h2>
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
        {/* //onClick={handleLogin} */}
        <button type="button">Login</button>
      </form>
    </div>
  );
};

export default Login;
