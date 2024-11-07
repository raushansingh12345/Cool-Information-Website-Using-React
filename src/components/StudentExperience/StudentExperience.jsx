import React, { useState } from "react";
import "./StudentExperience.css";

const videos = [
    {
      id: 1,
      title: "CSE Vlog",
      description: "Get an inside look at a day in the life of a CSE student at LPU, from lectures to labs and everything in between.",
      thumbnail: "/images/cse.webp",
      videoUrl: "https://www.youtube.com/embed/yjlIbTx9Q7E?si=x5k1h9ob3GSUcl2Z",
    },
    {
      id: 2,
      title: "Hostel Tour",
      description: "Explore the facilities, rooms, and amenities of the LPU hostel, providing a comfortable and vibrant student life.",
      thumbnail: "/images/hoste.webp",
      videoUrl: "https://www.youtube.com/embed/wN9-jJ_ghNo?si=XD-TW80JofPCwRgk",
    },
    {
      id: 3,
      title: "MBA Block Tour",
      description: "Take a tour of the MBA block at LPU, featuring classrooms, study areas, and facilities tailored for business education.",
      thumbnail: "/images/mba.webp",
      videoUrl: "https://www.youtube.com/embed/GOVF1OlT99Q?si=joCGKJraQKH0N5qs",
    },
    {
      id: 4,
      title: "School of Agriculture",
      description: "Discover the School of Agriculture at LPU, where students get hands-on experience in modern agricultural practices.",
      thumbnail: "/images/agri.webp",
      videoUrl: "https://www.youtube.com/embed/9ZEHjubptIo?si=ptLOeK3oXg8P9Ho1",
    },
    {
      id: 5,
      title: "School of Hotel Management",
      description: "Step into the School of Hotel Management, showcasing state-of-the-art training kitchens, dining setups, and hospitality labs.",
      thumbnail: "/images/management.webp",
      videoUrl: "https://www.youtube.com/embed/QKnQeXcl0JQ?si=sqJPfkVSvtTW4O16",
    },
    {
      id: 6,
      title: "LPU Freshers",
      description: "Experience the excitement of the LPU Freshers event, where new students are welcomed with celebrations and activities.",
      thumbnail: "/images/fresher.webp",
      videoUrl: "https://www.youtube.com/embed/DkNVryMkZmo?si=lUCTmMatrAZz1deF",
    },
    {
        id: 7,
        title: "ECE Block Tour",
        description: "Discover LPU's ECE block, featuring state-of-the-art labs, collaborative project areas, and resources designed for future engineers.",
        thumbnail: "/images/ece.webp",
        videoUrl: "https://www.youtube.com/embed/75yVGPxf6Z4?si=WnrQOG-BbeluEawI",
      },
      {
        id: 8,
        title: "Law Block Tour",
        description: "Tour LPU's Law block, complete with moot courts, comprehensive libraries, and modern resources for aspiring legal professionals.",
        thumbnail: "/images/law.webp",
        videoUrl: "https://www.youtube.com/embed/uFYn0YV9P4k?si=YzSFXtCDHCz2iPDh",
      },
  ];
  

const StudentExperience = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleThumbnailClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const closePopup = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="student-experience">
      <h1>What LPU Students Experience</h1>
      <div className="cards-container">
        {videos.map((video) => (
          <div className="experience-card" key={video.id}>
            <img
              src={video.thumbnail}
              alt={video.title}
              onClick={() => handleThumbnailClick(video.videoUrl)}
              className="thumbnail"
            />
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        ))}
      </div>

      {/* Video Popup */}
      {selectedVideo && (
        <div className="video-popup">
          <div className="video-content">
            <button className="close-btn" onClick={closePopup}>X</button>
            <iframe
              width="100%"
              height="315"
              src={selectedVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default StudentExperience;
