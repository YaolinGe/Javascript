import logo from "./../images/logo/Asset 20@4x.png";
import "./../styles/Footer.css";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaReddit,
  FaTwitter,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
  return (
    <footer className="footer-container">
      <img className="logofooter" src={logo} alt="logo" />

      <nav className="doormat-navigation">
        <h2>Doormat Navigation</h2>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>

      <div className="contact">
        <h2>Contact</h2>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> London Street 1, 1000, New
          York
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> +1 100-100-1000
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> little@lemon.com
        </p>
      </div>

      <div className="social-media">
        <h2>Social Media</h2>
        <p>
          <a href="https://www.facebook.com">
            <FaFacebook /> Facebook
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com">
            <FaLinkedin /> Linkedin
          </a>
        </p>
        <p>
          <a href="https://www.instagram.com">
            <FaInstagram /> Instagram
          </a>
        </p>
        <p>
          <a href="https://www.github.com">
            <FaGithub /> Github
          </a>
        </p>
        <p>
          <a href="https://www.reddit.com">
            <FaReddit /> Reddit
          </a>
        </p>
        <p>
          <a href="https://www.twitter.com">
            <FaTwitter /> Twitter
          </a>
        </p>
      </div>
    </footer>
  );
}
