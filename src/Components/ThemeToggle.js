import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons'
import { useTheme, useThemeUpdate } from "../ThemeContext";

export default function ThemeToggle(props) {
    // Theme context
    const darkMode = useTheme()

    // Theme update context - to toggle theme
    const toggleDarkMode = useThemeUpdate()

    // Light and dark theme styles
    const themeStyle = {
        backgroundColor: darkMode ? '#363636' : 'white',
        color: darkMode ? 'var(--light-color)' : 'black'
    }

    return ( 
        <div id={props.toggleId}>
            <button style={themeStyle} id="theme-toggle" onClick={toggleDarkMode}><FontAwesomeIcon icon={darkMode ? faSun : faMoon} /> {darkMode ? 'light mode' : 'dark mode'}</button>
        </div>
    )
}