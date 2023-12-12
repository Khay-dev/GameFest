import Nav from "../components/Nav";
import axios from "axios";
import { FaUserFriends } from "react-icons/fa";
import { PiUsersFourFill } from "react-icons/pi";
import { useState, useEffect } from "react";
import "../Styles/Admin.css";
import Ipt from "./Ipt";

const Admin = () => {
  const [attendedCount, setAttendedCount] = useState(0);
  const [rsvpCount, setRsvpCount] = useState(0);

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
      setAttendedCount(res.data.stats.numOfAttended);
      setRsvpCount(res.data.stats.numOfRSVP);
      console.log(res.data.stats);
    } catch (err) {
      console.log(err.message);
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
            <div className="reg-b">{rsvpCount}</div>
          </div>
          <div className="att">
            <div className="reg-a">
              <PiUsersFourFill />
              <p>Attendance:</p>
            </div>
            <div className="reg-b">{attendedCount}</div>
          </div>
        </div>
        <Ipt />
      </div>
    </div>
  );
};

export default Admin;
