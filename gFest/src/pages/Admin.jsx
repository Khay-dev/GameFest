import Nav from "../components/Nav";
import axios from "axios";
import { FaUserFriends } from "react-icons/fa";
import { PiUsersFourFill } from "react-icons/pi";
import { useState, useEffect } from "react";
import "../Styles/Admin.css";

const Admin = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const [user, setUser] = useState("");
  const [code, setCode] = useState("");

  const handleU = (e) => {
    setCode(e.target.value);
  };

  async function handler() {
    try {
      const token = localStorage.getItem("jwtToken");
      const res = await axios.get(
        "https://events-register.onrender.com/api/v1/admin/stats",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status !== 200) {
        setError(`Request failed with status: ${res.status}`);
      } else {
        setData(res.data.stats);
        console.log(res.data.stats);
      }
    } catch (err) {
      setError(err.message);
    }
  }

  const handleR = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("jwtToken");
      const res = await axios
        .get(
        `https://events-register.onrender.com/api/v1/admin?code=${code}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(res.user.user);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    handler();
  }, []);

  return (
    <div className="admin">
      <Nav />
      <div className="main-admin">
        <div className="prt-a">
          <div className="reg">
            <div className="reg-a">
              <FaUserFriends />
              <p>No of RSVP:</p>
            </div>
            <div className="reg-b">{data.numOfRSVP}</div>
          </div>
          <div className="att">
            <div className="reg-a">
              <PiUsersFourFill />
              <p>Attendance:</p>
            </div>
            <div className="reg-b">{data.numOfAttended}</div>
          </div>
        </div>
        <div className="prt-b">
          <form onSubmit={handleR}>
            <input
              type="text"
              placeholder="*Enter Access Code"
              name="code"
              value={code}
              onChange={handleU}
              required
            />
            <button type="submit">Search</button>
          </form>

          {user && (
            <div className="user">
              <p>{`Name: ${user.fullName}`}</p>
              <p>{`Email: ${user.email}`}</p>
              <p>{`Phone Number: ${user.phoneNo}`}</p>
              <button type="submit" className="custom-btn btn-13 btn-3">
                Confirm
              </button>
            </div>
          )}
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Admin;
