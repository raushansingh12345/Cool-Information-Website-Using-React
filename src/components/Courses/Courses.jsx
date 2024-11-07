import "./Courses.css";

const Courses = () => {
  return (
    <section className="course">
      <h1>Courses LPU Offers</h1>
      <p>
        Discover a wide range of programs tailored to empower students for success in various fields.
      </p>
      <div className="row">
        <div className="course-col">
          <h3>Engineering and Technology</h3>
          <p>
            LPU offers comprehensive programs in engineering disciplines such as Computer Science, 
            Mechanical, Civil, Electrical, and more, with a focus on innovation and practical skills.
          </p>
        </div>
        <div className="course-col">
          <h3>Business and Management</h3>
          <p>
            Our business programs provide a foundation in leadership, entrepreneurship, finance, and 
            marketing to prepare students for global business challenges.
          </p>
        </div>
        <div className="course-col">
          <h3>Arts and Humanities</h3>
          <p>
            Explore diverse programs in literature, psychology, sociology, and more, fostering critical 
            thinking and cultural awareness.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="course-col">
          <h3>Health Sciences</h3>
          <p>
            Our health sciences courses include programs in pharmacy, physiotherapy, and biotechnology, 
            equipping students with the skills needed for the healthcare industry.
          </p>
        </div>
        <div className="course-col">
          <h3>Law</h3>
          <p>
            Pursue a career in law with our accredited programs, offering specializations in corporate law, 
            criminal law, and international law.
          </p>
        </div>
        <div className="course-col">
          <h3>Computer Applications and IT</h3>
          <p>
            With cutting-edge programs in IT and computer applications, students gain skills in software 
            development, cybersecurity, data science, and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Courses;
