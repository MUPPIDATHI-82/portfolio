import React, { useState } from "react";
import ImageModal from "./ImageModal";
import "./Projects.css";
import Scholarship from "./assets/Scholarship.png";
import ToDo from "./assets/ToDo1.jpg";
import ChatApp from "./assets/Chat.png";
import Page1 from "./assets/Page1.jpg";
import Page2 from "./assets/Page2.jpg";
import Page3 from "./assets/Page3.jpg";
import Page4 from "./assets/Page4.jpg";
import Page5 from "./assets/Page5.jpg";
import Dress1 from "./assets/Dress1.jpg";
import Dress2 from "./assets/Dress2.jpg";
import Dress3 from "./assets/Dress3.jpg";
import Dress4 from "./assets/Dress4.jpg";
import Dress5 from "./assets/Dress5.jpg";
import Dress6 from "./assets/Dress6.jpg";
import Dress7 from "./assets/Dress7.jpg";
import Dress8 from "./assets/Dress8.jpg";
const projectData = [
  {
    title: "Scholarship Mangement System",
    technologies: "React, Node.js, MongoDB",
    description:
      "This portal simplifies the management and distribution of student scholarships. Admins can add, review, and update schemes while users can apply and track their application status in real-time.",
    image: Scholarship, // Place image in public/images/
    sourceLink: "https://github.com/MUPPIDATHI-82/Scholarship-Management",
  },
  {
    title: "ToDo List App",
    technologies: "React, useState, CSS",
    description:
      "A simple yet effective ToDo List application built with React. Users can add, mark as complete, and delete tasks. Designed with a clean UI and interactive user experience.",
    image: ToDo, // Place todo.jpg inside public/images/
    sourceLink: "https://github.com/MUPPIDATHI-82/Todo-List-App",
  },
  {
    title: "Realtime Chat App",
    technologies: "React, Firebase (Auth & Firestore), CSS",
    description:
      "A real-time chat application where users can register, login, and message everyone in a shared chat room. Messages are stored in Firebase Firestore with timestamps, and Firebase Authentication handles secure login.",
    image: ChatApp, // Make sure to place chatapp.jpg in public/images/
    sourceLink: "https://github.com/MUPPIDATHI-82/chat-app",
  },
];
const uiuxProjects = [
  {
    title: "Coffee Ordering App",
    description: "Minimal coffee ordering UI.",
    images: [Page1, Page2, Page3, Page4, Page5],
  },
  {
    title: "Smart Dressing Collection",
    description: "Virtual wardrobe UI.",
    images: [Dress2, Dress1, Dress3, Dress4, Dress5, Dress6, Dress7,Dress8],
  },
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (images) => {
    setSelectedImages(images);
    setCurrentIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % selectedImages.length);
  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? selectedImages.length - 1 : prev - 1
    );
  return (
    <>
      <div className="projects-section">
        <h1 className="projects-heading">My Projects</h1>
        <hr className="underline"/>
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p className="tech">
                Technology: <span>{project.technologies}</span>
              </p>
              <p className="desc">{project.description}</p>
              <a
                href={project.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                View Source Code &raquo;
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="uiux-section">
        <h1 className="projects-heading">UI/UX Designs</h1>
        <hr className="underline"/>
        <div className="uiux-grid">
          {uiuxProjects.map((project, index) => (
            <div
              className="uiux-card"
              key={index}
              onClick={() => openModal(project.images)}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="uiux-image"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>

        {modalOpen && (
          <ImageModal
            images={selectedImages}
            currentIndex={currentIndex}
            onClose={closeModal}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
      </div>
    </>
  );
};

export default Projects;
