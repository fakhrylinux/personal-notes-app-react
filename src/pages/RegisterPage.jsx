import { Link, useNavigate } from "react-router";
import { register } from "../utils/api.js";
import RegisterInput from "../components/RegisterInput.jsx";

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="auth-page">
      <div className="auth-page__container">
        <h2>Gak perlu serius-serius ya isinya ...</h2>
        <RegisterInput register={onRegisterHandler} />
        <p>
          Kembali ke <Link to="/">Masuk</Link>
        </p>
      </div>
    </section>
  );
}

export default RegisterPage;
