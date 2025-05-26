import React from "react";
import dpImage from "./assets/Dp1.jpg";
import "./About.css";
function About() {
  return (
    <>
      <div className="container">
        <img src={dpImage} alt="Profile" className="about-image" />
        <p className="about-content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
          veritatis perspiciatis inventore ut tempora beatae, ad dolores omnis
          perferendis quibusdam dicta eius eveniet accusamus labore temporibus
          odio quis voluptatibus cum.amet consectetur adipisicing elit. Unde
          veritatis perspiciatis inventore ut tempora beatae, ad dolores omnis
          perferendis quibusdam dicta eius eveniet accusamus labore temporibus
          odio quis voluptatibus cum.amet consectetur adipisicing elit. Unde
          veritatis perspiciatis inventore ut tempora beatae, ad dolores omnis
          perferendis quibusdam dicta eius eveniet accusamus labore temporibus
          odio quis voluptatibus cum.
        </p>
      </div>
    </>
  );
}

export default About;
