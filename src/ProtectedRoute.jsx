import { useAuth } from "./hooks/useAuth.js";
import { Navigate, useLocation } from "react-router";
import PropTypes from "prop-types";

function ProtectedRoute({ children }) {
  const { authedUser } = useAuth();
  const location = useLocation();

  if (!authedUser) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
