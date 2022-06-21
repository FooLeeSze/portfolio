import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import { useTheme } from "../ThemeContext";
import '../Styles/MainBanner.css'

export default function MainBanner() {
    // Theme context
    const darkMode = useTheme()

    // Light and dark theme styles
    const themeStyle = {
        color: darkMode ? 'var(--banner-bg-color)' : 'var(--light-color)'
    }

    // Scroll to About Section upon button click
    function scrollToElement(){;
        const anchor = document.querySelector('#about-me');
        anchor.scrollIntoView()
    }

    return (
        <section id="welcome-section">
            <div id="welcome-content">
                <h1>Hi, I'm <span id="name">Lee Sze.</span></h1>
                <p>Web developer.</p>

                <div id="down-btn-container">
                    <span onClick={scrollToElement} style={themeStyle} id="scroll-down-btn"><FontAwesomeIcon icon={faAngleDown} /></span>
                </div>
            </div>
        </section>
    )
}