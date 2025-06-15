const Resume = () => {
    return (
        <main>
            <h2 className="main-head">Resume</h2>
            <object data='/601proj/ALee_resume.pdf' type="application/pdf" width="100%" height="500px">
                <p>Unable to display PDF file. <a href='/601proj/ALee_resume.pdf'>Download</a> instead.</p>
            </object>
            <a href='/601proj/ALee_resume.pdf' id="download"><button id="download-button">Download PDF</button></a>

            <h2 className="in-page">Plaintext</h2>
            <article>
                <h3>Summary</h3>
                <p>
                    Entry-level software developer with a degree in computer science. Programming experience includes knowledge of Python, C, C++, JavaScript, R, SQL, and HTML/CSS.
                </p>

                <h3>Education</h3>
                <p>U.C. Davis - B.S. Computer Science (September 2016 - September 2021)</p>
                <ul>
                    <li>Cumulative GPA: 3.45</li>
                    <li>
                        Relevant coursework: Software Development in Unix and C/C++, Computer Organization & Machine-Dependent Programming, Computer Architecture, Web Programming, 
                        Algorithm Design & Analysis, Operating Systems & System Programming, Machine Learning.
                    </li>
                </ul>
                <p>Coursera Online Courses</p>
                <ul>
                    <li>Developing Front-End Apps with React, completed May 2023</li>
                    <li>Developing Back-End Apps with Node.js and Express, completed May 2023</li>
                    <li>Django Application Development with SQL and Databases, completed June 2023</li>
                    <li>SQL for Data Science, completed September 2022</li>
                </ul>

                <h3>Skills</h3>
                <ul>
                    <li>Understanding of software engineering methods and procedures</li>
                    <li>Analytical and problem-solving skills</li>
                    <li>Creative thinking</li>
                    <li>Interpersonal and collaborative skills</li>
                    <li>Communication skills to record progress and process of projects to others</li>
                    <li>Organizational skills</li>
                </ul>

                <h3>Experience</h3>
                <p>Volunteer Work (September 2013 - November 2015)</p>
                <ul>
                    <li>Exhibit interpreter at the San Jose Tech Museum of Innovation, responsible for explaining technological applications of each exhibit to guests</li>
                    <li>Assisted guests at the San Jose Children's Discovery Museum in navigating and interacting with the different activities at the museum</li>
                    <li>Helped guests at the Fremont Main Library find information for easier access to learning</li>
                </ul>

            </article>
        </main>
    );
}

export default Resume;