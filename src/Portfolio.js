import React from 'react'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import MainBanner from './Components/MainBanner'
import NavBar from './Components/NavBar'
import NavMenu from './Components/NavMenu'
import Projects from './Components/Projects'
import { ThemeProvider } from './ThemeContext'

export default function Portfolio() {

    return (
        <div id="portfolio">
            <ThemeProvider>
                <NavMenu />
                <NavBar />
                <MainBanner />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </ThemeProvider>
        </div>
    )
}