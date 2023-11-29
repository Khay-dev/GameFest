import { FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="copy">
          <Link to="/Access">Copyright</Link> © The Last Hairbender 2023{" "}
        </div>
        <div className="socials">
          <a href="https://www.linkedin.com/in/uju-chinedum/">
            <FaWhatsapp />
          </a>
          <a href="https://twitter.com/">
            <FaTwitter />
          </a>
          <a href="https://github.com/Uju-Chinedum">
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
