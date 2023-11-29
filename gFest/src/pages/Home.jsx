import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image1 from "../Imgs/login.jpg";
import "../Styles/Home.css";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
const Home = () => {
  return (
    <div className="home">
      <Nav />
      <div className="main-section">
        <div className="prt-a">
          <h2>GAME FEST IS HERE</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum
            hic voluptatum iure? Autem earum libero voluptatibus facere nisi
            nobis corporis laudantium, dolorem asperiores quam vero culpa
            quibusdam beatae adipisci. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Placeat quam porro rerum pariatur maiores vitae,
            obcaecati reprehenderit assumenda recusandae odit?
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
