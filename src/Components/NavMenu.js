import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'
import {handleScroll} from '../utils/navUtils'
import '../Styles/NavBar.css'
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../ThemeContext";

export default function NavMenu() {

    const [navBarOpen, setNavBarOpen] = useState(false);
    const darkMode = useTheme();

    const themeStyle = {
        backgroundColor: darkMode ? 'black' : 'rgb(56, 113, 113)',
        display: navBarOpen ? 'block' : 'none'
    }

    function handleHamburger() {
        setNavBarOpen(prev => !prev)
    }

    function scrollToElement(event){
        handleScroll(event)

        setNavBarOpen(false)
    }

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