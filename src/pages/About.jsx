import React from "react";
import picture from '/me.jpg';
import '../css/about.css';

const About = () => {
    return (
        <main>
            <h2 className="main-head">About</h2>
            <article>
                <img src={picture} alt="A picture of me" id="about-pic"></img>
                Welcome to the portfolio website of Ada Lee!
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                </p>
            </article>
        </main>
    );
}

export default About;