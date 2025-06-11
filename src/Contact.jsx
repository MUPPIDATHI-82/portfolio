import React, { useState } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      alert("Please enter a message");
      return;
    }

    const serviceID = "service_v2sf7jj"; // replace with your EmailJS service ID
    const templateID = "template_ktskemr"; // replace with your EmailJS template ID
    const userID = "VSl34M3YZfYnesNc3"; // replace with your EmailJS user ID

    const templateParams = {
      message: message,
      to_email: "muppidathibecse@gmail.com",
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        alert("Message sent successfully!");
        setMessage("");
      },
      (err) => {
        alert("Failed to send message. Try again later.");
        console.error(err);
      }
    );
  };

  return (
    <>
      <p className="contact-heading">Contact Me!</p>
      <div className="contact-container">
        
        <div className="personal-info">
          <p className="personal">Personal Info</p>
          <p>Email: muppidathibecse@gmail.com</p>
          <p>Phone No: +91 9345562272</p>
          <p>Address: 4/196 A, Nethaji Nagar, Sankarankovil, Tenkasi.</p>
        </div>

        <div className="contact-details">
          <form className="contact-form" onSubmit={sendEmail}>
            <textarea
              placeholder="Type Any Query . . . . ."
              className="message-box"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="send-button" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="contact-icons">
        <a
          href="https://github.com/MUPPIDATHI-82"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/muppidathi"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:muppidathibecse@gmail.com" className="contact-icon">
          <FaEnvelope />
        </a>
      </div>
    </>
  );
};

export default Contact;
