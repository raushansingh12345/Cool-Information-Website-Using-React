import "./Testimonials.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>Top LPU Placements</h1>
      <p>Explore the remarkable success stories of LPU graduates securing top placements worldwide.</p>
      <div className="row">
        {/* Placement 1 */}
        <div className="testimonial-col">
          <img src="/images/yashir.jpeg" alt="Graduate 1" />
          <div>
            <p>
              &quot;Secured a 3 crore package at Zoom! LPU's training and support were instrumental in my journey.&quot;
            </p>
            <h3>Yasir M.</h3>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="filled-star"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Placement 2 */}
        <div className="testimonial-col">
          <img src="/images/pavan.jpeg" alt="Graduate 2" />
          <div>
            <p>
              &quot;LPU helped me land a 1 crore package with Amazon. The curriculum and mentorship were top-notch!&quot;
            </p>
            <h3>Pavan Kunchala</h3>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="filled-star"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Placement 3 */}
        <div className="testimonial-col">
          <img src="/images/harikrishna.jpeg" alt="Graduate 3" />
          <div>
            <p>
              &quot;Joining LPU led me to an 64 lakh placement at Google. Truly a transformative experience!&quot;
            </p>
            <h3>Harekrishna Mahto</h3>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="filled-star"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
