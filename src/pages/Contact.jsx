import React, {use, useRef} from "react";
import '../css/form.css'

const Contact = () => {
    //const [formData, setFormData] = useState({name: '', message: ''});
    const namereg = /^[a-zA-Z]{2,}$/;
    const mailreg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const fNameRef = useRef(null);
    const lNameRef = useRef(null);
    const emailRef = useRef(null);
    const formRef = useRef(null);
    /*
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };*/

    const validate = (fName, lName, email) => {
        const errors = {};
        if (!namereg.test(fName)) {
            errors.fName = 'First name must have at least 2 alphabetical characters';
        }
        if (!namereg.test(lName)) {
            errors.lName = 'Last name must have at least 2 alphabetical characters';
        }
        if (!mailreg.test(email)) {
            errors.email = 'Enter a valid email';
        }
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault;
        //console.log('Form submitted', formData);
        const fName = fNameRef.current.value;
        const lName = lNameRef.current.value;
        const email = emailRef.current.value;

        const errors = validate(fName, lName, email);
        if (Object.keys(errors).length === 0) {
            alert('Form is valid and ready to be submitted!');
            formRef.current.reset();
        }
        else {
            alert('Errors: ' + JSON.stringify(errors));
        }
    };

    return (
        <main id="fullpage">
            <h2 className="main-head">Contact Me</h2>
            <form ref={formRef} id="web-form">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first_name" ref={fNameRef}/>
                <span className="feedback" id="firstErr"></span>

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last_name" ref={lNameRef}/>
                <span className="feedback" id="lastErr"></span>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" ref={emailRef}/>
                <span className="feedback" id="emailErr"></span>

                <label>Message</label>
                <textarea name="message"/>

                <button type="button" id="contact-submit" onClick={handleSubmit}>Submit</button>
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