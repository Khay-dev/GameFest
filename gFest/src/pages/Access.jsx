import Nav from "../components/Nav";
import { useState } from "react";
// import axios from "axios";
import "../Styles/Access.css";
const Access = () => {
  const [formData, setFormData] = useState({
    email: "",
    login: "",
  });

  const handleSubmit = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post(
    //     "https://your-api-endpoint.com/login",
    //     formData
    //   );

    //   const { token } = response.data;

    //   // Save the token to local storage or wherever you prefer
    //   localStorage.setItem("jwtToken", token);

    //   // Redirect or perform other actions after successful login
    // } catch (error) {
    //   console.error(
    //     "Login failed:",
    //     error.response ? error.response.data : error.message
    //   );
    //   // Handle login error
    // }
    console.log({ formData });
  };
  return (
    <div className="access">
      <Nav />
      <div className="main-access">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleSubmit}
            placeholder="*Email"
            required
          />
          <input
            name="login"
            type="password"
            value={formData.login}
            onChange={handleSubmit}
            placeholder="*Access Code"
            required
          />
          <button className="custom-btn btn-13 btn-3" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Access;
