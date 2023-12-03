import Nav from "../components/Nav";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Styles/Access.css";

const Access = () => {
  const [formData, setFormData] = useState({
    email: "",
    login: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://events-register.onrender.com/api/v1/admin/login",
        formData
      );

      const { token } = response.data;

      // Save the token to local storage or wherever you prefer
      localStorage.setItem("jwtToken", token);

      // Redirect or perform other actions after successful login
      setError(null);
      navigate("/Admin");
    } catch (error) {
      console.error(
        setError(
          "Login failed:",
          error.response ? error.response.data : error.message
        )
      );
      // Handle login error
    } finally {
      setLoading(false);
    }

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
          <button
            className="custom-btn btn-13 btn-3"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Access;
