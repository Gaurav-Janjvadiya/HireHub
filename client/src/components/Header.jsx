import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { useAuthContext } from "../context/AuthContext";

function Header() {
  const { user } = useAuthContext();
  return (
    <div className="border-b">
      <ul className="p-4">
        <li>
          {!user ? (
            <>
              <Link className="mx-1" to={"/register"}>
                SignUp
              </Link>
              <Link className="mx-1" to={"/login"}>
                Login
              </Link>
            </>
          ) : (
            <Logout />
          )}  
        </li>
      </ul>
    </div>
  );
}

export default Header;
