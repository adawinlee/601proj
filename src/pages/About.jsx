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
                    I was born and raised in California, and currently live in the Bay Area. I attended the University of California Davis, where I started out as
                    a Design major, but graduated with a Bachelor's degree in Computer Science. 
                </p>
                <p>
                    My interest in computer science originally stemmed from my love for video games as a teenager. At first, I thought about becoming a game developer 
                    as one of the possible future choices for my career. As I started learning the basics of programming, I began to see the inner workings of 
                    a computer and the technologies associated with it, and gained an appreciation for the field beyond just game development. Because of this, 
                    I eventually ended up changing my college major to computer science, and learned a lot about computer architecture and hardware, as well as software development.
                </p>
                <p>
                    Perhaps because I was born in an era when the internet was only just beginning to become popular, but it really fascinated me to see how both computers
                    and the internet advanced, and the impact this had on not just the technological sector, but on society itself. The way navigating the internet, seeing
                    what people can achieve with it, and how it has changed over the years is what drew me to web development. I hope to continue learning more about
                    this interesting topic and making my own advancements as well.
                </p>
                <p>My resume can be viewed and downloaded at the <Link to="https://adawinlee.github.io/601proj//resume">Resume</Link> page.</p>
                <p>If you'd like to know what I do in my free time, check out the <Link to="https://adawinlee.github.io/601proj//interests">Interests</Link> page.</p>
                <p>
                    I also enjoy visiting new places. This photo of me was taken in front of the Kanda Myojin Shrine in Tokyo, Japan. 
                    Take a look at the <Link to="https://adawinlee.github.io/601proj//gallery">Gallery</Link> page to see the places I've traveled to recently.
                </p>
                <p>To get in touch with me, see the <Link to="https://adawinlee.github.io/601proj//contact">Contact</Link> page.</p>
            </article>
        </main>
    );
}

export default About;