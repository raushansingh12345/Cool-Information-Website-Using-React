import { useState } from "react";
import "./BlogContent.css";

const BlogContent = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (name && email && comment) {
      const newComment = {
        name,
        email,
        comment,
      };
      setComments([...comments, newComment]);
      setName("");
      setEmail("");
      setComment("");
    }
  };

  return (
    <section className="blog-content">
      <div className="row">
        <div className="blog-left">
          <img src="/images/lpunest.webp" alt="LPU Admission" />
          <h2>LPU 2025 Admission: A Gateway to Future Success</h2>
          <p>
            Lovely Professional University (LPU) is gearing up for the 2025 admission cycle, offering a diverse range of
            undergraduate, postgraduate, and diploma programs. LPU stands as one of India's most prestigious private
            universities, with a commitment to providing high-quality education, state-of-the-art infrastructure, and a
            supportive learning environment.
          </p>
          <br />
          <p>
            The 2025 admissions bring opportunities for students from various fields including Engineering, Management,
            Design, Law, and more. With world-class facilities, experienced faculty, and a focus on holistic student
            development, LPU continues to be a preferred destination for ambitious students.
          </p>
          <br />
          <p>
            Don't miss out on the chance to join LPU and become part of an academic community that nurtures talent, fosters
            creativity, and empowers students to become future leaders. For more information about courses, scholarships,
            and the application process, visit our official website or contact our admission team.
          </p>
          <br />
          <p>
            Ready to apply? Join thousands of students who have secured their place in LPU for the upcoming academic year
            and start your journey towards excellence today!
          </p>

          <div className="comment-box">
            <h3>Leave a comment</h3>
            <form className="comment-form" onSubmit={handleCommentSubmit}>
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                rows="5"
                placeholder="Your comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <button type="submit" className="hero-btn red-btn">
                POST COMMENT
              </button>
            </form>
          </div>

         
          <div className="comments-section">
            {comments.length > 0 ? (
              <h3>Comments:</h3>
            ) : (
              <p>No comments yet. Be the first to comment!</p>
            )}
            {comments.map((comment, index) => (
              <div key={index} className="comment">
                <h4>{comment.name}</h4>
                <p>{comment.comment}</p>
                <small>{comment.email}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="blog-right">
          <h3>Post Categories</h3>
          <div>
            <span>Admissions</span>
            <span>12</span>
          </div>
          <div>
            <span>Campus Life</span>
            <span>15</span>
          </div>
          <div>
            <span>Programs Offered</span>
            <span>22</span>
          </div>
          <div>
            <span>Student Success Stories</span>
            <span>7</span>
          </div>
          <div>
            <span>Scholarships</span>
            <span>5</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
