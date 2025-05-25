import { MdLogout } from "react-icons/md";
import PropTypes from "prop-types";

function LogoutButton({ logout }) {
  return (
    <a type="button" onClick={logout} style={{ cursor: "pointer" }}>
      <MdLogout size="2em" />
    </a>
  );
}

LogoutButton.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default LogoutButton;
