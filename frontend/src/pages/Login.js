import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await login(email, password);
  };

  return (
    <div className="categories">
      <form className="login" onSubmit={handleSubmit}>
        <h2>Log in</h2>

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
        <button disabled={isLoading}>log in</button>
        {error && <div className="error">{error}</div>}
      </form>

      <p>
        <b>no account?</b> <Link to="/signup">sign up here.</Link>
      </p>
    </div>
  );
};

export default Login;
