import React from "react";
import { useTheme } from "../ThemeContext";

export default function ProjectTile(props) {
  // Theme context
  const darkMode = useTheme();

  // Light and dark theme styles
  const themeStyles = {
    mainFont: {
      color: darkMode ? "white" : "black",
    },
    tech: {
      backgroundColor: darkMode ? "rgb(78, 78, 78)" : "var(--banner-bg-color)",
      color: darkMode ? "var(--mid-color)" : "#4d4d4d",
    },
    links: {
      live: {
        color: darkMode ? "rgb(122, 198, 78)" : "black",
        border: darkMode
          ? "solid 2px rgb(122, 198, 78)"
          : "solid 2px rgb(78, 188, 14)",
        backgroundColor: darkMode ? "transparent" : "rgb(147, 219, 107)",
      },
      code: {
        color: darkMode ? "rgb(96, 176, 245)" : "black",
        border: darkMode
          ? "solid 2px rgb(96, 176, 245)"
          : " solid 2px rgb(76, 131, 179)",
        backgroundColor: darkMode ? "transparent" : "rgb(107, 186, 217)",
      },
    },
  };

  return (
    <div className="project-tile">
      <div className="project-thumb-container">
        <img
          src={require(`../images/${props.data.thumbnail}`)}
          alt={props.data.thumbDesc}
        />
      </div>
      <div
        className={`${"project-tile-content"} ${
          darkMode ? "" : "project-tile-content-shadow"
        }`}
      >
        <div className="project-desc-container" style={themeStyles.mainFont}>
          <p className="project-title">{props.data.title}</p>
          <p className="project-desc">{props.data.desc}</p>
        </div>
        <div className="tech-used">
          {props.data.tech.map((tech) => (
            <p style={themeStyles.tech}>{tech}</p>
          ))}
        </div>
        <div className="project-link-container">
          <a
            href={props.data.liveLink}
            style={themeStyles.links.live}
            target="_blank"
            rel="noreferrer"
            className="project-link"
            id="live-link"
          >
            Live
          </a>
          <a
            href={props.data.codeLink}
            style={themeStyles.links.code}
            target="_blank"
            rel="noreferrer"
            className="project-link"
            id="code-link"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

//
