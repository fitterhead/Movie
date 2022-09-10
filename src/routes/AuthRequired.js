import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

// function AuthRequired() {
//   return useContext(AuthContext);
// }

// export default AuthRequired;
function AuthRequired({ children }) {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default AuthRequired;