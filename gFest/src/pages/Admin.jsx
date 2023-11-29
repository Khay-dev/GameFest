import Nav from "../components/Nav";
import axios from "axios";
import { FaUserFriends } from "react-icons/fa";
import { PiUsersFourFill } from "react-icons/pi";
import { useState, useEffect } from "react";
import "../Styles/Admin.css";

const Admin = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  async function handler() {
    try {
      const res = await axios.get(
        "https://events-register.onrender.com/api/v1/admin/stats"
      );

      if (res.status !== 200) {
        setError(`Request failed with status: ${res.status}`);
      } else {
        setData(res.data);
        console.log(data);
      }
    } catch (err) {
      setError(err.message);
    }
  }

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
          <form>
            <input type="text" placeholder="*Enter Access Code" required />
            <button type="submit">Search</button>
          </form>

          <div className="user">
            <p>{`Name: Kalu Daniel Obinna`}</p>
            <p>{`Email: krayzhee419@gmail.com`}</p>
            <p>{`Phone Number: 08153270969`}</p>

            <button type="submit" className="custom-btn btn-13 btn-3">
              Confirm
            </button>
            {error && <p className="error">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
