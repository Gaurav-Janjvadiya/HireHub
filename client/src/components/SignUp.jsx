import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    axios
      .post(serverUrl + "/user/register", formData)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));

    setFormData({
      username: "",
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
          value={formData.username}
          type="text"
          name="username"
          onChange={handleChange}
        />
        <br />
        <input
          className="border"
          value={formData.email}
          type="text"
          name="email"
          onChange={handleChange}
        />
        <br />
        <input
          className="border"
          value={formData.password}
          type="password"
          name="password"
          onChange={handleChange}
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
