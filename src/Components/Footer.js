import React from "react";
import { useTheme } from "../ThemeContext";
import '../Styles/Footer.css'

export default function Footer() {
    const darkMode = useTheme();

    const themeStyle = {
        color: darkMode ? 'white' : 'black'
    }

    return (
        <footer>
            <address>Created by <a style={themeStyle} href="https://github.com/FooLeeSze/portfolio" target="_blank" rel="noreferrer">Lee Sze Foo</a></address>
        </footer>
    )
}