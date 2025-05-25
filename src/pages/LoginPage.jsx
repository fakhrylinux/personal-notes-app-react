import PropTypes from "prop-types";
import { login } from "../utils/api.js";
import LoginInput from "../components/LoginInput.jsx";
import { Link } from "react-router";
import { useState } from "react";
import ProgressBar from "../components/ProgressBar.jsx";

function LoginPage({ loginSuccess }) {
  const [loading, setLoading] = useState(false);

  async function onLogin({ email, password }) {
    setLoading(true);
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <>
      {loading && <ProgressBar />}
      <section className="login-page">
        <h2>Silakan masuk untuk melanjutkan ...</h2>
        <LoginInput login={onLogin} />
        <p>
          Belum punya akun? <Link to="/register">Daftar di sini.</Link>
        </p>
      </section>
    </>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
