import React from "react";
import dpImage from "./assets/Dp1.jpg";
import "./About.css";

function About() {
  return (
    <>
      <p className="about-heading">About Me!</p>
      <div className="container">
        <img src={dpImage} alt="Profile" className="about-image" />
        <div className="about-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            veritatis perspiciatis inventore ut tempora beatae, ad dolores omnis
            perferendis quibusdam dicta eius eveniet accusamus labore temporibus
            odio quis voluptatibus cum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Unde veritatis perspiciatis inventore ut tempora
            beatae, ad dolores omnis perferendis quibusdam dicta eius eveniet
            accusamus labore temporibus odio quis voluptatibus cum.
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <p className="about-heading">Education</p>
        <div className="edu-container">
          <div className="college">
            <h1>BE - Computer Science and Engineering</h1>
            <p>Dr. Mahalingam College of Engineering and Technology, Pollachi.</p>
            <p>CGPA: 8.6</p>
          </div>
          <div className="college">
            <h1>Higher Secondary Certificate</h1>
            <p>S. N. Ramasamy Raja Higher Secondary School, Sankarankovil.</p>
            <p>Score: 88%</p>
          </div>
          <div className="college">
            <h1>Secondary School Leaving Certificate</h1>
            <p>S. N. Ramasamy Raja Higher Secondary School, Sankarankovil.</p>
            <p>Score: 79%</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
