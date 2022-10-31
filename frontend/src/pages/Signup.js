import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await signup(email, password);
  };

  return (
    <div className="create">
      <form className="signup" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        {/* <label>First Name: </label>
         <input type="text" onChange={(event) => setEmail(event.target.value)} value={email} />
        <br />
        <label>Last Name: </label>
         <input type="email" onChange={(event) => setEmail(event.target.value)} value={email} />
        <br /> */}
        <label>Email: </label>
        <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <br />

        <label>Password: </label>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <br />
        <button disabled={isLoading}>sign up</button>
        <br />
        {error && <div className="error">{error}</div>}
      </form>
      <p>
        <b>already have an account?</b> <Link to="/login">log in here.</Link>
      </p>
    </div>
  );
};

export default Signup;
