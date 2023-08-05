import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../ThemeContext";
import "../Styles/Contact.css";

export default function Contact() {
  // Theme context
  const darkMode = useTheme();

  // Light and dark theme styles
  const themeStyle = {
    text: {
      color: darkMode ? "var(--light-color)" : "black",
    },
    links: {
      color: darkMode ? "white" : "var(--light-color)",
    },
  };

  return (
    <section id="contact" className="main-content">
      <div id="contact-container">
        <h2 style={themeStyle.text}>Let's get in touch!</h2>
        <ul>
          <li>
            <a
              style={themeStyle.links}
              href="mailto:leeszefoo@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </a>
          </li>
          <li>
            <a
              style={themeStyle.links}
              href="https://www.linkedin.com/in/lee-sze-foo-712410bb/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </li>
          <li>
            <a
              style={themeStyle.links}
              href="https://github.com/FooLeeSze"
              target="_blank"
              rel="noreferrer"
              id="profile-link"
            >
              <FontAwesomeIcon icon={faGithub} /> Github
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
