import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image1 from "../Imgs/flier2.jpg";
import "../Styles/Home.css";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title> Games Fest</title>
      </Helmet>
      <Nav />
      <div className="main-section">
        <div className="prt-a">
          <h2>GAME FEST IS HERE</h2>
          <p>
            Get ready for a gaming extravaganza like no other! Its time to level
            up your fun and RSVP for the Games Fest of the year. Immerse
            yourself in a day of thrilling adventures, where gamers unite,
            friendships are forged, and joy knows no bounds. Our Games Fest
            promises an atmosphere charged with excitement, laughter, and the
            shared passion for gaming
          </p>
          <Link to="/form" className="btn">
            <p>RSVP</p>
            <FiArrowUpRight className="icon" />
          </Link>
        </div>
        <div className="prt-b">
          <img src={Image1} alt="about" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
