import Header from "../components/Header/Header";
import Courses from "../components/Courses/Courses";
import Facilities from "../components/Facilities/Facilities";
import Cta from "../components/Cta/Cta";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import StudentExperience from "../components/StudentExperience/StudentExperience";

const Home = () => {
  return (
    <>
      <Header />
      <Courses />
      <Facilities />
      <Cta />
      <StudentExperience/>
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
