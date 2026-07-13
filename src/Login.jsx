import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
 
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      setError("Please sign up first");
      return;
    }

    if (email === user.email && password === user.password) {
      alert("Login Successful");
      setError("");
      navigate("/home");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <label>Email</label>
        <br />
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <label>Password</label>
        <br />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Login</button>

        <br /><br />

        <p>Don't have an account?</p>

        <button
          type="button"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};




export default Login;