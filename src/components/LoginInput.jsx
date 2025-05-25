import PropTypes from "prop-types";
import useInput from "../hooks/useInput.js";

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    login(Object.fromEntries(formData.entries()));
  };

  return (
    <form onSubmit={onSubmitHandler} className="login-input">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
        name="email"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
        name="password"
      />
      <button>Masuk</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
