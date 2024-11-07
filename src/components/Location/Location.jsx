import "./Location.css";

const location =
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23346.653072214558!2d75.69837200346744!3d31.251754139380537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1730969474505!5m2!1sen!2sin";

const Location = () => {
  return (
    <section className="location">
      <iframe
        src={location}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Location;
