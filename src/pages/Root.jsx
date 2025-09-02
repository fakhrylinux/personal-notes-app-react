import Navigation from "../components/Navigation.jsx";
import { Outlet } from "react-router";
import PropTypes from "prop-types";

function Root({ onLogout, authedUser }) {
  return (
    <>
      <Navigation logout={onLogout} name={authedUser} />
      <main>
        <Outlet />
      </main>
    </>
  );
}

Root.propTypes = {
  onLogout: PropTypes.func.isRequired,
  authedUser: PropTypes.string.isRequired,
};

export default Root;
