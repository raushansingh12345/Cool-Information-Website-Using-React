import { Link } from "react-router-dom";

import "./TextBox.css";

const TextBox = () => {
  return (
    <div className="text-box">
      <h1>India&apos;s Largest University</h1>
      <p>
        Lovely Professional University (LPU) is known for its top-tier education and <br />
        global opportunities. It offers a nurturing environment for students to excel in their careers.  
      </p>
      <a href="https://www.youtube.com/@cool_information" className="hero-btn" target="_blank" rel="noopener noreferrer">
        Visit Cool Information
      </a>
    </div>
  );
};

export default TextBox;
