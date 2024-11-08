import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function SignUp() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    axios
      .post(serverUrl + "/user/register", formData)
      .then((response) => {
        const { token } = response.data;
        Cookies.set("jwt", token, { expires: 7 });
      })
      .catch((error) => console.log(error));

    setFormData({
      fullname: "",
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
          value={formData.fullname}
          type="text"
          name="fullname"
          onChange={handleChange}
          placeholder="Enter your fullname"
        />
        <br />
        <input
          className="border"
          value={formData.email}
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Enter your email address"
        />
        <br />
        <input
          className="border"
          value={formData.password}
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Create a secure password"
        />
        <br />
        <button className="border" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
