import { useState } from 'react';
import '../css/form.css';

const namereg = /^[a-zA-Z'"]+[a-zA-Z&()_+\-;':",. ]*$/;
const emailreg = /\S+@\S+\.\S+/;

function Contact() {
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: '',
        msg: ''
    });
    const [errors, setErrors] = useState({});

    // Validation function
    const validate = (name, value) => {
        switch (name) {
            case 'fName':
                if (!namereg.test(value)) {
                    return 'Name must be at least one non-numerical character';
                }
                break;
            case 'lName':
                if (!namereg.test(value)) {
                    return 'Name must be at least one non-numerical character';
                }
                break;
            case 'email':
                if (!emailreg.test(value)) {
                    return 'Email address is invalid';
                }
                break;
            case 'msg':
                if (value.trim().length === 0) {
                    return 'Please enter a message to send';
                }
            default:
                return '';
        }
    };

    // Handle field change
    const handleChange = (event) => {
        const { name, value } = event.target;
        const error = validate(name, value);
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        let valid = true;
        Object.keys(formData).forEach(field => {
            const error = validate(field, formData[field]);
            if (error) {
                setErrors(prev => ({ ...prev, [field]: error }));
                valid = false;
            }
        });
        
        if (valid) {
            alert('Your message has been received!');
            // reset form
            Object.keys(formData).forEach(field => {
                console.log(formData[field]);
                setFormData(prev => ({ ...prev, [field]: '' }));
            })
        }
        else {
            alert('Please fix any errors before submitting.');
        }
    };

    return (
        <main>
            <h2 className='main-head'>Contact</h2>
            <form onSubmit={handleSubmit}>

                <label>First Name: </label>
                <input
                    type="text"
                    name="fName"
                    value={formData.fName}
                    onChange={handleChange}
                />
                {errors.fName && <p className='feedback'>{errors.fName}</p>}
                
                <label>Last Name: </label>
                <input
                    type="text"
                    name="lName"
                    value={formData.lName}
                    onChange={handleChange}
                />
                {errors.lName && <p className='feedback'>{errors.lName}</p>}

                <label>Email: </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p className='feedback'>{errors.email}</p>}

                <label>Message: </label>
                <textarea name="msg" value={formData.msg} onChange={handleChange}></textarea>
                {errors.msg && <p className='feedback'>{errors.msg}</p>}

                <button type="submit" id='submit-button'>Submit</button>
            </form>
        </main>
    );
}

export default Contact;