import React from "react";
import picture from '/me.jpg';
import '../css/about.css';
import { Link } from "react-router-dom";

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
                <p>My resume can be viewed and downloaded at the <Link to="/601proj/resume">Resume</Link> page.</p>
                <p>If you'd like to know what I do in my free time, check out the <Link to="/601proj/interests">Interests</Link> page.</p>
                <p>
                    I also enjoy visiting new places. This photo of me was taken in front of the Kanda Myojin Shrine in Tokyo, Japan. 
                    Take a look at the <Link to="/601proj/gallery">Gallery</Link> page to see the places I've traveled to recently.
                </p>
                <p>To get in touch with me, see the <Link to="/601proj/contact">Contact</Link> page.</p>
            </article>
        </main>
    );
}

export default About;