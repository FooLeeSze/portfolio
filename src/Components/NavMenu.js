import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'
import {handleScroll} from '../utils/navUtils'
import '../Styles/NavBar.css'
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../ThemeContext";

export default function NavMenu() {

    // State on whether nav is open
    const [navBarOpen, setNavBarOpen] = useState(false);

    // Theme context
    const darkMode = useTheme();

    // Light and dark theme styles
    const themeStyle = {
        backgroundColor: darkMode ? 'black' : 'rgb(56, 113, 113)',
        display: navBarOpen ? 'block' : 'none'
    }

    // Update nav open state when hamburger icon is clicked
    function handleHamburger() {
        setNavBarOpen(prev => !prev)
    }

    // Scroll to section upon selection and close nav menu
    function scrollToElement(event){
        handleScroll(event)

        setNavBarOpen(false)
    }

    // Scroll back to the top on page load
    useEffect(() => {
        const home = document.querySelector('#welcome-section');
        home.scrollIntoView({behavior:'smooth'})
        
    }, [])

    return (
        <header id="nav-menu-container">
            <div id="hamburger-container">
                <span id="hamburger" onClick={handleHamburger}><FontAwesomeIcon icon={navBarOpen ? faXmark : faBars} /></span>
            </div>
            <nav id="nav-menu" style={themeStyle}>
                <ul id="nav-menu-list">
                    <li>
                        <span onClick={scrollToElement} className="nav-menu-link">Home</span>
                    </li>
                    <li>
                        <span onClick={scrollToElement} className="nav-menu-link">About</span>
                    </li>
                    <li>
                        <span onClick={scrollToElement} className="nav-menu-link">Work</span>
                    </li>
                    <li>
                        <span onClick={scrollToElement} className="nav-menu-link">Contact</span>
                    </li>
                </ul>
                <ThemeToggle toggleId="theme-toggle-mobile" />
            </nav>
        </header>
    )
}