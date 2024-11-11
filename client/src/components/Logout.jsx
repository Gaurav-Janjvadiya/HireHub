import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuthContext } from "../context/AuthContext";

function Logout() {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    setUser(null);
    Cookies.remove("jwt");
  };
  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
