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
          <a href="https://wa.me/message/YEQ3SVGLTLWGP1" target="blank">
            <FaWhatsapp />
          </a>
          <a target="blank" href="https://x.com/_lasthairbendr?s=20">
            <FaTwitter />
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/_thelasthairbender/?utm_source=ig_web_button_share_sheet&igshid=YzAwZjE1ZTI0Zg=="
          >
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
