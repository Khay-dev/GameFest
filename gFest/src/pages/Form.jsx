import Nav from "../components/Nav";
import Footer from "../components/Footer";

import { useState } from "react";

import "../Styles/Form.css";

import { BiTimeFive } from "react-icons/bi";
import { TiLocationOutline } from "react-icons/ti";
import { IoGameControllerOutline } from "react-icons/io5";

import axios from "axios";

import { Helmet } from "react-helmet";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

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
        "https://events-register.onrender.com/api/v1/register",
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>RSVP</title>
      </Helmet>
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
                name="fullName"
                placeholder="*Fullname"
                value={formData.fullName}
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
                name="phoneNo"
                placeholder="*Phone number "
                value={formData.phoneNo}
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
            {success && (
              <p className="success">
                 Success!  Please check your
                email for further details.
              </p>
            )}
            {error && (
              <p className="error">
                {"An error occurred while saving data. Please try again."}
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
