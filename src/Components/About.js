import React from "react";
import '../Styles/About.css'

export default function About() {

    return (
        <section id="about-me" className="main-content">
            <div id="about-section-title" className="section-title">
                <h2>About me</h2>
            </div>
            <div id="personal-info-container">
                <div id="personal-info">
                    <p>I am a PhD graduate and a self-taught web developer! My main focus is on front end development using React.</p>
                    <p>I also have experience in algorithm scripting and scientific computation.</p>
                </div>

                <div id="prof-pic-container">
                    <img src={require('../images/profile_pic.png')} alt="Portrait shot of me" id="profile-pic" />
                </div>
            </div>
        </section>

    )
}