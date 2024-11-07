import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="border-b">
      <ul className="p-4">
        <li>
          <Link className="mx-1" to={"/register"}>
            SignUp
          </Link>
          <Link className="mx-1" to={"/login"}>
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
