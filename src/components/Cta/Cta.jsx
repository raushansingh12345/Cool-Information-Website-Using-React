import { Link } from "react-router-dom";

import "./Cta.css";

const Cta = () => {
  return (
    <section className="cta">
      <h1>
        Enroll in Our Exclusive Content <br />
        or Get in Touch with the Cool <span className="highlight">Information</span> Team
      </h1>
      <Link to="/contact" className="hero-btn">
        CONTACT US
      </Link>
    </section>
  );
};

export default Cta;
