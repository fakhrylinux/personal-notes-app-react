import { createContext, useState } from "react";
import { getUserLogged, login, putAccessToken } from "../utils/api.js";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router";

const AuthContext = createContext({
  authedUser: null,
  onLogin: () => {},
  onLogout: () => {},
});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [authedUser, setAuthedUser] = useState(null);

  const handleLogin = async (email, password) => {
    const { error, data } = await login({ email, password });
    if (!error) {
      putAccessToken(data.accessToken);
    }
    const { data: user } = await getUserLogged();
    setAuthedUser(user);

    const origin = location.state?.from?.pathname || "/";
    navigate(origin);
  };

  const handleLogout = async () => {
    setAuthedUser(() => null);
    putAccessToken("");
  };

  const value = {
    authedUser,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
