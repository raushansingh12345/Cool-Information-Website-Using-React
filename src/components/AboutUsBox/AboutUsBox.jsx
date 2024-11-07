import { Link } from "react-router-dom";

import "./AboutUsBox.css";

const AboutUsBox = () => {
  return (
    <section className="about-us">
      <div className="row">
        <div className="about-col">
          <h1>LPU: India’s Largest Private University</h1>
          <p>
            Lovely Professional University (LPU) is India’s largest private university, recognized for its commitment to 
            providing world-class education across diverse disciplines. Located in Punjab, LPU is home to over 30,000 students 
            from more than 50 countries, offering a vibrant and diverse campus life. We aim to foster innovation, creativity, 
            and academic excellence, ensuring students are well-prepared to face the global challenges ahead.
          </p>
          <p>
            Our state-of-the-art infrastructure, experienced faculty, and comprehensive academic programs make LPU a preferred 
            choice for students seeking a transformative learning experience. From undergraduate to doctoral studies, we offer 
            a wide range of programs to shape tomorrow’s leaders.
          </p>
          <Link to="https://www.youtube.com/@cool_information" className="hero-btn red-btn" target="blank">
            EXPLORE NOW
          </Link>
        </div>
        <div className="about-col">
          <img src="images/lpu.jpg" alt="LPU Campus" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsBox;
