import { useContext, useEffect } from "react";
import { UserDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return <>{children}</>;
};

export default UserProtectedWrapper;
