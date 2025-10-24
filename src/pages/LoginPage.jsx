import LoginInput from "../components/LoginInput.jsx";
import { Link } from "react-router";
import { useState } from "react";
import ProgressBar from "../components/ProgressBar.jsx";
import { useAuth } from "../hooks/useAuth.js";

function LoginPage() {
  const { onLogin } = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleLogin({ email, password }) {
    setLoading(true);
    await onLogin(email, password);
  }

  return (
    <>
      {loading && <ProgressBar />}
      <section className="auth-page">
        <div className="auth-page__container">
          <h2>Silakan masuk untuk melanjutkan ...</h2>
          <LoginInput login={handleLogin} />
          <p>
            Belum punya akun? <Link to="/register">Daftar di sini.</Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
