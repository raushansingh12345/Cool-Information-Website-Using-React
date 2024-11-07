import "./Facilities.css";

const Facilities = () => {
  return (
    <section className="facilities">
      <h1>LPU Facilities</h1>
      <p>Experience world-class amenities designed to foster growth and excellence.</p>
      <div className="row">
        <div className="facilities-col">
          <img src="/images/lpu-libraries.webp" alt="Central Library" />
          <h3>Central Library</h3>
          <p>Our Central Library houses over 1.5 lakh books, providing extensive resources for academic exploration.</p>
        </div>
        <div className="facilities-col">
          <img src="/images/swimming.jpeg" alt="Olympic-Size Swimming Pool" />
          <h3>Olympic-Size Swimming Pool</h3>
          <p>Dive into our Olympic-size pool, a prime facility for fitness and relaxation on campus.</p>
        </div>
        <div className="facilities-col">
          <img src="/images/hostel.avif" alt="Largest Residential Campus" />
          <h3>Largest Residential Campus</h3>
          <p>Enjoy vibrant campus life with accommodations for over 40,000 students within 600 acres.</p>
        </div>
        <div className="facilities-col">
          <img src="/images/unimall.jpeg" alt="In-Campus Mall" />
          <h3>In-Campus Mall</h3>
          <p>A convenient in-campus mall for all your shopping, dining, and recreational needs.</p>
        </div>
        <div className="facilities-col">
          <img src="/images/600acre.jpg" alt="Expansive Campus" />
          <h3>Expansive Campus</h3>
          <p>Spread across 600 acres, our campus offers an inspiring environment for holistic development.</p>
        </div>
        <div className="facilities-col">
          <img src="/images/students.jpg" alt="Community of 40,000 Students" />
          <h3>Community of 40,000 Students</h3>
          <p>Be part of a thriving community with 40,000 students from diverse backgrounds, enhancing your learning experience.</p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
