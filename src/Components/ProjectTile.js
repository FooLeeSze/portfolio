import React from "react";
import { useTheme } from "../ThemeContext";

export default function ProjectTile(props) {

    const darkMode = useTheme();

    const themeStyles = {
        mainFont: {
            color: darkMode ? 'white' : 'black'
        },
        tech: {
            backgroundColor: darkMode ? 'rgb(78, 78, 78)' : 'rgb(207, 242, 242)',
            color: darkMode ? 'var(--mid-color)' : '#4d4d4d'
        },
        links: {
            color: darkMode ? 'rgb(96, 176, 245)' : '#1200e2',
            borderBottom: darkMode ? 'solid 1px rgb(96, 176, 245)' : 'solid 1px #1200e2',
        }
    }

    return (
        <div className="project-tile">
            <div className="project-thumb-container">
                <img src={require(`../images/${props.data.thumbnail}`)} alt={props.data.thumbDesc} />
            </div>
            <div className="project-tile-content">
                <div className="project-desc-container" style={themeStyles.mainFont}>
                    <p className="project-title">{props.data.title}</p>
                    <p className="project-desc">{props.data.desc}</p>
                </div>
                <div className="tech-used">
                    {props.data.tech.map(tech => <p style={themeStyles.tech}>{tech}</p>)}
                </div>
                <div className="project-link-container" >
                    <a href={props.data.liveLink} style={themeStyles.links} target="_blank" rel="noreferrer" className="project-link">Live</a>
                    <a href={props.data.codeLink} style={themeStyles.links} target="_blank" rel="noreferrer" className="project-link">Code</a>
                </div>
            </div>
        </div>
    )
}

//