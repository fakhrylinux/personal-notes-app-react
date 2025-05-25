import PropTypes from "prop-types";
import useInput from "../hooks/useInput.js";

function RegisterInput({ register }) {
  const [name, handleNameChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    register(Object.fromEntries(formData.entries()));
  };

  return (
    <form onSubmit={onSubmitHandler} className="register-input">
      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={handleNameChange}
        name="name"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        name="email"
      />
      <input
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        value={password}
        onChange={handlePasswordChange}
        name="password"
      />
      <button>Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
