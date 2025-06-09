import React, {useState} from "react";

const Contact = () => {
    const [formData, setFormData] = useState({name: '', message: ''});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault;
        console.log('Form submitted', formData);
    };

    return (
        <main id="fullpage">
            <h2>Contact Me</h2>
            <form id="web-form">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first_name"/>
                <span className="feedback" id="firstErr"></span>

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last_name"/>
                <span className="feedback" id="lastErr"></span>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"/>
                <span className="feedback" id="emailErr"></span>

                <button type="button" id="contact-submit">Submit</button>
            </form>
        </main>
    );

    /*
    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name"/>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message"/>
                <button type="submit">Submit</button>
            </form>
        </main>
    );*/
}

export default Contact;