import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className="footer">
      <h4>About Cool Information</h4>
      <p>
        At Cool Information, we are committed to delivering honest and insightful college reviews to help students make informed decisions. 
        Our goal is to provide a reliable resource for prospective students, offering genuine insights into campus life, academics, and opportunities. 
        Join us as we bring you closer to the real college experience, making your journey to higher education smoother and more transparent.
      </p>

      <div className="icons">
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} className="fab" />
        </a>
        <a href="https://x.com/Lpu_Campus_Life?t=xca6xW8kJYG5nMvUSmh7Mw&s=09" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="fab" />
        </a>
        <a href="https://www.instagram.com/lpu_campus.life/profilecard/?igsh=cjV5ZGFiazNpanFv" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="fab" />
        </a>
        <a href="https://www.linkedin.com/in/yourpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} className="fab" />
        </a>
        <a href="https://www.youtube.com/@cool_information" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="fab" />
        </a>
      </div>

      <p>
        Made with <FontAwesomeIcon icon={faHeart} className="fa-heart" /> by Cool Information Team
      </p>
    </section>
  );
};

export default Footer;
