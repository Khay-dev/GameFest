import { useState } from "react";
import axios from "axios";
const Ipt = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const handleR = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("jwtToken");
      const res = await axios.get(
        `https://events-register.onrender.com/api/v1/admin?code=${code}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setError(null);
      setData(res.data.user);
      console.log(res.data.user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAttendClick = async () => {
    try {
      // Make a request to mark the user as attended
      const token = localStorage.getItem("jwtToken");
      await axios.patch(
        `https://events-register.onrender.com/api/v1/admin`,
        { code: code },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Clear the displayed data
      setData(null);
      setCode(""); // Clear the code input as well
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="prt-b">
      <form onSubmit={handleR}>
        <input
          type="text"
          placeholder="*Enter Access Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Find User"}
        </button>
      </form>

      {data && (
        <div className="user">
          <p>{`Name: ${data.fullName}`}</p>
          <p>{`Email: ${data.email}`}</p>
          <p>{`Phone Number: ${data.phoneNo}`}</p>
          <p>{`RSVP Code: ${data.rsvp}`}</p>
          <p>{`Attended: ${data.attended}`}</p>
          <button
            onClick={handleAttendClick}
            className="custom-btn btn-13 btn-3"
            disabled={loading}
          >
            {loading ? "Loading..." : "Confirm"}
          </button>
        </div>
      )}
      {error && <p className="error">{error.message || error}</p>}
    </div>
  );
};

export default Ipt;
