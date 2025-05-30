import React from "react";
import "./Skills.css"; // Make sure this file has styles for .skills-heading, etc.

const Skills = () => {
  const skillItems = [
    { icon: "bxl-html5", name: "HTML" },
    { icon: "bxl-css3", name: "CSS" },
    { icon: "bxl-javascript", name: "JavaScript" },
    { icon: "bxl-react", name: "React JS" },
    { icon: "bxl-java", name: "Java" },
    { icon: "bxl-figma", name: "UI/UX" },
  ];
  const skillItems1 = [
    { icon: "bxl-html5", name: "Web Development" },
    { icon: "bxl-css3", name: "Photography" },
    { icon: "bxl-javascript", name: "UI Design" },
  ];

  return (
    <>
      <div className="skills-section">
        <h2 className="skills-heading">Skills</h2>
        <div className="skill-contents">
          {skillItems.map((skill) => (
            <div className="skill-content" key={skill.name}>
              <i className={`bx ${skill.icon}`}></i>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <div className="skills-section">
        <h2 className="skills-heading">Services</h2>
        <div className="skill-contents">
          {skillItems1.map((skill) => (
            <div className="skill-content" key={skill.name}>
              <i className={`bx ${skill.icon}`}></i>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
