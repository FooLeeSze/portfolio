import React, {useState} from "react";
import { projects_data } from "../utils/projects_data";
import ProjectTile from "./ProjectTile";
import { useTheme } from "../ThemeContext";
import '../Styles/Projects.css'

// Number of project tiles shown by default
const numProj_default = 6;

export default function Projects() {

    const [numProj, setNumProj] = useState(numProj_default);

    // Show more project tiles
    function showMore() {
        setNumProj(projects_data.length)
    }

    // Show default number of project tiles
    function showLess() {
        setNumProj(numProj_default)
    }

    // Light and dark theme styles
    const darkMode = useTheme();
    const themeStyle = {
        title: {
            color: darkMode ? 'var(--bg-color)' : 'black'
        },
        moreButton: {
            backgroundColor: darkMode ? 'var(--light-color)' : 'rgb(38, 78, 78)',
            display: numProj<projects_data.length ? 'block' : 'none'
        },
        lessButton: {
            backgroundColor: darkMode ? 'var(--light-color)' : 'rgb(38, 78, 78)',
            display: numProj>numProj_default ? 'block' : 'none'
        }
    }
        

    return (
        <section id="projects" className="main-content">
            <div id="work-title-container" style={themeStyle.title}>
                <h2 id="work-title">My recent works</h2>
            </div>
            <div id="projects-main-container">
                {projects_data.slice(0, numProj).map(proj => <ProjectTile data={proj} />)}
            </div>
            <div id="more-less-container">
                <button className="more-less-btn" onClick={showMore} style={themeStyle.moreButton}>Show more</button>
                <button className="more-less-btn" onClick={showLess} style={themeStyle.lessButton}>Show less</button>
            </div>
        </section>
    )
}