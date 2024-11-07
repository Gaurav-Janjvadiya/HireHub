import { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
