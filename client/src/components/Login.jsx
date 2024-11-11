import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useAuthContext } from "../context/AuthContext";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { setUser } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    try {
      axios
        .post(serverUrl + "/user/login", formData)
        .then((response) => {
          const { token, user } = response.data;
          Cookies.set("jwt", token, {
            expires: 7,
            secure: true,
          });
          setUser({ user });
        })
        .catch((e) => console.log(e));
    } catch (error) {
      console.log(error);
    }
    setFormData({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border"
          value={formData.email}
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <br />
        <input
          className="border"
          value={formData.password}
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <br />
        <button className="border" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
