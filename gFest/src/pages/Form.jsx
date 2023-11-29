import Nav from "../components/Nav";
import Footer from "../components/Footer";

import { useState } from "react";

import "../Styles/Form.css";

import { BiTimeFive } from "react-icons/bi";
import { TiLocationOutline } from "react-icons/ti";
import { IoGameControllerOutline } from "react-icons/io5";

import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        "https://event-register.onrender.com/register",
        formData
      );

      setSuccess(true);
    } catch (error) {
      setError("Error saving data:", error);
      console.log("Error saving data:", error);
    } finally {
      setLoading(false);
    }
    console.log({ formData });
    e.target.reset();
  };
  return (
    <div className="form">
      <div className="hero">
        <Nav />
      </div>
      <div className="section-a-main">
        <div className="prt-b">
          <div className="a">
            <h2>EVENT DETAILS</h2>
            <div className="time">
              <div className="label">
                <BiTimeFive />
                <p>WHEN</p>
              </div>
              <div className="main-time">
                <p> 23RD DECEMBER 2023</p>
                <p>12:00 GMT</p>
              </div>
            </div>
            <div className="location">
              <div className="label">
                <TiLocationOutline />
                <p>WHERE</p>
              </div>
              <div className="main-location">
                <p>NTA PREMISES</p>
                <p>NTA MGBUOBA</p>
              </div>
            </div>
            <div className="expect">
              <div className="label">
                <IoGameControllerOutline />
                <p>DETAILS</p>
              </div>
              <div className="main-expect">
                <p> FIVE-A-SIDE </p>
                <p> SNOOKER </p>
                <p> RAP BATTLE</p>
                <p> PLAYSTATION 4 & 5</p>
                <p> BOARD GAMES </p>
                <p>AND MANY MORE....</p>
              </div>
            </div>
          </div>

          <div className="b">
            <form onSubmit={handleSubmit}>
              <h2>RSVP TO EVENT</h2>
              <input
                type="name"
                name="name"
                placeholder="*Fullname"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="*Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="number"
                placeholder="*Phone number "
                value={formData.number}
                onChange={handleInputChange}
                required
              />
              <button
                className="custom-btn btn-13 btn-3"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
            {success && <p className="success">Data submitted successfully!</p>}
            {error && (
              <p className="error">
                {"Internal Server Error-- Please Try Again!"}
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Form;