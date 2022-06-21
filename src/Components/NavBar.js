import React, {useEffect} from "react";
import { handleScroll } from "../utils/navUtils";
import ThemeToggle from './ThemeToggle'
import '../Styles/NavBar.css'


export default function NavBar() {

    function scrollToElement(event){
        handleScroll(event)
    }

    useEffect(() => {
        const home = document.querySelector('#welcome-section');
        home.scrollIntoView({behavior:'smooth'})
    }, [])

    return (
        <header>
            <nav id="navbar">
                <ul id="navbar-list">
                    <li>
                        <span onClick={scrollToElement} className="navbar-link">Home</span>
                    </li>
                    <li>
                        <span onClick={scrollToElement} className="navbar-link">About</span>
                    </li>
                    <li>
                        <span onClick={scrollToElement} className="navbar-link">Work</span>
                    </li>
                    <li>
                        <span onClick={scrollToElement} className="navbar-link">Contact</span>
                    </li>
                </ul>
                <ThemeToggle onClick={scrollToElement} toggleId="theme-toggle-desktop" />
            </nav>
    </header>
    )
}