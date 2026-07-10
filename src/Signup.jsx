import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !mobile || !password || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password and Confirm Password do not match");
      return;
    }

    const user = {
      name,
      email,
      mobile,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup Successful");
    navigate("/");
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignup}>
        <label>Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <label>Email</label>
        <br />
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <label>Mobile Number</label>
        <br />
        <input
          type="text"
          placeholder="Enter Your Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
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

        <label>Confirm Password</label>
        <br />
        <input
          type="password"
          placeholder="Confirm Your Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <br /><br />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Sign Up</button>

        <br /><br />

        <p>Already have an account?</p>

        <button
          type="button"
          onClick={() => navigate("/")}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Signup;